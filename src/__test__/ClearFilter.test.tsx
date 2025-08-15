import {fireEvent, render,screen} from'@testing-library/react'
import ClearFilter from '@/components/Movie/ClearFilter'
 
 test("That back button is present",()=>{
    let clicked = false
    const handleClear = () => {
        clicked = true
    }
        render(<ClearFilter onClear={handleClear}/>)
        const backButton = screen.queryByRole("button",{name:"Clear Filter"})
        expect(backButton).toBeInTheDocument()
    })