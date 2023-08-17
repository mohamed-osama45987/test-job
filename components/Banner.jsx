
const Banner = () => {
    return (
        <section className="w-full p-[2vh] px-4 bg-banner text-banner-text flex justify-between">
            <ul className="flex gap-4">
                <li><a href="#" className="hover:text-white" >C21 GLOBAL</a></li>
                <li><a href="#" className="hover:text-white">LOG IN</a></li>
            </ul>
            <ul className="flex gap-4">
                <li><a href="#" className="hover:text-white">Franchise</a></li>
                <li><a href="#" className="hover:text-white">Company</a></li>
            </ul>
        </section>
    )
}

export default Banner