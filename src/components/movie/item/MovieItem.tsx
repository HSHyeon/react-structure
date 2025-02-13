import { Movie } from "@/types/movie";
import React from "react";
import MovieInfo from "./MovieInfo";
import {SyntheticEvent} from "react";
interface MovieCardProps {
  movie: Movie;
}

function MovieItem({ movie }: MovieCardProps) {
    const handleImage = (e: SyntheticEvent<HTMLImageElement, Event>)=>{
        e.currentTarget.src="images/default.jpg"
    }
    return (
        <div className="p-3 grid hover:bg-gray-800 hover:shadow-md transition-colors rounded-sm">
            <img src={movie.imageUrl ? movie.imageUrl : "images/default.jpg"} width={300}  onError={handleImage}/>
            <MovieInfo movie={movie}/>
        </div>
    );
}

export default MovieItem;
