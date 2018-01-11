class GUI{
	constructor(){
		this.input = document.getElementById('fileInput');
		this.files = null;
		this.listeners();
	}

	listeners(){
		this.input.addEventListener('change',this.fileHandler);
		

	}
	fileHandler(e){
		this.files = e.target.files;
		let reader = new FileReader();
		let image = document.createElement("img");
        reader.addEventListener("load", function () {
            image.src = reader.result;
            //Tworzenie materialu, używajac textury ladowanej z pliku
            let material = new THREE.MeshStandardMaterial({map:THREE.ImageUtils.loadTexture(image.src)});
            app.appendMaterial(material);
        }, false);
        //Sprawdza czy plik istnieje
        if (this.files[0]) {
            reader.readAsDataURL(this.files[0]);
        }
	}
}