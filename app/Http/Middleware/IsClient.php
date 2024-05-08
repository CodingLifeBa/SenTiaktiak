<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;

class IsClient
{
    public function handle($request, Closure $next)
    {
        // Vérifier si l'utilisateur authentifié est un client
        if (auth()->check() && auth()->user()->profile === 'client') {
            return $next($request);
        }
        
        // Rediriger ou retourner une erreur si l'utilisateur n'est pas un client
        return response()->json(['error' => 'Unauthorized.'], 401);
    }
}
