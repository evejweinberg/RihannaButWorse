// var instruments = [];
var r = 1;
var g = 1;
var b = 1;
// var instruments = [synth0, synth1, synth2, synth3, synth4, synth5, synth6, synth7, synth8, synth9, synth10, synth11, synth12, synth13];



for (var i = 0; i < 11; i++) {
        makeButtons("stem " + i, i);
        // makeSlowStemButtons("Slow " + i, i);
        // makeFastStemButtons("Fast " + i, i);

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

    // $(".stem0").show();
    // $("#video0").get(0).play();
    // $("#video0").prop('muted', true);
    console.log('draw stem 0')
        // r.draw();
        //draw threeJs stuff here
}

function Stem1On() {

     $(".stem1").show();
    
    $("#video1").get(0).play();
    $("#video1").prop('muted', true);

    console.log('draw stem 1')
}

function Stem2On() {
    console.log('draw stem 2')
}

function Stem3On() {

    console.log('draw stem 3')
}

function Stem4On() {
	$(".stem4").show();
    $("#video4").get(0).play();
     $("#video4").prop('muted', true);
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
    // $("#video0").get(0).pause();
    // $(".stem0").hide();
    // $("#video0").prop('muted', true);
}

function Stem1Off() {
    $("#video1").get(0).pause();
    $(".stem1").hide();
    
    console.log('off stem 1')
}

function Stem2Off() {
    console.log('off stem 2')
}

function Stem3Off() {
    console.log('off stem 3')
}

function Stem4Off() {
	$("#video4").get(0).pause();
    $(".stem4").hide();
    $("#video4").prop('muted', true);
    console.log('off stem 4')
}

function Stem5Off() {
    console.log('off stem 5')
}

function Stem6Off() {
    console.log('off stem 6')
}
