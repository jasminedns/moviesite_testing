import {fireEvent, render,screen} from'@testing-library/react'
import ClearFilter from '@/components/Movie/ClearFilter'
 
 test("That back button is present",()=>{
   
        render(<ClearFilter onClear={()=>{}}/>)
        const backButton = screen.queryByRole("button",{name:"Clear Filter"})
        expect(backButton).toBeInTheDocument()
    })