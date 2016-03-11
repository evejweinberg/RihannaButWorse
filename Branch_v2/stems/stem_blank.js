synth10 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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

          


            
var stem10 = new Tone.Part(function(time, note){
      synth10.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [






          ]).start(0);