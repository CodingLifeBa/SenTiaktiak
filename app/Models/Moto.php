<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Moto extends Model
{
    use HasFactory;

    protected $fillable = [
        'immatriculation',
        'marque',
        'date',
        'taximan_id', // Si un moto est associée à un chauffeur
    ];

    public function chauffeur()
    {
        return $this->belongsTo(User::class, 'taximan_id');
    }
}
