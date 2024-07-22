const express=require('express')
const app=express()
const path=require('path')
const PORT=process.env.PORT||3800
const data=require('./model/SongPlayData.json')

app.get('/',(req,res)=>{
    let randdata=data[Math.floor(Math.random()*data.length)]
    res.send(randdata)
})
app.get('/:name',(req,res)=>{
   let result=data.filter((song)=>song.Movie===req.params.name)
   res.json(result)
})


app.listen(PORT,()=>console.log(`Server id running on ${PORT}`))