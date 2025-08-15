import { render, screen } from '@testing-library/react'
import Navigation from '@/components/Navigation'

describe("Test to check if the Navigation Title and the links gets populated as expected", () => {

    test("Test to check if the Navigation Title  gets populated as expected", () => {
        render(<Navigation />)

        const NavLinkArray = [{
            name: "Home",
            link: "/"
        }, {
            name: "Film Focus",
            link: "/movie"
        }, {
            name: "My Pick",
            link: "/favourites"
        }, {
            name: "Popcorn Facts 🍿",
            link: "/popcornfacts"
        }]

        expect(NavLinkArray.length).toBe(4);

        NavLinkArray.map((item) => {
            const NavLink = screen.getByRole("link", { name: `${item.name}` })
            expect(NavLink).toHaveTextContent(item.name)
        })

    })


    test("Test to check if the Navigation links gets populated as expected", () => {
        render(<Navigation />)

        const NavLinkArray = [{
            name: "Home",
            link: "/"
        }, {
            name: "Film Focus",
            link: "/movie"
        }, {
            name: "My Pick",
            link: "/favourites"
        }, {
            name: "Popcorn Facts 🍿",
            link: "/popcornfacts"
        }]

        expect(NavLinkArray.length).toBe(4);

        NavLinkArray.map((item) => {
            const NavLink = screen.getByRole("link", { name: `${item.name}` })
            expect(NavLink).toHaveTextContent(item.name)
            
            expect(NavLink).toHaveAttribute('href', `${item.link}`)
        })

    })
})
