'use client'

import { movieDataType } from "@/utils/types";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import "@/app/globals.css"

type MovieDescriptionProps = {
  movie: movieDataType;
  favSelected: (movie: movieDataType) => void;
  favMovie: string | null;
};

const MovieDescription = ({movie, favSelected, favMovie}:MovieDescriptionProps) => {
    const [rotate, setRotate] = useState("not-rotated");
    const [showDescription, setShowDescription] = useState<Boolean>(false);

    const pathname = usePathname();

    const handleFavourite = () => {
        favSelected(movie);

        localStorage.setItem("favouriteMovie", JSON.stringify(movie));
    }

    return (
        <div 
            data-testid = "movie"
            className={`bg-white flex flex-col rounded-2xl m-4 p-6 ${showDescription === false ? "w-[45%]" : "w-full"}`}>
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="md:w-[30%]">
                    <img 
                        className={`w-[50%] md:w-[50%] md:m-0 m-auto h-auto ${rotate === "rotated" ? "animate-spin" : ""}`}
                        data-testid="movie-icon"
                        src={`/${movie.icon}`} alt={`${movie.movieName} ${rotate}`} 
                        width={100} height={100}
                        onMouseEnter={() => setRotate("rotated")}
                        onMouseLeave={() => setRotate("not-rotated")}
                    />
                </div>
                <div className="text-black text-center">
                    <h4 
                        onClick={() => setShowDescription(true)}
                        className="font-bold uppercase px-3 hover:underline cursor-pointer"
                    >
                        {movie.movieName}
                    </h4>
                    <h5>Year:{movie.releaseYear}</h5>
                    <h5>Genre:{movie.genre}</h5>
                </div>
                <div>
                    {movie.favourite && pathname !== "/favourites" && 
                        <img 
                            className="cursor-pointer my-2"
                            onClick={handleFavourite}
                            src={favMovie === movie.movieName ? "favourite_icon.png" : "unfavourite_icon.png"} 
                            alt={`${favMovie === movie.movieName ? "favourite_icon.png" : "unfavourite_icon.png"} ${movie.movieName}`} 
                            width={25} height={25}
                        />
                    }            
                </div>
            </div>
            {
                showDescription === true && 
                <div className="text-right">
                    <button 
                        onClick={() => setShowDescription(false)}
                        className="text-black font-bold text-sm border-2 p-2 rounded-2xl hover:bg-[#093A3E] hover:text-white cursor-pointer"
                    >
                       CLOSE
                    </button>

                    <div 
                        data-testid= "movie-description"
                        className="text-black text-center py-5 px-8"
                    >
                        {movie.description}
                    </div>
                </div>
            }
        </div>
    )
}

export default MovieDescription;