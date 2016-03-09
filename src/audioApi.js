//THIS IS OUR API, WHERE WE CREATE ALL FUNCTIONS TO MANIPULATE THE WHOLE SONG
//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////
/////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////


// window.onload = function() {

//◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆FIRST ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
//◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆CREATE EVERYTHING WE NEED◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
//◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆


var effects = []; //global effects for whole song at once
var switches = []; //Tone switches boolian 0/1
var instruments = [synth0, synth1, synth2, synth3, synth4, synth5, synth6, synth7, synth8, synth9, synth10]; //1 instrument per stem 


//create the effects individually
effects[0] = new Tone.Freeverb();
effects[1] = new Tone.BitCrusher(1);


//every stem gets an fft with 32 steps
var fftArray = [];

var fftTest = new Tone.Analyser(64, "fft");

//one fft per instrument 
//must be a power of 2  
//splits freq spectrum from low to high, euqually, amongst 32 bins, low pass to high pass
for (var i = 0; i < instruments.length; i++) {
    var fft = new Tone.Analyser(64, "fft");
    console.log('raw fft' + fft)
    fftArray.push(fft);

    // console.log('fftArray length is '+ fftArray.length) //11
}



// var numberEffects = effects.length;
//connect the synths to the global effects
for (var i = 0; i < effects.length; i++) {
    for (j in instruments) {
        instruments[j].connect(effects[i]);
    }
}


//create as many switches as effects plus one
//additional for the dry signal
for (var i = 0; i <= effects.length; i++) {
    // toggles[i] = 0; //3 toggles for now
    switches[i] = new Tone.Switch(false); //3 switches all set to false
    switches[i].fan(fftTest).toMaster(); //3 switches to 3 ffts, but i need 10?

    if (i < effects.length) {
        //connect effects to switches
        effects[i].connect(switches[i]);
    } else {
        //connect the last switch to the original synth
        //and open it's gate
        for (j in instruments) {

            // connect all synths to the last value in effects length (change handcoded number 
            // in HTML if we add more effects)
            instruments[j].fan(switches[effects.length], fftArray[1]);
            switches[i].gate.value = 0;
            instruments[j].volume.exponentialRampToValue(0, 2);
            // console.log(instruments[j] + " is starting " + toggles[i])

        }
    }
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

function makeSlowStemButtons(type, i) {
    // console.log('making button ' + type)
    //Create an input type dynamically.   
    var element = document.createElement("button");
    element.id = type;
    element.onclick = function() {
        HalfTimeStem(i)
    };
    element.appendChild(document.createTextNode(String(type)))
    document.getElementById("Content").appendChild(element);

}

function makeFastStemButtons(type, i) {
    // console.log('making button ' + type)
    //Create an input type dynamically.   
    var element = document.createElement("button");
    element.id = type;
    element.onclick = function() {
        DoubleTimeStem(i)
    };
    element.appendChild(document.createTextNode(String(type)))
    document.getElementById("Content").appendChild(element);

}


//◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ DONE ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
//◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆CREATING EVERYTHING ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
//◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆



//#######START THE SONG#######//
//if this is here then song starts right away with Dry on, the rest are off
Tone.Transport.start();
Tone.Transport.loop = true;
Tone.Transport.bpm.value = 124;

//#######//#######//#######//#######






//◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ 
// ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ //CREATE ALL// ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ //
// ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ //FUNCTIONS// ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ //
//◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼


/*
@private -- change the global master BMP
 */
function bpmFaster() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value + 10
    console.log("changed bpm to: " + Tone.Transport.bpm.value)
}

function bpmSlower() {
    Tone.Transport.bpm.value = Tone.Transport.bpm.value - 10
}

/*
@private -- global effects for all stems
 */
function toggleGlobalEffects(index) {
switches[index].gate.value = 1-switches[index].gate.value
}


/*
@private -- double time or half time each stem
 */
function HalfTimeStem(clickedButtonNumber) {
    if (clickedButtonNumber == 0) {
        stem0.playbackRate *= .75;
        console.log('stem0 playback is:  ' + stem0.playbackRate)
            //default is 1
    } else if (clickedButtonNumber == 1) {

        stem1.playbackRate *= .75;
        console.log('stem1 playback is:  ' + stem1.playbackRate)
    }
    console.log('slowed stem is button is  ' + clickedButtonNumber)

}

function DoubleTimeStem(clickedButtonNumber) {
    // console.log('fast stem is button is  ' + clickedButtonNumber)
    for (var i = 0; i < instruments.length; i++) {
        if (clickedButtonNumber == i) {
            stem[i].playbackRate *= 1.25;
            console.log('faster speed stem  ' + clickedButtonNumber)
        }
    }
    // if (clickedButtonNumber == 0) {
    //     stem0.playbackRate  *= 1.25;
    //     //default is 1
    // } else if (clickedButtonNumber == 1) {
    //     stem1.playbackRate *= 1.25;
    //     //default is 1
    // }

}





/*
@private -- toggle volume for each stem
 */
function checkAllVolumes(clickedButtonNumber) {

    //if volume was on, turn it off
    if (instruments[clickedButtonNumber].volume.value >= 0) {
        // console.log(clickedButtonNumber + " is now off")
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
        } else if (clickedButtonNumber == 5) {
            Stem5Off();
        }

    } //if volume was off, turn it on
    else {
        instruments[clickedButtonNumber].volume.exponentialRampToValue(0, 2);
        // console.log(clickedButtonNumber + " is now on")
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
        } else if (clickedButtonNumber == 5) {
            Stem5On();
        }
    }
}

function Stem0On() {
    console.log('draw stem 0')
        //draw threeJs stuff here
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

function Stem5On() {
    console.log('draw stem 4')
}

function Stem5On() {
    console.log('draw stem 5')
}



function Stem0Off() {
    console.log('off stem 0')
}

function Stem1Off() {
    console.log('off stem 1')
}

function Stem2Off() {
    console.log('off stem 2')
}

function Stem3Off() {
    console.log('off stem 3')
}

function Stem4Off() {
    console.log('off stem 4')
}

function Stem5Off() {
    console.log('off stem 5')
}

function Stem6Off() {
    console.log('off stem 6')
}
////FFT stuff
loop();


//this is from an example project found in our 'ref' folder
// var fftContext = $("<canvas>",{
//                 "id" : "fft"
//             }).appendTo("#Content").get(0).getContext("2d");

//             function drawFFT(values){
//                 fftContext.clearRect(0, 0, canvasWidth, canvasHeight);
//                 //divide canvas by 32, each bar is 1/32nd wide
//                 var barWidth = canvasWidth / fft.size;
//                 for (var i = 0, len = values.length; i < len; i++){
//                     var val = values[i] / 255;
//                     var x = canvasWidth * (i / len);
//                     var y = val * canvasHeight;
//                     fftContext.fillStyle = "rgba(0, 0, 0, " + val + ")";
//                     fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
//                 }
//             }
// var canvasWidth = 400
// var canvasHeight = 400;
// fftContext.canvas.width = canvasWidth;
// fftContext.canvas.height = canvasHeight;

// var fftContext = $("<canvas>", {
//     "id": "fftTest"
// }).appendTo("#Content").get(0).getContext("2d");

function drawFFT(values, i) {
    // fftContext.clearRect(0, 0, 400,400);
    // var barWidth = canvasWidth / fftTest.size;

    // for (var m = 0, len = values.length; m < len; m++) {
    //     var val = values[m] / 255;
    //     var x = canvasWidth * (i / len);
    //     var y = val * canvasHeight;
    //     fftContext.fillStyle = "rgba(0, 0, 0, " + val + ")";
    //     fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);

    // }

}

function loop() {
    // requestAnimationFrame(loop);
    // //get the fft data and draw it
    // var fftValues = fftTest.analyse();
    // drawFFT(fftValues);
    // //get the waveform valeus and draw it
    // var waveformValues = waveform.analyse();
    // drawWaveform(waveformValues);
    // // console.log('stem1 state: ' +stem1.state)

    // //is this a recursive function?

    // //get the fft data and draw it
    // ////keep var i local
    // for (var i = 0; i < instruments.length; i++) {
    //     // console.log(i)
    //     var fftValues = fftArray[i].analyse();
    //     //within this is a 4 loop 
    //     drawFFT(fftValues, i);
    // }
    // requestAnimationFrame(loop);
}


// }//END WINDOW LOAD STATEMENT
