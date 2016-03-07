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

//THIS IS OUR API, WHERE WE CREATE ALL FUNCTIONS TO MANIPULATE THE WHOLE SONG



// window.onload = function() {



//array for holding the effects
var effects = [];
var toggles = [];
var switches = []; //Tone switches boolesn 0/1 

//create the effects individually
effects[0] = new Tone.Freeverb();
effects[1] = new Tone.BitCrusher(1);

//store the size of the effects array    
var numberEffects = effects.length;

//connect the synth to the effects
for (var i = 0; i < numberEffects; i++) {
    synth2.connect(effects[i]);
    console.log('connected effect #' + i + ' to synth2')
    synth3.connect(effects[i]);
    console.log('connected effect #' + i + ' to synth3')
}


//create as many switches as effects plus one
//additional for the dry signal
for (var i = 0; i <= numberEffects; i++) {

    toggles[i] = 0;

    //create the switches
    switches[i] = new Tone.Switch(false);

    //connect the switches to master
    switches[i].toMaster();

    if (i < numberEffects) {
        //connect effects to switches
        effects[i].connect(switches[i]);
    } else {
        //connect the last switch to the original synth
        //and open it's gate
        synth2.connect(switches[numberEffects]);
        switches[i].gate.value = 1;
        toggles[i] = 1;
    }

    console.log('toggle'+ i+" is starting at "+ switches[i].gate.value)

}

//if this is here then song starts right away with Dry on, the rest are off
Tone.Transport.start();
synth2.volume.exponentialRampToValue(0, 2);
Tone.Transport.bpm.value = 124;




///////////////////FUNCTIONS/////////////////////////////////////


function bmpFaster() {
    Tone.Transport.bpm.value += 10;
    console.log("changed bpm to: " + Tone.Transport.bpm.value)
}

function bmpSlower() {
    Tone.Transport.bpm.value -= 10;
    console.log("changed bpm to: " + Tone.Transport.bpm.value)
}

function startSong() {
    Tone.Transport.start();
    synth2.volume.exponentialRampToValue(0, 2);
    console.log('Transport was started')
}


function toggleSound(index) {

    //switch from 0 to 1, vice cersa
    toggles[index] = 1 - toggles[index];

    for (var i = 0; i < toggles.length; i++) {
        switches[i].gate.value = toggles[i];
        console.log('toggle' + i + 'is now:' + switches[i].gate.value)
    }

}


// }//everything done
