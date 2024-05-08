<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class EditPostRequest extends FormRequest
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
            //creation des roles
            'titre' => 'required'
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
            'titre.required' => 'un titre doit être fourni'
        ];
    }
}
