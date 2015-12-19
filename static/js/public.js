var q = function(css){
	return document.querySelector(css);
};
var drawcanvas = function(url, elm) {
    var img = new Image();
    img.src = url;
    img.onload = function() {
        var cxt = elm.getContext('2d');
        cxt.drawImage(img, 0, 0, elm.width, elm.height);
    };
};