const express = require("express");
const router = express.Router();
const Shayari = require('../models/shayari');

router.post("/shayari", async (req, res) =>{
    try{
        console.log(req.body);
        const newShayari = await Shayari.create(req.body);
        res.status(201).json(newShayari);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
});

router.get("/shayari/random", async (req, res) => {
    try{
        const shayari = await Shayari.find();
        const len = shayari.length;
        const random = Math.floor(Math.random() * len);
        console.log(random);
        console.log(shayari[random]);
        res.json(shayari[random]);
    }catch(error){
        res.status(404).json({ error: error.message });
    }
});

router.get("/shayari/:id", async (req, res) => {
    try{
        const shayari = await Shayari.findOne({ id: req.params.id });
        if(!shayari){
            return res.status(404).json("Shayari on this id does not exist");
        }
        res.status(200).json(shayari);
    }catch(error){
        res.status(404).json({ error : error.message });
    }
});

router.delete("/shayari/:id", async (req, res) => {
    try{
        const deleteShayari = await Shayari.findOneAndDelete({id : req.params.id });

        if(!deleteShayari){
            return res.status(404).json({ message: "Shayari id not found" });
        }

        res.json({ message: "Shayari delete success", data: deleteShayari })
    }catch(error){
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
