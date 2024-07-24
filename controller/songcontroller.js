const data=require('../model/SongPlayData.json')

const getRandomSong=(req,res)=>{
        let randdata=data[Math.floor(Math.random()*data.length)]
        res.send(randdata)
}

const getSongs=(req,res)=>{
    const { name }= req.params
    let filterByMoviename=data.filter(song=>{
        if(typeof song.title === 'string'){
            if(song.title.toLowerCase().includes(name.toLowerCase())){
                return song
            }
        }
        else{
           console.log(data.indexOf(song))
        }
    })
    let filterBySongname=data.filter((song)=>{
        if(typeof song.Movie === 'string'){
        if(song.Movie.toLowerCase().includes(name.toLowerCase())){
            return song
        }
        }
        else{
        console.log(data.indexOf(song))
        }
})
    if(!filterByMoviename.length && !filterBySongname.length){
        res.status(404)
        res.json({"Message":"Data is Not Found"})
    }
    else{
    res.json([...filterByMoviename,...filterBySongname])
    }
}

module.exports={getRandomSong,getSongs}