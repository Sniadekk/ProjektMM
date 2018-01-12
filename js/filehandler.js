function getPhoto()
{
	let input = document.getElementById("photoInput");
	console.log(input.files);
	
}


var filehandler = {







}


function setBackgroundImage()
{

	var input = document.getElementById("fileInput");
	if (input.files && input.files[0]) 
	{
		var reader = new FileReader();
		reader.onload = function (e) 
		{
			document.body.style.backgroundImage = 'url(' + e.target.result + ')';
			document.body.style.backgroundRepeat = "no-repeat, repeat;";
			document.body.style.backgroundAttachment = "fixed";
			document.body.style.backgroundSize = "100% 100%";
		};
		reader.readAsDataURL(input.files[0]);
	}
}
document.getElementById('fileInput').addEventListener('change', setBackgroundImage, false);