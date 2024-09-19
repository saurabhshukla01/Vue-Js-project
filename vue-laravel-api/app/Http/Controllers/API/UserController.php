<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Http\Resources\UserResource;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;

class UserController extends BaseController
{
    public function index(): JsonResponse
    {
        try {
            $users = User::all();
            return $this->sendResponse(UserResource::collection($users), 'Users retrieved successfully.');
        } catch (Exception $e) {
            return $this->sendError('Error retrieving users.', [$e->getMessage()]);
        }
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|min:6',
                'role_id' => 'required|exists:roles,id', // role_id validation
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_id' => $request->role_id,
            ]);

            return $this->sendResponse(new UserResource($user), 'User created successfully.');
        } catch (Exception $e) {
            return $this->sendError('Error creating user.', [$e->getMessage()]);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $user = User::find($id);

            if (is_null($user)) {
                return $this->sendError('User not found.');
            }

            return $this->sendResponse(new UserResource($user), 'User retrieved successfully.');
        } catch (Exception $e) {
            return $this->sendError('Error retrieving user.', [$e->getMessage()]);
        }
    }

    public function update(Request $request, User $user): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'sometimes|required|string|max:255',
                'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
                'password' => 'nullable|min:6',
                'role_id' => 'sometimes|required|exists:roles,id',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }

            $user->update($request->except(['password']));

            if ($request->filled('password')) {
                $user->password = Hash::make($request->password);
            }

            if ($request->filled('role_id')) {
                $user->role_id = $request->role_id;
            }

            $user->save();

            return $this->sendResponse(new UserResource($user), 'User updated successfully.');
        } catch (Exception $e) {
            return $this->sendError('Error updating user.', [$e->getMessage()]);
        }
    }

    public function destroy(User $user): JsonResponse
    {
        try {
            $user->delete();
            return $this->sendResponse([], 'User deleted successfully.');
        } catch (Exception $e) {
            return $this->sendError('Error deleting user.', [$e->getMessage()]);
        }
    }
}
