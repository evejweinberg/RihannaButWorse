//analyse the frequency/amplitude of the incoming signal    
var cubeHeight = 1;
var cubeWidth = 16;
var cubeDepth = 40;
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
var row1on = false;
var thisRowsVolume = [];
var AreRowsOn = [];
var framesPerSecond = 24;

// InstantiateEverything();

// function InstantiateEverything(){
//   $(".stem0").hide();
//   $("#video0").prop('muted', true);
// }


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



var mouse = new THREE.Vector2(),
    offset = new THREE.Vector3(),
    INTERSECTED, SELECTED;
var plane;


init();
loop();
// animate();

function init() {
    container = document.createElement('div');
    container.id = "threeJS";
    container.backgroundColor = "red";
    container.style.zIndex = "-30"
    container.style.position = "absolute"

    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,1, 9000);
  
    scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0x505050));



  // camera.position.z = 1000;
    camera.rotateX(40);
    camera.rotateY(40);
    // camera.rotateZ(40);

    // mouse = new THREE.Vector2();
    var light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(1, 1, 1).normalize();
    scene.add(light2);
    var geometry = new THREE.BoxGeometry(20, 20, 20);
    raycaster = new THREE.Raycaster();

    var light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(0, 500, 2000);
    light.castShadow = true;

    light.shadowCameraNear = 200;
    light.shadowCameraFar = camera.far;
    light.shadowCameraFov = 50;

    light.shadowBias = -0.00022;

    light.shadowMapWidth = 2048;
    light.shadowMapHeight = 2048;

    scene.add(light);


    for (var j = 0; j < instruments.length; j++) {
        var rotateX = Math.cos(Rune.radians(j*spacing))*radius
            var rotateY = Math.sin(Rune.radians(j*spacing))*radius

        allcubesinOneFFT[j] = [];

        for (var i = 0; i < 32; i++) {
            var color = new THREE.Color(((r * .032 * i) % 1).toFixed(2), ((g * .032 * i) % 1).toFixed(2), ((b * .032 * j) % 1).toFixed(2));


            var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
                color: color
            }));
            var radius = 700;
            var spacing = 360/ (instruments.length-1)
            

            object.position.x = -100 + rotateX;
            object.position.y = rotateY;
            object.position.z = 80-(i*cubeDepth*20)

            // object.position.z = 500 - (cubeWidth * 20 * i);

            object.rotation.x = 0;
            object.rotation.y = 0;
            object.rotation.z = (j*5);

            object.scale.x = cubeWidth;
            object.scale.y = cubeHeight;
            object.scale.z = cubeDepth;

            scene.add(object);
            allobjects.push(object)

            allcubesinOneFFT[j].push(object);
            // console.log(allcubesinOneFFT[j].length)
            // allcubesinOneFFT[j].rotate.x=30



        }
        allRows.push(allcubesinOneFFT[j]);
        // console.log('allrows' + allRows.length)
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


            console.log("TOGGLE ZERO bc I clicked it")
        } else if (SELECTED == allobjects[32]) {
            if (row1on == false) {
                row1on = true;
                ToggleRow1();
            } else {
                row1on = false;
                ToggleRow1();

            }



            console.log("TOGGLE ONE bc I clicked it")
        } else if (SELECTED == allobjects[64]) {
            console.log("TOGGLE TWO bc I clicked it")
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
}

function update(allFFTspectrums) {
    var thisRowsTotalFFT = 0;
    var thisFFTTotal = [];
camera.position.z = camera.position.z+.5

    for (var j = 0; j < instruments.length; j++) {
        for (var i = 0, len = 32; i < len; i++) {
            allRows[j][i].scale.y = cubeHeight + 20 * (allFFTspectrums[j][i] / 255);
            //add the row0 , cube0, row0, cube1
            //make an FFTarray for the row. 
            thisRowsTotalFFT = thisRowsTotalFFT + allFFTspectrums[j][i]
                // thisFFTTotal.push(thisRowsTotalFFT)
                //add this number an array and add them all up
                // if (allFFTspectrums[j][0])

        }


        //switch case goes here
        //
        // thisRowsVolume[4] = thisRowsTotalFFT / 32;
        // // console.log("this rows' volume is " + thisRowsVolume[1]);
        // if (thisRowsVolume[4] <= 40) {
        //     // console.log('row4 vol < 40 ')
        // //     // console.log(thisRowsVolume[j])
        //     AreRowsOn[4] = false;
        // } else {
        //     // console.log('row4 vol is ON')
        //     AreRowsOn[4] = true;
        // //     // console.log(AreRowsOn[j])
        // }
        // checkAllVolumes(j)

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

function ToggleRow1() {
    // console.log(row1on)
    if (row1on == true) {
        // console.log(allcubesinOneFFT[0][0])
        instruments[1].volume.exponentialRampToValue(-100, 2);

        // allcubesinOneFFT[0][0].material.color.('rgb')
        //turn row 1 off
        for (var i = 0; i < allFFTs[0].length; i++) {
            // console.log(allcubesinOneFFT[0][i])

            // allcubesinOneFFT[0][i].material.color.setHex(#ffffff)
        }

    } else {
        //turn row 1 on
        // allcubesinOneFFT[0][i].material.color.setHex(#ef53e4)
        instruments[1].volume.exponentialRampToValue(0, 2);
    }
}



function bpmFaster() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value + 10
        // console.log("changed bpm to: " + Tone.Transport.bpm.value)
}

function bpmSlower() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value - 10
}

function toggleGlobalEffects(index) {
    switches[index].gate.value = 1 - switches[index].gate.value
        // console.log(switches[index].gate.value)
}



/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////MAKE THIS ART IN EACH STEM /////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///

if (AreRowsOn[0] == true) {
    Stem0On();
} else {
    Stem0Off();
}

if (AreRowsOn[1] == true) {
    console.log('one is on')
    Stem1On();
} else {
    Stem1Off();
}

if (AreRowsOn[4] == true) {
    console.log('one is on')
    Stem4On();
} else {
    Stem4Off();
}



