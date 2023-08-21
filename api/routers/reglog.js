const router = require('express').Router();
const Register = require('../models/admin');
const bcrypt = require("bcrypt");
const e = require('express');

//REGISTER route
router.post("/register", async (req,res) => {
const {username} = req.body;
try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password,salt);
    
    const admin = new Register(
        {
            username: username,
            password: hashedPass
        }
    );
    
    const user = await admin.save();
    if(user) {
        res.status(200).send("Admin registered");
    }
    else {
       res.send("Can't registered the admin try after changing the password or username");
    }   
}
catch(err) {
    res.status(500).send(err);
}
});

//LOGIN route
router.post("/login",async (req,res) => {
    try{
        const admin = await Register.findOne({username: req.body.username});
        if(admin) {
           const validate =  await  bcrypt.compare(req.body.password,admin.password);
           validate ? res.status(200).send(admin.username) :
            res.status(400).send("Wrong credentials");
        }
        else {
             res.status(400).send("Wrong credentials");
        }

    }
    catch(err) {
        res.status(500).send(err);
    }

});

module.exports = router;