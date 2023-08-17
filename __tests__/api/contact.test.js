import request from "supertest"


describe('Contact EndPoint Tests', () => {
    it("will pass", async () => {

        const response = await request('http://localhost:3000/api').post('/contact').send({
            "name": "Mohmed",
            "email": "mohamedaljoker2000@gmail.com",
            "phone": "01151685454",
            "message": "Hello world"
        })
        console.log(response.body)

        expect(response.status).toEqual(200)
        expect(response.body.message).toBe('Successfully Added Contact Data!')
    })



})