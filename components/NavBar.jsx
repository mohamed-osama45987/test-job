import Image from "next/image"



const NavBar = () => {
    return (
        <nav className="w-full h-[100px] bg-banner-text text-white flex items-center justify-between px-20">
            <div className="flex items-center gap-20">
                <Image src="/Gold-Center.svg" alt="Brand Name" width={159} height={40} />

                <ul className="flex gap-8 items-center">
                    <li><a href="#" className="hover:text-banner">Find a Home</a></li>
                    <li><a href="#" className="hover:text-banner">Sell a Home</a></li>
                    <li><a href="#" className="hover:text-banner">Join C21</a></li>
                    <li><a href="#" className="hover:text-banner">BLOG</a></li>
                    <li><a href="#" className="hover:text-banner">CONTACT</a></li>
                </ul>

            </div>



            <Image src="/Vector.svg" width={95} height={124} alt="Logo" className="-mb-12 z-10" />



        </nav>
    )
}

export default NavBar