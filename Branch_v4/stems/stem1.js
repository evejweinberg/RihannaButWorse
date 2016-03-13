synth1 = new Tone.PolySynth(3, Tone.SimpleSynth, {
                "oscillator": {
                    "type": "square8",
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

          


            
var stem1 = new Tone.Part(function(time, note){
      synth1.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [
    // {
//   "02-soft square lead": [
//   abelton says it starts at 0,.352 millis, .7 millis, 1.055 millis, 
    {
      "time": "576i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "576i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "612i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "612i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "648i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "684i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "684i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "720i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "720i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "744i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "744i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "768i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "768i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "804i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "804i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "840i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "876i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "876i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "912i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "912i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "936i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "936i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "960i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "960i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "996i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "996i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "1032i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "1032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1068i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1068i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1104i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "1104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1128i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "1128i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1152i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "1152i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1188i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "1188i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "1224i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1224i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "1260i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1260i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1296i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "1296i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1320i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "1320i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1344i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "1344i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1380i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "1380i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "1416i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1416i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "1452i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1452i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1488i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "1488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1512i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "1512i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1536i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1536i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "1572i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "1572i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "1608i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1608i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "1644i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1644i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1680i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "1680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1704i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "1704i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1728i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1728i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "1764i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "1764i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "1800i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "1800i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1836i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1836i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1872i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "1872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "1896i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "1896i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "1920i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "1920i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "1956i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "1956i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "1992i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "1992i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2028i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2028i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2064i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "2088i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "2088i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2112i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2112i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "2148i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "2148i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "2184i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2184i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "2220i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2220i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2256i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "2256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2280i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "2280i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2304i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "2304i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2340i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "2340i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "2376i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2376i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "2412i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2412i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2448i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "2448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2472i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "2472i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2496i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2496i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "2532i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "2532i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "2568i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "2568i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2604i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2604i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2640i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "2640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2664i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "2664i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2688i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "2688i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2724i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "2724i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "2760i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2760i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "2796i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2796i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2832i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "2856i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "2856i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2880i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "2880i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2916i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "2916i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "2952i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2952i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "2988i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2988i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3024i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3024i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3048i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3048i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3072i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3072i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3108i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3108i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3144i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3144i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3180i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3180i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3216i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3216i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3240i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3240i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3264i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3300i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3300i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3336i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3336i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3372i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3372i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3408i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "3408i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3432i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3432i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3456i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3456i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3492i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3492i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3528i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3528i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3564i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3564i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3600i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3600i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3624i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3624i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3648i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3684i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3684i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3720i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3720i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3756i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3756i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3792i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3792i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3816i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3816i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3840i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3876i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3876i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3912i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3912i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3948i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3948i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3984i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "3984i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4008i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4008i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4032i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4068i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4068i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4104i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4140i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4140i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4176i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "4176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4200i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4224i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4224i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4260i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4260i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4296i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4296i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4332i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4332i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4368i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "4368i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4392i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4392i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4416i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4416i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4452i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4452i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4488i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4524i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4524i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4560i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "4584i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4608i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4608i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4644i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4644i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4680i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4716i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4716i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4752i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "4752i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4776i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4776i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4800i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4800i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4836i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4836i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4872i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4908i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4908i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4944i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "4944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4968i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4992i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4992i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5028i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5028i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5064i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5100i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5100i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5136i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5136i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "5160i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5160i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5184i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5184i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5220i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5220i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5256i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5292i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5292i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5328i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "5352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5352i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5376i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5376i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5412i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5412i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5448i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5484i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5484i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5520i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5520i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "5544i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5544i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5568i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5568i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5604i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5604i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5640i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5676i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5676i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5712i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "5712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5736i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5736i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5760i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5760i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5796i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5796i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5832i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5868i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5868i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5904i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5904i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "5928i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5928i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5952i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5952i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5952i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5988i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5988i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5988i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6024i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6024i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6024i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6048i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6048i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6048i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6084i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6084i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6084i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6120i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6120i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6120i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6144i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6144i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6144i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6180i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6180i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6180i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6216i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6216i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6216i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6240i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6240i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6240i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6276i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6276i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6276i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6312i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6312i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6312i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6336i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6336i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6336i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6372i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6372i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6372i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6408i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6408i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6408i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6432i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6432i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6432i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6468i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6468i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6468i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6504i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6504i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6528i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6528i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6528i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6564i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6564i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6564i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6600i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6600i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6600i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6624i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6624i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6624i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6660i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6660i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6660i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6696i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6696i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6696i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6720i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6720i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6720i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6756i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6756i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6756i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6792i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6792i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6792i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6816i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6816i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6816i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6852i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6852i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6852i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6888i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6888i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6888i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6912i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6912i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "6912i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "6948i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "6948i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6948i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "6984i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "6984i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "6984i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7008i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7008i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7044i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7044i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7044i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7080i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7080i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7080i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7104i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7104i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7140i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7140i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7140i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7176i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7176i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7200i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7200i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7236i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7236i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7236i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7272i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7272i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7272i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7296i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7296i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7296i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7320i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7320i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7320i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7344i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7344i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7344i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7368i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7368i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7368i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7392i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7392i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7416i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7416i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7416i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7440i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7440i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7440i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7488i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7488i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7524i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7524i",
      "midiNote": 63,
      "noteName": "D#4",
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
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7560i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7596i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7632i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
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
      "time": "7716i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7752i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.937007874015748,
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
      "time": "7788i",
      "midiNote": 68,
      "noteName": "G#4",
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
      "time": "7824i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7824i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "7848i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
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
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7872i",
      "midiNote": 63,
      "noteName": "D#4",
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
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7908i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7944i",
      "midiNote": 63,
      "noteName": "D#4",
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
      "time": "7944i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7980i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7980i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
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
      "duration": "14i"
    },
    {
      "time": "8016i",
      "midiNote": 70,
      "noteName": "A#4",
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8064i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8100i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
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
      "time": "8100i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8136i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.937007874015748,
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
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
      "midiNote": 68,
      "noteName": "G#4",
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
      "time": "8232i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8256i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
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
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8292i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8292i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8292i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8328i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
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
      "velocity": 0.9212598425196851,
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "8400i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
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
      "time": "8424i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8448i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8484i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
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
      "midiNote": 61,
      "noteName": "C#4",
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
      "time": "8520i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8556i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8556i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
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
      "time": "8592i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8592i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8592i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
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
      "time": "8616i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
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
      "time": "8640i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8640i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8676i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8676i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8676i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8712i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8712i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
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
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
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
      "midiNote": 70,
      "noteName": "A#4",
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
      "time": "8784i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8784i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8808i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.937007874015748,
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8940i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
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
      "time": "8976i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8976i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
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
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "10560i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10596i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10596i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "10632i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "10632i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "10668i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "10668i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10704i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10704i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "10728i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10728i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "10752i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10752i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "10788i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10788i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "10824i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "10824i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "10860i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10860i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "10896i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "10896i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10920i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "10920i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10944i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "10980i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10980i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "11016i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11016i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11052i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11052i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "11088i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "11088i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11112i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11112i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11136i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "11136i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11172i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "11172i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11208i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11208i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11244i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11244i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "11280i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11280i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "11304i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11304i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11328i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11364i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11364i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "11400i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11400i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11436i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11436i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "11472i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "11472i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11496i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11496i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11520i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11520i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "11556i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "11556i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11592i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11592i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "11628i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11628i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "11664i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "11664i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11688i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11688i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12096i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12096i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12132i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12132i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12168i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12168i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12204i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12204i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12240i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "12240i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12264i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12288i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12288i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12324i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12324i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12360i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12360i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12396i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12396i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12432i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "12432i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12456i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12456i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12480i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12480i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12516i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12516i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12552i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12552i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12588i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12588i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12624i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12624i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "12648i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12672i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12672i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12708i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12708i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12744i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12744i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12780i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12780i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12816i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12816i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "12840i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12840i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12864i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12864i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12900i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12900i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12936i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12936i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12972i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12972i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13008i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "13008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13032i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13056i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "13056i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13092i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13092i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "13128i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "13128i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13164i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13164i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13200i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "13200i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13224i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13224i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13248i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "13248i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13284i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "13284i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13320i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "13320i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13356i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13356i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13392i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "13416i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13416i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13440i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13440i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "13476i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "13476i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13512i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "13512i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13548i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13548i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13584i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "13584i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13608i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13608i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13632i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "13632i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "13644i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13644i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13656i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "13656i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13668i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "13668i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "13680i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "13680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "13692i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "13692i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "13704i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "7i"
    },
    {
      "time": "13704i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "13716i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "13716i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13728i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13728i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13740i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "13740i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "13752i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "7i"
    },
    {
      "time": "13752i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "13764i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13764i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13776i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "13776i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "13788i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13788i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "13800i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "13800i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "13812i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "13812i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "13824i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "13824i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "13836i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13836i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13848i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "13848i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13860i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "13860i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "13872i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "13872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "13884i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "13884i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "13896i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "7i"
    },
    {
      "time": "13896i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "13908i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13908i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "13920i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13920i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13932i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "13932i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "13944i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "13944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "13956i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13956i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "13968i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "13968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "13980i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "13980i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "13992i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "13992i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14004i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14004i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14016i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14016i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14028i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14028i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14040i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14040i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14052i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "7i"
    },
    {
      "time": "14052i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14064i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14076i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14076i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14088i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14088i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14100i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14100i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14112i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14112i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "7i"
    },
    {
      "time": "14124i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14124i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "14136i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14136i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "7i"
    },
    {
      "time": "14148i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14148i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14160i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14160i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "14172i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14172i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14184i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14184i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14196i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14196i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14208i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14208i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14220i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14220i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14232i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14232i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14244i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "7i"
    },
    {
      "time": "14244i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14256i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14268i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14268i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14280i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14280i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14292i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14292i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "7i"
    },
    {
      "time": "14304i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14304i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14316i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "14316i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14328i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14340i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "7i"
    },
    {
      "time": "14340i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "7i"
    },
    {
      "time": "14352i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "14364i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14364i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14376i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14376i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14388i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14388i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14400i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14400i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14412i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14412i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14424i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14424i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14436i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14436i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "14448i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14460i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14460i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14472i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "7i"
    },
    {
      "time": "14472i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14484i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14484i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "7i"
    },
    {
      "time": "14496i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14496i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14508i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "14508i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14520i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14520i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14532i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "7i"
    },
    {
      "time": "14532i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14544i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14544i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "14556i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14556i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14568i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14568i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14580i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14580i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14592i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14592i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14604i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14604i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14616i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14616i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14628i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "14628i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14640i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14652i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14652i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14664i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14664i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14676i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14676i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14688i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14688i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "7i"
    },
    {
      "time": "14700i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14700i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "14712i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "7i"
    },
    {
      "time": "14724i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "7i"
    },
    {
      "time": "14724i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14736i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14736i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "14748i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14748i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14760i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14760i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14772i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14772i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14784i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14784i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14796i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14796i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14808i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14808i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14820i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "7i"
    },
    {
      "time": "14820i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14832i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "14844i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14844i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14856i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14856i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14868i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14868i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14880i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14880i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14892i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "14892i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14904i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14904i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "14916i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14916i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14928i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "14928i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "14940i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "14940i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "14952i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14952i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "14964i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14964i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "14976i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "14976i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "14988i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "14988i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15000i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15000i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15012i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15012i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "15024i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15024i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15036i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15036i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15048i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "7i"
    },
    {
      "time": "15048i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15060i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15060i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15072i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15072i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15084i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "15084i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15096i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15096i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15108i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15108i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "7i"
    },
    {
      "time": "15120i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15120i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "15132i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15132i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15144i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15144i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15156i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15156i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15168i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15168i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "15180i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15180i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15192i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15192i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15204i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15204i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "15216i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15216i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15228i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15228i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15240i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15240i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "15252i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15252i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "7i"
    },
    {
      "time": "15264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "7i"
    },
    {
      "time": "15264i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15276i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "15276i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15288i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15288i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15300i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15300i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15312i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "15312i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15324i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15324i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15336i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15336i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15348i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15348i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15360i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15360i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "15372i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15372i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15384i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15384i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15396i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "15396i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15408i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15408i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15420i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15420i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15432i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15432i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "15444i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15444i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15456i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15456i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15468i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "15468i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15480i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15480i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15492i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15492i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15504i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15504i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "15516i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15516i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15528i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15528i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15540i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15540i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15552i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15552i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "15564i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15564i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15576i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15576i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15588i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15588i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "7i"
    },
    {
      "time": "15600i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15600i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15612i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15612i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15624i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15624i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "15636i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15636i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15648i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15660i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "15660i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15672i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15672i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "7i"
    },
    {
      "time": "15684i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "7i"
    },
    {
      "time": "15684i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15696i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "15696i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15708i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15708i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15720i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15720i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15732i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15732i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15744i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7401574803149606,
      "duration": "6i"
    },
    {
      "time": "15744i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15756i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15756i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15768i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15768i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15780i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15780i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7480314960629921,
      "duration": "6i"
    },
    {
      "time": "15792i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15792i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.41732283464566927,
      "duration": "6i"
    },
    {
      "time": "15804i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15804i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15816i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15816i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7401574803149606,
      "duration": "7i"
    },
    {
      "time": "15828i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15828i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "7i"
    },
    {
      "time": "15840i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15852i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7244094488188977,
      "duration": "6i"
    },
    {
      "time": "15852i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7244094488188977,
      "duration": "7i"
    },
    {
      "time": "15864i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15864i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4251968503937008,
      "duration": "6i"
    },
    {
      "time": "15876i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15876i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4094488188976378,
      "duration": "6i"
    },
    {
      "time": "15888i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7322834645669292,
      "duration": "6i"
    },
    {
      "time": "15888i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "7i"
    },
    {
      "time": "15900i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "6i"
    },
    {
      "time": "15900i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4330708661417323,
      "duration": "6i"
    },
    {
      "time": "15912i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15912i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.7165354330708661,
      "duration": "6i"
    },
    {
      "time": "15924i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15924i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.4015748031496063,
      "duration": "7i"
    },
    {
      "time": "15936i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "15936i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "15972i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "15972i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16008i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16044i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16044i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16080i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16080i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16104i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16128i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16128i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16164i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16164i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16200i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16236i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16236i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16272i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16272i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16296i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16296i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16320i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16320i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16356i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16356i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16392i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16428i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16428i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16464i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16464i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16488i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16512i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16512i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16548i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16548i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16584i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16620i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16620i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16656i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16656i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16680i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16680i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16704i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16704i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16740i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16740i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16776i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16776i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16812i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16812i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16848i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16848i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16872i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16896i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16896i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16932i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16932i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16968i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17004i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17004i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17040i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "17040i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17064i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17064i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "17088i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17088i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17124i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17124i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17160i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17160i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17196i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17196i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17232i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "17232i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17256i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "17280i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17280i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17316i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17316i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17352i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17388i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17388i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17424i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "17424i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17448i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "17448i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17472i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17472i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17472i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17508i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17508i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17508i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17544i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17544i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17544i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17568i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17568i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17568i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17604i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17604i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17604i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17640i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17640i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17664i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17664i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17664i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17700i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17700i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17700i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17736i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17736i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17736i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17760i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17760i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17760i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17796i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17796i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17796i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17832i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17832i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17856i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17856i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17856i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17892i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17892i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17892i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17928i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17928i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17928i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17952i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17952i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17952i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17988i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17988i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17988i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18024i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18024i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18024i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18048i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18048i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18048i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18084i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18084i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18084i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18120i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18120i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18120i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18144i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18144i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18144i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18180i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18180i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18180i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18216i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18216i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18216i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18240i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18240i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18240i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18276i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18276i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18276i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18312i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18312i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18312i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18336i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18336i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18336i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18372i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18372i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18372i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18408i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18408i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18408i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18432i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18432i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18432i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18468i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18468i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18468i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18504i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18504i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18528i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18528i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18528i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18564i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18564i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18564i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18600i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18600i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18600i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18624i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18624i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18624i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18660i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18660i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18660i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18696i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18696i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18696i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18720i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18720i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18720i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18756i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18756i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18756i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18792i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18792i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18792i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18816i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18816i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18816i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18840i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18840i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18864i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18864i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18864i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18888i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "18888i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18888i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18912i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "18912i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18912i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "18936i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "18936i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18936i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "18960i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18960i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "18960i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19008i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19008i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
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
      "midiNote": 63,
      "noteName": "D#4",
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
      "time": "19044i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19080i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19080i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
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
      "time": "19116i",
      "midiNote": 70,
      "noteName": "A#4",
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
      "time": "19116i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19152i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19152i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "19152i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19176i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
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
      "time": "19200i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19200i",
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
      "time": "19236i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19236i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19236i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.937007874015748,
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
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
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
      "midiNote": 68,
      "noteName": "G#4",
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19344i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
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
      "duration": "13i"
    },
    {
      "time": "19392i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19392i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19428i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
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
      "velocity": 0.905511811023622,
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
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19464i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
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
      "time": "19500i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.889763779527559,
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
      "time": "19536i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19536i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "19536i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
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
      "midiNote": 61,
      "noteName": "C#4",
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
      "time": "19584i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19620i",
      "midiNote": 61,
      "noteName": "C#4",
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
      "time": "19620i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19656i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.937007874015748,
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19728i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
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
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19752i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
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
      "time": "19776i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19776i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19776i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
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
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19812i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19848i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9212598425196851,
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
      "time": "19848i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
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
      "time": "19884i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19884i",
      "midiNote": 70,
      "noteName": "A#4",
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
      "time": "19920i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19920i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
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
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.905511811023622,
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.937007874015748,
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
      "time": "20076i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20112i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20112i",
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "20112i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
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
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20160i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20196i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20196i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20196i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
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
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20232i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20268i",
      "midiNote": 70,
      "noteName": "A#4",
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
      "time": "20268i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20304i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20304i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9448818897637795,
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
      "time": "20328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20328i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.9291338582677166,
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
      "time": "20352i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.905511811023622,
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
      "time": "20352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20388i",
      "midiNote": 61,
      "noteName": "C#4",
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
      "time": "20388i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
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
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.937007874015748,
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.889763779527559,
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9448818897637795,
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
      "midiNote": 68,
      "noteName": "G#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20520i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20520i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20544i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20544i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20580i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20580i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20616i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20616i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20652i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20652i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20688i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "20688i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20712i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20736i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20736i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20772i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20772i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20808i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20808i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20844i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20844i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20880i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20880i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20904i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20904i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20928i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20928i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20964i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20964i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21000i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21000i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21036i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21036i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21072i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "21072i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21096i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21096i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21120i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21120i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21156i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21156i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21192i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21192i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21228i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21228i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21264i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "21264i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21288i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21288i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21312i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21312i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21348i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21348i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21384i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21384i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21420i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21420i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21456i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "21456i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21480i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21480i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21504i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21504i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21540i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21540i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21576i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21576i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21612i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21612i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21648i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21648i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "21672i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21672i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21696i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21696i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21732i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21732i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21768i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21768i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21804i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21804i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21840i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "21840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21864i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21864i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21888i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21888i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21924i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21924i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21960i",
      "midiNote": 58,
      "noteName": "A#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21960i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21996i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21996i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "22032i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "22032i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "22056i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "22056i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    }
//   ]
// }



    


          ]).start(0);