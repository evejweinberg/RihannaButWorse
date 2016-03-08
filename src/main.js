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
var instruments = [synth0, synth1, synth2, synth3]; //1 instrument per stem 

//create the effects individually
effects[0] = new Tone.Freeverb();
effects[1] = new Tone.BitCrusher(1);

//store the size of the effects array    
var numberEffects = effects.length;

//connect the synth to the effects
for (var i = 0; i < numberEffects; i++) {
    for (j in instruments) {
        // console.log('hi')
        instruments[j].connect(effects[i]);
        // console.log(instruments[j]+ " , "+ effects[i])

    }
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
        for (j in instruments) {

            // console.log('there is a synth to start')
            instruments[j].connect(switches[numberEffects]);
            switches[i].gate.value = 1;
            toggles[i] = 1;
            instruments[j].volume.exponentialRampToValue(0, 2);
            // console.log(instruments[j] + " is starting " + toggles[i])

        }
    }

    // console.log('toggle' + i + " is starting at " + switches[i].gate.value)

}

//if this is here then song starts right away with Dry on, the rest are off
Tone.Transport.start();

Tone.Transport.bpm.value = 124;






///////////////FUNCTIONS////////////////////////////////////////////
////////////////////FUNCTIONS///////////////////////////////////////
////////////////////////FUNCTIONS///////////////////////////////////


/*
@private -- change the global master BMP
 */
function bmpFaster() {
    Tone.Transport.bpm.value += 10;
    // console.log("changed bpm to: " + Tone.Transport.bpm.value)
}

function bmpSlower() {
    Tone.Transport.bpm.value -= 10;
    // console.log("changed bpm to: " + Tone.Transport.bpm.value)
}


/*
@private -- toggle volume for each stem
 */
function startSong() {
    Tone.Transport.start();
    synth2.volume.exponentialRampToValue(0, 2);
}



function toggleSound(index) {

    //switch from 0 to 1, vice cersa
    toggles[index] = 1 - toggles[index];

    for (var i = 0; i < toggles.length; i++) {
        switches[i].gate.value = toggles[i];
    }

}

function checkAllVolumes(clickedButtonNumber) {

    console.log('clicked button is  ' + clickedButtonNumber)
        //this.id == "stem" + clickedButtonNumber &&
    if (instruments[clickedButtonNumber].volume.value >= 0) {
        console.log(instruments[clickedButtonNumber])
        instruments[clickedButtonNumber].volume.exponentialRampToValue(-100, 2);

    } else {
        instruments[clickedButtonNumber].volume.exponentialRampToValue(0, 2);
    }
}


// }//everything done
