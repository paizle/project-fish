<?php

use App\Http\Controllers\LimitsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\WizardController;
use App\Http\Controllers\UiController;
use App\Http\Controllers\FishDataController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
});

Route::middleware('auth')->group(function () {
    Route::get('/wizard', [WizardController::class, 'index'])->name('wizard.page');
    Route::get('/wizard/location/{id}', [WizardController::class, 'location'])->name('wizard.location.page');
    Route::get('/wizard/waters-category/{id}', [WizardController::class, 'watersCategory'])->name('wizard.watersCategory.page');
    Route::get('/wizard/fish-category/{id}', [WizardController::class, 'fishCategory'])->name('wizard.fishCategory.page');
});

Route::middleware('auth')->group(function () {
    Route::get('/fish-limits', [LimitsController::class, 'index'])->name('fishLimits.page');
    Route::post('/fish-limits-data', [LimitsController::class, 'fishLimitsData'])->name('fishLimits.data');
});

Route::middleware('auth')->group(function () {
    Route::get('/data', [FishDataController::class, 'index'])->name('data.index');
    Route::get('/data/locations', [FishDataController::class, 'locations'])->name('data.locations');
    Route::get('/data/fish-categories', [FishDataController::class, 'fishCategories'])->name('data.fish-categories');
    Route::get('/data/fishes', [FishDataController::class, 'fishes'])->name('data.fishes');
    Route::get('/data/boundaries', [FishDataController::class, 'boundaries'])->name('data.boundaries');
    Route::get('/data/water-categories', [FishDataController::class, 'waterCategories'])->name('data.water-categories');
    Route::get('/data/waters', [FishDataController::class, 'waters'])->name('data.waters');

});

require __DIR__.'/auth.php';
