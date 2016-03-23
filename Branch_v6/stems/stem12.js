synth12 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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


var stem12 = new Tone.Part(function(time, note){
      synth12.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "12 - Square Bells": [
    {
      "time": "6720i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.9448818897637795,
      "duration": "767i"
    },
    {
      "time": "7488i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7524i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7524i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7560i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7596i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7596i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7632i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7632i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "7656i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7656i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "7680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7680i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7716i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7716i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7752i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7752i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7788i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7788i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7824i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7824i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "7848i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7848i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "7872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7872i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7908i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7908i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7944i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7980i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7980i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8016i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8016i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8040i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8040i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8064i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8100i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8100i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8136i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8136i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8172i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8172i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8208i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8208i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8232i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8232i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8256i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8292i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8292i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8328i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8364i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8364i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8400i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8400i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8424i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8424i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8448i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8484i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8484i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8520i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8520i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8556i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8556i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8592i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8592i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8616i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8616i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8640i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8676i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8676i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8712i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8748i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8748i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8784i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8784i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8808i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8808i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8832i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8868i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8868i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8904i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8904i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8940i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8940i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8976i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8976i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "9000i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "9000i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13632i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "13668i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "13704i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "8i"
    },
    {
      "time": "13740i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7007874015748031,
      "duration": "9i"
    },
    {
      "time": "13776i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "9i"
    },
    {
      "time": "13800i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.5669291338582677,
      "duration": "8i"
    },
    {
      "time": "13824i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "13860i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6929133858267716,
      "duration": "9i"
    },
    {
      "time": "13896i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "13932i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6614173228346457,
      "duration": "8i"
    },
    {
      "time": "13968i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "13992i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6220472440944882,
      "duration": "8i"
    },
    {
      "time": "14016i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7637795275590551,
      "duration": "9i"
    },
    {
      "time": "14052i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7244094488188977,
      "duration": "8i"
    },
    {
      "time": "14088i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14124i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14160i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "14184i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6614173228346457,
      "duration": "9i"
    },
    {
      "time": "14208i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7401574803149606,
      "duration": "8i"
    },
    {
      "time": "14244i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "9i"
    },
    {
      "time": "14280i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "8i"
    },
    {
      "time": "14316i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "14352i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "14376i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "14400i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "14436i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "14472i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "8i"
    },
    {
      "time": "14508i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7007874015748031,
      "duration": "9i"
    },
    {
      "time": "14544i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "9i"
    },
    {
      "time": "14568i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.5669291338582677,
      "duration": "8i"
    },
    {
      "time": "14592i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "14628i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6929133858267716,
      "duration": "9i"
    },
    {
      "time": "14664i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "14700i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6614173228346457,
      "duration": "8i"
    },
    {
      "time": "14736i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14760i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6220472440944882,
      "duration": "8i"
    },
    {
      "time": "14784i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7637795275590551,
      "duration": "9i"
    },
    {
      "time": "14820i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7244094488188977,
      "duration": "8i"
    },
    {
      "time": "14856i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14892i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14928i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "14952i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6614173228346457,
      "duration": "9i"
    },
    {
      "time": "14976i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7401574803149606,
      "duration": "9i"
    },
    {
      "time": "15012i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "9i"
    },
    {
      "time": "15048i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "8i"
    },
    {
      "time": "15084i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "15120i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "15144i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "15168i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "15204i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "15240i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "8i"
    },
    {
      "time": "15276i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7007874015748031,
      "duration": "9i"
    },
    {
      "time": "15312i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "9i"
    },
    {
      "time": "15336i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.5669291338582677,
      "duration": "8i"
    },
    {
      "time": "15360i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "15396i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6929133858267716,
      "duration": "9i"
    },
    {
      "time": "15432i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "15468i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6614173228346457,
      "duration": "8i"
    },
    {
      "time": "15504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "15528i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6220472440944882,
      "duration": "8i"
    },
    {
      "time": "15552i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7637795275590551,
      "duration": "9i"
    },
    {
      "time": "15588i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7244094488188977,
      "duration": "8i"
    },
    {
      "time": "15624i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "15660i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "15696i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "15720i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6614173228346457,
      "duration": "9i"
    },
    {
      "time": "15744i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.7401574803149606,
      "duration": "9i"
    },
    {
      "time": "15780i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.7559055118110236,
      "duration": "9i"
    },
    {
      "time": "15816i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.7559055118110236,
      "duration": "8i"
    },
    {
      "time": "15852i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "15888i",
      "midiNote": 78,
      "noteName": "F#5",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "15912i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "18240i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.9448818897637795,
      "duration": "767i"
    },
    {
      "time": "19008i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19044i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19044i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19080i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19080i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19116i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19116i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19152i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19152i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19176i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19200i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19236i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19236i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19272i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19272i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19308i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19308i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19344i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19344i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "19368i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19368i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19392i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19428i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19428i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19464i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19464i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19500i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19500i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19536i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19536i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19560i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19584i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19620i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19620i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19656i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19656i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19692i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19692i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19728i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19728i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19752i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19752i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19776i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19776i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19812i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19812i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19848i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19848i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19884i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19884i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19920i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19920i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19944i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19968i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20004i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20004i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20040i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20040i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20076i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20076i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20112i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20112i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20136i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20136i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20160i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20160i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20196i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20196i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20232i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20232i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20268i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20268i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20304i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20304i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20328i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20352i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20388i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20388i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20424i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20424i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20460i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20460i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20496i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20496i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20520i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20520i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    }
//   ]
// }
    


          ]).start(0);