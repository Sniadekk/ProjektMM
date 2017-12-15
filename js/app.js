			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			
			var renderer = new THREE.WebGLRenderer({alpha:true});
			renderer.setSize( window.innerWidth, window.innerHeight );
			//Add canvas to DOM
			document.body.appendChild( renderer.domElement );
			//Render object shape
			var geometry = new THREE.BoxGeometry(1, 1, 1);
			// 
			// Floor
			var floorMaterial = new THREE.MeshBasicMaterial({color: 0xff00ff,  side:THREE.DoubleSide})
			var floorGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
			var floor = new THREE.Mesh(floorGeometry, floorMaterial);
			floor.position.y = -0.5;
			floor.rotation.x = -Math.PI/2;
			scene.add( floor );
			// 1st wall
			var wall1Material = new THREE.MeshBasicMaterial({color: 0x0000ff,  side:THREE.DoubleSide})
			var wall1Geometry = new THREE.PlaneGeometry(10,10,10,10);
			var wall1 = new THREE.Mesh(wall1Geometry, wall1Material);
			wall1.position.y = 4.5;
			wall1.position.z -=5;
			wall1.rotation.x = Math.PI;
			scene.add( wall1 );
			// 2nd wall
			var wall2Material = new THREE.MeshBasicMaterial({color: 0xff0000,  side:THREE.DoubleSide})
			var wall2Geometry = new THREE.PlaneGeometry(10,10,10,10);
			var wall2 = new THREE.Mesh(wall2Geometry, wall2Material);
			wall2.position.y = 4.5;
			wall2.position.x += 5;
			wall2.rotation.y = Math.PI/2;
			wall2.rotation.x = Math.PI;
			scene.add( wall2 );
			//Rotation controls
			var controls = new THREE.OrbitControls( camera, renderer.domElement );
			//Render material
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			//Creating cube object using shape and material
			var cube = new THREE.Mesh( geometry, material );
			cube.position.y = 0.01;
			cube.rotation.x = Math.PI/2;
			//Adding cube object to scene
			scene.add( cube );
			camera.position.z = 5;

			// GUI
			var gui = new dat.GUI();
			var parameters = 
			{
				a: '#ff8800', // color(hex)
				b: "Tekst"
			};
			//
			var controller = gui.addColor( parameters, 'a' ).name('Color');
			gui.add(parameters , "b").name('Gaida');
			controller.onChange(function(){
				document.body.childNodes[8].style.backgroundColor = parameters["a"];
			});
			gui.open();
			console.log(document.body.childNodes);
			// 
			// 
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