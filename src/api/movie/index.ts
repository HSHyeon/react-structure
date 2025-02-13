import { type MovieListResponse, type Movie } from "@/types/movie";

import { client } from "../client";

/**
 * 영화 목록을 가져오는 API
 * @param page 페이지 번호 (기본값: 1)
 */
export const getMovies = async (
	page: number = 1,
): Promise<MovieListResponse> => {
	return client<MovieListResponse>("movie", {
		params: {
			page: page.toString(),
		},
	});
};

/**
 * 특정 영화의 상세 정보를 가져오는 API
 * @param id 영화 ID
 */
export const getMovie = async (id: string): Promise<Movie> => {
	return client<Movie>(`/movie/detail/${id}`);
};

/**
 * 영화 검색 API
 * @param query 검색어
 * @param page 페이지 번호 (기본값: 1)
 */
export const searchMovies = async (
	query: string,
	page: number = 1
): Promise<MovieListResponse> => {
	return client<MovieListResponse>("/movies/search", {
		params: {
			query,
			page: page.toString(),
		},
	});
};