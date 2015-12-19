var express = require('express');
var files = require('../models/files.js');
var qiniu = require('../models/qiniu.js');
var opts = require('../settings.js');
var router = express.Router();


//上传
router.post('/uploadFile', function(req, res) {
        /*console.log(req.body);
        res.end('sss')*/
    var file = {
        hash: req.body.hash,
        domain: req.body.domain,
        key: req.body.key,
        size:req.body.size,
        msg: req.body.msg
    };
    var newFile = new files(file);
    newFile.save(function(err, file) {
        if (err) {
            console.log(err);
        };
        console.log(file);
        res.json({
            succ: true,
            msg: '上传成功'
        });
    });
});
//查询
router.post('/getFiles'),function(req,res) {
	//全部
    if (req.body.query == 'all') {
        files.queryAll(function(err, files) {
            if (err) {
                console.log(err);
                res.json({
                    succ: false,
                    msg: '查询失败'
                });
            } else {
            	for (var i = files.length - 1; i >= 0; i--) {
            		files[i].url = qiniu.mkUrl(files[i].domain,files[i].key);
            	};
                res.json({
                    succ:true,
                    msg:files
                });
            };
        });
    };
    //文字搜索
    if (req.body.query == "text") {
    	files.queryText(function(err,files){
    		if (err) {
    			console.log(err);
    			res.json({
    				succ:false,
    				msg:'查询失败'
    			});
    		}else{
    			for (var i = files.length - 1; i >= 0; i--) {
            		files[i].url = qiniu.mkUrl(files[i].domain,files[i].key);
            	};
    			res.json({
    				succ:true,
    				msg:files
    			});
    		};
    	});
    };  
    //按文件key
    if (req.body.query == 'one') {
    	files.queryOne(req.body.key,function(err,file){
    		if (err) {
    			console.log(err);
    			res.json({
    				succ:false,
    				msg:'查询失败'
    			});
    		}else{
    			file.url = qiniu.mkUrl(file.domain,file.key);
    			res.json({
    				succ:true,
    				msg:file
    			});
    		};
    	});
    }; 
};

module.exports = router;
