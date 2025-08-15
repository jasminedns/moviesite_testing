 import {fireEvent, render,screen} from'@testing-library/react'
 import BackButton from '@/components/Movie/BackButton'
 
 test("That back button is present",()=>{
    let clicked = false
    const handleClear = () => {
        clicked = true
    }
        render(<BackButton onClear={handleClear}/>)
        const backButton = screen.getByRole("button",{name:"Back"})
        expect(backButton).toBeInTheDocument()
        fireEvent.click(backButton)
        expect(clicked).toBe(true)
    })