<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Boundary;
use App\Models\FishCategory;
use App\Models\FishLimit;
use App\Models\Location;
use App\Models\Fish;
use App\Models\WatersCategory;
use App\Models\TidalCategory;
use App\Models\Water;

use App\Util\Indexer;

class FishDataController extends Controller
{
    public function index()
    {
        return redirect()->route('data.locations');
    }

    public function locations()
    {
        return Inertia::render('Data/Locations', [
            'data' => Location::get(),
        ]);
    }

    public function fishCategories()
    {
        return Inertia::render('Data/FishCategories', [
            'data' => FishCategory::get(),
        ]);
    }

    public function fishes()
    {
        return Inertia::render('Data/Fishes', [
            'data' => Fish::get(),
        ]);
    }

    public function boundaries()
    {
        return Inertia::render('Data/Boundaries', [
            'data' => Boundary::get(),
        ]);
    }

    public function waterCategories()
    {
        return Inertia::render('Data/WaterCategories', [
            'data' => WatersCategory::get(),
        ]);
    }

    public function waters()
    {
        return Inertia::render('Data/Waters', [
            'data' => Water::get(),
        ]);
    }
}
