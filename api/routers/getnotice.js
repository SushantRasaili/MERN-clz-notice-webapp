const router = require('express').Router();
const Create = require('../models/notice');
// All notices
router.get("/getNotices", async (req,res) => {
      try {

            const notices =  await Create.find();
            if(notices) { 
             res.status(200).json(notices);
            }
            else {
                  console.log("no notice found");
            }

            // Callback functions
            // await Create.find((notices) => {
            //       res.status(200).json(notices)
            // },(err) => {
            //       res.status(500).json(err)
            // })

            // with promises
            // await Create.find()
            // .then(res => res.status(200).json(res))
            // .catch(err => res.status(500).json(err));
         
      }
      catch(err) {
            console.log(err);
      }
     
     
});




module.exports = router;

