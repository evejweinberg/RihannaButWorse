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
    // {
//   "10 - SoCal Kit drums": [
    {
      "time": "384i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7874015748031497,
      "duration": "1i"
    },
    {
      "time": "432i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7874015748031497,
      "duration": "1i"
    },
    {
      "time": "480i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7874015748031497,
      "duration": "1i"
    },
    {
      "time": "528i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7874015748031497,
      "duration": "1i"
    },
    {
      "time": "588i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "600i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "624i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "636i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "660i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "672i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "696i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "708i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "732i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "756i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "780i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "792i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "816i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "828i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "852i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "864i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "888i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "900i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "924i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "948i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "972i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "984i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1008i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "1020i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1044i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1056i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1080i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1092i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1116i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "1140i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1164i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1176i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1200i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "1212i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1236i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1248i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1272i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1284i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1308i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "1332i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1356i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1368i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1392i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "1404i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1428i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1440i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1464i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1476i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1500i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "1524i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1548i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1560i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1584i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "1596i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1620i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1632i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1656i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1668i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1692i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "1716i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1740i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1752i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1776i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "1788i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1812i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1824i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1848i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1860i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1884i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "1908i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1932i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1944i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "1968i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "1980i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2004i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2016i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2040i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2052i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2076i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "2100i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2124i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2136i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2160i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "2172i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2196i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2208i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2232i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2244i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2268i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "2292i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2316i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2328i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2352i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "2364i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2388i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2400i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2424i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2436i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2460i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "2484i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2508i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2520i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2544i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "2556i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2580i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2592i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2616i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2628i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2652i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "2676i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2700i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2712i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2736i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "2748i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2772i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2784i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2808i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2820i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2844i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "2868i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2880i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "2880i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "2880i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "2880i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "2892i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2904i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2928i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "2928i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "2940i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2964i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "2976i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "2976i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3000i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3012i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3024i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "3036i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "3060i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3072i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "3084i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3096i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3120i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "3120i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "3132i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3156i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3168i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3168i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "3192i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3204i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3216i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "3228i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "3252i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3264i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "3276i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3288i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3312i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "3312i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "3324i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3348i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3360i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "3360i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3384i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3396i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3408i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "3420i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "3444i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3456i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "3468i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3480i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3504i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "3504i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "3516i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3540i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3552i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "3552i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3576i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3588i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3600i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "3612i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "3636i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3648i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "3660i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3672i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3696i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "3696i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "3708i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3732i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3744i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3744i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "3768i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3780i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3792i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "3804i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "3828i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3840i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "3852i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3864i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3888i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "3888i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "3900i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3924i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3936i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "3936i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3960i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3972i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "3984i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "3996i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "4020i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4032i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "4044i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4056i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4080i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "4080i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "4092i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4116i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4128i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4128i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "4152i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4164i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4176i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "4188i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "4212i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4224i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "4236i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4248i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4272i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "4272i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "4284i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4308i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4320i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "4320i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4344i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4356i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4368i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "4380i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "4404i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4416i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "4416i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "4428i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4440i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4464i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "4464i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "4476i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4500i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4512i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4512i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "4536i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4548i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4560i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "4572i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "4596i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4608i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "4620i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4632i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4656i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "4656i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "4668i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4692i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4704i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "4704i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4728i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4740i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4752i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "4764i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "4788i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4800i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "4812i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4824i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4848i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "4848i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "4860i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4884i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4896i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "4896i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4920i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4932i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4944i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "4956i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "4980i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "4992i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "5004i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5016i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5040i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "5040i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "5052i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5076i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5088i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "5088i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5112i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5124i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5136i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "5148i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "5172i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5184i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "5196i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5208i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5232i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "5232i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "5244i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5268i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5280i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "5280i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5304i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5316i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5328i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "5340i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "5364i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5376i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "5388i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5400i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5424i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "5424i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "5436i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5460i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5472i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "5472i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5496i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5508i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5520i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "5532i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "5556i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5568i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "5580i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5592i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5616i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "5616i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "5628i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5652i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5664i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "5664i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5688i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5700i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5712i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "5724i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "5748i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5760i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "5772i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5784i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5808i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "5808i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "5820i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5844i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5856i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "5856i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5880i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5892i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5904i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "5916i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "5940i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "5952i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "5988i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6000i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "6024i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6048i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6084i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "6096i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "6120i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "6144i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6180i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "6192i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "6216i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "6240i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "6276i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "6288i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "6312i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "6336i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "6372i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6384i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "6408i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6432i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6468i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "6480i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "6504i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "6528i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6564i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "6576i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "6600i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "6624i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "6660i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "6672i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "6696i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "6720i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.23622047244094488,
      "duration": "1i"
    },
    {
      "time": "6720i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "6732i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.23622047244094488,
      "duration": "1i"
    },
    {
      "time": "6744i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2440944881889764,
      "duration": "1i"
    },
    {
      "time": "6756i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.25196850393700787,
      "duration": "1i"
    },
    {
      "time": "6756i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6768i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.25984251968503935,
      "duration": "1i"
    },
    {
      "time": "6768i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "6780i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2677165354330709,
      "duration": "1i"
    },
    {
      "time": "6792i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2755905511811024,
      "duration": "1i"
    },
    {
      "time": "6792i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6804i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.28346456692913385,
      "duration": "1i"
    },
    {
      "time": "6816i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6816i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.29133858267716534,
      "duration": "1i"
    },
    {
      "time": "6828i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2992125984251969,
      "duration": "1i"
    },
    {
      "time": "6840i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.30708661417322836,
      "duration": "1i"
    },
    {
      "time": "6852i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "6852i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "6864i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3228346456692913,
      "duration": "1i"
    },
    {
      "time": "6864i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "6876i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "6888i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.33858267716535434,
      "duration": "1i"
    },
    {
      "time": "6888i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "6900i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "6912i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "6912i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3543307086614173,
      "duration": "1i"
    },
    {
      "time": "6924i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.36220472440944884,
      "duration": "1i"
    },
    {
      "time": "6936i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3700787401574803,
      "duration": "1i"
    },
    {
      "time": "6948i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3779527559055118,
      "duration": "1i"
    },
    {
      "time": "6948i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "6960i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3858267716535433,
      "duration": "1i"
    },
    {
      "time": "6960i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "6972i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3937007874015748,
      "duration": "1i"
    },
    {
      "time": "6984i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4015748031496063,
      "duration": "1i"
    },
    {
      "time": "6984i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "6996i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4094488188976378,
      "duration": "1i"
    },
    {
      "time": "7008i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.41732283464566927,
      "duration": "1i"
    },
    {
      "time": "7008i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "7020i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4251968503937008,
      "duration": "1i"
    },
    {
      "time": "7032i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4330708661417323,
      "duration": "1i"
    },
    {
      "time": "7044i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "7044i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4409448818897638,
      "duration": "1i"
    },
    {
      "time": "7056i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.44881889763779526,
      "duration": "1i"
    },
    {
      "time": "7056i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "7068i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4566929133858268,
      "duration": "1i"
    },
    {
      "time": "7080i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "7080i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4645669291338583,
      "duration": "1i"
    },
    {
      "time": "7092i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.47244094488188976,
      "duration": "1i"
    },
    {
      "time": "7104i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.47244094488188976,
      "duration": "1i"
    },
    {
      "time": "7104i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "7116i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "7128i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "7140i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "7140i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "7152i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "7152i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "7164i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "7176i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "7176i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "7188i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7200i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "7200i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "7212i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "7224i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5511811023622047,
      "duration": "1i"
    },
    {
      "time": "7236i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5590551181102362,
      "duration": "1i"
    },
    {
      "time": "7236i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "7248i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "7248i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5669291338582677,
      "duration": "1i"
    },
    {
      "time": "7260i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5748031496062992,
      "duration": "1i"
    },
    {
      "time": "7272i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5826771653543307,
      "duration": "1i"
    },
    {
      "time": "7272i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "7284i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5905511811023622,
      "duration": "1i"
    },
    {
      "time": "7296i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5984251968503937,
      "duration": "1i"
    },
    {
      "time": "7296i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "7308i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6062992125984252,
      "duration": "1i"
    },
    {
      "time": "7308i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "7320i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6141732283464567,
      "duration": "1i"
    },
    {
      "time": "7320i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "7332i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "7332i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "7344i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "7344i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6299212598425197,
      "duration": "1i"
    },
    {
      "time": "7344i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "7356i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "7356i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "7368i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "7368i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6456692913385826,
      "duration": "1i"
    },
    {
      "time": "7380i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "7380i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "7392i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "7392i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "7404i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "7404i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "7416i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6771653543307087,
      "duration": "1i"
    },
    {
      "time": "7416i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "7428i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "7428i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "7440i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "7440i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "7440i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "7440i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "7440i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "7488i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7488i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "7488i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "7500i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7512i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7512i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "7512i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7524i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "7524i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "7536i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "7536i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "7536i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "7536i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7536i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7536i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "7548i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7560i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7560i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7572i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "7572i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7572i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7584i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "7584i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7584i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7584i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7608i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7608i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7608i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "7620i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7620i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "7620i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "7632i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7632i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "7632i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "7632i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7644i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "7656i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7656i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7668i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7668i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "7668i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7680i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7680i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "7680i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7692i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7704i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7704i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "7704i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7716i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "7716i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "7728i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7728i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "7728i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "7728i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7728i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "7728i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "7740i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7752i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "7752i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7764i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7764i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7764i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "7776i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "7776i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "7776i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7776i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7800i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7800i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7800i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7812i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7812i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7812i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "7824i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "7824i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "7824i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7824i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "7836i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "7848i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "7848i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7860i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "7860i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7860i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "7872i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "7872i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "7872i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7884i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7896i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "7896i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7896i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7908i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "7908i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "7920i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "7920i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "7920i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "7920i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "7920i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "7920i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "7932i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7944i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7944i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "7956i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "7956i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7956i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "7968i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7968i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "7968i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "7968i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "7992i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "7992i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "7992i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8004i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8004i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "8004i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8016i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8016i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "8016i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8016i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "8028i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "8040i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8040i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "8052i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8052i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "8052i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "8064i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "8064i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "8064i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "8076i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8088i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8088i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8088i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "8100i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8100i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "8112i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "8112i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "8112i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "8112i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "8112i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8112i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8124i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8136i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "8136i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8148i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "8148i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8148i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8160i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8160i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8160i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "8160i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8184i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8184i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "8184i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "8196i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "8196i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "8196i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8208i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "8208i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "8208i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "8208i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8220i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "8232i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8232i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8244i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8244i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "8244i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "8256i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "8256i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8256i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "8268i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8280i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8280i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8280i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8292i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "8292i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8304i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "8304i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "8304i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8304i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "8304i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "8304i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8316i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8328i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "8328i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8340i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8340i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "8340i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "8352i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "8352i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "8352i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8352i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8376i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8376i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "8376i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8388i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "8388i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "8388i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8400i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8400i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "8400i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "8400i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8412i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "8424i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8424i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "8436i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8436i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8436i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8448i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "8448i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8448i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8460i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8472i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8472i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8472i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8484i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "8484i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8496i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "8496i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "8496i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8496i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "8496i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8496i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "8508i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8520i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8520i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8532i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8532i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8532i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8544i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "8544i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8544i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "8544i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "8568i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8568i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "8568i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8580i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8580i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8580i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "8592i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "8592i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "8592i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8592i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "8604i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "8616i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "8616i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8628i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8628i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8628i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "8640i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "8640i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8640i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "8652i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8664i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8664i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8664i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8676i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "8676i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8688i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8688i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "8688i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "8688i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "8688i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "8688i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "8700i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8712i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8712i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "8724i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8724i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "8724i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "8736i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "8736i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8736i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8736i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8760i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8760i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8760i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "8772i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8772i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8772i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "8784i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "8784i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "8784i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8784i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8796i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "8808i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "8808i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8820i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8820i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "8820i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "8832i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8832i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "8832i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "8844i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8856i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8856i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "8856i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8868i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "8868i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8880i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "8880i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "8880i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "8880i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8880i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8880i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "8892i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8904i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8904i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "8916i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "8916i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8916i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8928i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "8928i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "8928i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "8928i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8952i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8952i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "8952i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "8964i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "8964i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "8964i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "8976i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "8976i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "8976i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "8976i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "8988i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "9000i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "9000i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "9012i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "9012i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "9012i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "9024i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "9024i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "9024i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "9072i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "9072i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "9120i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "9120i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "9168i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "9168i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "9216i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "9216i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "9264i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "9264i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "9312i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "9312i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "9360i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "9360i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "9408i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "9408i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "9456i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "9456i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "9504i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "9504i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "9552i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "9552i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "9600i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "9600i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "9648i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "9648i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "9696i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "9696i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "9744i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "9744i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "9792i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "9792i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "9840i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "9840i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "9888i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "9888i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "9936i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "9936i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "9984i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "9984i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "10032i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10032i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "10080i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "10080i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "10128i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "10128i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "10176i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "10176i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "10200i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10200i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "10212i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "10212i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "10224i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "10224i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "10224i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "10248i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10248i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "10260i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "10260i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "10272i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10272i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "10272i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "10296i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10296i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "10308i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10308i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "10320i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10320i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "10320i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "10344i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10344i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "10356i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "10356i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "10368i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "10368i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "10368i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "10392i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "10392i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10404i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10404i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "10416i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10416i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "10416i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "10440i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10440i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "10452i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "10452i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "10464i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "10464i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10464i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "10488i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "10488i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "10500i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "10500i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "10512i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "10512i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "10512i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "10536i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10536i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "10548i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "10548i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "10560i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "10560i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "10560i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "10560i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "10572i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10584i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10584i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10584i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "10596i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "10596i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "10608i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "10608i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10608i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "10608i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "10620i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10632i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10632i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "10644i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "10644i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "10644i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10656i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "10656i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10656i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "10656i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10680i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10680i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10680i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "10692i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10692i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "10692i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10704i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10704i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "10704i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "10716i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "10728i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "10728i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10740i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "10740i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "10740i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10752i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "10752i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "10752i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "10764i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10776i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10776i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10776i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "10788i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "10788i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10800i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10800i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "10800i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "10800i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10812i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10824i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10824i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "10836i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "10836i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10836i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "10848i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "10848i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "10848i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10848i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10872i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "10872i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10872i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "10884i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "10884i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10884i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "10896i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "10896i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "10896i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "10908i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "10920i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10920i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "10932i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "10932i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10932i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "10944i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "10944i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "10944i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10956i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10968i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "10968i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "10968i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "10980i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "10980i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "10992i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "10992i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "10992i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "10992i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "11004i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11016i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11016i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "11028i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "11028i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "11028i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11040i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "11040i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11040i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11040i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "11064i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11064i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "11064i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11076i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11076i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "11076i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11088i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "11088i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "11088i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11100i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "11112i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11112i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "11124i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "11124i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11124i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "11136i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "11136i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "11136i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "11148i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11160i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11160i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11160i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "11172i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11172i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "11184i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "11184i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "11184i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "11184i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11196i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11208i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11208i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "11220i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "11220i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11220i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "11232i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11232i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "11232i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "11232i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11256i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11256i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "11256i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "11268i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "11268i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "11268i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11280i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "11280i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "11280i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "11292i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "11304i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11304i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "11316i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "11316i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11316i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "11328i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "11328i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11328i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "11340i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11352i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11352i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11352i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "11364i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "11364i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "11376i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "11376i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "11376i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11376i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "11388i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11400i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11400i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "11412i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "11412i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11412i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "11424i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "11424i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "11424i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11424i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11448i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11448i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11448i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "11460i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "11460i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11460i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11472i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "11472i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "11472i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11484i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "11496i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11496i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "11508i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11508i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "11508i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "11520i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "11520i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "11520i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "11532i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11544i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11544i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11544i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "11556i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11556i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "11568i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "11568i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11568i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "11568i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11580i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11592i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11592i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "11604i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "11604i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11604i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "11616i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "11616i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11616i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11616i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "11640i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "11640i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "11640i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11652i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "11652i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11652i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "11664i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "11664i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "11664i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "11676i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "11688i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11688i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "11700i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11700i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "11700i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "11712i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "11712i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11712i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.1889763779527559,
      "duration": "1i"
    },
    {
      "time": "11724i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2047244094488189,
      "duration": "1i"
    },
    {
      "time": "11736i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11736i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2204724409448819,
      "duration": "1i"
    },
    {
      "time": "11748i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "11748i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.23622047244094488,
      "duration": "1i"
    },
    {
      "time": "11748i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "11760i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.25196850393700787,
      "duration": "1i"
    },
    {
      "time": "11760i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "11772i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2677165354330709,
      "duration": "1i"
    },
    {
      "time": "11784i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.7952755905511811,
      "duration": "1i"
    },
    {
      "time": "11784i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.28346456692913385,
      "duration": "1i"
    },
    {
      "time": "11784i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11796i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "11796i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2992125984251969,
      "duration": "1i"
    },
    {
      "time": "11808i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "11808i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11820i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "11820i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11832i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11832i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "11844i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.36220472440944884,
      "duration": "1i"
    },
    {
      "time": "11844i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11856i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3779527559055118,
      "duration": "1i"
    },
    {
      "time": "11856i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "11856i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11868i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3937007874015748,
      "duration": "1i"
    },
    {
      "time": "11880i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "11880i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4094488188976378,
      "duration": "1i"
    },
    {
      "time": "11880i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11892i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "11892i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4251968503937008,
      "duration": "1i"
    },
    {
      "time": "11904i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "11904i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4409448818897638,
      "duration": "1i"
    },
    {
      "time": "11904i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "11916i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4566929133858268,
      "duration": "1i"
    },
    {
      "time": "11928i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.47244094488188976,
      "duration": "1i"
    },
    {
      "time": "11928i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11940i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "11940i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "11940i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11952i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "11952i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11964i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "11976i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "11976i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "11976i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8188976377952756,
      "duration": "1i"
    },
    {
      "time": "11988i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5511811023622047,
      "duration": "1i"
    },
    {
      "time": "11988i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "12000i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12000i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5669291338582677,
      "duration": "1i"
    },
    {
      "time": "12012i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5826771653543307,
      "duration": "1i"
    },
    {
      "time": "12012i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "12024i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "12024i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5984251968503937,
      "duration": "1i"
    },
    {
      "time": "12036i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "12036i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6141732283464567,
      "duration": "1i"
    },
    {
      "time": "12048i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6299212598425197,
      "duration": "1i"
    },
    {
      "time": "12048i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "12048i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "12096i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "12096i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "12096i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "12096i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "12108i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12120i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12120i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12120i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "12132i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "12132i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "12144i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "12144i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12144i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "12144i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "12144i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12144i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12156i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12168i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12168i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12180i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "12180i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "12180i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12192i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "12192i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12192i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "12192i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12192i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12216i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12216i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12216i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12228i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12228i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12228i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "12240i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "12240i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "12240i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "12240i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12240i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12252i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "12264i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12264i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "12276i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12276i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "12276i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12288i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12288i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "12288i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12288i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "12300i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12312i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12312i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12312i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "12324i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "12324i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12336i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12336i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "12336i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "12336i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12336i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "12336i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "12348i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12360i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12360i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12372i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12372i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12372i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12384i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "12384i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12384i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "12384i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "12384i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12408i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12408i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12408i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12420i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12420i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12420i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12432i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "12432i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "12432i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12432i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12432i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "12444i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "12456i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12456i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "12468i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "12468i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12468i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "12480i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "12480i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "12480i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12480i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12492i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12504i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12504i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12504i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12516i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "12516i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "12528i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "12528i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12528i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "12528i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "12528i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "12528i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "12540i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12552i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "12552i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12564i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12564i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "12564i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "12576i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "12576i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12576i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "12576i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12576i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12600i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12600i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12600i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12612i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12612i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "12612i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12624i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "12624i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "12624i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "12624i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12624i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "12636i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "12648i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12648i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "12660i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12660i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "12660i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "12672i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12672i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "12672i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "12672i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "12684i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12696i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12696i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12696i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12708i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "12708i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12720i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "12720i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "12720i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12720i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "12720i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "12720i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12732i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12744i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12744i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12756i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "12756i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12756i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "12768i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "12768i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "12768i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12768i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "12768i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12792i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12792i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12792i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "12804i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "12804i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12804i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12816i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "12816i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "12816i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "12816i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12816i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "12828i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "12840i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12840i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12852i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "12852i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "12852i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12864i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12864i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "12864i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "12864i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "12876i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12888i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12888i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12888i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "12900i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "12900i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "12912i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "12912i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "12912i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12912i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12912i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "12912i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "12924i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12936i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12936i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "12948i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12948i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12948i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "12960i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "12960i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12960i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "12960i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12960i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "12984i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "12984i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "12984i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12996i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "12996i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "12996i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "13008i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "13008i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "13008i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "13008i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "13008i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13020i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "13032i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "13032i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13044i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13044i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13044i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "13056i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "13056i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "13056i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "13056i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13068i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13080i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13080i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13080i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "13092i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "13092i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "13104i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "13104i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "13104i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "13104i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13104i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "13104i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13116i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13128i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "13128i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13140i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13140i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13140i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "13152i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "13152i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "13152i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13152i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "13152i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "13176i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13176i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13176i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "13188i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13188i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "13188i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13200i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "13200i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "13200i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "13200i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "13200i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13212i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "13224i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "13224i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13236i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "13236i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13236i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "13248i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13248i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "13248i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "13248i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "13260i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13272i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "13272i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13272i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13284i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "13284i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "13296i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "13296i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "13296i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "13296i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "13296i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "13296i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "13308i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13320i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "13320i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13332i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "13332i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13332i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "13344i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13344i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "13344i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13344i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "13344i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "13368i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13368i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13368i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "13380i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13380i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13380i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "13392i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "13392i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "13392i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "13392i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "13392i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13404i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "13416i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "13416i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13428i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "13428i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13428i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "13440i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "13440i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "13440i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "13440i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "13452i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13464i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13464i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "13464i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13476i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13476i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "13488i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "13488i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "13488i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "13488i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "13488i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "13488i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13500i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13512i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "13512i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13524i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13524i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "13524i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "13536i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "13536i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "13536i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13536i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "13536i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13560i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "13560i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "13560i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13572i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "13572i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13572i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "13584i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "13584i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "13584i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "13584i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "13584i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "13596i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "13608i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "13608i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "13620i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "13620i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "13620i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "13632i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "13632i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "13668i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "13704i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "13740i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6771653543307087,
      "duration": "1i"
    },
    {
      "time": "13776i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7795275590551181,
      "duration": "1i"
    },
    {
      "time": "13800i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "13824i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "13860i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "13896i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "13932i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "13968i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "13992i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "14016i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "14052i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7559055118110236,
      "duration": "1i"
    },
    {
      "time": "14088i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7401574803149606,
      "duration": "1i"
    },
    {
      "time": "14124i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "14160i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "14184i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "14208i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7401574803149606,
      "duration": "1i"
    },
    {
      "time": "14244i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7165354330708661,
      "duration": "1i"
    },
    {
      "time": "14280i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7086614173228346,
      "duration": "1i"
    },
    {
      "time": "14316i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "14352i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7637795275590551,
      "duration": "1i"
    },
    {
      "time": "14376i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.4566929133858268,
      "duration": "1i"
    },
    {
      "time": "14400i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "14436i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "14472i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "14508i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6771653543307087,
      "duration": "1i"
    },
    {
      "time": "14544i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7795275590551181,
      "duration": "1i"
    },
    {
      "time": "14568i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "14592i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "14628i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "14664i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "14700i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "14736i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "14760i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "14784i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "14820i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7559055118110236,
      "duration": "1i"
    },
    {
      "time": "14856i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7401574803149606,
      "duration": "1i"
    },
    {
      "time": "14892i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "14928i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "14952i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "14976i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7401574803149606,
      "duration": "1i"
    },
    {
      "time": "15012i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7165354330708661,
      "duration": "1i"
    },
    {
      "time": "15048i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7086614173228346,
      "duration": "1i"
    },
    {
      "time": "15084i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "15120i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7637795275590551,
      "duration": "1i"
    },
    {
      "time": "15144i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.4566929133858268,
      "duration": "1i"
    },
    {
      "time": "15168i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "15204i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "15240i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "15276i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6771653543307087,
      "duration": "1i"
    },
    {
      "time": "15312i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7795275590551181,
      "duration": "1i"
    },
    {
      "time": "15336i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "15360i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "15396i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "15432i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "15468i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "15504i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "15528i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "15552i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "15588i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7559055118110236,
      "duration": "1i"
    },
    {
      "time": "15624i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7401574803149606,
      "duration": "1i"
    },
    {
      "time": "15660i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "15696i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "15720i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "15744i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7401574803149606,
      "duration": "1i"
    },
    {
      "time": "15780i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7165354330708661,
      "duration": "1i"
    },
    {
      "time": "15816i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7086614173228346,
      "duration": "1i"
    },
    {
      "time": "15852i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "15888i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7637795275590551,
      "duration": "1i"
    },
    {
      "time": "15912i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.4566929133858268,
      "duration": "1i"
    },
    {
      "time": "15936i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "15936i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "15948i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "15960i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "15984i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "15984i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "15996i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16020i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16032i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16032i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "16056i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16068i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16080i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "16092i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "16116i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16128i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "16140i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16152i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16176i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "16176i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "16188i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16212i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16224i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16224i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "16248i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16260i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16272i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "16284i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "16308i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16320i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "16332i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16344i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16368i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "16368i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "16380i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16404i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16416i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "16416i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16440i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16452i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16464i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "16476i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "16500i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16512i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "16524i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16536i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16560i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "16560i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "16572i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16596i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16608i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "16608i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16632i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16644i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16656i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "16668i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "16692i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16704i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "16716i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16728i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16752i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "16752i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "16764i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16788i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16800i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16800i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "16824i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16836i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16848i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "16860i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "16884i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16896i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "16908i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16920i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16944i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "16944i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "16956i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16980i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "16992i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "16992i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17016i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17028i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17040i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "17052i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "17076i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17088i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "17100i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17112i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17136i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "17136i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "17148i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17172i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17184i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "17184i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17208i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17220i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17232i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "17244i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "17268i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17280i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "17292i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17304i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17328i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "17328i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "17340i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17364i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17376i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17376i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "17400i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17412i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17424i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "17436i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "17460i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "17472i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "17508i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "17520i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "17544i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "17568i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "17604i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "17616i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "17640i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "17664i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "17700i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "17712i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "17736i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "17760i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "17796i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "17808i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "17832i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "17856i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "17892i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "17904i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "17928i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "17952i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "17988i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "18000i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "18024i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "18048i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18084i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18096i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "18120i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "18144i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "18180i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18192i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "18216i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "18240i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18240i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.23622047244094488,
      "duration": "1i"
    },
    {
      "time": "18252i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.23622047244094488,
      "duration": "1i"
    },
    {
      "time": "18264i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2440944881889764,
      "duration": "1i"
    },
    {
      "time": "18276i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.25196850393700787,
      "duration": "1i"
    },
    {
      "time": "18276i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18288i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.25984251968503935,
      "duration": "1i"
    },
    {
      "time": "18288i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "18300i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2677165354330709,
      "duration": "1i"
    },
    {
      "time": "18312i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18312i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2755905511811024,
      "duration": "1i"
    },
    {
      "time": "18324i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.28346456692913385,
      "duration": "1i"
    },
    {
      "time": "18336i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18336i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.29133858267716534,
      "duration": "1i"
    },
    {
      "time": "18348i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.2992125984251969,
      "duration": "1i"
    },
    {
      "time": "18360i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.30708661417322836,
      "duration": "1i"
    },
    {
      "time": "18372i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "18372i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "18384i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3228346456692913,
      "duration": "1i"
    },
    {
      "time": "18384i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "18396i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "18408i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.33858267716535434,
      "duration": "1i"
    },
    {
      "time": "18408i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "18420i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "18432i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18432i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3543307086614173,
      "duration": "1i"
    },
    {
      "time": "18444i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.36220472440944884,
      "duration": "1i"
    },
    {
      "time": "18456i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3700787401574803,
      "duration": "1i"
    },
    {
      "time": "18468i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3779527559055118,
      "duration": "1i"
    },
    {
      "time": "18468i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18480i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3858267716535433,
      "duration": "1i"
    },
    {
      "time": "18480i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "18492i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.3937007874015748,
      "duration": "1i"
    },
    {
      "time": "18504i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "18504i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4015748031496063,
      "duration": "1i"
    },
    {
      "time": "18516i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4094488188976378,
      "duration": "1i"
    },
    {
      "time": "18528i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.41732283464566927,
      "duration": "1i"
    },
    {
      "time": "18528i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "18540i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4251968503937008,
      "duration": "1i"
    },
    {
      "time": "18552i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4330708661417323,
      "duration": "1i"
    },
    {
      "time": "18564i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4409448818897638,
      "duration": "1i"
    },
    {
      "time": "18564i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18576i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.44881889763779526,
      "duration": "1i"
    },
    {
      "time": "18576i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "18588i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4566929133858268,
      "duration": "1i"
    },
    {
      "time": "18600i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4645669291338583,
      "duration": "1i"
    },
    {
      "time": "18600i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "18612i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.47244094488188976,
      "duration": "1i"
    },
    {
      "time": "18624i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.47244094488188976,
      "duration": "1i"
    },
    {
      "time": "18624i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18636i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "18648i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "18660i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18660i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "18672i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "18672i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "18684i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "18696i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "18696i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18708i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "18720i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18720i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "18732i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "18744i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5511811023622047,
      "duration": "1i"
    },
    {
      "time": "18756i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5590551181102362,
      "duration": "1i"
    },
    {
      "time": "18756i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "18768i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "18768i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5669291338582677,
      "duration": "1i"
    },
    {
      "time": "18780i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5748031496062992,
      "duration": "1i"
    },
    {
      "time": "18792i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5826771653543307,
      "duration": "1i"
    },
    {
      "time": "18792i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "18804i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5905511811023622,
      "duration": "1i"
    },
    {
      "time": "18816i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.5984251968503937,
      "duration": "1i"
    },
    {
      "time": "18816i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18828i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6062992125984252,
      "duration": "1i"
    },
    {
      "time": "18828i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18840i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6141732283464567,
      "duration": "1i"
    },
    {
      "time": "18840i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "18852i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6220472440944882,
      "duration": "1i"
    },
    {
      "time": "18852i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18864i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18864i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6299212598425197,
      "duration": "1i"
    },
    {
      "time": "18864i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "18876i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "18876i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18888i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6456692913385826,
      "duration": "1i"
    },
    {
      "time": "18888i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "18900i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6535433070866141,
      "duration": "1i"
    },
    {
      "time": "18900i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8976377952755905,
      "duration": "1i"
    },
    {
      "time": "18912i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "18912i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "18924i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6692913385826772,
      "duration": "1i"
    },
    {
      "time": "18924i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "18936i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "18936i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6771653543307087,
      "duration": "1i"
    },
    {
      "time": "18948i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "18948i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18960i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "18960i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "18960i",
      "midiNote": 38,
      "noteName": "D2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "18960i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8740157480314961,
      "duration": "1i"
    },
    {
      "time": "18960i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "19008i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "19008i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "19008i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19020i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19032i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19032i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19032i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19044i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "19044i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "19056i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19056i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "19056i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19056i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "19056i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "19056i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19068i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19080i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19080i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19092i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19092i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "19092i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19104i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19104i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "19104i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19104i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "19128i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "19128i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19128i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19140i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19140i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "19140i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "19152i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19152i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19152i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "19152i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19164i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "19176i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19176i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "19188i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19188i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19188i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "19200i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19200i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19200i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "19212i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19224i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19224i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19224i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "19236i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "19236i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19248i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "19248i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19248i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "19248i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19248i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19248i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19260i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19272i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19272i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "19284i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19284i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19284i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19296i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "19296i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19296i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19296i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19320i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19320i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "19320i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19332i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19332i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19332i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19344i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19344i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19344i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19344i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19356i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "19368i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19368i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "19380i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19380i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19380i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "19392i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19392i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "19392i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19404i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19416i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19416i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19416i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "19428i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "19428i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19440i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "19440i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19440i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "19440i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "19440i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "19440i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "19452i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19464i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19464i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19476i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "19476i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19476i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19488i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19488i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19488i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "19488i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19512i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19512i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19512i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19524i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19524i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19524i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19536i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19536i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "19536i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "19536i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19548i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "19560i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19560i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19572i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "19572i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19572i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "19584i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "19584i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "19584i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19596i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19608i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19608i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19608i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "19620i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19620i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "19632i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "19632i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19632i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "19632i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19632i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "19632i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "19644i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19656i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19656i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "19668i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "19668i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19668i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "19680i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "19680i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "19680i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19680i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19704i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "19704i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19704i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19716i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "19716i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "19716i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19728i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19728i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "19728i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "19728i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "19740i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "19752i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19752i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "19764i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "19764i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19764i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "19776i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19776i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "19776i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "19788i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19800i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19800i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "19800i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19812i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "19812i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "19824i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19824i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19824i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19824i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "19824i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "19824i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "19836i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19848i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19848i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "19860i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "19860i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19860i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "19872i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19872i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19872i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19872i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "19896i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "19896i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19896i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19908i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "19908i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "19908i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19920i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19920i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "19920i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19920i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19932i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "19944i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19944i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19956i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19956i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19956i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "19968i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19968i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "19968i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "19980i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "19992i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "19992i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "19992i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20004i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "20004i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "20016i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20016i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "20016i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20016i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "20016i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20016i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "20028i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20040i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "20040i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20052i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20052i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20052i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20064i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "20064i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20064i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20064i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20088i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20088i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20088i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20100i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20100i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20100i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20112i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20112i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20112i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20112i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20124i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "20136i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20136i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "20148i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "20148i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20148i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20160i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20160i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "20160i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "20172i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20184i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20184i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "20184i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20196i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "20196i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "20208i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "20208i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "20208i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "20208i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "20208i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20208i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "20220i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20232i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20232i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "20244i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "20244i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20244i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "20256i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20256i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20256i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "20256i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20280i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "20280i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20280i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20292i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20292i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20292i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20304i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "20304i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "20304i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20304i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20316i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "20328i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20328i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "20340i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20340i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "20340i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "20352i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "20352i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "20352i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "20364i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20376i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20376i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20376i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20388i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20388i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20400i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "20400i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20400i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "20400i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "20400i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "20400i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20412i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20424i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20424i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20436i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20436i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20436i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "20448i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "20448i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20448i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20448i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20472i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "20472i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20472i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "20484i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "20484i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "20484i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20496i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "20496i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "20496i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20496i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "20508i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "20520i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20520i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20532i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20532i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20532i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "20544i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "20544i",
      "midiNote": 49,
      "noteName": "C#3",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "20544i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "20544i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "20556i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20568i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20568i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20568i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20580i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "20580i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20592i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20592i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20592i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "20592i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "20592i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "20592i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20604i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20616i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20616i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20628i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "20628i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20628i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "20640i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20640i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20640i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "20640i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "20640i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20664i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "20664i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20664i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20676i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20676i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "20676i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "20688i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20688i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "20688i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20688i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "20688i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20700i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "20712i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20712i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20724i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20724i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20724i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "20736i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "20736i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20736i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "20736i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20748i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20760i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "20760i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20760i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20772i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20772i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "20784i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20784i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "20784i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20784i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20784i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20784i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "20796i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20808i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20808i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20820i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20820i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20820i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "20832i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20832i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "20832i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20832i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "20832i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20856i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20856i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20856i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20868i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20868i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20868i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "20880i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20880i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "20880i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "20880i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20880i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "20892i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "20904i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "20904i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20916i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20916i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20916i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "20928i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20928i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "20928i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "20928i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "20940i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20952i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "20952i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "20952i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "20964i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "20964i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "20976i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "20976i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "20976i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "20976i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "20976i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "20976i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "20988i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21000i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21000i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "21012i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "21012i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21012i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "21024i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21024i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21024i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21024i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "21024i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21048i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21048i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21048i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21060i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21060i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21060i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21072i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21072i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "21072i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21072i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "21072i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "21084i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "21096i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "21096i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21108i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "21108i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21108i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "21120i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21120i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "21120i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "21120i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "21132i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21144i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21144i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21144i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "21156i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21156i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21168i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "21168i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21168i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "21168i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21168i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "21168i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21180i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21192i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21192i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21204i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21204i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "21204i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "21216i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21216i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21216i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21216i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21216i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "21240i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "21240i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "21240i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21252i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "21252i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "21252i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21264i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "21264i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "21264i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "21264i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "21264i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21276i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "21288i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21288i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "21300i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21300i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "21300i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "21312i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "21312i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21312i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "21312i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21324i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21336i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21336i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21336i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21348i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "21348i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "21360i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21360i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21360i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "21360i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "21360i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "21360i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21372i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21384i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21384i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21396i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "21396i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21396i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "21408i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21408i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21408i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "21408i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "21408i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21432i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21432i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21432i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "21444i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "21444i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "21444i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21456i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.84251968503937,
      "duration": "1i"
    },
    {
      "time": "21456i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "21456i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "21456i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21456i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "21468i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "21480i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21480i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.48031496062992124,
      "duration": "1i"
    },
    {
      "time": "21492i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21492i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21492i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21504i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "21504i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21504i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "21504i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21516i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21528i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21528i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21528i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "21540i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7244094488188977,
      "duration": "1i"
    },
    {
      "time": "21540i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21552i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21552i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "21552i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21552i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.905511811023622,
      "duration": "1i"
    },
    {
      "time": "21552i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "21552i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21564i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21576i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "21576i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21588i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21588i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21588i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21600i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21600i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "21600i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "21600i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21600i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "21624i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21624i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21624i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "21636i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "21636i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21636i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21648i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9133858267716536,
      "duration": "1i"
    },
    {
      "time": "21648i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "21648i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21648i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8661417322834646,
      "duration": "1i"
    },
    {
      "time": "21648i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21660i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "21672i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21672i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "21684i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6377952755905512,
      "duration": "1i"
    },
    {
      "time": "21684i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21684i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21696i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21696i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21696i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "21696i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "21708i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21720i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21720i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21720i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21732i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7480314960629921,
      "duration": "1i"
    },
    {
      "time": "21732i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "21744i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "21744i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.889763779527559,
      "duration": "1i"
    },
    {
      "time": "21744i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "21744i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "21744i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21744i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7716535433070866,
      "duration": "1i"
    },
    {
      "time": "21756i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21768i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21768i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21780i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21780i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5039370078740157,
      "duration": "1i"
    },
    {
      "time": "21780i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "21792i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "21792i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21792i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21792i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21792i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21816i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21816i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21816i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21828i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21828i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21828i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "21840i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8818897637795275,
      "duration": "1i"
    },
    {
      "time": "21840i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21840i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21840i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.937007874015748,
      "duration": "1i"
    },
    {
      "time": "21840i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "21852i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "21864i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21864i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21876i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6850393700787402,
      "duration": "1i"
    },
    {
      "time": "21876i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.4881889763779528,
      "duration": "1i"
    },
    {
      "time": "21876i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21888i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8346456692913385,
      "duration": "1i"
    },
    {
      "time": "21888i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "21888i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "21888i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9291338582677166,
      "duration": "1i"
    },
    {
      "time": "21900i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21912i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21912i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21912i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.49606299212598426,
      "duration": "1i"
    },
    {
      "time": "21924i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21924i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "21936i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21936i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.33070866141732286,
      "duration": "1i"
    },
    {
      "time": "21936i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21936i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "21936i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21936i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "21948i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21960i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "21960i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21972i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5118110236220472,
      "duration": "1i"
    },
    {
      "time": "21972i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6614173228346457,
      "duration": "1i"
    },
    {
      "time": "21972i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21984i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "21984i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "21984i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "21984i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8503937007874016,
      "duration": "1i"
    },
    {
      "time": "21984i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "22008i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8031496062992126,
      "duration": "1i"
    },
    {
      "time": "22008i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5354330708661418,
      "duration": "1i"
    },
    {
      "time": "22008i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "22020i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.6929133858267716,
      "duration": "1i"
    },
    {
      "time": "22020i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "22020i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    },
    {
      "time": "22032i",
      "midiNote": 35,
      "noteName": "B1",
      "velocity": 0.8582677165354331,
      "duration": "1i"
    },
    {
      "time": "22032i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.9212598425196851,
      "duration": "1i"
    },
    {
      "time": "22032i",
      "midiNote": 40,
      "noteName": "E2",
      "velocity": 0.9448818897637795,
      "duration": "1i"
    },
    {
      "time": "22032i",
      "midiNote": 57,
      "noteName": "A3",
      "velocity": 0.5196850393700787,
      "duration": "1i"
    },
    {
      "time": "22032i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8110236220472441,
      "duration": "1i"
    },
    {
      "time": "22044i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.31496062992125984,
      "duration": "1i"
    },
    {
      "time": "22056i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.8267716535433071,
      "duration": "1i"
    },
    {
      "time": "22056i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5275590551181102,
      "duration": "1i"
    },
    {
      "time": "22068i",
      "midiNote": 42,
      "noteName": "F#2",
      "velocity": 0.7322834645669292,
      "duration": "1i"
    },
    {
      "time": "22068i",
      "midiNote": 82,
      "noteName": "A#5",
      "velocity": 0.5433070866141733,
      "duration": "1i"
    },
    {
      "time": "22068i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.3464566929133858,
      "duration": "1i"
    }
//   ]
// }






          ]).start(0);