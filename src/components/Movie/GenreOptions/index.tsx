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
                className={`bg-[#093A3E] p-3 font-bold cursor-pointer w-[135px] ${dropDownMenu ? "rounded-tl-2xl rounded-tr-2xl" : "rounded-2xl"}`}
            >
                Filter By Genre
            </button>

            {dropDownMenu && (
                <div className="absolute z-99 w-[135px] bg-[#093A3E] rounded-bl-2xl rounded-br-2xl">
                    {genresArray.map((item, index) => (
                        <p 
                            data-testid="genre-options"
                            key={index}
                            onClick={() => {
                                onGenreSelect(item);
                                setDropDownMenu(false);
                            }}
                            className={`text-center p-1 hover:bg-[#16929dd1] cursor-pointer ${item === "Action" ? "rounded-bl-2xl rounded-br-2xl" : ""}`}
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