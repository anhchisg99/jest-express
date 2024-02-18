import request from 'supertest'
import app from '../app.js'

describe("Post /users",()=>{
    test("should respond with a 200 status  code",async ()=>{
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
    })
    test("should respond with ",async ()=>{
        const response = await request(app).get("/test")
        expect(response.text).toBe('success')
    })
    test("should respond with number",async ()=>{
        const response = await request(app).get("/test2")
        expect(response.headers['content-type']).toMatch('json')
    })
    test("should respond with number",async ()=>{
        const response = await request(app).get("/test2")
        expect(response.body.userId).toBeDefined()
    })
})