var q = function(css){
	return document.querySelector(css);
};
var qa = function(css){
	return document.querySelectorAll(css);
}
var drawcanvas = function(url, elm) {
    var img = new Image();
    img.src = url;
    img.onload = function() {
        var cxt = elm.getContext('2d');
        cxt.drawImage(img, 0, 0, elm.width, elm.height);
    };
};
var ajax = function(method, url, cb, data, dataType) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open(method.toUpperCase(), url, true);
    if (method.toLowerCase() == 'get') {
        xhr.send(null);
    } else {
        var contentType = 'application/x-www-form-urlencoded';
        if (dataType) {
            if (dataType.toLowerCase() == 'json') {
                contentType = 'application/json'
            };
        };
        xhr.setRequestHeader("Content-type", contentType);
        xhr.send(data);
    };
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 500 || xhr.status===404){
                window.location.href = '../../templates/error.html';
            };
            if (xhr.status === 200) {
                cb(xhr.responseText);
            };
        };
    };
};