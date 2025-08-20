import SocialMediaIcons from "../FooterSocialIcons/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="bg-[#093A3E] flex flex-row justify-between items-center p-10">
            <div className="capitalize p-5 text-xl">
                <h5 className="hover:underline cursor-pointer">company</h5>
                <h5 className="hover:underline cursor-pointer">support</h5>
                <h5 className="hover:underline cursor-pointer">Popcorn picks</h5>
            </div>
            <div>
                <SocialMediaIcons />
            </div>
        </footer>
    )
}

export default Footer;