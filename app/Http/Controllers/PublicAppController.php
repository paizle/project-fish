<?php
namespace App\Http\Controllers;

use App\Models\FishLimit;
use App\Models\Location;

use App\Util\Indexer;
use Inertia\Inertia;

class PublicAppController extends Controller
{
    public function index()
    {
        return Inertia::render('PublicApp/Index', [
            'locations' => Location::all()
        ]);
    }

    public function limitsByLocation($id)
    {
        $limits = FishLimit::query()
            ->where('location_id', $id)
            ->with('water')
            ->get()
            ->toArray()
        ;

        $limits_by_water_name = [];

        // remove duplicate waters
        foreach($limits as $limit) {
            $water_name = $limit['water']['name'] ?? '';
            if ($water_name && !($limits_by_water_name[$water_name] ?? false)) {
                $limits_by_water_name[$water_name] = $limit;
            }
        }
        $limits_by_water_name = array_values($limits_by_water_name);
        usort($limits_by_water_name, 
            fn($a, $b) => strcmp($a['water']['name'], $b['water']['name']));

        return ['limits' => $limits_by_water_name];
    }

    public function limitsByWater($id)
    {

        $results_ids = [];

        $limits = FishLimit::query()
            ->where('water_id', $id)
            ->get()
        ;
        
        foreach($limits->toArray() as $limit) {

            $results_ids[] = $limit['id'];

            $related_limits = FishLimit::query()
                ->where('waters_category_id', $limit['waters_category_id'])
                ->where('location_id', $limit['location_id']);

            if ($limit['boundary_id']) {
                $related_limits->where('boundary_id', $limit['boundary_id']);
            } else {
                $test = true;
            }
            $related_limits = $related_limits->get();

            foreach($related_limits->toArray() as $related_limit) {
                if ($related_limit['water_id'] === null) {
                    // no specific water so this is a rule for the location
                    $results_ids[] = $related_limit['id'];
                }
            }
        }

        $limits_by_water = FishLimit::query()
            ->whereIn('id', $results_ids)
            ->with('fish')
            ->with('fish_category')
            ->with('water')
            ->get()
            ->toArray();

        // sort array by limit->fish->name
        usort($limits_by_water, fn($a, $b) => strcmp($a['fish']['name'], $b['fish']['name']));

        return ['limits' => $limits_by_water];
    }

}
