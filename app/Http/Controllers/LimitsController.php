<?php
namespace App\Http\Controllers;

use App\Models\Boundary;
use App\Models\FishCategory;
use App\Models\FishingMethod;
use App\Models\FishLimit;
use App\Models\Location;
use App\Models\Fish;
use App\Models\TidalCategory;
use App\Models\WatersCategory;
use App\Models\Water;

use Inertia\Inertia;
use Inertia\Response;

use App\Util\Indexer;

class LimitsController extends Controller
{
    public function index()
    {
        return Inertia::render('FishLimits/Index', [
            'locations' => Indexer::indexBy(Location::all()),
            'fishCategories' => Indexer::indexBy(FishCategory::all()),
            'fishes' => Indexer::indexBy(Fish::all()),
            'boundaries' => Indexer::indexBy(Boundary::all()),
            'watersCategories' => Indexer::indexBy(WatersCategory::all()),
            'tidalCategories' => Indexer::indexBy(TidalCategory::all()),
            'waters' => Indexer::indexBy(Water::all()),
            'fishingMethods' => Indexer::indexBy(FishingMethod::all()),
        ]);
    }

    public function fishLimitsData() {

        $filters = request()['filters'];

        $fish_limits_query = FishLimit::query();

        if ($filters['location_id'] ?? null) {
            $fish_limits_query->where('location_id', $filters['location_id']);
        }

        if ($filters['fish_category_id'] ?? null) {
            $fish_limits_query->where('fish_category_id', $filters['fish_category_id']);
        }

        if ($filters['fish_id'] ?? null) {
            $fish_limits_query->where('fish_id', $filters['fish_id']);
        }

        if ($filters['boundary_id'] ?? null) {
            $fish_limits_query->where('boundary_id', $filters['boundary_id']);
        }

        if ($filters['water_category_id'] ?? null) {
            $fish_limits_query->where('water_category_id', $filters['water_category_id']);
        }
        
        if ($filters['tidal_category_id'] ?? null) {
            $fish_limits_query->where('tidal_category_id', $filters['tidal_category_id']);
        }

        if ($filters['water_id'] ?? null) {
            $fish_limits_query->where('water_id', $filters['water_id']);
        }
        
        $fish_limits = $fish_limits_query->get();

        return [
            'fishLimits' => $fish_limits
        ];
    }

    public function location($id)
    {
        $location = Location::find($id);

        $breadcrumb = [
            $location->name => route('wizard.location.page', ['id' => $location->id])
        ];

        return Inertia::render('App/Wizard/Location', [
            'wizardBreadcrumb' => $breadcrumb,
            'location' => $location,
            'watersCategories' => WatersCategory::all()
        ]);
    }

    public function watersCategory($id) {
        
        $waters_category = WatersCategory::find($id);

        $location = Location::find(request('location_id'));

        $fish_limits = FishLimit::query()
            ->where('location_id', $location->id)
            ->where(function ($query) use ($waters_category) {
                $query->where('waters_category_id', '=', $waters_category->id)
                    ->orWhereNull('waters_category_id');
            })
            ->get();

        $fish_categories = [];

        foreach($fish_limits as $fish_limit) {
            $fish_category = $fish_limit->fish_category;
            if (!($fish_categories[$fish_category->id] ?? null)) {
                $fish_categories[$fish_category->id] = $fish_category;
            }
        }

        $breadcrumb = [
            $location->name => route('wizard.location.page', ['id' => $location->id]),
            $waters_category->name => route('wizard.watersCategory.page', ['id' => $waters_category->id, 'location_id' => $location->id])
        ];

        return Inertia::render('App/Wizard/WatersCategory', [
            'wizardBreadcrumb' => $breadcrumb,
            'location' => $location,
            'watersCategory' => $waters_category,
            'fishCategories' => Indexer::deIndex($fish_categories)
        ]);
    }

    public function fishCategory($id)
    {
        $fish_category = FishCategory::find($id);

        $location = Location::find(request('location_id'));
        $waters_category = WatersCategory::find(request('waters_category_id'));

        $fish_limits = FishLimit::query()
            ->with('fish')
            ->with('boundary')
            ->with('water')
            ->where('fish_category_id', $id)
            ->where('location_id', $location->id)
            ->where(function ($query) use ($waters_category) {
                $query->where('waters_category_id', '=', $waters_category->id)
                    ->orWhereNull('waters_category_id');
            })
            ->get();

        $breadcrumb = [
            $location->name => route('wizard.location.page', ['id' => $location->id]),
            $waters_category->name => route('wizard.watersCategory.page', ['id' => $waters_category->id, 'location_id' => $location->id]),
            $fish_category->name => route('wizard.fishCategory.page', ['id' => $fish_category->id, 'waters_category_id' => $waters_category->id, 'location_id' => $location->id]) 
        ];

        return Inertia::render('App/Wizard/FishCategory', [
            'wizardBreadcrumb' => $breadcrumb,
            'fishLimits' => $fish_limits
        ]);
    }

}
