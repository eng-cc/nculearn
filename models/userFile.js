var mongoose = require('mongoose');
var opts = require('./../settings.js');

mongoose.createConnection(opts.lomongodb.url);


var fileSchema = new mongoose.Schema({
    user: String,
    up: Array,
    down:Array
}, {
    collection: 'userFile'
});

var fileModel = mongoose.model('userFile', fileSchema);

var userFile = function(userFile) {
    this.user = userFile.user || "",
        this.up = userFile.up || "",
        this.down = userFile.down || ""
};

