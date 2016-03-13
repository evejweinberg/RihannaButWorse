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
        PlayStem("video"+clickedButtonNumber);
   

    } //if volume was off, turn it on
    else {
        instruments[clickedButtonNumber].volume.exponentialRampToValue(0, 2);
        PauseStem("video"+clickedButtonNumber);
     
    }
}


function PlayStem(videoID){
    //show videoID and play it and put it at this position.
    
    $("#"+videoID).show();
    $("#"+videoID).get(0).play();


}

function PauseStem(videoID){
    // console.log('paused'+ videoID)
    // $("#"+videoID).hide();
    $("#"+videoID).get(0).pause();


}



