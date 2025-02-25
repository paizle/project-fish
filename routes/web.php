<?php

use App\Http\Controllers\LimitsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\WizardController;
use App\Http\Controllers\PublicAppController;
use App\Http\Controllers\FishDataController;
use App\Http\Controllers\TestController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome/Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name(
        'profile.edit'
    );
    Route::patch('/profile', [ProfileController::class, 'update'])->name(
        'profile.update'
    );
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name(
        'profile.destroy'
    );
});

Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name(
        'admin.index'
    );
    Route::get('/admin/data-health', [
        AdminController::class,
        'dataHealth',
    ])->name('admin.data-health');
    Route::get('/admin/style-guide', [
        AdminController::class,
        'styleGuide',
    ])->name('admin.style-guide');
    Route::get('/admin/storybook', function () {
        return Inertia::render('Admin/Storybook/Storybook');
    })->name('admin.storybook');
    Route::get('/admin/prototypes', function () {
        return Inertia::render('Admin/Prototypes');
    })->name('admin.prototypes');
});

Route::middleware('auth')->group(function () {
    Route::get('/data', [FishDataController::class, 'index'])->name(
        'data.index'
    );

    Route::get('/data/limits', [FishDataController::class, 'limits'])->name(
        'data.limits'
    );

    Route::get('/data/locations', [
        FishDataController::class,
        'locations',
    ])->name('data.locations');
		
    Route::get('/data/fishes', [FishDataController::class, 'fishes'])->name(
        'data.fishes'
    );

    Route::get('/data/waters', [FishDataController::class, 'waters'])->name(
        'data.waters'
    );
});

Route::middleware('auth')->group(function () {
    Route::get('/wizard', [WizardController::class, 'index'])->name(
        'wizard.page'
    );
    Route::get('/wizard/location/{id}', [
        WizardController::class,
        'location',
    ])->name('wizard.location.page');
    Route::get('/wizard/waters-category/{id}', [
        WizardController::class,
        'watersCategory',
    ])->name('wizard.watersCategory.page');
    Route::get('/wizard/fish-category/{id}', [
        WizardController::class,
        'fishCategory',
    ])->name('wizard.fishCategory.page');
});

Route::middleware('auth')->group(function () {
    Route::get('/fish-limits', [LimitsController::class, 'index'])->name(
        'fishLimits.page'
    );
    Route::post('/fish-limits-data', [
        LimitsController::class,
        'fishLimitsData',
    ])->name('fishLimits.data');
});

Route::middleware('auth')->group(function () {
    Route::get('/test', [TestController::class, 'test'])->name('test.test');
});

Route::get('/public-app', [PublicAppController::class, 'index'])->name(
    'public-app.page'
);

Route::get('/public-app-prototype-1', [
    PublicAppController::class,
    'prototype1',
])->name('public-app-prototype-1.page');

Route::get('/public-app/limitsByLocation/{id}', [
    PublicAppController::class,
    'limitsByLocation',
])->name('public-app.limitsByLocation.rest');

Route::get('/public-app/limitsByWater/{id}', [
    PublicAppController::class,
    'limitsByWater',
])->name('public-app.limitsByWater.rest');

Route::get('/public-app/fishes', [PublicAppController::class, 'fishes'])->name(
    'public-app.fishes.rest'
);

Route::get('/public-app/limitsByFish/{id}', [
    PublicAppController::class,
    'limitsByFish',
])->name('public-app.limitsByFish.rest');

require __DIR__ . '/auth.php';
