var express = require('express');
var files = require('../models/files.js');
var opts = require('../settings.js');
var router = express.Router();

router.post('/login',function(req,res){
res.json({
	scc:'scc'
})
});

module.exports = router;