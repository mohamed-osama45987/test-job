import Image from "next/image"
import Button from "./Button"

const Map = () => {
    return (
        <section className=" flex flex-col gap-10">

            <Image src="/Group 6480.png" alt="Map frame" width={492} height={248}></Image>


            <div className=" flex gap-5">
                <Button btText="PAPHOS OFFICE" />
                <Button btText="LIMASSOL OFFICE" />
                <Button btText="3RD ADDRESS OFFICE" />
            </div>

            <section>

                <div className="text-white grid grid-cols-2 grid-rows-2 gap-5 ">
                    <div className="">
                        <h1 className=" text-gold mb-1">ADDRESS</h1>
                        <p>
                            Tsakalof 15, Kolonaki, Limassol, Cypruss, 22033
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className=" text-gold mb-1">PHONE</h1>
                        <span>+30 210 3635 457</span>
                        <span>+30 210 3635 457</span>
                    </div>
                    <div className="">
                        <h1 className=" text-gold mb-1">BUSINESS HOURS</h1>
                        <p>
                            Mon to Fri:  9:00 AM - 6:00 PM
                        </p>
                    </div>
                    <div className="">
                        <h1 className=" text-gold mb-1">EMAIL</h1>
                        <a href="mailto:info@century21.com">
                            info@century21.com
                        </a>
                    </div>
                </div>







            </section>

        </section>
    )
}

export default Map