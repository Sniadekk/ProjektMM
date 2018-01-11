			class App{
				constructor(){
					this.guiRef = new GUI();
					this.scene = new THREE.Scene();
					this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
					this.camera.position.z = 3000;
					this.lighting = new THREE.AmbientLight(0x404040);
					this.scene.add(this.lighting);
					this.renderer = new THREE.WebGLRenderer({alpha:true});
					this.loader = new THREE.TDSLoader();
					this.materialLoader = new THREE.TextureLoader();
					this.path = 'js/model.3ds';
					this.geometry = new THREE.BoxGeometry(1, 1, 1);
					this.renderer.setSize( window.innerWidth, window.innerHeight );
					document.body.appendChild( this.renderer.domElement );
					this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
					this.animate = this.animate.bind(this);
					this.listeners();
					this.getMaterials();
					this.getModel();
					this.animate();
				}

				listeners(){
					window.addEventListener("resize", function(){
						console.log("W: ",window.innerWidth,"H: ",window.innerHeight);
						this.renderer.setSize( window.innerWidth, window.innerHeight );
						this.camera.aspect = window.innerWidth / window.innerHeight;
					   	this.camera.updateProjectionMatrix();
					});


				}

				animate(){
				requestAnimationFrame(this.animate);
				this.renderer.render(this.scene,this.camera);
				}

				getMaterials(){
					this.materialLoader.setPath('materialy');
					this.materials = this.materialLoader.load('/okleina naturalna.JPG',(texture)=>{
							this.material = new THREE.MeshStandardMaterial({map:texture});
					});
				}

				appendMaterial(material){
					for(let x = 0; x < this.object.children.length; x++){
						if(this.object.children[x] === undefined){
                            console.log(this.object.children[x]);
                		}else{
                            this.object.children[x].material = material;
                            console.log(this.object.children[x].material);
						}
					}
				}

				getModel(){
					this.loader.setPath(this.path);
					this.loader.load(this.path,(object)=>{
					this.scene.add(object);
					this.object = object;
					this.appendMaterial(this.material);
					});
				};
			}

			const app = new App();