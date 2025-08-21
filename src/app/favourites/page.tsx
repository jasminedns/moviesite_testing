'use client'

import MovieDescription from "@/components/Movie/MovieDescription";
import { movieDataType } from "@/utils/types";
import { useEffect, useState } from "react";

const favourites = () => {
    const [favouriteMovie, setFavouriteMovie] = useState<movieDataType | null>(null)
    const [redHeart, setRedHeart] = useState<string | null>(null)

    const handleFavSelect = (movie: string) => {
        setRedHeart(movie)
    };

    useEffect(() => {
        const savedMovie = localStorage.getItem("favouriteMovie")

        if (savedMovie) {
            setFavouriteMovie(JSON.parse(savedMovie))
        }
    }, [])

    return (
        <div 
            data-testid="fav_movie"
            className="grow flex justify-center items-center bg-[#202A44]">
            {
                favouriteMovie 
                    ? <MovieDescription movie={favouriteMovie} favSelected={handleFavSelect} favMovie={redHeart}/>
                    : <p>No favourite Movie yet!</p>
            }
        </div>
    )
}

export default favourites;