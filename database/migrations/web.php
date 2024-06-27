<?php
// routes/web.php
use App\Http\Controllers\AnnouncementController;

Route::resource('announcements', AnnouncementController::class);
