<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LogUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Offre;
use App\Models\Moto;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class UserController extends Controller
{

    use HasApiTokens, Notifiable;
    //inscription des utilisateurs
    public function registre(RegisterUserRequest $request){
               try{
                    $user = new User();
                    $user->prenom = $request->prenom;
                    $user->nom = $request->nom;
                    $user->sexe = $request->sexe;
                    $user->age = $request->age;
                    $user->adresse = $request->adresse;
                    $user->telephone = $request->telephone;
                    $user->email = $request->email;
                    $user->password = $request->password;
                    $user->profile = $request->profile;
                    $user->save();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'Utilisateur a ete enregistre avec success !',
                'data' => $user
            ]);
               }catch(Exception $e){
                      return response()->json($e);
               }
    }


    //méthode pour la connexion
    public function login(LogUserRequest $request){
        if (auth()->attempt($request->only(['email','password']))) {
            $user = auth()-> user();
            //creer un token
           $token = $user->createToken("MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND")->plainTextToken;
            return response()->json([
                'status_code' => 200,
                'status_message' => 'Utilisateur connecté avec succés.',
                'user' =>$user,
                'token' =>$token
            ]);
        }else{
            //si les informations ne corresponds pas a acun utilisateur
            return response()->json([
                'status_code' => 403,
                'status_message' => 'information non valide.'
            ]);
        }
    }



      //Méthodes des client pour demander couses
      public function demanderCourse(Request $request)
      {
          try {
              $user = auth()->user();
      
              $course = new Course();
              $course->origine = $request->origine;
              $course->destination = $request->destination;
              $course->heure = $request->heure;
              $course->client_id = $user->id;
              
              $course->save();
              
              return response()->json([
                  'status_code' => 200,
                  'status_message' => 'Course demandée avec succès !',
                  'data' => $course
              ]);
          } catch (Exception $e) {
              return response()->json([
                  'status_code' => 500,
                  'status_message' => 'Erreur lors de la demande de la course : ' . $e->getMessage()
              ], 500);
          }
      }
    
    //méthode pour lister les cours
    public function listerCourse(Request $request)
    {
        $course = Course::all();

        // Retourne la liste des courses en JSON
        return response()->json($course, 200);
    }

    //methode pour modifier un course
    public function modifierCourse(Request $request, $id)
    {
        try {
            $course = Course::find($id);
            if (!$course) {
                return response()->json([
                    'status_code' => 404,
                    'status_message' => 'Course non trouvée.'
                ], 404);
            }

            $clientId = auth()->id();
    
            $course->update([
                'origine' => $request->origine,
                'destination' => $request->destination,
                'heure' => $request->heure,
                'etat' => $request->etat,
                'client_id' => $clientId
            ]);
    
            return response()->json([
                'status_code' => 200,
                'status_message' => 'Course modifiée avec succès !',
                'data' => $course
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status_code' => 500,
                'status_message' => 'Erreur lors de la modification de la course : ' . $e->getMessage()
            ], 500);
        }
    }
    
        //méthode pour supprimer un course
        public function supprimerCourse(Request $request, $id)
        {
            try {
                $course = Course::find($id);

                if (!$course) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Course non trouvée.'
                    ], 404);
                }
                $course->delete();

                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Course supprimée avec succès !'
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de la suppression de la course : ' . $e->getMessage()
                ], 500);
            }
        }




            //proposer offre pour les taximan
            public function proposerOffre(Request $request)
            {
                try {
                    $taximanId = auth()->id();

                    $offre = Offre::create([
                        'prix' => $request->prix,
                        'destination' => $request->destination,
                        'taximan_id' => $taximanId
                    ]);

                    return response()->json([
                        'status_code' => 201,
                        'status_message' => 'Offre proposée avec succès !',
                        'data' => $offre
                    ], 201);
                } catch (Exception $e) {
                    return response()->json([
                        'status_code' => 500,
                        'status_message' => 'Erreur lors de la proposition de l\'offre : ' . $e->getMessage()
                    ], 500);
                }
            }


            //méthode pour lister les offres
            public function listerOffres(Request $request)
            {
                $offre = Offre::all();

                // Retourne la liste des offres en JSON
                return response()->json($offre, 200);
            }

            // méthode pour voir les offre disponible
            public function voirOffresDisponibles(Request $request)
        {
            try {
                
                $course = Course::find($request->course_id);

                if (!$course) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Course non trouvée.'
                    ], 404);
                }
                $offres = $course->offres()->where('etat', 0)->get(); // Soumis

                return response()->json($offres);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de la récupération des offres : ' . $e->getMessage()
                ], 500);
            }
        }

        //methode pour modifier offre
        public function modifierOffre(Request $request, $id)
        {
            try {
                $offre = Offre::find($id);

                if (!$offre) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Offre non trouvée.'
                    ], 404);
                }

                $taximanId = auth()->id();

                if ($offre->taximan_id !== $taximanId) {
                    return response()->json([
                        'status_code' => 403,
                        'status_message' => 'Vous n\'êtes pas autorisé à modifier cette offre.'
                    ], 403);
                }
                $offre->update([
                    'prix' => $request->prix,
                    'destination' => $request->destination,
                    'etat' => $request->etat
                ]);

                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Offre modifiée avec succès !',
                    'data' => $offre
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de la modification de l\'offre : ' . $e->getMessage()
                ], 500);
            }
        }



        //methode pour supprimer offre

        public function supprimerOffre(Request $request, $id)
        {
            try {
                $offre = Offre::find($id);

                if (!$offre) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Offre non trouvée.'
                    ], 404);
                }

                $offre->delete();

                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Offre supprimée avec succès !'
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de la suppression de l\'offre : ' . $e->getMessage()
                ], 500);
            }
        }


        //methode pour l'ajout des moto
        public function ajouterMoto(Request $request)
        {
            try {
                $taximanId = auth()->id();

                $moto = new Moto();

                $moto->immatriculation = $request->immatriculation;
                $moto->marque = $request->marque;
                $moto->date = $request->date;
                $moto->taximan_id = $taximanId; 

                $moto->save();

                return response()->json([
                    'status_code' => 201,
                    'status_message' => 'Moto ajouté avec succès !',
                    'data' => $moto
                ], 201);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de l\'ajout du moto : ' . $e->getMessage()
                ], 500);
            }
        }



        //Methode pour la liste des moto
        public function listerMoto(Request $request)
        {
            $moto = Moto::all();

            // Retourne la liste des offres en JSON
            return response()->json($moto, 200);
        }

        //methode pour modifier moto
        public function modifierMoto(Request $request, $id)
        {
            try {
                $moto = Moto::find($id);
                if (!$moto) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Moto non trouvée.'
                    ], 404);
                }

                $taximanId = auth()->id();

                $moto->update([
                    'immatriculation' => $request->immatriculation,
                    'marque' => $request->marque,
                    'date' => $request->date,
                    'taximan_id' => $taximanId 
                ]);

                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Moto modifiée avec succès !',
                    'data' => $moto
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de la modification de la moto : ' . $e->getMessage()
                ], 500);
            }
        }



        //methode pour supprimer moto
        public function supprimerMoto(Request $request, $id)
        {
            try {
                $moto = Moto::find($id);

                if (!$moto) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Moto non trouvée.'
                    ], 404);
                }

                $moto->delete();

                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Moto supprimée avec succès !'
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de la suppression de la moto : ' . $e->getMessage()
                ], 500);
            }
        }


        //méthode des client pour accepté un offre
        public function accepterOffre(Request $request, $id)
        {
            try {
                $offre = Offre::find($id);

                if (!$offre) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Offre non trouvée.'
                    ], 404);
                }

                $offre->update(['etat' => 1]);

                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Offre acceptée avec succès !'
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => "Erreur lors de l\'acceptation de l'offre : " . $e->getMessage()
                ], 500);
            }
        }

        //méthde pour rechercher les courses disponible
        public function chercherCourse(Request $request)
        {
            try {
                $courses = Course::where('etat', 0)->get(); // Soumis
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Courses disponibles récupérées avec succès !',
                    'data' => $courses
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'status_code' => 500,
                    'status_message' => 'Erreur lors de la recherche des courses disponibles : ' . $e->getMessage()
                ], 500);
            }
        }

}
