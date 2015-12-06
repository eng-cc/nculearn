var qiniu = require('qiniu');
var opts = require('../settings.js');

qiniu.conf.ACCESS_KEY = opts.qiniu.access_key;
qiniu.conf.SECRET_KEY = opts.qiniu.secret_key;

var qnModel = {
    mkUrl: function(domain, key) {
        var baseurl = qiniu.rs.makeBaseUrl(domain, key);
        var policy = new qiniu.rs.GetPolicy();
        return policy.makeRequest(baseurl);
    }
};


module.exports = qnModel
