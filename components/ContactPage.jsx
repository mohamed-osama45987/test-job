import Image from "next/image"
import ContactForm from "./ContactForm"

const ContactPage = () => {
    return (
        <section className="w-screen flex flex-col items-center" id="contact">
            <Image src="/offices-img.png" width={1452} height={474} alt="Image of offices " className="w-full h-full" />


            <ContactForm />
        </section>
    )
}

export default ContactPage