<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Fish;

class TestController extends Controller
{
    public function test()
    {
        return Inertia::render('Test/Test', [
            'fishes' => Fish::all(),
        ]);
    }
}
