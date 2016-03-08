//THIS IS OUR API, WHERE WE CREATE ALL FUNCTIONS TO MANIPULATE THE WHOLE SONG



// window.onload = function() {

/////////CREATE EVERYTHING WE NEED/////////////////////


var effects = []; //global effects for whole song at once
var toggles = []; //toggles for those effects
var switches = []; //Tone switches boolian 0/1
var instruments = [synth0, synth1, synth2, synth3, synth4, synth5]; //1 instrument per stem 

//create the effects individually
effects[0] = new Tone.Freeverb();
effects[1] = new Tone.BitCrusher(1);
var fft = new Tone.Analyser(32, "fft");
console.log('fftsize is : ' + fft.size)
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
    switches[i].fan(fft).toMaster();

    if (i < numberEffects) {
        //connect effects to switches
        effects[i].connect(switches[i]);
    } else {
        //connect the last switch to the original synth
        //and open it's gate
        for (j in instruments) {

            // connect all synths to the last value in effects length (change handcoded number 
            // in HTML if we add more effects)
            instruments[j].connect(switches[numberEffects]);
            switches[i].gate.value = 1;
            toggles[i] = 1;
            instruments[j].volume.exponentialRampToValue(-15, 2);
            // console.log(instruments[j] + " is starting " + toggles[i])

        }
    }

    // console.log('toggle' + i + " is starting at " + switches[i].gate.value)

}

function makeButtons(type, i) {
    // console.log('making button ' + type)
        //Create an input type dynamically.   
    var element = document.createElement("button");
    element.id = type;
    element.onclick = function() {
        checkAllVolumes(i)
    };
    element.appendChild(document.createTextNode(String(type)))
    document.getElementById("Content").appendChild(element);

}



//EVERYTHING HAS BEEN CREATED
////////////////////////////////////////
//#######START THE SONG#######//
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




function toggleGlobalEffects(index) {

    //switch from 0 to 1, vice cersa
    toggles[index] = 1 - toggles[index];

    for (var i = 0; i < toggles.length; i++) {
        switches[i].gate.value = toggles[i];
    }

}

/*
@private -- toggle volume for each stem
 */
function checkAllVolumes(clickedButtonNumber) {

    console.log('clicked button is  ' + clickedButtonNumber)
        //if volume was on, turn it off
    if (instruments[clickedButtonNumber].volume.value >= 0) {
        console.log(clickedButtonNumber + " is now off")
        instruments[clickedButtonNumber].volume.exponentialRampToValue(-100, 2);
        if (clickedButtonNumber == 0) {
            Stem0Off();
        } else if (clickedButtonNumber == 1) {
            Stem1Off();
        } else if (clickedButtonNumber == 2) {
            Stem2Off();
        } else if (clickedButtonNumber == 3) {
            Stem3Off();
        } else if (clickedButtonNumber == 4) {
            Stem4Off();
        }


    } //if volume was off, turn it on
    else {
        instruments[clickedButtonNumber].volume.exponentialRampToValue(0, 2);
        console.log(clickedButtonNumber + " is now on")
           if (clickedButtonNumber == 0) {
            Stem0On();
        } else if (clickedButtonNumber == 1) {
            Stem1On();
        } else if (clickedButtonNumber == 2) {
            Stem2On();
        } else if (clickedButtonNumber == 3) {
            Stem3On();
        } else if (clickedButtonNumber == 4) {
            Stem4On();
        }
    }
}

function Stem0On() {
    console.log('draw stem 0')
}

function Stem1On() {
    console.log('draw stem 1')
}

function Stem2On() {
    console.log('draw stem 2')
}

function Stem3On() {
    console.log('draw stem 3')
}

function Stem4On() {
    console.log('draw stem 4')
}

function Stem0Off() {
    console.log('draw stem 0')
}

function Stem1Off() {
    console.log('draw stem 1')
}

function Stem2Off() {
    console.log('draw stem 2')
}

function Stem3Off() {
    console.log('draw stem 3')
}

function Stem4Off() {
    console.log('draw stem 4')
}


// }//everything done
function drawFFT(values){
                
                    FFTval = values[i] / 255;
                    console.log(FFTval)
                    
                }
loop();
function loop(){
                requestAnimationFrame(loop);
                //get the fft data and draw it
                var fftValues = fft.analyse();
                drawFFT(fftValues);
                }

