<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use App\EventService;
use Illuminate\Support\Facades\Date;

class EventController extends Controller
{

    public function index()
    {
        return Event::all();
    }

    public function create(Request $request)
    {

    }

    public function store(Request $request)
    {
//        $request->validate([
//            'name' => 'required',
//            'description' => 'required',
//            'date' => 'required',
//            'time' => 'required',
//            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//        ]);



        $input = $request->all();

        if ($image = $request->file('image')) {
            $destinationPath = 'images/';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image'] = "$profileImage";
        }

        Event::create($input);

        return "success";
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
