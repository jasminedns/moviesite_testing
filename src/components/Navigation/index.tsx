import Link from "next/link";

const Navigation = () => {

    const NavLinkArray = [
        {    name: "Home",
            link: "/"
        },
        {
            name: "Film Focus",
            link: "/movie"
        }, 
        {
            name: "My Pick",
            link: "/favourites"
        }, 
        {
            name: "Popcorn Facts 🍿",
            link: "/popcornfacts"
        }
    ]

    return (
        <div className="bg-[#202A44] flex flex-row justify-center py-6">
            {
                NavLinkArray && NavLinkArray.map((item, index) =>
                    <Link
                        aria-label={item.name}
                        href={item.link} 
                        key={index}
                        className="text-white text-md md:text-2xl mx-4 md:mx-10 hover:underline cursor-pointer"
                    >
                        {item.name}
                    </Link>
                )
            }
        </div>
    )
}

export default Navigation;