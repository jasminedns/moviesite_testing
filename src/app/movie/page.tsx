'use client'

import ClearFilter from "@/components/Movie/ClearFilter";
import GenreOptions from "@/components/Movie/GenreOptions";
import MovieDescription from "@/components/Movie/MovieDescription";
import { filteredGenres, moviedata } from "@/data/movieData";
import { useState } from "react";

const Movie = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
    const [redHeart, setRedHeart] = useState<string | null>(null)
    
    const handleFavSelect = (movie: string) => {
        if (redHeart === movie) {
            setRedHeart(null)
        } else {
            setRedHeart(movie)
        }    
    };

    return (
        <div className="grow">
            <div className="p-10 w-[50%] m-auto flex flex-row justify-around">
                <GenreOptions genresArray={filteredGenres} onGenreSelect={setSelectedGenre}/>
                <ClearFilter onClear={() => setSelectedGenre(null)}/>
            </div>
            <div className="bg-[#093A3E] flex flex-row flex-wrap justify-center">
                {
                    selectedGenre === null 
                    ? 
                        moviedata && moviedata.map((item, index) => 
                            <MovieDescription key={index} movie={item} favSelected={handleFavSelect} favMovie={redHeart} />                
                        )
                    :
                        moviedata
                            .filter(movie => movie.genre === selectedGenre)
                            .map((item, index) => 
                            <MovieDescription key={index} movie={item} favSelected={handleFavSelect} favMovie={redHeart}/>                
                        )
                }
            </div>
        </div>

    )
}

export default Movie;