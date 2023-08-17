'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import axios from 'axios';
import Image from 'next/image';

import FormData from '@/util/FormDataSchema';
import Map from './Map';
import { useState } from 'react';

const ContactForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm({ resolver: zodResolver(FormData) })



    const [serverMessage, setServerMessage] = useState('')



    const submitData = async (data) => {


        const response = await axios.post('/api/contact', data)



        setServerMessage(response.data.message)

    }


    return (
        <section className='flex flex-col gap-10 items-center justify-center py-24 bg-bg-black max-w-[95vw] -mt-32 rounded'>
            <div className='text-center text-white font-medium'>
                <h5 className='text-lg text-gold'>CENTRURY 21 CYPRUS</h5>
                <h1 className='text-5xl'>Contact Us</h1>
            </div>
            <div className="w-full flex gap-20  px-20 justify-between">


                <Map />







                <form className='flex flex-col gap-3 w-1/2 text-light-grey' onSubmit={handleSubmit(submitData)}>

                    <h1 className='text-lg font-medium '>Have ANY questions? FEEL FREE TO drop US a line</h1>





                    {isSubmitSuccessful && <span className='flex gap-4'>
                        <Image src="/Vector.svg" width={30} height={30} alt="Success Icon" />

                        <p className='text-gold text-lg font-medium'>{serverMessage}</p>

                    </span>}




                    {!isSubmitSuccessful && <>
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder='John Doe' className='p-4 bg-grey h-[48px] rounded text-light-grey' {...register("name")} />
                        {
                            errors.name && <span className='text-red-600'>{errors.name.message}</span>
                        }

                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder='johndoe@gmail.com' className='p-4 bg-grey h-[48px] rounded text-light-grey' {...register("email")} />
                        {
                            errors.email && <span className='text-red-600'>{errors.email.message}</span>
                        }

                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" name="phone" id="phone" placeholder='+1 456 4567843' className='p-4 bg-grey h-[48px] rounded text-light-grey' {...register("phone")} />
                        {
                            errors.phone && <span className='text-red-600'>{errors.phone.message}</span>
                        }


                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" placeholder='How we can help you?' cols="30" rows="10" className='p-4 bg-grey  rounded text-light-grey h-40' {...register("message")}></textarea>
                        {
                            errors.message && <span className='text-red-600'>{errors.message.message}</span>
                        }


                        <input type="submit" value="SEND Message" className=' text-sm  roudned bg-gold text-white self-start px-10 py-5 rounded' />
                    </>
                    }
                </form>

            </div>









        </section>)
};

export default ContactForm;