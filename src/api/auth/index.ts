import { AuthCredentials, AuthResponse } from "@/types/auth";
import { client } from "../client";
export const login = async (credentials: AuthCredentials): Promise<AuthResponse> => {
	const response = await client<AuthResponse>("/auth/login", {
		method: "POST",
		body: JSON.stringify(credentials),
	});
	// await saveTokensToCookie(response);
	return response;
};

export const signup = async (credentials: AuthCredentials): Promise<AuthResponse> => {
	return client<AuthResponse>("/auth/signup", {
		method: "POST",
		body: JSON.stringify(credentials),
	});
};