// 전역 상태 관리
// import { atom, selector } from "recoil";

// import type { DecodedToken } from "@/types/auth";

// interface AuthState {
//   user: DecodedToken | null;
// }

// export const authState = atom<AuthState>({
// 	key: "authState",
// 	default: {
// 		user: null,
// 	},
// });

// export const isLoggedInState = selector({
// 	key: "isLoggedInState",
// 	get: ({ get }) => {
// 		const { user } = get(authState);
// 		return !!user?.sub;
// 	},
// });