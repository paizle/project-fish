<?php
namespace App\Http\Controllers;

use App\Models\Boundary;
use App\Models\FishCategory;
use App\Models\FishLimit;
use App\Models\Location;
use App\Models\Fish;
use App\Models\WatersCategory;
use App\Models\Water;

use Inertia\Inertia;
use Inertia\Response;

use App\Util\Indexer;

class WizardController extends Controller
{
    public function index()
    {
        return Inertia::render('App/Wizard/Index', [
            'locations' => Location::get()
        ]);
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
            ->with('fishing_method')
            ->with('boundary')
            ->with('water')
            ->with('tidal_category')
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
