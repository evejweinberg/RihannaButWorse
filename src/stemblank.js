var stem2 = new Tone.Part(function(time, note){
      synth.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [
    


          ]).start(0);