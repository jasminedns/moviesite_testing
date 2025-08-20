import Image from "next/image";

const Header = ({title}:{title:string}) => {
    return (
        <div className="bg-[#093A3E] flex flex-row justify-center items-center gap-5">
            <div>
                <Image src="/logo.png" data-testid="logo_image" alt="logo_image" width={100} height={100}/>
            </div>
            <h1 className="text-white text-4xl uppercase mt-4">{title}</h1>
        </div>
    )
}

export default Header;