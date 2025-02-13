import React, { useEffect } from "react";
import MovieItem from "./item/MovieItem";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movie";
import { MovieListResponse } from "@/types/movie";

function MovieList() {
    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useSuspenseInfiniteQuery<MovieListResponse>({
        queryKey: ["movies"],
        queryFn: ({ pageParam = 1 }) => getMovies(pageParam as number),
        getNextPageParam: (lastPage, allPage) => {
            const nextPage = allPage.length + 1;
            return nextPage <= lastPage.total ? nextPage : undefined;
        },
        // 4. 첫 페이지 번호를 1로 설정해요
        initialPageParam: 1,

        // 5. 데이터를 얼마나 오래 유지할지 설정해요
        // 5분 동안은 같은 데이터를 다시 불러오지 않아요
        // (1000 = 1초, 60 = 1분, 5 = 5분)
        staleTime: 1000 * 60 * 5,
    });
  useEffect(() => {
		if (hasNextPage && !isFetchingNextPage) {
			console.log("다음 페이지 로딩..."); // 디버깅용
			fetchNextPage();
		}
	}, [ hasNextPage, isFetchingNextPage, fetchNextPage]);

  
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 invisible-scroll">
        {data?.pages.map((page) =>
					page.list.map((movie) => (
						<MovieItem key={movie.id} movie={movie} />
					))
				)}
        </div>
    );
}

export default MovieList;
