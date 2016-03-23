synth20 = new Tone.PolySynth(3, Tone.SimpleSynth, {
                "oscillator": {
                    "type": "sine",
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

          

//midi was blank
            
var stem20 = new Tone.Part(function(time, note){
      synth20.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    {
      "time": "576i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    }






          ]).start(0);

