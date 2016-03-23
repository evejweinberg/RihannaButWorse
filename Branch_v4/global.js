var r = 1;
var g = 1;
var b = 1;
var hue=20;
var lightness = 42;
var hues = [290,310,340,320]



for (var i = 0; i < 11; i++) {
        makeButtons("stem" + i, i);
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
        PlayStem("video"+clickedButtonNumber);
        $("#stem"+clickedButtonNumber).css({"background-color":"blue"});
        // console.log("#stem "+clickedButtonNumber)
        // console.log(clickedButtonNumber + " is now off")
        instruments[clickedButtonNumber].volume.exponentialRampToValue(-100, 2);
        
   

    } //if volume was off, turn it on
    else {
        $("#stem"+clickedButtonNumber).css({"background-color":"white"});
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
    $("#"+videoID).hide();
    $("#"+videoID).get(0).pause();


}



