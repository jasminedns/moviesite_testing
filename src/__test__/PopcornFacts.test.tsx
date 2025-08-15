import {render,screen} from '@testing-library/react'
import PopcornFacts from '@/app/popcornfacts/page'

test("Test the h2 eleent in the document",()=>{
    render(<PopcornFacts />)
     const subHeading = screen.getByText(/did you know/i)
     expect(subHeading).toBeInTheDocument()
})

test("Test the textcontent in h2",() => {
    render(<PopcornFacts />)

    const subHeading = screen.getByRole("heading",{level:2})
    expect(subHeading).toHaveTextContent('Did You Know?')
})