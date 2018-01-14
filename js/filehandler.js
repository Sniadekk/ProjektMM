function getPhoto(evt)
{

		var files = evt.target.files;
		for (var i = 0, f; f = files[i]; i++) {
		  if (!f.type.match('image.*')) {
			continue;
		  }
		  var reader = new FileReader();
		  reader.onload = (function(theFile) {
			return function(e) {
				scene.remove(wall1);
				var loader = new THREE.TextureLoader();
				loader.load(e.target.result, function ( texture ) {
				console.log(texture);
				//document.body.style.backgroundImage = "url(')
				});
			};
		  })(f);
		reader.readAsDataURL(f);
		}
		document.getElementById('imgConvert').addEventListener('change', handleFileSelect, false);
}


var filehandler = {







}