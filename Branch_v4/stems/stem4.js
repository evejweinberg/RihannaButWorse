synth4 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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

          


            
var stem4 = new Tone.Part(function(time, note){
      synth4.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [
    // {
//   "05 - saxophone": [
    {
      "time": "1392i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "28i"
    },
    {
      "time": "1416i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "15i"
    },
    {
      "time": "1440i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "45i"
    },
    {
      "time": "1488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "45i"
    },
    {
      "time": "1536i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8661417322834646,
      "duration": "50i"
    },
    {
      "time": "1584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.937007874015748,
      "duration": "19i"
    },
    {
      "time": "1608i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "82i"
    },
    {
      "time": "1776i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "26i"
    },
    {
      "time": "1800i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "19i"
    },
    {
      "time": "1824i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "43i"
    },
    {
      "time": "1872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "46i"
    },
    {
      "time": "1920i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.889763779527559,
      "duration": "73i"
    },
    {
      "time": "1992i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "67i"
    },
    {
      "time": "2064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "46i"
    },
    {
      "time": "2160i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9133858267716536,
      "duration": "25i"
    },
    {
      "time": "2184i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "16i"
    },
    {
      "time": "2208i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "45i"
    },
    {
      "time": "2256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.937007874015748,
      "duration": "45i"
    },
    {
      "time": "2304i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9291338582677166,
      "duration": "50i"
    },
    {
      "time": "2352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "17i"
    },
    {
      "time": "2376i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "87i"
    },
    {
      "time": "2544i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.905511811023622,
      "duration": "26i"
    },
    {
      "time": "2568i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "17i"
    },
    {
      "time": "2592i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "44i"
    },
    {
      "time": "2640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "46i"
    },
    {
      "time": "2688i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8818897637795275,
      "duration": "72i"
    },
    {
      "time": "2760i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "70i"
    },
    {
      "time": "2832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "198i"
    },
    {
      "time": "3024i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "29i"
    },
    {
      "time": "3048i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "114i"
    },
    {
      "time": "3216i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.937007874015748,
      "duration": "17i"
    },
    {
      "time": "3240i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.8661417322834646,
      "duration": "18i"
    },
    {
      "time": "3288i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8661417322834646,
      "duration": "11i"
    },
    {
      "time": "3312i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9212598425196851,
      "duration": "49i"
    },
    {
      "time": "3360i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "50i"
    },
    {
      "time": "3408i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.8740157480314961,
      "duration": "45i"
    },
    {
      "time": "3456i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9133858267716536,
      "duration": "53i"
    },
    {
      "time": "3504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "53i"
    },
    {
      "time": "3552i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.8740157480314961,
      "duration": "48i"
    },
    {
      "time": "3600i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "41i"
    },
    {
      "time": "3648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "147i"
    },
    {
      "time": "3792i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.8818897637795275,
      "duration": "28i"
    },
    {
      "time": "3816i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "110i"
    },
    {
      "time": "3984i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9133858267716536,
      "duration": "24i"
    },
    {
      "time": "4008i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "21i"
    },
    {
      "time": "4032i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.905511811023622,
      "duration": "41i"
    },
    {
      "time": "4080i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.937007874015748,
      "duration": "28i"
    },
    {
      "time": "4104i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "51i"
    },
    {
      "time": "4152i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.905511811023622,
      "duration": "23i"
    },
    {
      "time": "4176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "87i"
    },
    {
      "time": "4440i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "13i"
    },
    {
      "time": "4464i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "34i"
    },
    {
      "time": "4512i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "47i"
    },
    {
      "time": "4560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "18i"
    },
    {
      "time": "4584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "21i"
    },
    {
      "time": "4608i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8976377952755905,
      "duration": "46i"
    },
    {
      "time": "4656i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.937007874015748,
      "duration": "16i"
    },
    {
      "time": "4680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "77i"
    },
    {
      "time": "4824i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "13i"
    },
    {
      "time": "4848i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9133858267716536,
      "duration": "35i"
    },
    {
      "time": "4896i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "44i"
    },
    {
      "time": "4944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "16i"
    },
    {
      "time": "4968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "19i"
    },
    {
      "time": "4992i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9448818897637795,
      "duration": "77i"
    },
    {
      "time": "5064i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "69i"
    },
    {
      "time": "5136i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "38i"
    },
    {
      "time": "5208i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "14i"
    },
    {
      "time": "5232i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "34i"
    },
    {
      "time": "5280i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "48i"
    },
    {
      "time": "5328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "18i"
    },
    {
      "time": "5352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "20i"
    },
    {
      "time": "5376i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9133858267716536,
      "duration": "43i"
    },
    {
      "time": "5424i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "18i"
    },
    {
      "time": "5448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "73i"
    },
    {
      "time": "5592i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "13i"
    },
    {
      "time": "5616i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "37i"
    },
    {
      "time": "5664i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "45i"
    },
    {
      "time": "5712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "17i"
    },
    {
      "time": "5736i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "23i"
    },
    {
      "time": "5760i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.889763779527559,
      "duration": "72i"
    },
    {
      "time": "5832i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "72i"
    },
    {
      "time": "5904i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "48i"
    },
    {
      "time": "9072i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
      "duration": "24i"
    },
    {
      "time": "9096i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9133858267716536,
      "duration": "15i"
    },
    {
      "time": "9120i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9133858267716536,
      "duration": "45i"
    },
    {
      "time": "9168i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "21i"
    },
    {
      "time": "9192i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "21i"
    },
    {
      "time": "9216i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8661417322834646,
      "duration": "48i"
    },
    {
      "time": "9264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.937007874015748,
      "duration": "19i"
    },
    {
      "time": "9288i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "82i"
    },
    {
      "time": "9456i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9133858267716536,
      "duration": "24i"
    },
    {
      "time": "9480i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "19i"
    },
    {
      "time": "9504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "43i"
    },
    {
      "time": "9552i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "46i"
    },
    {
      "time": "9600i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.889763779527559,
      "duration": "72i"
    },
    {
      "time": "9672i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "67i"
    },
    {
      "time": "9744i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "46i"
    },
    {
      "time": "9840i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9133858267716536,
      "duration": "24i"
    },
    {
      "time": "9864i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "16i"
    },
    {
      "time": "9888i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "45i"
    },
    {
      "time": "9936i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "17i"
    },
    {
      "time": "9960i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "17i"
    },
    {
      "time": "9984i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8740157480314961,
      "duration": "48i"
    },
    {
      "time": "10032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "17i"
    },
    {
      "time": "10056i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "87i"
    },
    {
      "time": "10224i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9133858267716536,
      "duration": "24i"
    },
    {
      "time": "10248i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "17i"
    },
    {
      "time": "10272i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "44i"
    },
    {
      "time": "10320i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "46i"
    },
    {
      "time": "10368i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8740157480314961,
      "duration": "72i"
    },
    {
      "time": "10440i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "70i"
    },
    {
      "time": "10512i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "192i"
    },
    {
      "time": "10704i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.937007874015748,
      "duration": "24i"
    },
    {
      "time": "10728i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "114i"
    },
    {
      "time": "10896i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.8740157480314961,
      "duration": "17i"
    },
    {
      "time": "10920i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.8661417322834646,
      "duration": "18i"
    },
    {
      "time": "10968i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9212598425196851,
      "duration": "11i"
    },
    {
      "time": "10992i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9291338582677166,
      "duration": "49i"
    },
    {
      "time": "11040i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "50i"
    },
    {
      "time": "11088i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9212598425196851,
      "duration": "45i"
    },
    {
      "time": "11136i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9291338582677166,
      "duration": "53i"
    },
    {
      "time": "11184i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "53i"
    },
    {
      "time": "11232i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.905511811023622,
      "duration": "48i"
    },
    {
      "time": "11280i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "41i"
    },
    {
      "time": "11328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "147i"
    },
    {
      "time": "11472i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.905511811023622,
      "duration": "28i"
    },
    {
      "time": "11496i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "110i"
    },
    {
      "time": "11664i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "24i"
    },
    {
      "time": "11688i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.8740157480314961,
      "duration": "21i"
    },
    {
      "time": "11712i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.8661417322834646,
      "duration": "41i"
    },
    {
      "time": "11760i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.889763779527559,
      "duration": "28i"
    },
    {
      "time": "11784i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "51i"
    },
    {
      "time": "11832i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "23i"
    },
    {
      "time": "11856i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8818897637795275,
      "duration": "87i"
    },
    {
      "time": "12120i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9133858267716536,
      "duration": "13i"
    },
    {
      "time": "12144i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "34i"
    },
    {
      "time": "12192i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "47i"
    },
    {
      "time": "12240i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "18i"
    },
    {
      "time": "12264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "21i"
    },
    {
      "time": "12288i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8976377952755905,
      "duration": "46i"
    },
    {
      "time": "12336i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "16i"
    },
    {
      "time": "12360i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "77i"
    },
    {
      "time": "12504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9133858267716536,
      "duration": "13i"
    },
    {
      "time": "12528i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "35i"
    },
    {
      "time": "12576i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "44i"
    },
    {
      "time": "12624i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "16i"
    },
    {
      "time": "12648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8818897637795275,
      "duration": "19i"
    },
    {
      "time": "12672i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9133858267716536,
      "duration": "77i"
    },
    {
      "time": "12744i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "69i"
    },
    {
      "time": "12816i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.937007874015748,
      "duration": "38i"
    },
    {
      "time": "12888i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "14i"
    },
    {
      "time": "12912i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "34i"
    },
    {
      "time": "12960i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "48i"
    },
    {
      "time": "13008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "18i"
    },
    {
      "time": "13032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "20i"
    },
    {
      "time": "13056i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.937007874015748,
      "duration": "43i"
    },
    {
      "time": "13104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "18i"
    },
    {
      "time": "13128i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "73i"
    },
    {
      "time": "13272i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "13i"
    },
    {
      "time": "13296i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "37i"
    },
    {
      "time": "13344i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "45i"
    },
    {
      "time": "13392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "17i"
    },
    {
      "time": "13416i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "23i"
    },
    {
      "time": "13440i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8818897637795275,
      "duration": "72i"
    },
    {
      "time": "13512i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "72i"
    },
    {
      "time": "13584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9291338582677166,
      "duration": "48i"
    },
    {
      "time": "14448i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.8740157480314961,
      "duration": "28i"
    },
    {
      "time": "14472i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "15i"
    },
    {
      "time": "14496i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "45i"
    },
    {
      "time": "14544i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "45i"
    },
    {
      "time": "14592i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9448818897637795,
      "duration": "50i"
    },
    {
      "time": "14640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "19i"
    },
    {
      "time": "14664i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "82i"
    },
    {
      "time": "14832i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.937007874015748,
      "duration": "26i"
    },
    {
      "time": "14856i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "19i"
    },
    {
      "time": "14880i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "43i"
    },
    {
      "time": "14928i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8818897637795275,
      "duration": "46i"
    },
    {
      "time": "14976i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9212598425196851,
      "duration": "73i"
    },
    {
      "time": "15048i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "67i"
    },
    {
      "time": "15120i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "46i"
    },
    {
      "time": "15216i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
      "duration": "25i"
    },
    {
      "time": "15240i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "16i"
    },
    {
      "time": "15264i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "45i"
    },
    {
      "time": "15312i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "45i"
    },
    {
      "time": "15360i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "50i"
    },
    {
      "time": "15408i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "17i"
    },
    {
      "time": "15432i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8818897637795275,
      "duration": "87i"
    },
    {
      "time": "15960i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "15984i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "34i"
    },
    {
      "time": "16032i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "47i"
    },
    {
      "time": "16080i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "18i"
    },
    {
      "time": "16104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "21i"
    },
    {
      "time": "16128i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.905511811023622,
      "duration": "46i"
    },
    {
      "time": "16176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "16i"
    },
    {
      "time": "16200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "77i"
    },
    {
      "time": "16344i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "16368i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "35i"
    },
    {
      "time": "16416i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8976377952755905,
      "duration": "44i"
    },
    {
      "time": "16464i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "16i"
    },
    {
      "time": "16488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8818897637795275,
      "duration": "19i"
    },
    {
      "time": "16512i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9291338582677166,
      "duration": "77i"
    },
    {
      "time": "16584i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "69i"
    },
    {
      "time": "16656i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "38i"
    },
    {
      "time": "16728i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "16752i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "34i"
    },
    {
      "time": "16800i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "48i"
    },
    {
      "time": "16848i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "18i"
    },
    {
      "time": "16872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9448818897637795,
      "duration": "20i"
    },
    {
      "time": "16896i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8976377952755905,
      "duration": "43i"
    },
    {
      "time": "16944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "18i"
    },
    {
      "time": "16968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "73i"
    },
    {
      "time": "17112i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17136i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "37i"
    },
    {
      "time": "17184i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8661417322834646,
      "duration": "45i"
    },
    {
      "time": "17232i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "17i"
    },
    {
      "time": "17256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "23i"
    },
    {
      "time": "17280i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.9133858267716536,
      "duration": "72i"
    },
    {
      "time": "17352i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "72i"
    },
    {
      "time": "17424i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "48i"
    },
    {
      "time": "20568i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20592i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "34i"
    },
    {
      "time": "20640i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "47i"
    },
    {
      "time": "20688i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "18i"
    },
    {
      "time": "20712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "21i"
    },
    {
      "time": "20736i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.8740157480314961,
      "duration": "46i"
    },
    {
      "time": "20784i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "16i"
    },
    {
      "time": "20808i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8818897637795275,
      "duration": "77i"
    },
    {
      "time": "20952i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "13i"
    },
    {
      "time": "20976i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "35i"
    },
    {
      "time": "21024i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "44i"
    },
    {
      "time": "21072i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8740157480314961,
      "duration": "16i"
    },
    {
      "time": "21096i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8976377952755905,
      "duration": "19i"
    },
    {
      "time": "21120i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.8818897637795275,
      "duration": "77i"
    },
    {
      "time": "21192i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "69i"
    },
    {
      "time": "21264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "38i"
    },
    {
      "time": "21336i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21360i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "34i"
    },
    {
      "time": "21408i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "48i"
    },
    {
      "time": "21456i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "18i"
    },
    {
      "time": "21480i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "20i"
    },
    {
      "time": "21504i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "43i"
    },
    {
      "time": "21552i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "18i"
    },
    {
      "time": "21576i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9133858267716536,
      "duration": "73i"
    },
    {
      "time": "21720i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "13i"
    },
    {
      "time": "21744i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "37i"
    },
    {
      "time": "21792i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8740157480314961,
      "duration": "45i"
    },
    {
      "time": "21840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "17i"
    },
    {
      "time": "21864i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "23i"
    },
    {
      "time": "21888i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.905511811023622,
      "duration": "72i"
    },
    {
      "time": "21960i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "72i"
    },
    {
      "time": "22032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.8661417322834646,
      "duration": "144i"
    }
//   ]
// }






          ]).start(0);