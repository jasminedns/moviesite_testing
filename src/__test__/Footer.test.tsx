import {render,screen} from '@testing-library/react'
import Footer from '@/components/Footer'

describe("test that h5 have the textcontent",()=>{
    it("test that first h5 tag",()=>{
         render(<Footer />)

        const heading = screen.getByRole('heading',{
            level:5,
            name:"company"})
        expect(heading).toBeInTheDocument()
    }),

    it("test that all h5 textcontent in footer",()=>{
        render(<Footer />)

        const allHeadings = screen.getAllByRole('heading',{level:5})
        const expectedTest = ["company","support","Popcorn picks"]

        expect(allHeadings.length).toBe(3)
        allHeadings.forEach((item,index)=> {
            expect(item).toHaveTextContent(expectedTest[index])
        })
        
    })

})

describe("Test the social media icons",()=> {
    it("test that number of social icons to be four",()=> {
        render(<Footer />)

        const socialIcons = screen.getAllByTestId('social-icons')
        expect(socialIcons.length).toBe(4)
        expect(socialIcons[0]).toHaveAttribute('href',"https://instagram.com/")
    }),

    it("test that four social icons rendering have proper link",()=> {
        render(<Footer />)

        const socialIcons = screen.getAllByTestId('social-icons')
        expect(socialIcons.length).toBe(4)

        const LinkArray = [{
            name:"Instagram",
            link:"https://instagram.com/"
        },{
            name:"Facebook",
            link:"https://facebook.com/" 
        },{
            name:"Twitter",
            link:"https://twitter.com/"
        },{
            name:"YouTube",
            link:"https://youTube.com/"
        }]

        LinkArray.map((item)=> {
            const iconLink = screen.getByRole("link",{name:`${item.name}`})
            expect(iconLink).toHaveAttribute('href',`${item.link}`)
        })
    })

})