import { Movie } from "@/types/movie";
import React from "react";

interface MovieCardProps {
  movie: Movie;
}

function MovieInfo({ movie }: MovieCardProps) {
    return (
        <div>
            <p className="text-body-large text-white">{movie.title}</p>
            <p className="text-body-small text-white-900">{movie.degree}</p>
            <p className="text-body-xs text-white-900">
                {movie.averageRating == -1
                    ? "평가없음"
                    : `평균⭐${movie.averageRating}`}
            </p>
        </div>
    );
}

export default MovieInfo;
