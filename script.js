(
    function(){

  
      var names = ["mohamed", "sara", "ziad", "adam", "khalid", "rania", "samir", "younes", "amal", "sana"];

      for ( var i = 0; i < names.len; i++) {

        var firstlet =names[i].charAt(0);
        

        if (firstlet.toLocaleLowerCase() == "j") {
            byespeak.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
      }
  
    }
  )();