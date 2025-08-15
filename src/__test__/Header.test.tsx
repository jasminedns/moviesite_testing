import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe("Check if the Header has Logo ", () => {
    it("Header should contain logo  image with alt as logo_image", () => {
        render(<Header title='sample_text' />)

        let logo_image = screen.getByTestId("logo_image")
        expect(logo_image).toBeInTheDocument()
    })
})

describe("Check if the Header title is same as the prop passed", () => {
    it("Header should contain logo  image with alt as logo_image", () => {
        render(<Header title='sample_text' />)

        let logo_image = screen.getByTestId("logo_image")
        expect(logo_image).toBeInTheDocument()

        let mock_data="sample_text";
        let header_title = screen.getByRole("heading",{level:1,name:mock_data})
        expect(header_title).toBeInTheDocument()
    })
})