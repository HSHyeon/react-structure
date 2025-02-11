// import { useSetRecoilState } from "recoil";
 import type { AuthCredentials } from "@/types/auth";
import { login as loginApi } from "@/api/auth";
// import { authState } from "@/store/auth";
// import type { AuthCredentials, DecodedToken } from "@/types/auth";
// import { decodeJwt } from "@/utils/decodeJwt";

// 전역 상태관리 훅
export const useAuth = () => {
	// const setAuthState = useSetRecoilState(authState);

	const login = async (credentials: AuthCredentials) => {
		const response = await loginApi(credentials);
		// const decodedToken = decodeJwt<DecodedToken>(response.access_token);
		// if (decodedToken) {
		// 	setAuthState({ user: decodedToken });
		// }
		return response;
	};

	const logout = () => {
		// setAuthState({ user: null });
	};

	return { login, logout };
};