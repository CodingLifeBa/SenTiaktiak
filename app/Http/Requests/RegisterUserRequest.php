<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterUserRequest extends FormRequest
{
    /**
     * Détermine si l'utilisateur est autorisé à faire cette demande.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation pour la requête.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'prenom' => 'required',
            'nom' => 'required',
            'sexe' => 'required',
            'age' => 'required',
            'adresse' => 'required',
            'telephone' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required',
            'profile' => 'required',
        ];
    }

    /**
     * Gère les erreurs de validation en lançant une exception HTTP.
     */
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'status_code' => 422,
            'error' => true,
            'message' => 'Erreur de validation',
            'errorList' => $validator->errors(),
        ]));
    }

    /**
     * Personnalisation des messages d'erreur.
     */
    public function messages()
    {
        return [
            'prenom.required' => 'Un prenom doit être fourni.',
            'nom.required' => 'Une nom doit être fournie.',
            'sexe.unique' => 'Une sexe doit être fournie.',
            'age.required' => 'Une age doit être fourni.',
            'adresse.required' => 'Un adresse doit être fourni.',
            'telephone.required' => 'Un telephone doit être fourni.',
            'email.required' => 'Une adresse email doit être fournie.',
            'profile.required' => 'Un profile doit être fourni.',
        ];
    }
}
