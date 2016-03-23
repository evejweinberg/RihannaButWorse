synth0 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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


var stem0 = new Tone.Part(function(time, note){
      synth0.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "14 - GM": [
    {
      "time": "5952i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8188976377952756,
      "duration": "760i"
    },
    {
      "time": "6720i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8582677165354331,
      "duration": "765i"
    },
    {
      "time": "13632i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8188976377952756,
      "duration": "576i"
    },
    {
      "time": "14976i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8188976377952756,
      "duration": "960i"
    },
    {
      "time": "17472i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8188976377952756,
      "duration": "760i"
    },
    {
      "time": "18240i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8582677165354331,
      "duration": "765i"
    }
//   ]
// }
    


          ]).start(0);