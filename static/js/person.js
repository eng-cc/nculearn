var loadQiniu = function(){
	var script = document.createElement('div');
	script.innerHTML = '<script src="dist/js/moxie.min.js"></script>'+
	'<script src="dist/js/plupload.min.js"></script>'+
	'<script src="dist/js/qiniu.min.js"></script>';
	q('body').appendChild(script);
}

var upload = function(data){

}