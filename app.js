import express from 'express'
const app =express()

// app.use(expres.json())
app.get('/',(req,res)=>{
    res.status(200).send("Hello World!");
})
app.get('/test',(req,res)=>{
    const user = null
    res.send('success')
})
app.get('/number',(req,res)=>{
    const user = 'cuong cuoi'
    res.send(user)
})
app.get('/test2',(req,res)=>{
   res.send({userId:0})
})

export default app