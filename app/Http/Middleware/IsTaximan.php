<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;

class IsTaximan
{
    public function handle($request, Closure $next)
    {
        // Vérifier si l'utilisateur authentifié est un taximan
        if (auth()->check() && auth()->user()->profile === 'taximan') {
            return $next($request);
        }
        
        // Rediriger ou retourner une erreur si l'utilisateur n'est pas un taximan
        return response()->json(['error' => 'Unauthorized.'], 401);
    }
}
