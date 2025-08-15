import {fireEvent, render,screen, within} from '@testing-library/react'
import MovieDescription from '@/components/Movie/MovieDescription'
import { moviedata } from '@/data/movieData'
import { movieDataType } from '@/utils/types'

test("Test movie details are present in the moviedescription",()=>{
    let movies=moviedata[0] //for mockdata here moviedata[0] is used
    let movieHeading
    const favSelected = (movie:movieDataType) => {
        movieHeading = movie.movieName
    }

    render(<MovieDescription movie={movies} favSelected={favSelected} favMovie={null}/>)
    let movieDetail = screen.getByTestId("movie")
    expect(movieDetail).toHaveTextContent(`${movies.movieName}`)
    expect(movieDetail).toHaveTextContent(`Year:${movies.releaseYear}`)
    expect(movieDetail).toHaveTextContent(`Genre:${movies.genre}`)
})  

test("Test movie icon alt when mouse enter on that",()=> {
    let movies=moviedata[1] 
    let movieHeading
    const favSelected = (movie:movieDataType) => {
        movieHeading = movie.movieName
    }

    render(<MovieDescription movie={movies} favSelected={favSelected} favMovie={null}/>)
    let movieImage = screen.getByTestId("movie-icon") as HTMLImageElement
    expect(movieImage.alt).toBe(`${movies.movieName} not-rotated`)
    expect(movieImage.src).toContain(`${movies.icon}`)
    fireEvent.mouseEnter(movieImage)
    movieImage = screen.getByTestId("movie-icon") as HTMLImageElement
    expect(movieImage.alt).toBe(`${movies.movieName} rotated`)
    expect(movieImage.alt).toBe(`A Quiet Place rotated`)
})

test("Test movie icon alt when mouse leave from the icon",()=> {
    let movies=moviedata[0] //for mockdata here moviedata[0] is used
    let movieHeading
    const favSelected = (movie:movieDataType) => {
        movieHeading = movie.movieName
    }


    render(<MovieDescription movie={movies} favSelected={favSelected} favMovie={null}/>)
    let movieImage = screen.getByTestId("movie-icon") as HTMLImageElement
    expect(movieImage.alt).toBe(`${movies.movieName} not-rotated`)
    expect(movieImage.src).toContain(`${movies.icon}`)
    fireEvent.mouseLeave(movieImage)
    movieImage = screen.getByTestId("movie-icon") as HTMLImageElement
    expect(movieImage.alt).toBe(`${movies.movieName} not-rotated`)

})

test("Test that alt name of movie icon when mouse enter the icon and leaves",()=> {
    let movies=moviedata[0] //for mockdata here moviedata[0] is used
    let movieHeading
    const favSelected = (movie:movieDataType) => {
        movieHeading = movie.movieName
    }

    render(<MovieDescription movie={movies} favSelected={favSelected} favMovie={null}/>)
    
    let movieImage = screen.getByTestId("movie-icon") as HTMLImageElement
    expect(movieImage.alt).toBe(`${movies.movieName} not-rotated`)
    expect(movieImage.src).toContain(`${movies.icon}`)
    
    fireEvent.mouseEnter(movieImage)
    movieImage = screen.getByTestId("movie-icon") as HTMLImageElement
    expect(movieImage.alt).toBe(`${movies.movieName} rotated`)
    
    fireEvent.mouseLeave(movieImage)
    movieImage = screen.getByTestId("movie-icon") as HTMLImageElement
    expect(movieImage.alt).toBe(`${movies.movieName} not-rotated`)

})

test("Test the click function in moviename",() => {
    let movies=moviedata[1] 
    let movieHeading
    const favSelected = (movie:movieDataType) => {
        movieHeading = movie.movieName
    }

    render(<MovieDescription movie={movies} favSelected={favSelected} favMovie={null}/>)
    const movieTitle = screen.getByRole("heading",{level:4})
    expect(movieTitle).toHaveTextContent(movies.movieName)
    fireEvent.click(movieTitle)
    let description = screen.getByTestId("movie-description")
    expect(description).toBeInTheDocument()
    expect(description).toHaveTextContent(`${movies.movieName}`)
    expect(description).toHaveTextContent("A Quiet Place")
})

test("Test the close button functionality in description",()=> {
    let movies=moviedata[1] 
    let movieHeading
    const favSelected = (movie:movieDataType) => {
        movieHeading = movie.movieName
    }

    render(<MovieDescription movie={movies} favSelected={favSelected} favMovie={null}/>)
    const movieTitle = screen.getByRole("heading",{level:4})
    expect(movieTitle).toHaveTextContent(movies.movieName)
    fireEvent.click(movieTitle)
    let description = screen.queryByTestId("movie-description")
    expect(description).toBeInTheDocument()
    const closeButton = screen.getByRole('button')
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    description = screen.queryByTestId("movie-description")
    expect(description).not.toBeInTheDocument()
})