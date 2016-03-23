//analyse the frequency/amplitude of the incoming signal    
var cubeHeight = 1;
var cubeWidth = 5;
var instruments = [];
var allcubesinOneFFT = [];
var allFFTs = [];
var allRows = [];
var fftSpectrums = [];
var instruments = [synth0, synth1, synth2, synth3, synth4, synth5, synth6, synth7, synth8, synth9, synth10, synth11, synth12, synth13, synth14, synth15];
var effects = [];
var switches = []; //Tone switches boolian 0/1
effects[0] = new Tone.Freeverb();
effects[1] = new Tone.BitCrusher(1);


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
var container = document.createElement('div');
document.body.appendChild(container);
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
var scene = new THREE.Scene();
var controls;
var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);
var geometry = new THREE.BoxGeometry(20, 20, 20);

for (var j = 0; j < instruments.length; j++) {

    allcubesinOneFFT[j] = [];

    for (var i = 0; i < 32; i++) {
        var color = new THREE.Color(((r * .32 * i) % 1).toFixed(2), ((g * .032 * j) % 1).toFixed(2), ((b * .032 * j) % 1).toFixed(2));


        var borderRight = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: color
        }));
        var borderLeft = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: color  
        }));

//right border
        borderRight.position.x = (window.innerWidth-100) + (cubeWidth * 20 * i);
        borderRight.position.y = 900 - (120 * j);
        borderRight.position.z = -1500;

        borderRight.rotation.x = 100;
        borderRight.rotation.y = 0;
        borderRight.rotation.z = 0;

        borderRight.scale.x = cubeWidth;
        borderRight.scale.y = cubeHeight;
        borderRight.scale.z = 5;

//left border
        borderLeft.position.x = (window.innerWidth-1100) + (cubeWidth * 2 * i);
        borderLeft.position.y = 900 - (120 * j);
        borderLeft.position.z = -1500;

        borderLeft.rotation.x = 0;
        borderLeft.rotation.y = 0;
        borderLeft.rotation.z = 500;

        borderLeft.scale.x = cubeWidth;
        borderLeft.scale.y = cubeHeight;
        borderLeft.scale.z = 5;

        scene.add(borderRight);
        scene.add(borderLeft);

        allcubesinOneFFT[j].push(borderRight);
        allcubesinOneFFT[j].push(borderLeft);
        // console.log(allcubesinOneFFT[j].length)



    }
    allRows.push(allcubesinOneFFT[j]);
    // console.log('allrows' + allRows.length)
}

renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xf0f0f0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.sortObjects = false;
container.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;

stats = new Stats();
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.top = '100px';
// container.appendChild(stats.domElement);

//resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}



function render() {

    renderer.render(scene, camera);
}

function update(allFFTspectrums) {
    // for (var j = 0; j < allcubesinOneFFT.length; j++) {
    for (var j = 0; j < 15; j++) {
        for (var i = 0, len = 32; i < len; i++) {
            allRows[j][i].scale.y = cubeHeight + 5 * allFFTspectrums[j][i] / 255;

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
    stats.update();
    update(fftSpectrums);
    render();

}

loop();

function bpmFaster() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value + 10
    // console.log("changed bpm to: " + Tone.Transport.bpm.value)
}

function bpmSlower() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value - 10
}

function toggleGlobalEffects(index) {
    switches[index].gate.value = 1 - switches[index].gate.value
    console.log(switches[index].gate.value)
}
