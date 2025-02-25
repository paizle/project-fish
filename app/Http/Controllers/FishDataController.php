<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Region;
use App\Models\Fish;
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
            'data' => Region::get(),
        ]);
    }

    public function fishes()
    {
        return Inertia::render('Data/Fishes', [
            'data' => Fish::get(),
        ]);
    }

    public function waters()
    {
        return Inertia::render('Data/Waters', [
            'data' => Water::query()->with('region')->get(),
        ]);
    }
}
