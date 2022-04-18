const express = require('express');
const music = require("../models/music");

const router = express.Router();


router.post("/addMusic",async(req,res) => {
    try {
        if(req.isAuth){
            if(req.admin){
                const data = await music.create({
                    name: req.body.name,
                
                    ReleaseDate: req.body.ReleaseDate,
                    Downloads: req.body. Downloads,
                    album: req.body.album,
                    singer: req.body.singer,
                    views:req.body.views,
                    Gener:req.body.Gener,
                    tags: req.body.tags,
                })
            }
            else{
                res.send("Unauthorized Access")
                return;
            }
        }
        else{
            res.send("Please Login");
            return;
        }
    }
    catch(err) {
        res.send(err);
        return;
    }
})
router.post("/modifyMusic/:musicId",async(req,res)=>{
    try{
        if(res.isAuth){
            if(req.admin){
                const updata = await music.findByIdAndUpdate(req.params.musicId,{
                    name: req.body.name,
                    description: req.body.description,
                    time: req.body.time,
                    singer: req.body.singer,
                    album: req.body.album,
                    tags: req.body.tags,
                })

            }
            else{
                res.send("Unauthorized Access")
                return;
            }
            
        }
        else{
            res.send("Please Login");
            return;
        }
    }
    catch(err){
        res.send(); 
        return;

    }

})

module.exports = router;