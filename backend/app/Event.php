<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Ramsey\Uuid\Type\Time;

class Event extends Model
{
    use HasFactory;

    protected $table = 'event';
    public $timestamps = false;


    protected $fillable = ['name', 'description', 'date', 'time', 'image'];

}
