<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index()
    {
        return redirect()->route('admin.data-health');
    }

    public function dataHealth(Request $request): Response
    {
        return Inertia::render('Admin/DataHealth', [
            'locations' => Region::all(),
        ]);
    }

    public function styleGuide(Request $request): Response
    {
        return Inertia::render('Admin/StyleGuide/StyleGuide', []);
    }
}
