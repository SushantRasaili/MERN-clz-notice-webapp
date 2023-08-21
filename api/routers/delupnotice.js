const router = require('express').Router();
const Create = require('../models/notice');
const Register = require("../models/admin");
const { set } = require('mongoose');
// All notices
router.delete("/delNotice/:id", async (req,res) => {
    try {
        const username = await Register.findOne({username: req.body.username});
        if(username) {
           const ifdeleted =  await Create.findByIdAndDelete(req.params.id);
           ifdeleted && res.status(200).json("Deleted");
        }
        else {
            res.status(500).json("Can't delete the item,admin is invalid")
        }
    }
    catch(err) {
        console.log(err);
    }
});

router.put("/updateNotice/:id", async(req,res) => {
    try {
       const username = await Register.findOne({username: req.body.username});
       if(username) {
           const updated = await Create.findByIdAndUpdate(req.params.id,{$set: req.body});
           if(updated) {
               res.status(200).json("Succesfully updated the notice");
           } 
           else {
               res.status(400).json("Update incomplete");
           }
       }
    }
    catch(err) {
        console.log(err);
    }
})




module.exports = router;

