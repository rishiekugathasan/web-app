const express = require('express');
let router = express.Router();

router.get('/',function(req,res) {
    res.sendFile('/dummyPages/index.html',{root:'../server'});
});

router.get('/howItWorks',function(req,res) {
    res.sendFile('/dummyPages/howItWorks.html',{root:'../server'});
});

module.exports = router;