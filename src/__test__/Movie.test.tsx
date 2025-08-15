import { fireEvent, render, screen, within } from '@testing-library/react'
import Movie from '@/app/movie/page'
import { moviedata,filteredGenres, FilterByGenre } from '@/data/movieData'
import Favourites from '@/app/favourites/page'

describe("Test the element to be present on page load ", () => {
    test("Test the number of movies to be present on page load", () => {
        render(<Movie />)

        const allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)


    }),

        test("That filter button is present", () => {
            render(<Movie />)

            const filterButton = screen.getByRole("button", { name: "Filter By Genre" })
            expect(filterButton).toBeInTheDocument()
        }),

        test("That back button is present", () => {
            render(<Movie />)

            const backButton = screen.getByRole("button", { name: "Back" })
            expect(backButton).toBeInTheDocument()
        })
})

describe("To check if the data matches exactly with the the dataset", () => {
    test("If the data is rendered is in coherence with the dataset", () => {
        render(<Movie />)

        let allMovieData = screen.getAllByTestId("movie")
        expect(allMovieData.length).toBe(moviedata.length)

        allMovieData.forEach((movie, index) => {
            let movieDetail = moviedata[index];

            expect(within(movie).getByText(movieDetail.movieName)).toBeInTheDocument()
            expect(within(movie).getByText(`Year:${movieDetail.releaseYear}`)).toBeInTheDocument();
            expect(within(movie).getByText(`Genre:${movieDetail.genre}`)).toBeInTheDocument()
        })
    })
})


describe("To check when the favourite icon is clicked, icon is changed", () => {
    test("On clicking the Fav icon, icon should change", () => {
        render(<Movie />)

        let allMovieData = screen.getAllByTestId("movie")
        expect(allMovieData.length).toBe(moviedata.length)

        allMovieData.forEach((movie, index) => {
            let movieDetail = moviedata[index];

            let favIcon = within(movie).getByAltText(`unfavourite_icon.png ${movieDetail.movieName}`);
            expect(favIcon).toBeInTheDocument()
            expect(favIcon).toHaveAttribute("src", "unfavourite_icon.png");

            fireEvent.click(favIcon)
            expect(favIcon).toHaveAttribute("src", "favourite_icon.png");
            expect(favIcon).toHaveAttribute("alt", `favourite_icon.png ${movieDetail.movieName}`)

        })
    })
})

describe("To check when the favourite icon is clicked, the corresponding fav movie is displayed in Favourite page ", () => {
    test("On clicking the Fav icon, Favourite movie must be captured in Favourties page", () => {
        render(<Movie />)
        let movieDetail = moviedata[0];

        let allMovieData = screen.getAllByTestId("movie")
        expect(allMovieData.length).toBe(moviedata.length)

        let firstData = allMovieData[0];
        expect(within(firstData).getByText(movieDetail.movieName)).toBeInTheDocument()

        let favIcon = within(firstData).getByAltText(`unfavourite_icon.png ${movieDetail.movieName}`);
        expect(favIcon).toBeInTheDocument()
        expect(favIcon).toHaveAttribute("src", "unfavourite_icon.png");

        fireEvent.click(favIcon)
        expect(favIcon).toHaveAttribute("src", "favourite_icon.png");
        expect(favIcon).toHaveAttribute("alt", `favourite_icon.png ${movieDetail.movieName}`)

        render(<Favourites />)
     
        expect(within(firstData).getByText(movieDetail.movieName)).toBeInTheDocument()
        expect(within(firstData).getByRole("heading",{level:4})).toHaveTextContent("The Conjuring")

        let favMovieDetail=screen.getByTestId("fav_movie")
        expect(within(favMovieDetail).getByRole("heading",{level:4})).toHaveTextContent(movieDetail.movieName)
        expect(within(favMovieDetail).getByRole("heading",{level:4})).toHaveTextContent("The Conjuring")

    })
})

describe("Test the filter button and genre selection",() =>{
    test("Test that selected genre of movies is displayed",()=> {
    render(<Movie />)

    let allMovies = screen.getAllByTestId("movie")
    expect(allMovies.length).toBe(moviedata.length)
    
    let filterButton = screen.getByRole("button",{name:"Filter By Genre"})
    fireEvent.click(filterButton)
    
    let genreList = screen.queryAllByTestId("genre-options")    
    expect(genreList.length).toBe(filteredGenres.length)

    //checking for horro genre
    let selectedGenre = genreList[0]
    expect(selectedGenre).toHaveTextContent("Horror")
    fireEvent.click(selectedGenre)
    allMovies = screen.getAllByTestId("movie")
    expect(allMovies.length).toBe(FilterByGenre("Horror").length)
    //checking for same movie name
    let HorrorMovies = FilterByGenre("Horror")
    expect(HorrorMovies[0].movieName).toEqual("The Conjuring")
    //when horror genre movie displayed filter button doesnt display the option
    genreList = screen.queryAllByTestId("genre-options")    
    expect(genreList.length).toBe(0)
    }),

    test("Test that select another genre of movie when particular genre is displayed",()=> {
        
        render(<Movie />)

        let allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)
        
        let filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        
        let genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)
    

        let selectedGenre = genreList[0]
        expect(selectedGenre).toHaveTextContent("Horror")
        fireEvent.click(selectedGenre)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(FilterByGenre("Horror").length)
        
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)
        
        filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)
        selectedGenre = genreList[1]
        expect(selectedGenre).toHaveTextContent("Romantic")
        
        fireEvent.click(selectedGenre)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(FilterByGenre("Romantic").length)

        let HorrorMovies = FilterByGenre("Romantic")
        expect(HorrorMovies[0].movieName).toEqual("The Notebook")

        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)

        filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)

    })

})

 test("Test the back button functionality when particular genre is selected",()=> {
    render(<Movie />)

        let allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)
        
        let filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)

        let backButton = screen.getByRole("button",{name:"Back"})
        expect(backButton).toBeInTheDocument()
        
        let genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)


        let selectedGenre = genreList[0]
        expect(selectedGenre).toHaveTextContent("Horror")
        fireEvent.click(selectedGenre)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(FilterByGenre("Horror").length)
        
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)
//testong back button function
        backButton = screen.getByRole("button",{name:"Back"})
        fireEvent.click(backButton)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)
})



