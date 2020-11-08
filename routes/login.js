var express = require('express');
const { post } = require('../app');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('login')
})

router.post('/',function(req, res){
    console.log(req.body.username)
    res.render('chat',{username : req.body.username,roomcode : 'beta'})
})

module.exports = router;
