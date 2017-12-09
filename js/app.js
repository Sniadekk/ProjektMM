var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			
			var renderer = new THREE.WebGLRenderer({alpha:true});
			renderer.setSize( window.innerWidth, window.innerHeight );
			//Add canvas to DOM
			document.body.appendChild( renderer.domElement );
			//Render object shape
			var geometry = new THREE.BoxGeometry(1, 1, 1);
			//Rotation controls
			var controls = new THREE.OrbitControls( camera, renderer.domElement );
			//Render material
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			//Creating cube object using shape and material
			var cube = new THREE.Mesh( geometry, material );
			//Adding cube object to scene
			scene.add( cube );
			camera.position.z = 5;
			//Color palete for background;
			window.onload = function(){
				document.getElementById('textInput1').value=document.getElementById("r").value; 
				document.getElementById('textInput2').value=document.getElementById("g").value; 
				document.getElementById('textInput3').value=document.getElementById("b").value; 
				changeBackground();
			}; 
			console.log(document.body.childNodes);
			// 
			function updateTextInput1(val) {
          		document.getElementById('textInput1').value=val; 
        	}
        	// 
        	function updateTextInput2(val) {
          		document.getElementById('textInput2').value=val; 
        	}
        	// 
        	function updateTextInput3(val) {
          		document.getElementById('textInput3').value=val; 
        	}
			//
			// 
			function changeBackground(){
				var r = parseInt(document.getElementById('r').value);
				var g = parseInt(document.getElementById('g').value);
				var b = parseInt(document.getElementById('b').value);
				document.body.childNodes[8].style.backgroundColor = 'rgb('+[r,g,b].join(",")+')';
			}
			// Handling resizing by user
			window.addEventListener("resize", function(){
				renderer.setSize( window.innerWidth, window.innerHeight );
				camera.aspect = window.innerWidth / window.innerHeight;
			   	camera.updateProjectionMatrix();
			});
			//
			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
				renderer.render( scene, camera );
			}
			animate();

			