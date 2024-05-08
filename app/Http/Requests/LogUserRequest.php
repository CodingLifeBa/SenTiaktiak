<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class LogUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email:users,email',
            'password' => 'required'

        ];
    }
    //on creer ici une fonction
    public function failedValidation(Validator $validator)
    {
        // Gérer les erreurs, c'est-à-dire les exceptions
        throw new HttpResponseException(response()->json([
            'success' => false,
            'error' => true,
            'message' => 'Erreur de validation',
            'errorList' => $validator->errors()
        ]));
    }
    //si on veut changer le message qui est en anglais  
    public function messages()
    {
        return [
            'email.required' => 'un email non fourni',
            'email.email' => 'un email non valide',
            'email.exists' => 'cette adresse email n existe pas',
            'password.required' => 'un password non fourni'
        ];
    }
}
