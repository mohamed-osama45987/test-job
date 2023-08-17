import { z } from 'zod'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);


const FormData = z.object({
    name: z.string('Name must be a string between 1 and 18 char long').trim().min(1, "Name must be at least 1 char long").max(18, "Maximum char for name is 18"),
    phone: z.string("phone number must be a string").trim().regex(phoneRegex, 'Invalid Number!').min(10, "Phone number must be at least 10 numbers").max(14, "Phone number must not exceid 14 numbers"),
    email: z.string().trim().email("Invalid email address"),
    message: z.string().min(1, "Message must be atleast 10 character long")
}).required().strip();


export default FormData