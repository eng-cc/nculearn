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
drawcanvas('/img/1.jpg',q('#topBg'));

var searchBtn= document.querySelector('#searchBtn');
var topIcon= document.querySelectorAll('.topList canvas');
searchBtn.style.width = searchBtn.offsetHeight+'px';
for (var i = topIcon.length - 1; i >= 0; i--) {
	topIcon[i].style.height = topIcon[i].offsetWidth + 'px';
	var elm = '#list'+i;
	drawcanvas('/img/list'+i+'.png',q(elm));
};


q('html').style.minHeight = q('html').offsetHeight+'px';