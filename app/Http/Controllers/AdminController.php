<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Location;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
            'locations' => Location::all()
        ]);
    }

    public function styleGuide(Request $request): Response
    {
        return Inertia::render('Admin/StyleGuide/StyleGuide', []);
    }

}
