const router = require('express').Router();
const Create = require("../models/notice");
const axios = require('axios');
const cors = require('cors');
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");



dotenv.config({path: "../../.env"});

router.get("/env",async(req,res) => {
       console.log(process.env.NODEUSER);
       console.log(process.env.NODEPASS);
       console.log(process.env.EMAIL);

});

router.post("/notice",  async (req,res) => {

const {title,desc,url} = req.body; 

try {
    const create = new Create({
        title,
        desc,
        url
    });
   const saved =  await create.save();
   if(saved) {
    res.status(200).send("Succesfully created the notice");

    const {NODEUSER,NODEPASS,EMAIL} = process.env;
    console.log(NODEPASS);
  
    let transporter =  nodemailer.createTransport({
    
        service: "hotmail",
          auth: {
            // user: "Nodetest44-55@outlook.com", 
            // pass: "Node09#", 
            user: NODEUSER,
            pass: NODEPASS,
          }, 
        });
      
    const options = {
        //   from: "Nodetest44-55@outlook.com", 
        //   to: "sushant.mcity@gmail.com",
        from: NODEUSER,
        to:   EMAIL,
          subject: "Notice posted", 
          text: `message`,
          html: `<b>Title:</b><p>${title}</p><br>
                 <b>Description:</b><p>${desc}</p>`
        };
      
        await transporter.sendMail(options)
        .then(info => console.log(info.response))
        .catch(err => console.log(err));
    

   } else {
       console.log(err);
   }
} catch(err) {
    res.status(500).send(err);
}
   

});

module.exports = router;