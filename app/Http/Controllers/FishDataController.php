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

    public function limits()
    {

        $locations = Indexer::indexBy(Location::get());
        $fish_categories = Indexer::indexBy(FishCategory::get());
        $fishes = Indexer::indexBy(Fish::get());
        $boundaries = Indexer::indexBy(Boundary::get());
        $water_categories = Indexer::indexBy(WatersCategory::get());
        $tidal_categories = Indexer::indexBy(TidalCategory::all());
        $waters = Indexer::indexBy(Water::get());

        $location_filter = request()->input('location_filter');
        $fish_category_filter = request()->input('fish_category_filter');
        $fish_filter = request()->input('fish_filter');
        $boundary_filter = request()->input('boundary_filter');
        $water_category_filter = request()->input('water_category_filter');
        $water_filter = request()->input('water_filter');

        $limits = FishLimit::query();
        if ($location_filter) {
            $limits->where('location_id', $location_filter);
        }
        if ($fish_category_filter) {
            $limits->where('fish_category_id', $fish_category_filter);
        }
        if ($fish_filter) {
            $limits->where('fish_id', $fish_filter);
        }
        if ($boundary_filter) {
            $limits->where('boundary_id', $boundary_filter);
        }
        if ($water_category_filter) {
            $limits->where('waters_category_id', $water_category_filter);
        }
        if ($water_filter) {
            $limits->where('water_id', $water_category_filter);
        }
        $limits = $limits->get();

        return Inertia::render('Data/Limits', [

            'locations' => $locations,
            'fish_categories' => $fish_categories,
            'fishes' => $fishes,
            'boundaries' => $boundaries,
            'water_categories' => $water_categories,
            'waters' => $waters,

            'location_filter' => $location_filter,
            'fish_category_filter'=> $fish_category_filter,
            'fish_filter' => $fish_filter,
            'boundary_filter' => $boundary_filter,
            'water_category_filter' => $water_category_filter,
            'water_filter' => $water_filter,
            
            'limits' => $limits,
        ]);
    }

    public function locations()
    {
        return Inertia::render('Data/Locations', [
            'data' => Location::get()
        ]);
    }
    
    public function fishCategories()
    {
        return Inertia::render('Data/FishCategories', [
            'data' => FishCategory::get()
        ]);
    }

    public function fishes()
    {
        return Inertia::render('Data/Fishes', [
            'data' => Fish::get()
        ]);
    }

    public function boundaries()
    {
        return Inertia::render('Data/Boundaries', [
            'data' => Boundary::get()
        ]);
    }

    public function waterCategories()
    {
        return Inertia::render('Data/WaterCategories', [
            'data' => WatersCategory::get()
        ]);
    }

    public function waters()
    {
        return Inertia::render('Data/Waters', [
            'data' => Water::get()
        ]);
    }

}
