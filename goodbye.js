(function(window) {

    var byespeak ={};
  

    var speakwrd = "bye";
  

    byespeak.speak = function(name) {
      console.log(speakwrd + " " + name);
    }
  
    window.byespeak = byespeak;

  
  })(window);