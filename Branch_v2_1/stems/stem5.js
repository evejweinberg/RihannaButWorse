synth5 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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

          


            
var stem5 = new Tone.Part(function(time, note){
      synth5.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "06 - GM": [
    {
      "time": "13740i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8110236220472441,
      "duration": "19i"
    },
    {
      "time": "13740i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8188976377952756,
      "duration": "17i"
    },
    {
      "time": "13932i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8503937007874016,
      "duration": "16i"
    },
    {
      "time": "13932i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8188976377952756,
      "duration": "17i"
    },
    {
      "time": "14124i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8346456692913385,
      "duration": "16i"
    },
    {
      "time": "14124i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8582677165354331,
      "duration": "16i"
    },
    {
      "time": "14316i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8110236220472441,
      "duration": "15i"
    },
    {
      "time": "14316i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "14508i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8503937007874016,
      "duration": "17i"
    },
    {
      "time": "14508i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8110236220472441,
      "duration": "19i"
    },
    {
      "time": "14700i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8188976377952756,
      "duration": "16i"
    },
    {
      "time": "14700i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "17i"
    },
    {
      "time": "14892i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.84251968503937,
      "duration": "16i"
    },
    {
      "time": "14892i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8188976377952756,
      "duration": "16i"
    },
    {
      "time": "15084i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "15i"
    },
    {
      "time": "15084i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.84251968503937,
      "duration": "14i"
    },
    {
      "time": "15276i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8110236220472441,
      "duration": "17i"
    },
    {
      "time": "15276i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8346456692913385,
      "duration": "19i"
    },
    {
      "time": "15468i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.84251968503937,
      "duration": "17i"
    },
    {
      "time": "15468i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.7952755905511811,
      "duration": "16i"
    },
    {
      "time": "15660i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8188976377952756,
      "duration": "16i"
    },
    {
      "time": "15660i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8582677165354331,
      "duration": "16i"
    },
    {
      "time": "15852i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8582677165354331,
      "duration": "14i"
    },
    {
      "time": "15852i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7952755905511811,
      "duration": "15i"
    }
//   ]
// }






          ]).start(0);