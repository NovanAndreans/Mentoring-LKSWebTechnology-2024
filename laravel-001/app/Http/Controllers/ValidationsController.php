<?php

namespace App\Http\Controllers;

use App\Models\Validations;
use Illuminate\Http\Request;

class ValidationsController extends Controller
{
    protected $validations;
    public function __construct(Validations $validations)
    {
        $this->validations = $validations;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = $request->validate([
            'job_category_id' => 'required|int'
        ]);

        $create = collect($request->only($this->validations->getFillable()))->filter()
            ->put('society_id', Controller::getSocietyId($request->query('token')))
            ->toArray();

        $this->validations->create($create);
        return Controller::success('Request data validation sent successful');
    }

    /**
     * Display the specified resource.
     */
    public function show(Validations $validations)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Validations $validations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Validations $validations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Validations $validations)
    {
        //
    }
}
