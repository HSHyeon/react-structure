const API_BASE_URL = "http://localhost:8080";

interface ApiError extends Error {
  statusCode?: number;
  code?: string;
}

interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}

/**
 * API 요청을 위한 기본 클라이언트
 *
 * @throws {ApiError} API 요청 실패 시 에러
 */
async function client<T>(endpoint: string, { params, ...customConfig }: RequestConfig = {}): Promise<T> {
	const headers = {
		"Content-Type": "application/json",
		...customConfig.headers,
	};

	const config: RequestInit = {
		...customConfig,
		headers,
	};

	// URL에 쿼리 파라미터 추가
	const queryString = params ? `?${new URLSearchParams(params)}` : "";
	const url = `${API_BASE_URL}${endpoint}${queryString}`;

	try {
		const response = await fetch(url, config);
		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.message || "요청에 실패했습니다.") as ApiError;
			error.statusCode = response.status;
			error.code = data.code;
			throw error;
		}

		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error("알 수 없는 오류가 발생했습니다.");
	}
}

export { client };