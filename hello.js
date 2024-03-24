(function(window){

    var hello = {};


    var speakwrd = "hello";


    hello.speak = function (name) {
      console.log(speakwrd + " " + name);
    }

    window.hello = hello;


  }
)(window);