<?php
namespace App\Http\Controllers;

use App\Models\FishLimit;
use App\Models\Location;

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
        ;
        return ['limits' => $limits];
    }

    public function limitsByWater($id)
    {
        $limits = FishLimit::query()
            ->where('water_id', $id)
            ->with('fish')
            ->get()
        ;
        return ['limits' => $limits];
    }

}
