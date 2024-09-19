<?php 

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Http\JsonResponse;
use Exception;

class RegisterController extends BaseController
{
    /**
     * Register API
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
                'c_password' => 'required|same:password',
                'role_id' => 'required|exists:roles,id', // Role ID validation
            ]);
        
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }
        
            $input = $request->all();
            $input['password'] = Hash::make($input['password']); // Hash password

            // Create the user with role_id
            $user = User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => $input['password'],
                'role_id' => $input['role_id']
            ]);

            $success['token'] = $user->createToken('CDP')->plainTextToken;
            $success['name'] = $user->name;
            $success['role'] = $user->role->name; // Return role information
        
            return $this->sendResponse($success, 'User registered successfully.');
        } catch (Exception $e) {
            return $this->sendError('Error registering user.', [$e->getMessage()]);
        }
    }

    /**
     * Login API
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }

            // Attempt login
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                $user = Auth::user();
                $success['token'] = $user->createToken('CDP')->plainTextToken;
                $success['name'] = $user->name;
                $success['email'] = $user->email;
                $success['role'] = $user->role->name; // Return role information

                return $this->sendResponse($success, 'User logged in successfully.');
            } else {
                return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
            }
        } catch (Exception $e) {
            return $this->sendError('Error logging in user.', [$e->getMessage()]);
        }
    }
}
