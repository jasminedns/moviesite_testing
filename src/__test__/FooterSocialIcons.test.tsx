import {getByRole, getByTestId, render,screen} from '@testing-library/react'
import SocialMediaIcons from '@/components/FooterSocialIcons'

test("Test for social media icon links",()=>{
    render(<SocialMediaIcons />)

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