synth6 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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


var stem6 = new Tone.Part(function(time, note){
      synth6.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "15 - GM": [
    {
      "time": "5952i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8582677165354331,
      "duration": "760i"
    },
    {
      "time": "6720i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8661417322834646,
      "duration": "765i"
    },
    {
      "time": "11712i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8582677165354331,
      "duration": "384i"
    },
    {
      "time": "14976i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8346456692913385,
      "duration": "960i"
    },
    {
      "time": "17472i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8110236220472441,
      "duration": "760i"
    },
    {
      "time": "18240i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8503937007874016,
      "duration": "765i"
    }
//   ]
// }
    


          ]).start(0);