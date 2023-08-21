
const router = require('express').Router();
const Create = require('../models/notice');


//Single notice
router.get("/getNotices/:id", async (req,res) => {
    try {
          const notice = await Create.findOne({_id: req.params.id});
          if(notice) {
                res.status(200).send(notice);
          }
          else {
                res.status(500).send("Can't find the notice");
          }
    }
    catch(err) {
          res.status(500).send(err);
    }
   
});

module.exports = router;