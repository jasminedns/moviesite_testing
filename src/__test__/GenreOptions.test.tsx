import {fireEvent, render,screen} from '@testing-library/react'
import GenreOptions from '@/components/Movie/GenreOptions'
import { filteredGenres } from '@/data/movieData'

describe("Filter button and its onclick function",() => {
    test("Test that Filter button is in document",() => {
        let clickedGenre = false
        const handleGenre = () => {
            clickedGenre = true
        }
        
        render(<GenreOptions genresArray={filteredGenres} onGenreSelect={handleGenre}/>)

        const filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        expect(filterButton).toBeInTheDocument()
    }),
    
    test("Test that if filter button is clicked the list of genres is displaying",() => {
         let clickedGenre = false
        const handleGenre = () => {
            clickedGenre = true
        }
        
        render(<GenreOptions genresArray={filteredGenres} onGenreSelect={handleGenre}/>)
       
        const filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        let genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)
        expect(genreList[0]).toHaveTextContent("Horror")
        expect(genreList[0]).toHaveTextContent(filteredGenres[0])

        fireEvent.click(filterButton)
        genreList = screen.queryAllByTestId("genre-options")   
        expect(genreList.length).toBe(0)

    })
})

test("Test that particular genre is clicked ",()=> {
     let clickedGenre = false
        const handleGenre = () => {
            clickedGenre = true
        }
    
    render(<GenreOptions genresArray={filteredGenres} onGenreSelect={handleGenre} />)
    
        const filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        
        let genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)
        genreList.forEach((genre) => {     
            expect(genre).toBeInTheDocument()
        }) 
        
})






