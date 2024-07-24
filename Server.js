const express=require('express')
const app=express()
const path=require('path')
const PORT=process.env.PORT||3800
const {logger}=require('./middleware/handlelog')
const handleError = require('./middleware/handleError')


app.use(express.urlencoded({extended:false}))

app.use(logger)
app.use('/songs',require('./router/api/Songs'))

app.get('/*',(req,res)=>{
    res.status(404).type('txt').send("Data is Not Found")
})

app.use(handleError)
app.listen(PORT,()=>console.log(`Server id running on ${PORT}`))