synth11 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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


var stem11 = new Tone.Part(function(time, note){
      synth11.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "11 - Soft Saw Lead": [
    {
      "time": "5952i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "20i"
    },
    {
      "time": "5988i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8661417322834646,
      "duration": "25i"
    },
    {
      "time": "6024i",
      "midiNote": 64,
      "noteName": "E4",
      "velocity": 0.889763779527559,
      "duration": "21i"
    },
    {
      "time": "6048i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8346456692913385,
      "duration": "22i"
    },
    {
      "time": "6084i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8267716535433071,
      "duration": "24i"
    },
    {
      "time": "6120i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "17i"
    },
    {
      "time": "6144i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "24i"
    },
    {
      "time": "6180i",
      "midiNote": 67,
      "noteName": "G4",
      "velocity": 0.889763779527559,
      "duration": "26i"
    },
    {
      "time": "6216i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "19i"
    },
    {
      "time": "6240i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.84251968503937,
      "duration": "23i"
    },
    {
      "time": "6276i",
      "midiNote": 69,
      "noteName": "A4",
      "velocity": 0.8740157480314961,
      "duration": "20i"
    },
    {
      "time": "6312i",
      "midiNote": 69,
      "noteName": "A4",
      "velocity": 0.905511811023622,
      "duration": "20i"
    },
    {
      "time": "6336i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "18i"
    },
    {
      "time": "6372i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "23i"
    },
    {
      "time": "6408i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8503937007874016,
      "duration": "17i"
    },
    {
      "time": "6432i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8503937007874016,
      "duration": "23i"
    },
    {
      "time": "6468i",
      "midiNote": 72,
      "noteName": "C5",
      "velocity": 0.8661417322834646,
      "duration": "23i"
    },
    {
      "time": "6504i",
      "midiNote": 72,
      "noteName": "C5",
      "velocity": 0.889763779527559,
      "duration": "20i"
    },
    {
      "time": "6528i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "20i"
    },
    {
      "time": "6564i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.8818897637795275,
      "duration": "22i"
    },
    {
      "time": "6600i",
      "midiNote": 74,
      "noteName": "D5",
      "velocity": 0.84251968503937,
      "duration": "17i"
    },
    {
      "time": "6624i",
      "midiNote": 74,
      "noteName": "D5",
      "velocity": 0.9212598425196851,
      "duration": "23i"
    },
    {
      "time": "6660i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.84251968503937,
      "duration": "21i"
    },
    {
      "time": "6696i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.84251968503937,
      "duration": "20i"
    },
    {
      "time": "6720i",
      "midiNote": 76,
      "noteName": "E5",
      "velocity": 0.8740157480314961,
      "duration": "20i"
    },
    {
      "time": "6756i",
      "midiNote": 76,
      "noteName": "E5",
      "velocity": 0.889763779527559,
      "duration": "23i"
    },
    {
      "time": "6792i",
      "midiNote": 77,
      "noteName": "F5",
      "velocity": 0.8740157480314961,
      "duration": "20i"
    },
    {
      "time": "6816i",
      "midiNote": 77,
      "noteName": "F5",
      "velocity": 0.8503937007874016,
      "duration": "22i"
    },
    {
      "time": "6852i",
      "midiNote": 78,
      "noteName": "F#5",
      "velocity": 0.8503937007874016,
      "duration": "22i"
    },
    {
      "time": "6888i",
      "midiNote": 78,
      "noteName": "F#5",
      "velocity": 0.84251968503937,
      "duration": "21i"
    },
    {
      "time": "6912i",
      "midiNote": 79,
      "noteName": "G5",
      "velocity": 0.7874015748031497,
      "duration": "19i"
    },
    {
      "time": "6948i",
      "midiNote": 79,
      "noteName": "G5",
      "velocity": 0.84251968503937,
      "duration": "23i"
    },
    {
      "time": "6984i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.84251968503937,
      "duration": "18i"
    },
    {
      "time": "7008i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.84251968503937,
      "duration": "23i"
    },
    {
      "time": "7044i",
      "midiNote": 81,
      "noteName": "A5",
      "velocity": 0.8976377952755905,
      "duration": "23i"
    },
    {
      "time": "7080i",
      "midiNote": 81,
      "noteName": "A5",
      "velocity": 0.8503937007874016,
      "duration": "19i"
    },
    {
      "time": "7104i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.937007874015748,
      "duration": "23i"
    },
    {
      "time": "7140i",
      "midiNote": 83,
      "noteName": "B5",
      "velocity": 0.84251968503937,
      "duration": "22i"
    },
    {
      "time": "7176i",
      "midiNote": 83,
      "noteName": "B5",
      "velocity": 0.8976377952755905,
      "duration": "20i"
    },
    {
      "time": "7200i",
      "midiNote": 84,
      "noteName": "C6",
      "velocity": 0.889763779527559,
      "duration": "21i"
    },
    {
      "time": "7236i",
      "midiNote": 84,
      "noteName": "C6",
      "velocity": 0.937007874015748,
      "duration": "25i"
    },
    {
      "time": "7272i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.8661417322834646,
      "duration": "18i"
    },
    {
      "time": "7296i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.8740157480314961,
      "duration": "23i"
    },
    {
      "time": "7332i",
      "midiNote": 86,
      "noteName": "D6",
      "velocity": 0.8740157480314961,
      "duration": "21i"
    },
    {
      "time": "7368i",
      "midiNote": 86,
      "noteName": "D6",
      "velocity": 0.889763779527559,
      "duration": "18i"
    },
    {
      "time": "7392i",
      "midiNote": 87,
      "noteName": "D#6",
      "velocity": 0.9448818897637795,
      "duration": "24i"
    },
    {
      "time": "7428i",
      "midiNote": 87,
      "noteName": "D#6",
      "velocity": 0.9291338582677166,
      "duration": "24i"
    },
    {
      "time": "7464i",
      "midiNote": 87,
      "noteName": "D#6",
      "velocity": 0.9212598425196851,
      "duration": "16i"
    },
    {
      "time": "9024i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "9060i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "9096i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9132i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "9168i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "9192i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "9216i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "9252i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "9288i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9324i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "9360i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "9384i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "9408i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "9444i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "9480i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9516i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "9552i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "9576i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "9600i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "9636i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "9672i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9708i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "9744i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "9768i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "9792i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "9828i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "9864i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9900i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "9936i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "9960i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "9984i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "10020i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "10056i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10092i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "10128i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "10152i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "10176i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "10212i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "10248i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10284i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "10320i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "10344i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "10368i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "10404i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "10440i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10476i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "10512i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10536i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "10560i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "10596i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "10632i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10668i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "10704i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "10728i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "10752i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "10788i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "10824i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10860i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "10896i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "10920i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "10944i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "10980i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "11016i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11052i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "11088i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "11112i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "11136i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "11172i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "11208i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11244i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "11280i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "11304i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "11328i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "11364i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "11400i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11436i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "11472i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11496i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "11520i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "11556i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "11592i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11628i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "11664i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11688i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "11712i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "11748i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "11784i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11820i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "11856i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "11880i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "11904i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "11940i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "11976i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12012i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "12048i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "12072i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.8740157480314961,
      "duration": "14i"
    },
    {
      "time": "13632i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "13668i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "13704i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13740i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "13776i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "13800i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "13812i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "13824i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "13860i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "13896i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13932i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "13968i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "13992i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14004i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14016i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "14052i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "14088i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "14124i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "14160i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "14184i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14196i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14208i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "14244i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "14280i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "14316i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "14352i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "14376i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14388i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14400i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "14436i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "14472i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "14508i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "14544i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "14568i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14580i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14592i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "14628i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "14664i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "14700i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "14736i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "14760i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14772i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14784i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "14820i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "14856i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "14892i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "14928i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "14952i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14964i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "14976i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "15012i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "15048i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "15084i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "15120i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "15144i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15156i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15168i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "15204i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "15240i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "15276i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "15312i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "15336i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15348i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15360i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "15396i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "15432i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "15468i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "15504i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "15528i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15540i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15552i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "15588i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "15624i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "15660i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "15696i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "15720i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15732i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15744i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8503937007874016,
      "duration": "13i"
    },
    {
      "time": "15780i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8267716535433071,
      "duration": "14i"
    },
    {
      "time": "15816i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "15852i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8346456692913385,
      "duration": "14i"
    },
    {
      "time": "15888i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "15912i",
      "midiNote": 51,
      "noteName": "D#3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "15924i",
      "midiNote": 52,
      "noteName": "E3",
      "velocity": 0.8740157480314961,
      "duration": "12i"
    },
    {
      "time": "17472i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "20i"
    },
    {
      "time": "17508i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8661417322834646,
      "duration": "25i"
    },
    {
      "time": "17544i",
      "midiNote": 64,
      "noteName": "E4",
      "velocity": 0.889763779527559,
      "duration": "21i"
    },
    {
      "time": "17568i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8346456692913385,
      "duration": "22i"
    },
    {
      "time": "17604i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8267716535433071,
      "duration": "24i"
    },
    {
      "time": "17640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "17i"
    },
    {
      "time": "17664i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "24i"
    },
    {
      "time": "17700i",
      "midiNote": 67,
      "noteName": "G4",
      "velocity": 0.889763779527559,
      "duration": "26i"
    },
    {
      "time": "17736i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "19i"
    },
    {
      "time": "17760i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.84251968503937,
      "duration": "23i"
    },
    {
      "time": "17796i",
      "midiNote": 69,
      "noteName": "A4",
      "velocity": 0.8740157480314961,
      "duration": "20i"
    },
    {
      "time": "17832i",
      "midiNote": 69,
      "noteName": "A4",
      "velocity": 0.905511811023622,
      "duration": "20i"
    },
    {
      "time": "17856i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "18i"
    },
    {
      "time": "17892i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "23i"
    },
    {
      "time": "17928i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8503937007874016,
      "duration": "17i"
    },
    {
      "time": "17952i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8503937007874016,
      "duration": "23i"
    },
    {
      "time": "17988i",
      "midiNote": 72,
      "noteName": "C5",
      "velocity": 0.8661417322834646,
      "duration": "23i"
    },
    {
      "time": "18024i",
      "midiNote": 72,
      "noteName": "C5",
      "velocity": 0.889763779527559,
      "duration": "20i"
    },
    {
      "time": "18048i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "20i"
    },
    {
      "time": "18084i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.8818897637795275,
      "duration": "22i"
    },
    {
      "time": "18120i",
      "midiNote": 74,
      "noteName": "D5",
      "velocity": 0.84251968503937,
      "duration": "17i"
    },
    {
      "time": "18144i",
      "midiNote": 74,
      "noteName": "D5",
      "velocity": 0.9212598425196851,
      "duration": "23i"
    },
    {
      "time": "18180i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.84251968503937,
      "duration": "21i"
    },
    {
      "time": "18216i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.84251968503937,
      "duration": "20i"
    },
    {
      "time": "18240i",
      "midiNote": 76,
      "noteName": "E5",
      "velocity": 0.8740157480314961,
      "duration": "20i"
    },
    {
      "time": "18276i",
      "midiNote": 76,
      "noteName": "E5",
      "velocity": 0.889763779527559,
      "duration": "23i"
    },
    {
      "time": "18312i",
      "midiNote": 77,
      "noteName": "F5",
      "velocity": 0.8740157480314961,
      "duration": "20i"
    },
    {
      "time": "18336i",
      "midiNote": 77,
      "noteName": "F5",
      "velocity": 0.8503937007874016,
      "duration": "22i"
    },
    {
      "time": "18372i",
      "midiNote": 78,
      "noteName": "F#5",
      "velocity": 0.8503937007874016,
      "duration": "22i"
    },
    {
      "time": "18408i",
      "midiNote": 78,
      "noteName": "F#5",
      "velocity": 0.84251968503937,
      "duration": "21i"
    },
    {
      "time": "18432i",
      "midiNote": 79,
      "noteName": "G5",
      "velocity": 0.7874015748031497,
      "duration": "19i"
    },
    {
      "time": "18468i",
      "midiNote": 79,
      "noteName": "G5",
      "velocity": 0.84251968503937,
      "duration": "23i"
    },
    {
      "time": "18504i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.84251968503937,
      "duration": "18i"
    },
    {
      "time": "18528i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.84251968503937,
      "duration": "23i"
    },
    {
      "time": "18564i",
      "midiNote": 81,
      "noteName": "A5",
      "velocity": 0.8976377952755905,
      "duration": "23i"
    },
    {
      "time": "18600i",
      "midiNote": 81,
      "noteName": "A5",
      "velocity": 0.8503937007874016,
      "duration": "19i"
    },
    {
      "time": "18624i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.937007874015748,
      "duration": "23i"
    },
    {
      "time": "18660i",
      "midiNote": 83,
      "noteName": "B5",
      "velocity": 0.84251968503937,
      "duration": "22i"
    },
    {
      "time": "18696i",
      "midiNote": 83,
      "noteName": "B5",
      "velocity": 0.8976377952755905,
      "duration": "20i"
    },
    {
      "time": "18720i",
      "midiNote": 84,
      "noteName": "C6",
      "velocity": 0.889763779527559,
      "duration": "21i"
    },
    {
      "time": "18756i",
      "midiNote": 84,
      "noteName": "C6",
      "velocity": 0.937007874015748,
      "duration": "25i"
    },
    {
      "time": "18792i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.8661417322834646,
      "duration": "18i"
    },
    {
      "time": "18816i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.8740157480314961,
      "duration": "23i"
    },
    {
      "time": "18852i",
      "midiNote": 86,
      "noteName": "D6",
      "velocity": 0.8740157480314961,
      "duration": "21i"
    },
    {
      "time": "18888i",
      "midiNote": 86,
      "noteName": "D6",
      "velocity": 0.889763779527559,
      "duration": "18i"
    },
    {
      "time": "18912i",
      "midiNote": 87,
      "noteName": "D#6",
      "velocity": 0.9448818897637795,
      "duration": "24i"
    },
    {
      "time": "18948i",
      "midiNote": 87,
      "noteName": "D#6",
      "velocity": 0.9291338582677166,
      "duration": "24i"
    },
    {
      "time": "18984i",
      "midiNote": 87,
      "noteName": "D#6",
      "velocity": 0.9212598425196851,
      "duration": "16i"
    },
    {
      "time": "22032i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.5905511811023622,
      "duration": "240i"
    },
    {
      "time": "22032i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.5275590551181102,
      "duration": "240i"
    }
//   ]
// }
    


          ]).start(0);