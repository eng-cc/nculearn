var express = require('express');
var qiniu = require('qiniu');
var path = require('path');
var bodyParser = require('body-parser')

qiniu.conf.ACCESS_KEY = "b_vFaxabRaSANFpAMwDBVlaoRs7ArtoGeYLJ9gFn";
qiniu.conf.SECRET_KEY = 'R2kTmYVqVDQMz6Fq6slGpoEmm6tae3SGOoY7HSHP';

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'static')));
//解析body传输的内容
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('',function(req,res){
	res.render('./pages/qiniuUpload',{
		title:'sccblog'
	});
});

app.get('/upToken',function(req,res,next){
	var myUpToken = new qiniu.rs.PutPolicy('nculearnfiles');
	var token = myUpToken.token();
	//moment.locale('en');
	res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
    	console.log(token);
    	res.json({
    		uptoken:token
    	});
    };
});

var downloadurl = function(domain,key){
    var baseurl = qiniu.rs.makeBaseUrl(domain,key);
    var policy = new qiniu.rs.GetPolicy();
    return policy.makeRequest(baseurl);
};

app.post('/url',function(req,res){
    var url = downloadurl(req.body.domain,req.body.key);
    res.end(url);
})




app.listen(5353,function(){
    console.log('5353')
})