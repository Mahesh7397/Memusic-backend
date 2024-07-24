const express=require('express')
const router=express.Router()
const path=require('path')
const { getRandomSong, getSongs } = require('../../controller/songcontroller')



router.route('/')
.get(getRandomSong)


router.route('/:name')
.get(getSongs)



module.exports=router