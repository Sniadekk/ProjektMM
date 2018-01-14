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
		console.log("iIt's works!");
		this.files = e.target.files[0];
		if (this.files) 
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				document.body.style.backgroundImage = 'url(' + e.target.result + ')';
				document.body.style.backgroundRepeat = "no-repeat, repeat;";
				document.body.style.backgroundAttachment = "fixed";
				document.body.style.backgroundSize = "100% 100%";
			};
			reader.readAsDataURL(this.files);
		}
	}
}