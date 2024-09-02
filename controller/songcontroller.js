const data=require('../model/SongPlayData.json')

const getRandomSong=(req,res)=>{
        let randdata=[]
        for(let i=0;i<10;i++){
            let ran=data[Math.floor(Math.random()*data.length)]
            randdata.push(ran)
        }
        res.send(randdata)
}


const getSongs=(req,res)=>{
    const { name }= req.params
    const filterByMoviename=data.filter(song=>{
        if(typeof song.title === 'string'){
            if(song.title.toLowerCase().includes(name.toLowerCase())){
                return song.title
            }
        }
        else{
           console.log(data.indexOf(song))
        }
    })
    const filterBySongname=data.filter((song)=>{
        if(typeof song.Movie === 'string'){
        if(song.Movie.toLowerCase().includes(name.toLowerCase())){
            return song.Movie
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

const getSearchLatter=(req,res)=>{
     const {latter}=req.params
     const title=data.map(song=>{return song.title})
     const filterlattertitle=title.filter(song=>{
        if(song.toLowerCase().includes(latter.toLowerCase())){
            return song
        }
     })
     //console.log(title)
     const Movie=data.map(song=>{return song.Movie})
     const filterlattermovie=Movie.filter(song=>{
        if(song.toLowerCase().includes(latter.toLowerCase())){
            return song 
        }
     })

     const collectlatter=[...filterlattermovie,...filterlattertitle]

     if(!collectlatter.length){
        res.status(404)
        res.json({"Message":"Data is Not Found"})
    }
    else {
        res.json(collectlatter)
    }
}

module.exports={getRandomSong,getSongs,getSearchLatter}