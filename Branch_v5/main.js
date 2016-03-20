//analyse the frequency/amplitude of the incoming signal    
var cubeHeight = 10;
var cubeWidth = 5;
var cubeDepth = 20;
var instruments = [];
var allcubesinOneFFT = [];
var allobjects = [];
var allFFTs = [];
var allRows = [];
var fftSpectrums = [];
var effects = [];
var instruments = [synth0, synth1, synth2, synth3, synth4, synth5, synth6, synth7, synth8, synth9, synth10, synth11, synth12, synth13];

var switches = []; //Tone switches boolian 0/1
effects[0] = new Tone.Freeverb();
effects[1] = new Tone.BitCrusher(1);
effects[2] = chorus3;
var row1on = false;
var thisRowsVolume = [];
var AreRowsOn = [];
var framesPerSecond = 24;
var totalVideoCount = 10;



var allVideos = [];
for (var i = 0; i < totalVideoCount; i++) {
var imgURL;
    if (i < 10) {
        imgURL = "video/video" + i + ".mov";
    } else {
        imgURL = "video/video" + i + ".mov";
    }

    var eachVideo = {
        // draggingtone: dragTone,
        img: imgURL,
        // stem: player,
        targetX: i*120,
        targetY: 0,
        // onTarget: false

    };

    allVideos.push(eachVideo);
}


  displayAllImages();
  function displayAllImages() {
    for (i = 0; i < 40; i++) {
        console.log(i%totalVideoCount)
        makeImage(i%totalVideoCount);
    }
}

// $('body').append($( "h2" ));
function makeImage(i) {
    var vidWidth = 120;
    var radius = 400;
    var x = 500+i*vidWidth;
    var y = 5;
    var imageObject = $("<video src=" + allVideos[i].img + " autoplay='autoplay' loop></video>")

    //give it a z-index, an ID, draggability
    imageObject.css('z-index', 10);

    imageObject.attr('id', 'video' + i);
    imageObject.attr('position', 'absolute');
    imageObject.attr('width', vidWidth);
     imageObject.attr('height', vidWidth);
      imageObject.attr('class', 'stem' + i);
 

        imageObject.offset({left: x, top: y});

    $('body').append(imageObject);

}


/////////////ALL VIDEOS DONE LOADING/////////////
////////////////ALL VIDEOS DONE LOADING/////////////
////////////////ALL VIDEOS DONE LOADING/////////////




//make an fft analyzer for each instrument
for (var i in instruments) {
    fft = new Tone.Analyser(32, "fft");
    allFFTs.push(fft);
}

for (var i = 0; i < effects.length; i++) {
    for (j in instruments) {
        instruments[j].connect(effects[i]);
    }
}




for (var i in instruments) {
    switches[i] = new Tone.Switch(false);
    switches[i].gate.value = 0;


    instruments[i].fan(switches[i], allFFTs[i]).toMaster();
    for (var j = 0; j < effects.length; j++) {
        instruments[i].connect(effects[j]);
    }
    for (var m = 0; m < effects.length; m++) {
        effects[m].connect(switches[i])
    }

}

//start everything, this can moved to a button press
Tone.Transport.start();
Tone.Transport.bpm.value = 124;






//////THREE JS/////////////////
// ///                                                                           
//  /__  ___/ //    / / //   ) )  //   / /  //   / /             / / //   ) ) 
//    / /    //___ / / //___/ /  //____    //____               / / ((        
//   / /    / ___   / / ___ (   / ____    / ____               / /    \\      
//  / /    //    / / //   | |  //        //                   / /       ) )   
// / /    //    / / //    | | //____/ / //____/ /       ((___/ / ((___ / /    
// /////////////////////////////////////////////////////////////////////////
var container;
var camera, controls, scene, renderer;
var raycaster;
var imgScreen, screens;
var videoo, videoImage, videoImageContext, videoTexture;
var videoIsLoaded = false;
var lastTime = Date.now();
var time;



var mouse = new THREE.Vector2(),
    offset = new THREE.Vector3(),
    INTERSECTED, SELECTED;
var plane;


init();
$(function() {
    loop()
});



function init() {
    container = document.createElement('div');
    container.id = "threeJS";
    container.backgroundColor = "red";
    container.style.zIndex = "-30"
    container.style.position = "absolute"

    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 9000);

    scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0x505050));



    // camera.position.z = 1000;
    // camera.rotateX(40);
    // camera.rotateY(40);
    // camera.rotateZ(40);

    // mouse = new THREE.Vector2();
    var light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(1, 1, 1).normalize();
    scene.add(light2);
    var geometry = new THREE.BoxGeometry(20, 20, 20);
    raycaster = new THREE.Raycaster();

    var light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(0, 500, -2000);
    light.castShadow = true;

    light.shadowCameraNear = 200;
    light.shadowCameraFar = camera.far;
    light.shadowCameraFov = 50;

    light.shadowBias = -0.00022;

    light.shadowMapWidth = 2048;
    light.shadowMapHeight = 2048;

    scene.add(light);


    for (var j = 0; j < instruments.length; j++) {
        var radius = 1700;
        var rotateX = Math.cos(Rune.radians(j * spacing)) * radius
        var rotateY = Math.sin(Rune.radians(j * spacing)) * radius

        allcubesinOneFFT[j] = [];

        for (var i = 0; i < 32; i++) {
            var huerand = Math.floor((Math.random() * 4) + 0);
         
            var color2 = new THREE.Color("hsl(" + hues[huerand] + ", 90%," + (lightness * i) % 100 + "%)");
            // var color = new THREE.Color(((.030 * i) % 1).toFixed(2), ((.032 * i) % 1).toFixed(2), ((20) % 1).toFixed(2));


            var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
                color: color2
            }));

            var spacing = 360 / (instruments.length - 1)


           object.position.x = -2500 + (130 * i);
            object.position.y = 1000 - (500 * j);
            object.position.z = -3000 + (-200 * j);

            object.rotation.x = 0;
            object.rotation.y = 0;
            object.rotation.z = 0;

          

            object.scale.x = cubeWidth;
            object.scale.y = cubeHeight;
            object.scale.z = cubeDepth;

            scene.add(object);
            allobjects.push(object)

            allcubesinOneFFT[j].push(object);




        }
        allRows.push(allcubesinOneFFT[j]);

    }

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xab33a0, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.sortObjects = false;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    controls = new THREE.TrackballControls(camera);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    videoo = document.createElement('video');
    videoo.setAttribute("webkit-playsinline", "");
    videoo.autoplay = true;
    videoo.loop = true;
    videoo.preload = "auto";
    videoo.src = "video/PizzaAbs.mp4";
    videoImage = document.createElement('canvas');
    videoImage.width = 480;
    videoImage.height = 480;
    videoImageContext = videoImage.getContext('2d');
    videoImageContext.fillStyle = '#ffffff';
    videoImageContext.fillRect(0, 0, videoImage.width, videoImage.height);
    videoTexture = new THREE.Texture(videoImage);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    videoTexture.generateMipmaps = false;
    videoTexture.wrapS = videoTexture.wrapT = THREE.ClampToEdgeWrapping;
    videoTexture.needsUpdate = true;
    geo = new THREE.PlaneGeometry(16, 9);
    mat = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide });
    // for (var i = 0; i < 100; i += 20) {
    //     for (var j = 0; j < 100; j += 20) {
    //         var mesh = new THREE.Mesh(geo, mat);
    //         mesh.position.set(i, j, j)
    //         scene.add(mesh);
    //     }
    // }



    renderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false);
    renderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false);
    renderer.domElement.addEventListener('mouseup', onDocumentMouseUp, false);


    // stats = new Stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.top = '100px';
    // container.appendChild(stats.domElement);

    //resize
    window.addEventListener('resize', onWindowResize, false);


} //INIT ENDS

var onTouchStart = function(event) {
    if (!videoIsLoaded) {
        videoo.load();
        videoIsLoaded = true;
    }
    videoo.play();
    // console.log("play video!");
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {

    // event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;


    // raycaster.setFromCamera(mouse, camera);

    // if (SELECTED) {
    //     if (SELECTED == allRows[0][0]) {
    //         console.log("DRAGGING ONE")
    //     } else if (SELECTED == allRows[1][0]) {
    //         console.log("DRAGGING ZERO")
    //     } else if (SELECTED == allRows[2][0]) {
    //         console.log("DRAGGING TWO")
    //     }

    //     return;

    // }

    // var intersects = raycaster.intersectObjects(allcubesinOneFFT[0]);

    // if (intersects.length > 0) {

    //     if (INTERSECTED != intersects[0].object) {

    //         if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);

    //         INTERSECTED = intersects[0].object;
    //         INTERSECTED.currentHex = INTERSECTED.material.color.getHex();


    //     }

    //     container.style.cursor = 'pointer';

    // } else {

    //     if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);

    //     INTERSECTED = null;

    //     container.style.cursor = 'auto';

    // }

}

function onDocumentMouseDown(event) {

    event.preventDefault();

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(allobjects);

    if (intersects.length > 0) {


        controls.enabled = false;

        SELECTED = intersects[0].object;

        if (SELECTED == allobjects[0]) {


            // console.log("TOGGLE ZERO bc I clicked it")
        } else if (SELECTED == allobjects[32]) {
            if (row1on == false) {
                row1on = true;
                ToggleRow1();
            } else {
                row1on = false;
                ToggleRow1();

            }



            // console.log("TOGGLE ONE bc I clicked it")
        } else if (SELECTED == allobjects[64]) {
            // console.log("TOGGLE TWO bc I clicked it")
        }

        container.style.cursor = 'move';

    }

}

function onDocumentMouseUp(event) {
    event.preventDefault();
    controls.enabled = true;
    if (INTERSECTED) {
        SELECTED = null;
    }
    container.style.cursor = 'auto';

}



function render() {
    renderer.render(scene, camera);
    controls.update();

      if (videoo.readyState === videoo.HAVE_ENOUGH_DATA) {
        videoImageContext.drawImage(videoo, 0, 0);
        if (videoTexture)
            videoTexture.needsUpdate = true;
    }

}

function update(allFFTspectrums) {
    var thisRowsTotalFFT = 0;
    var thisFFTTotal = [];

    camera.position.z = camera.position.z + .5

    for (var j = 0; j < instruments.length; j++) {



        for (var i = 0, len = 32; i < len; i++) {
            // allRows[j][i].rotation.z = allRows[j][i].rotation.z + .002
            allRows[j][i].scale.z = cubeHeight + 20 * (allFFTspectrums[j][i] / 255);
            
            thisRowsTotalFFT = thisRowsTotalFFT + (allFFTspectrums[j][i] / 255)


        }


        if (j < 9) {
            // console.log(thisRowsTotalFFT / 32+" from row "+ j)
            if ((thisRowsTotalFFT / 32) > 0.2) {
                PlayStem('video' + j)
                // console.log('play videos' + j)
            } else {
                PauseStem('video' + j)
            }
        }



    }
}




function loop() { //this is where we put all animation


    requestAnimationFrame(loop);

    for (i in instruments) {
        fftValues = allFFTs[i].analyse();
        fftSpectrums.push(fftValues)
    }

    controls.update();
    // stats.update();
    update(fftSpectrums);
    render();

}

// function ToggleRow1() {
//     if (row1on == true) {

//         instruments[1].volume.exponentialRampToValue(-100, 2);
//         for (var i = 0; i < allFFTs[0].length; i++) {}

//     } else {
//         instruments[1].volume.exponentialRampToValue(0, 2);
//     }
// }



function bpmFaster() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value + 10
}

function bpmSlower() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value - 10
}

function toggleGlobalEffects(index) {
    switches[index].gate.value = 1 - switches[index].gate.value
    // console.log(switches[index] + "is toggled")

}


// });
