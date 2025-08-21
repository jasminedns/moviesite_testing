'use client'

import { useState } from "react";

type GenreOptionsProp = {
    genresArray: string[];
    onGenreSelect: (genre:string) => void;
}

const GenreOptions = ({genresArray, onGenreSelect}:GenreOptionsProp) => {
    const [dropDownMenu, setDropDownMenu] = useState<Boolean>(false)
    
    return (
        <div className="relative">
            <button
                onClick={() => setDropDownMenu(!dropDownMenu)}
                className={`bg-[#202A44] p-3 font-bold cursor-pointer w-[135px] ${dropDownMenu ? "rounded-tl-2xl rounded-tr-2xl" : "rounded-2xl"}`}
            >
                Filter By Genre
            </button>

            {dropDownMenu && (
                <div className="absolute z-99 w-[135px] bg-white rounded-bl-2xl rounded-br-2xl">
                    {genresArray.map((item, index) => (
                        <p 
                            data-testid="genre-options"
                            key={index}
                            onClick={() => {
                                onGenreSelect(item);
                                setDropDownMenu(false);
                            }}
                            className={`text-center border-b-2 font-bold text-black p-1 hover:bg-[#bfccec] cursor-pointer ${item === "Action" ? "rounded-bl-2xl rounded-br-2xl" : ""}`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default GenreOptions;