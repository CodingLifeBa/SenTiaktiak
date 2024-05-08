<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'origine', 'destination', 'heure', 'etat', 'client_id'
    ];

    protected $attributes = [
        'etat' => 0, // Définir la valeur par défaut de 'etat' à 0
    ];

    public function Clients()
    {
        return $this->belongsTo(User::class, 'client_id');
    }
}
