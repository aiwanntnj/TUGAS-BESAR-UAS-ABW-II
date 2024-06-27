<!-- resources/views/layouts/app.blade.php -->
<!DOCTYPE html>
<html>
    <head>
        <title>School Announcement System</title>
        <!-- Menambahkan Bootstrap CSS -->
        <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"rel="stylesheet"
        />
    </head>
    <body>
        <div class="container my-5">@yield('content')</div>
        <!-- Menambahkan Bootstrap JS dan jQuery -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
</html>