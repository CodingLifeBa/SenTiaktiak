<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Offre extends Model
{
    use HasFactory;

    protected $fillable = [
        'prix', 'etat', 'destination', 'taximan_id'
    ];

    protected $attributes = [
        'etat' => 0, // Définir la valeur par défaut de 'etat' à 0
    ];

    public function taximan()
    {
        return $this->belongsTo(User::class, 'taximan_id');
    }
}
