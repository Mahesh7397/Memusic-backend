const express=require('express')
const router=express.Router()
const path=require('path')
const { getRandomSong, getSongs ,getSearchLatter} = require('../../controller/songcontroller')



router.route('/')
.get(getRandomSong)


router.route('/search/result/:name')
.get(getSongs)

router.route('/search/:latter').get(getSearchLatter)



module.exports=router