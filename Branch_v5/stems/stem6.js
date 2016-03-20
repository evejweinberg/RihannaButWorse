synth26 = new Tone.PolySynth(3, Tone.SimpleSynth, {
                "oscillator": {
                    "type": "square",
                    "count": 3,
                    "spread": 30
                },
                "envelope": {
                    "attack": 0.01,
                    "decay": 0.1,
                    "sustain": 0.5,
                    "release": 0.4,
                    "attackCurve": "exponential"
                },
            })

          


            
var stem26 = new Tone.Part(function(time, note){
      synth26.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "07 - GM": [
    {
      "time": "12048i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.9448818897637795,
      "duration": "95i"
    }
//   ]
// }






          ]).start(0);