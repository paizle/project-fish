<?php
namespace App\Http\Controllers;

use App\Models\FishingRestriction;
use App\Models\FishingRestriction\Boundary;
use App\Models\FishingRestriction\FishingMethod;
use App\Models\FishingRestriction\Tidal;
use App\Models\FishingRestriction\WaterType;
use App\Models\Region;
use App\Models\Fish;
use App\Models\Fish\FishCategory;
use App\Models\Water;

use Inertia\Inertia;
use Inertia\Response;

use App\Util\Indexer;

class LimitsController extends Controller
{
    public function index()
    {
        return Inertia::render('FishLimits/FishLimits', [
            'fishLimits' => FishingRestriction::all(),
            'locations' => Indexer::indexBy(Region::all()),
            'fishes' => Indexer::indexBy(Fish::all()),
            'boundaries' => Indexer::indexEnum(Boundary::class),
            'watersCategories' =>  Indexer::indexEnum(WaterType::class),
            'tidalCategories' =>  Indexer::indexEnum(Tidal::class),
            'waters' => Indexer::indexBy(Water::all()),
            'fishingMethods' =>  Indexer::indexEnum(FishingMethod::class)
        ]);
    }

    public function fishLimitsData()
    {
        $filters = request()['filters'];

        $fish_limits_query = FishingRestriction::query();

        if ($filters['region_id'] ?? null) {
            $fish_limits_query->where('region_id', $filters['region_id']);
        }

        if ($filters['fish_id'] ?? null) {
            $fish_limits_query->where('fish_id', $filters['fish_id']);
        }

				if ($filters['fish_category'] ?? null) {
					$fish_limits_query->where('fish_category', Indexer::getValueFromEnum(FishCategory::class, $filters['fish_category']));
				}

        if ($filters['boundary'] ?? null) {
					$fish_limits_query->where('boundary', Indexer::getValueFromEnum(Boundary::class, $filters['boundary']));
        }
				
        if ($filters['water_type'] ?? null) {
            $fish_limits_query->where('water_type', Indexer::getValueFromEnum(WaterType::class, $filters['water_type']));
        }
				
        if ($filters['tidal'] ?? null) {
            $fish_limits_query->where(
                'tidal',
                Indexer::getValueFromEnum(WaterType::class, $filters['tidal_category_id'])
            );
        }

        if ($filters['water_id'] ?? null) {
            $fish_limits_query->where('water_id', $filters['water_id']);
        }

        if ($filters['method'] ?? null) {
            $fish_limits_query->where(
                'method',
                $filters['method']
            );
        }

        $fish_limits = $fish_limits_query->get();

        return [
            'fishLimits' => $fish_limits,
        ];
    }

}
