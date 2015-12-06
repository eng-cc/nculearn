var mongoose = require('mongoose');
var opts = require('./../settings.js');

mongoose.createConnection(opts.mongodb.url);


var fileSchema = new mongoose.Schema({
    domain: String,
    key: String,
    msg:String
}, {
    collection: 'files'
});

var fileModel = mongoose.model('files', fileSchema);

var files = function(user) {
    this.domain = user.domain || "",
        this.key = user.key || ""
};

files.prototype.save = function(cb){
	var newFile = {
		domain:this.domain,
		key:this.key,
		msg:this.msg
	};
	var file = new fileModel(newFile);
	file.save(function(err,file){
		if (err) {
			return cb(err);
		};
		cb(null,file);
	});
};

files.prototype.queryOne = function(key,cb){
	fileModel.findOne({key:key},function(err,file){
		if (err) {
			return cb(err);
		};
		cb(null,file);
	});
};

files.prototype.queryAll = function(cb){
	fileModel.find(function(err,files){
		if (err) {
			return cb(err);
		};
		cb(null,file);
	});
};

files.prototype.queryText = function(text,cb){

};

module.exports = files;
