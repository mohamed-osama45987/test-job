import { NextResponse } from "next/server";

import FormData from "@/util/FormDataSchema";
import { sendMail } from "@/util/SendMail";


export async function POST(req) {

    let body;
    // check if body is empty 
    try {
        body = await req.json()
    } catch (error) {
        return NextResponse.json({
            message: "Body of the request can not be empty!"
        }, {
            status: 403
        })
    }

    const validationResult = FormData.safeParse(body)


    if (validationResult.error?.errors?.length > 0) {
        return NextResponse.json({
            message: "Failed with the following errors!", errors: validationResult.error.errors
        }, {
            status: 403
        })
    }






    // sending email
    sendMail("Contact details saved", validationResult.data.email, "We saved your contact details we will contact you soon")


    return NextResponse.json({
        message: "THANK YOU! PLEASE CHECK YOUR INBOX", data: validationResult.data
    })
}

export async function GET(req) {


    return NextResponse.json({
        message: "Hello world"
    })
}