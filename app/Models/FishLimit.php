<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FishLimit extends Model
{
    use HasFactory;


    public static function getOrInitialize(FishLimit $fishLimit) {

        $a = $fishLimit->location->id;
        $b = $fishLimit->boundary->id;
        $c = $fishLimit->waters_category->id;
        $d = $fishLimit->fish->id;

        $query = FishLimit::whereRelation("location", "location_id", $fishLimit->location->id)
        ->whereRelation("fish_category", "fish_category_id", $fishLimit->fish_category->id)
        ->whereRelation("boundary", "boundary_id", $fishLimit->boundary->id)
        ->whereRelation("waters_category", "waters_category_id", $fishLimit->waters_category->id);

        if ($fishLimit->fish === null) {
            $query->whereNull('fish_id');
        } else {
            $query->whereRelation("fish", "fish_id", $fishLimit->fish->id);
        }

        if ($fishLimit->water === null) {
            $query->whereNull('water_id');
        } else {
            $query->whereRelation("water", "water_id", $fishLimit->water->id);
        }

        $record = $query->first();
        
        if (!$record) {
            $record = new FishLimit();
            $record->location()->associate($fishLimit->location);
            $record->fish_category()->associate($fishLimit->fish_category);
            $record->fish()->associate($fishLimit->fish);
            $record->boundary()->associate($fishLimit->boundary);
            $record->waters_category()->associate($fishLimit->waters_category);
            $record->water()->associate($fishLimit->water);
        }

        $record->season_start = $fishLimit->season_start;
        $record->season_end = $fishLimit->season_end;
        $record->bag_limit = $fishLimit->bag_limit;
        $record->minimum_size = $fishLimit->minimum_size;
        $record->maximum_size = $fishLimit->maximum_size;

        return $record;
    } 

    public static function getOrCreate(Location  $location, FishCategory $fish_category, Fish $fish,
        Boundary $boundary, WatersCategory $waters_category, Water $water = null) {


        /*
        $row1->location()->associate($this->getLocation());
        $row1->fish_category()->associate($this->getFishCategoryTrout());
        $row1->boundary()->associate($this->getBoundaryInland());
        $row1->waters_category()->associate($this->getWatersCategoryFlowing());
        */

        $a = $water?->id ?? null;

        $query = FishLimit::whereRelation("location", "location_id", $location->id)
            ->whereRelation("fish_category", "fish_category_id", $fish_category->id)
            ->whereRelation("boundary", "boundary_id", $boundary->id)
            ->whereRelation("waters_category", "waters_category_id", $waters_category->id);

        if ($water === null) {
            $query->whereNull('water_id');
        } else {
            $query->whereRelation("water", "water_id", $water->id);
        }

        $record = $query->first();
        
        if (!$record) {
            $record = new FishLimit();
            $record->location()->associate($location);
            $record->fish_category()->associate($fish_category);
            $record->boundary()->associate($boundary);
            $record->waters_category()->associate($waters_category);
            $record->water()->associate($water);
        }
        /*
        $row1 = new FishLimit();
        $row1->location()->associate($this->getLocation());
        $row1->fish_category()->associate($this->getFishCategoryTrout());
        $row1->boundary()->associate($this->getBoundaryInland());
        $row1->waters_category()->associate($this->getWatersCategoryFlowing());
        */

        return $record;
    }

    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function fish_category() {
        return $this->belongsTo(FishCategory::class);
    }

    public function fish() {
        return $this->belongsTo(Fish::class);
    }

    public function fishing_method() {
        return $this->belongsTo(FishingMethod::class);
    }

    public function boundary() {
        return $this->belongsTo(Boundary::class);
    }

    public function waters_category() {
        return $this->belongsTo(WatersCategory::class);
    }

    public function tidal_category() {
        return $this->belongsTo(TidalCategory::class);
    }

    public function water() {
        return $this->belongsTo(Water::class);
    }

    protected $fillable = [
        'location', 'fish_category', 'fish', 'boundary', 'waters_category', 'water', 'season_start',
        'season_end', 'bag_limit', 'minimum_size', 'maximum_size'
    ];
}
