synth9 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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

          


            
var stem9 = new Tone.Part(function(time, note){
      synth9.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "09 - GM": [
    {
      "time": "588i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "588i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "600i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "600i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "624i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "624i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "636i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "636i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "660i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "660i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "672i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "672i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "696i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "696i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "708i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "708i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "732i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "732i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "756i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "756i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "780i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "780i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "792i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "792i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "816i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "816i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "828i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "828i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "852i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "25i"
    },
    {
      "time": "852i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "864i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "864i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "888i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "888i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "900i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "900i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "924i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "924i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "948i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "948i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "972i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "972i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "984i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "984i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "1008i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "1008i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "1020i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1020i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1044i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "1044i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1056i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1056i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1080i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "1080i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "1092i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "1092i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1116i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "1116i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "1140i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "1140i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "1164i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "1164i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "1176i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "1176i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1200i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "1200i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "1212i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1212i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1236i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1236i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "1248i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1248i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1272i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "1272i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "1284i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "1284i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1308i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "1308i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "1332i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "1332i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "1356i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1356i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "1368i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "1368i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1392i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "1392i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "1404i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1404i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1428i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "1428i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1440i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1440i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "1464i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "1464i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "1476i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "1476i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1500i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "1500i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "1524i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "1524i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "1548i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1548i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "1560i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "1560i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1584i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "1584i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "1596i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1596i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1620i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "1620i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1632i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1632i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1656i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "1656i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "1668i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "1668i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1692i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "1692i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "1716i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "1716i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "1740i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1740i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "1752i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "1752i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1776i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "1776i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "1788i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1788i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1812i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "1812i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "1824i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1824i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1848i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "1848i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "1860i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "1860i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "1884i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "1884i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "1908i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "1908i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "1932i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "1932i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "1944i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "1944i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "1968i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "1968i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "1980i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "1980i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2004i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "2004i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2016i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2016i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2040i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "2040i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "2052i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "2052i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2076i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "2076i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "2100i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "2100i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "2124i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2124i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "2136i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "2136i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2160i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "2160i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "2172i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2172i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2196i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "2196i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2208i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2208i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2232i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "2232i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "2244i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "2244i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2268i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "2268i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "2292i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "2292i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "2316i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "2316i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "2328i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "2328i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2352i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "2352i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "2364i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2364i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2388i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "2388i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2400i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2400i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2424i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "2424i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "2436i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "2436i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2460i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "2460i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "2484i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "2484i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "2508i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2508i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "2520i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "2520i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2544i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "2544i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "2556i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2556i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2580i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "2580i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2592i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2592i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2616i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "2616i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "2628i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2628i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "2652i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "2652i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "2676i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "2676i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "2700i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2700i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "2712i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "2712i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2736i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "2736i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "2748i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2748i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2772i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "2772i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2784i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2784i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2808i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "2808i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "2820i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "2820i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2844i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "2844i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "2868i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "2868i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "2892i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "2892i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "2904i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "2904i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "2928i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "2928i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "2940i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "2940i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2964i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "2964i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "2976i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "2976i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3000i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3000i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "3012i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "3012i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3036i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "3036i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "3060i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "3060i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "3084i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3084i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "3096i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "3096i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3120i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "3120i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "3132i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3132i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3156i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "3156i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "3168i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3168i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3192i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3192i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "3204i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3204i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "3228i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "3228i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "3252i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "3252i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "3276i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "3276i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3288i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "3288i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3312i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "3312i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "3324i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3324i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3348i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "3348i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "3360i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3360i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3384i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "3384i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3396i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "1i"
    },
    {
      "time": "3396i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3420i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "3420i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "3444i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "3444i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "3468i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "3468i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3480i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3480i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "3504i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "3504i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "3516i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3516i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3540i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "3540i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "3552i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3552i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3576i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "3576i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3588i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "3588i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3612i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "3612i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "3636i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "3636i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "3660i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "3660i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3672i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "3672i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3696i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "3696i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "3708i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3708i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3732i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "3732i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "3744i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3744i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3768i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3768i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "3780i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3780i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "3804i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "3804i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "3828i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "3828i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "3852i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "3852i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "3864i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "3864i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3888i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "3888i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "3900i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "3900i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3924i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "3924i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "3936i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "3936i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "3960i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "3960i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "3972i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "3972i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "3996i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "3996i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "4020i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "4020i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "4044i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4044i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "4056i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "4056i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4080i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "4080i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "4092i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4092i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4116i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "4116i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4128i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4128i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4152i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "4152i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "4164i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "4164i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4188i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "4188i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "4212i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "4212i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "4236i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4236i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "4248i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "4248i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4272i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "4272i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "25i"
    },
    {
      "time": "4284i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4284i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4308i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "4308i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4320i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4320i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4344i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "4344i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "4356i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4356i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "4380i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "4380i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "4404i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "4404i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "4428i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4428i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "4440i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "4440i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4464i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "4464i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "4476i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4476i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4500i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4500i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "4512i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4512i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4536i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "4536i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "4548i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "4548i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4572i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "4572i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "4596i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "4596i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "4620i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4620i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "4632i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "4632i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4656i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "4656i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "4668i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4668i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4692i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "4692i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4704i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4704i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4728i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "4728i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "25i"
    },
    {
      "time": "4740i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "4740i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4764i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "4764i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "4788i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "4788i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "4812i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4812i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "4824i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "4824i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4848i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "4848i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "4860i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4860i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4884i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "4884i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "4896i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "4896i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "4920i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "4920i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "4932i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "4932i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "1i"
    },
    {
      "time": "4956i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "4956i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "4980i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "4980i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "5004i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5004i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5016i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "5016i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5040i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "5040i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5052i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5052i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5076i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "5076i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5088i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5088i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5112i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "5112i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "5124i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "5124i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5148i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "5148i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "5172i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "5172i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "5196i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5196i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "5208i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5208i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "5232i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "5232i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5244i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5244i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5268i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "5268i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5280i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5280i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5304i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "5304i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "5316i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5316i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "5340i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "5340i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "5364i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "5364i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "5388i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5388i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "5400i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "5400i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5424i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "5424i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5436i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5436i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5460i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5460i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "5472i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5472i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5496i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "5496i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "5508i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "1i"
    },
    {
      "time": "5508i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5532i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "5532i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "5556i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "5556i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "5580i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "5580i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "5592i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "5592i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5616i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5616i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "5628i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5628i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5652i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5652i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "5664i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5664i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5688i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "5688i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "5700i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "5700i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5724i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "5724i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "5748i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "5748i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "5772i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5772i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5784i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "5784i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5808i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "5808i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "5820i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5820i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5844i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "5844i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "5856i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "5856i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "5880i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "5880i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "5892i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "5892i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "1i"
    },
    {
      "time": "5916i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "5916i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "5940i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "5940i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "7500i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "7500i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "7512i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7512i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "7536i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "7536i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "7548i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "7548i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7572i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "7572i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "7584i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7584i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "7608i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "7608i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "7620i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "7620i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "7644i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "7644i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "7668i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "7668i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "7692i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "7692i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "7704i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "7704i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "7728i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "7728i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "7740i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "7740i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7764i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "7764i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "7776i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "7776i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7800i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "7800i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "7812i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "7812i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "7836i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "7836i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "7860i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "7860i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "7884i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "7884i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "7896i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "7896i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7920i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "7920i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "7932i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "7932i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7956i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "7956i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "7968i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "7968i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "7992i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "7992i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8004i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "8004i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8028i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "8028i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "8052i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "8052i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "8076i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8076i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "8088i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "8088i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8112i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8112i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "8124i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8124i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8148i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8148i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "8160i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8160i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8184i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "8184i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8196i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "8196i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8220i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "8220i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "8244i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "8244i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "8268i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8268i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8280i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "8280i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8304i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "8304i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8316i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8316i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8340i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "8340i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8352i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "8352i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8376i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8376i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "25i"
    },
    {
      "time": "8388i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "8388i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8412i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "8412i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "8436i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "8436i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "8460i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "8460i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8472i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8472i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "8496i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "8496i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8508i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8508i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8532i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "8532i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8544i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8544i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8568i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "8568i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8580i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "8580i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8604i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "8604i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "8628i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "8628i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "8652i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8652i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8664i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "8664i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8688i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "8688i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8700i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8700i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8724i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8724i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "8736i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8736i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8760i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "8760i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8772i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "8772i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8796i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "8796i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "8820i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "8820i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "8844i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8844i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8856i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "8856i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8880i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "8880i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "8892i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8892i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8916i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "8916i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "8928i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "8928i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "8952i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "8952i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "8964i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "8964i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8988i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "8988i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "9012i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "9012i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "10572i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "10572i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "10584i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "10584i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "10608i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "10608i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "10620i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "10620i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "10644i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "10644i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "10656i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "10656i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "10680i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "10680i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "10692i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "10692i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "10716i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "10716i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "10740i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "10740i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "10764i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "10764i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "10776i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "10776i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "10800i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "10800i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "10812i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "10812i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "10836i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "10836i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "10848i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "10848i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "10872i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "10872i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "10884i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "10884i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "10908i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "10908i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "10932i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "10932i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "10956i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "10956i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "10968i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "10968i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "10992i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "10992i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "11004i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11004i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "11028i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "11028i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "11040i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11040i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11064i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "11064i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "11076i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "11076i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "11100i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "11100i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "11124i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "11124i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "11148i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "11148i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "11160i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "11160i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "11184i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "11184i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "25i"
    },
    {
      "time": "11196i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11196i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11220i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "11220i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "11232i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11232i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11256i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "11256i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "11268i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "11268i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "11292i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "11292i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "11316i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "11316i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "11340i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "11340i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "11352i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "11352i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "11376i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "11376i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "11388i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11388i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11412i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "11412i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "11424i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11424i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11448i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "11448i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "11460i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "11460i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "11484i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "11484i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "11508i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "11508i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "11532i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "11532i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "11544i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "11544i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11568i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "11568i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "11580i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11580i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11604i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "11604i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "25i"
    },
    {
      "time": "11616i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "11616i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "11640i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "11640i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "11652i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "11652i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "11676i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "11676i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "11700i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "11700i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "12108i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12108i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "12120i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "12120i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12144i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "12144i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "12156i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12156i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12180i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12180i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "12192i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12192i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12216i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "12216i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "12228i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12228i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "12252i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "12252i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "12276i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "12276i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "12300i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "12300i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "12312i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "12312i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12336i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "12336i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "12348i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12348i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12372i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "12372i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12384i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12384i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12408i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "12408i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "12420i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12420i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "12444i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "12444i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "12468i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "12468i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "12492i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "12492i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12504i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "12504i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12528i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "12528i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "12540i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12540i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12564i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "12564i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12576i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12576i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "12600i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "12600i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "12612i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "12612i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12636i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "12636i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "12660i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "12660i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "12684i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12684i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "12696i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12696i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "12720i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "12720i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "12732i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12732i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12756i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "12756i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12768i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12768i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12792i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "12792i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "12804i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12804i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "12828i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "12828i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "12852i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "12852i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "12876i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "12876i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "12888i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "12888i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12912i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "12912i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "12924i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12924i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12948i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "12948i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "12960i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "12960i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "12984i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "12984i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "12996i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "12996i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "13020i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "13020i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "13044i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "13044i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "13068i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "13068i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "13080i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13080i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "13104i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "13104i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "13116i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "13116i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13140i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "13140i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "13152i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "13152i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13176i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "13176i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "13188i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "13188i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "13212i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "13212i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "13236i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "13236i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "13260i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "13260i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "13272i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "13272i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13296i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "13296i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "13308i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "13308i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13332i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "13332i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "13344i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13344i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "13368i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "13368i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "13380i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "13380i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "13404i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "13404i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "13428i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "13428i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "13452i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "13452i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "13464i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "13464i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13488i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "13488i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "13500i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "13500i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13524i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "13524i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "13536i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "13536i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "13560i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "13560i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "13572i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "13572i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "13596i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "13596i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "13620i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "13620i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "15948i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "15948i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "15960i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "15960i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "15984i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "15984i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "15996i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "15996i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16020i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "16020i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "16032i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16032i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16056i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "16056i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16068i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "16068i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "16092i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "16092i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "16116i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "16116i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "16140i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "16140i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16152i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "16152i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "16176i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "16176i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "16188i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16188i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16212i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "16212i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "16224i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16224i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16248i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "16248i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16260i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "16260i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "16284i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "16284i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "16308i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "16308i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "16332i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "16332i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16344i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16344i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "16368i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "16368i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "16380i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16380i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16404i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "16404i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "16416i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16416i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16440i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "16440i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16452i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "16452i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "16476i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "16476i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "16500i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "16500i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "16524i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "16524i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "16536i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "16536i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "16560i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "16560i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "16572i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16572i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16596i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "16596i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "16608i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16608i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16632i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "16632i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16644i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "16644i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "16668i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "16668i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "16692i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "16692i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "16716i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "16716i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16728i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "16728i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16752i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "16752i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "16764i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16764i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16788i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "16788i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "16800i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16800i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "16824i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16824i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "16836i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "16836i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "16860i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "16860i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "16884i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "16884i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "16908i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "16908i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "16920i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "16920i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16944i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "16944i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "16956i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16956i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "16980i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "16980i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "16992i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "16992i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "17016i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "17016i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "17028i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "17028i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "17052i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "17052i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "17076i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "17076i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "17100i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "17100i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "17112i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "17112i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "17136i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "17136i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "17148i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "17148i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "17172i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "17172i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "17184i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "17184i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "17208i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "17208i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "17220i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "17220i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "1i"
    },
    {
      "time": "17244i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "17244i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "17268i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "17268i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "17292i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "17292i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "17304i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "17304i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "17328i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "17328i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "17340i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "17340i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "17364i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "17364i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "17376i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "17376i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "17400i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "17400i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "17412i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "17412i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "17436i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "17436i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "17460i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "17460i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "19020i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "19020i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "19032i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "19032i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "19056i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "19056i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "19068i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19068i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19092i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "19092i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "19104i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19104i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19128i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19128i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "19140i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "19140i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "19164i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "19164i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "19188i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "19188i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "19212i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19212i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "19224i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19224i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "19248i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "19248i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "19260i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19260i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19284i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "19284i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "19296i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19296i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "19320i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "19320i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19332i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "19332i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "19356i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "19356i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "19380i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "19380i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "19404i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "19404i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "19416i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19416i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "19440i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "19440i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "19452i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19452i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19476i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "19476i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "19488i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19488i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19512i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "19512i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19524i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "19524i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "19548i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "19548i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "19572i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "19572i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "19596i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "19596i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19608i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "19608i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19632i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "19632i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "19644i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19644i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19668i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "19668i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "19680i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19680i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19704i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "19704i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19716i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "19716i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "19740i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "19740i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "19764i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "19764i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "19788i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "19788i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19800i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "19800i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19824i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "19824i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "19836i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19836i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19860i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "19860i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "19872i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "19872i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "19896i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19896i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "19908i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "19908i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "19932i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "19932i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "19956i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "19956i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "19980i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "19980i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "19992i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "19992i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20016i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "20016i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20028i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20028i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20052i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "20052i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20064i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20064i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20088i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "20088i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "20100i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "20100i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20124i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "20124i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "20148i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "20148i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "20172i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20172i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20184i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "20184i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20208i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "20208i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20220i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20220i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20244i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "20244i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20256i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20256i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "20280i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "20280i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "20292i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "20292i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20316i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "20316i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "20340i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "20340i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "20364i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20364i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20376i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20376i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "20400i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "20400i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20412i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20412i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20436i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "20436i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20448i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20448i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20472i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "20472i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "20484i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20484i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "20508i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "20508i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "20532i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "20532i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "20556i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20556i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "20568i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "20568i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20592i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20592i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "25i"
    },
    {
      "time": "20604i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20604i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20628i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "20628i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20640i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20640i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20664i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "20664i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "25i"
    },
    {
      "time": "20676i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "20676i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20700i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "20700i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "20724i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "20724i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "20748i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "20748i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "20760i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "20760i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20784i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "20784i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20796i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20796i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20820i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "20820i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "20832i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20832i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20856i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "20856i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "20868i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "20868i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20892i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "20892i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "20916i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "20916i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "20940i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "20940i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "20952i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "20952i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "20976i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "20976i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "20988i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "20988i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21012i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21012i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "21024i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21024i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21048i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "21048i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21060i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "21060i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21084i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "21084i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "21108i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "21108i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "21132i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21132i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "21144i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21144i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "21168i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "21168i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "21180i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21180i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21204i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "21204i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21216i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21216i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21240i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "21240i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21252i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "21252i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21276i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "21276i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "21300i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "21300i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "21324i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "21324i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21336i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "21336i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21360i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "21360i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "21372i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21372i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21396i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "21396i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21408i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21408i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21432i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "21432i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21444i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "21444i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21468i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "21468i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "21492i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "21492i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "21516i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "21516i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21528i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "21528i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21552i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "21552i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "21564i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21564i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21588i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "21588i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21600i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21600i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21624i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "21624i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21636i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "21636i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21660i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "21660i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "21684i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "21684i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "21708i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "21708i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21720i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "2i"
    },
    {
      "time": "21720i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21744i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "21744i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "21756i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21756i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21780i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "21780i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21792i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21792i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21816i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "21816i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "21828i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "21828i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21852i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "14i"
    },
    {
      "time": "21852i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "21876i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "21876i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    },
    {
      "time": "21900i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21900i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "25i"
    },
    {
      "time": "21912i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "21912i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21936i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5984251968503937,
      "duration": "26i"
    },
    {
      "time": "21936i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6220472440944882,
      "duration": "26i"
    },
    {
      "time": "21948i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21948i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "21972i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "26i"
    },
    {
      "time": "21972i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "26i"
    },
    {
      "time": "21984i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.6535433070866141,
      "duration": "2i"
    },
    {
      "time": "21984i",
      "midiNote": 90,
      "noteName": "F#6",
      "velocity": 0.6377952755905512,
      "duration": "2i"
    },
    {
      "time": "22008i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "25i"
    },
    {
      "time": "22008i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "26i"
    },
    {
      "time": "22020i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6062992125984252,
      "duration": "2i"
    },
    {
      "time": "22020i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "22044i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6614173228346457,
      "duration": "13i"
    },
    {
      "time": "22044i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6062992125984252,
      "duration": "14i"
    },
    {
      "time": "22068i",
      "midiNote": 89,
      "noteName": "F6",
      "velocity": 0.6377952755905512,
      "duration": "14i"
    },
    {
      "time": "22068i",
      "midiNote": 85,
      "noteName": "C#6",
      "velocity": 0.6456692913385826,
      "duration": "14i"
    }
//   ]
// }






          ]).start(0);