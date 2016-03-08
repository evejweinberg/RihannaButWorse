// $$$$$$$\  $$$$$$\ $$\   $$\  $$$$$$\  $$\   $$\ $$\   $$\  $$$$$$\  
// $$  __$$\ \_$$  _|$$ |  $$ |$$  __$$\ $$$\  $$ |$$$\  $$ |$$  __$$\ 
// $$ |  $$ |  $$ |  $$ |  $$ |$$ /  $$ |$$$$\ $$ |$$$$\ $$ |$$ /  $$ |
// $$$$$$$  |  $$ |  $$$$$$$$ |$$$$$$$$ |$$ $$\$$ |$$ $$\$$ |$$$$$$$$ |
// $$  __$$<   $$ |  $$  __$$ |$$  __$$ |$$ \$$$$ |$$ \$$$$ |$$  __$$ |
// $$ |  $$ |  $$ |  $$ |  $$ |$$ |  $$ |$$ |\$$$ |$$ |\$$$ |$$ |  $$ |
// $$ |  $$ |$$$$$$\ $$ |  $$ |$$ |  $$ |$$ | \$$ |$$ | \$$ |$$ |  $$ |
// \__|  \__|\______|\__|  \__|\__|  \__|\__|  \__|\__|  \__|\__|  \__|

///////////////////////////////////////////////////////////////////////////                                                                    
// //  ___,  __   _, ____,    __    _, ____, ___,   ____  ____,
// (-|_) (-|  |  (-|      (-| | |  (-/  \(-|_)  (-(__`(-|_, 
//  _|__)  |__|_, _|       _|_|_|    \__/ _| \_, ____) _|__,
// (             (        (              (      (     (     
////////////////////////////////////////////////////////////////////////// 

//global
var FFTval = 0;


// //threeJS variables
// var container, stats;
// var camera, scene, raycaster, renderer;
// var mouse = new THREE.Vector2(),
//     INTERSECTED;
// var radius = 100,
//     theta = 0;
// var scaleX, scaleY;
// var allcubes = [];


// init();
// animate();

// function init() {

//     container = document.createElement('div');
//     document.body.appendChild(container);

//     // var info = document.createElement( 'div' );
//     // info.style.position = 'absolute';
//     // info.style.top = '10px';
//     // info.style.width = '100%';
//     // info.style.textAlign = 'center';
//     // info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> webgl - interactive cubes';
//     // container.appendChild( info );

//     camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);

//     scene = new THREE.Scene();

//     var light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(1, 1, 1).normalize();
//     scene.add(light);

//     var geometry = new THREE.BoxGeometry(20, 20, 20);

//     for (var i = 0; i < 100; i++) {

//         var object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));

//         object.position.x = Math.random() * 800 - 400;
//         object.position.y = Math.random() * 800 - 400;
//         object.position.z = Math.random() * 800 - 400;

//         object.rotation.x = Math.random() * 2 * Math.PI;
//         object.rotation.y = Math.random() * 2 * Math.PI;
//         object.rotation.z = Math.random() * 2 * Math.PI;

//         object.scale.x = Math.random() + 12 * FFTval;
//         object.scale.y = Math.random() + 20 * FFTval;
//         object.scale.z = Math.random() + 0.5;

//         scene.add(object);
//         allcubes.push(object);
//         console.log(allcubes.length + 'is cubes array length')

//     }

//     raycaster = new THREE.Raycaster();

//     renderer = new THREE.WebGLRenderer();
//     renderer.setClearColor(0xf0f0f0);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.sortObjects = false;
//     container.appendChild(renderer.domElement);

//     stats = new Stats();
//     // stats.domElement.style.position = 'absolute';
//     // stats.domElement.style.top = '0px';
//     // container.appendChild( stats.domElement );

//     document.addEventListener('mousemove', onDocumentMouseMove, false);

//     //

//     window.addEventListener('resize', onWindowResize, false);

// }

// function onWindowResize() {

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);

// }

// function onDocumentMouseMove(event) {

//     event.preventDefault();

//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

// }


// function animate() { //looping recursive function, call yourself and call the render function

//     requestAnimationFrame(animate);

//     render();
//     stats.update();

// }

// function render() { //this is where you add animation

//     for (var i = 0; i < allcubes.length; i++) {

//         allcubes[i].scale.x = 22 * FFTval;
//         allcubes[i].scale.y = 4 * FFTval;
//     }

//     theta += 0.1;

//     camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
//     camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta));
//     camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));
//     camera.lookAt(scene.position);

//     camera.updateMatrixWorld();

//     // find intersections
//     //raycast from camera to the objects and mouse intersects them
//     raycaster.setFromCamera(mouse, camera);

//     var intersects = raycaster.intersectObjects(scene.children);

//     if (intersects.length > 0) {

//         if (INTERSECTED != intersects[0].object) {

//             if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

//             INTERSECTED = intersects[0].object;
//             INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
//             INTERSECTED.material.emissive.setHex(0xff0000);

//         }

//     } else {

//         if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

//         INTERSECTED = null;

//     }

//     //not sure about what this line does yet
//     renderer.render(scene, camera);

// }
