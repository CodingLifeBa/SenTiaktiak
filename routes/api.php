<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Test de la route
Route::get("/test", function () {
    return "test";
});



// Inscrire un utilisateur
Route::post('/registre', [UserController::class, 'registre']);
/*
Route::get('/listerUsers', [UserController::class, 'listerUsers']);

Route::post('/demanderCourse', [UserController::class, 'demanderCourse']);
Route::get('/listerCourse', [UserController::class, 'listerCourse']);
Route::put('/modifierCourse/{id}', [UserController::class, 'modifierCourse']);
Route::delete('/supprimerCourse/{id}', [UserController::class, 'supprimerCourse']);
Route::get('/chercherCourse', [UserController::class, 'chercherCourse']);



Route::post('/proposerOffre', [UserController::class, 'proposerOffre']);
Route::get('/listerOffres', [UserController::class, 'listerOffres']);
Route::get('/voirOffresDisponibles', [UserController::class, 'voirOffresDisponibles']);
Route::put('/modifierOffre/{id}', [UserController::class, 'modifierOffre']);
Route::delete('/supprimerOffre/{id}', [UserController::class, 'supprimerOffre']);
Route::post('/accepterOffre/{offreId}', [UserController::class, 'accepterOffre']);


Route::post('/ajouterMoto', [UserController::class, 'ajouterMoto']);
Route::get('/listerMoto', [UserController::class, 'listerMoto']);
Route::put('/modifierMoto/{id}', [UserController::class, 'modifierMoto']);
Route::delete('/supprimerMoto/{id}', [UserController::class, 'supprimerMoto']);
*/


// Se connecter
Route::post('/login', [UserController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {

        // Routes pour les clients
        Route::post('/demanderCourse', [UserController::class, 'demanderCourse']);
        Route::get('/listerCourse', [UserController::class, 'listerCourse']);
        Route::put('/modifierCourse/{id}', [UserController::class, 'modifierCourse']);
        Route::delete('/supprimerCourse/{id}', [UserController::class, 'supprimerCourse']);
        Route::get('/chercherCourse', [UserController::class, 'chercherCourse']);

    
        // Routes pour les taximen
        Route::post('/ajouterMoto', [UserController::class, 'ajouterMoto']);
        Route::get('/listerMoto', [UserController::class, 'listerMoto']);
        Route::put('/modifierMoto/{id}', [UserController::class, 'modifierMoto']);
        Route::delete('/supprimerMoto/{id}', [UserController::class, 'supprimerMoto']);

        Route::post('/proposerOffre', [UserController::class, 'proposerOffre']);
        Route::get('/listerOffres', [UserController::class, 'listerOffres']);
        Route::get('/voirOffresDisponibles', [UserController::class, 'voirOffresDisponibles']);
        Route::put('/modifierOffre/{id}', [UserController::class, 'modifierOffre']);
        Route::delete('/supprimerOffre/{id}', [UserController::class, 'supprimerOffre']);
        Route::post('/accepterOffre/{id}', [UserController::class, 'accepterOffre']);
    

    // Retourner l'utilisateur actuellement connecté
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});

