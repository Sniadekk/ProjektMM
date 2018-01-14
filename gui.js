class GUI{
	constructor(){
		this.input = document.getElementById('fileInput');
		this.button = document.getElementById('fileButton');
		this.newFiles = null;
		this.listeners();
		
	}

	listeners(){
		this.input.addEventListener('change',this.fileHandler);

		

	}

	fileHandler(e)
	{
			this.newFiles = e.target.files[0];
			if (this.newFiles) 
			{
				var reader = new FileReader();
				reader.onload = (e)=>{
					document.body.style.backgroundImage = 'url(' + e.target.result + ')';
					document.body.style.backgroundRepeat = "no-repeat, repeat;";
					document.body.style.backgroundAttachment = "fixed";
					document.body.style.backgroundSize = "100% 100%";
					//	this.button.innerHTML = "Standardowe Tło";
				};
				reader.readAsDataURL(this.newFiles);
			}
	}
	
}

