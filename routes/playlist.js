const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const users = require("../models/user");
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const playlist = require('../models/playlist');

const router = express.Router();

router.post("/playlist",async(reqq,res) =>{
    try{
         if(req.isAuth){
             const data = await playlist.create({
                 name: req.body.name,
                 gener:req.body.gener,
                 description:req.body.description
             });
             const userPlaylist = await users.findByIdAndUpdate(req.userId,{
                 $push:{'playlist':data._id}
             })
             res.send(data);
             return;
         }
    }
    catch(err){
        res.send(err);
        return;

    }
})
router.get("/:playlistId",async(req,res)=>{
    try{
          const q = await playlist.findById(req.params.playlistId)
          res.send(q)
           return;
       }
     
      


    
    catch(err){
       res.send(err)
       return;
    }
})

router.post("/addMusic/:playlistId", async (req, res) => {
    try {
        if(req.isAuth) {
            const data = await playlist.findByIdAndUpdate(req.params.playlistId,{
                $push:{
                    "music":req.body.music
                }
            })
        }
        else {
            res.send("Please Login");
            return;
        }
    } catch (err) {
        res.send(err)
        return;
    }
    
})
router.post("/deleteMusic/:playlistId", async (req, res) => {
    try {
        if(req.isAuth) {
            const data = await playlist.findByIdAndUpdate(req.params.playlistId,{
                $pull:{
                    "music":req.body.music
                }
            })
        }
        else {
            res.send("Please Login");
            return;
        }
    } catch (err) {
        res.send(err)
        return;
    }
    
})

module.exports = router;