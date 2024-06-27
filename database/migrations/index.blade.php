<!-- resources/views/announcements/index.blade.php -->
@extends('layouts.app')

@section('content')
    <h1>Announcements</h1>
    <a href="{{ route('announcements.create') }}" class="btn btn-primary">Create New Announcement</a>

    <!-- Filter by Category -->
    <form method="GET" action="{{ route('announcements.index') }}" class="my-3">
        <label for="category">Filter by Category:</label>
        <select name="category" id="category" onchange="this.form.submit()">
            <option value="">All</option>
            @foreach($categories as $category)
                <option value="{{ $category }}" {{ request('category') == $category ? 'selected' : '' }}>{{ ucfirst($category) }}</option>
            @endforeach
        </select>
    </form>

    @if ($announcements->isEmpty())
        <p>No announcements found.</p>
    @else
        @foreach ($announcements as $announcement)
            <div class="announcement my-3 p-3 border rounded">
                <h2>{{ $announcement->title }}</h2>
                <p>{{ \Illuminate\Support\Str::limit($announcement->content, 150, $end='...') }}</p>
                <p><strong>Category:</strong> {{ ucfirst($announcement->category) }}</p>
                <div class="d-flex justify-content-between">
                    <a href="{{ route('announcements.show', $announcement->id) }}" class="btn btn-info">View</a>
                    <a href="{{ route('announcements.edit', $announcement->id) }}" class="btn btn-warning">Edit</a>
                    <form action="{{ route('announcements.destroy', $announcement->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this announcement?');">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </div>
            </div>
        @endforeach
    @endif

    <!-- Pagination Links -->
    {{ $announcements->links() }}
@endsection
