(function(){
  
  var INIT_WPM = parseInt(prompt('Enter (approximate) raw WPM:')), ACCURACY = prompt('Enter (approximate) accuracy in decimal form:'), VAR_WPM, raw_wpm, error = function(){document.dispatchEvent(new KeyboardEvent("keydown",{key:'|',keyCode:220}));}
  VAR_WPM = (INIT_WPM + INIT_WPM * 0.05);

  function fluctuate(min, max) {
    return Math.random() * (max - min) + min;
  }

  function type() {
    var key = document.querySelector('.current').innerHTML;
    var keyCode = document.querySelector('.current').innerHTML.toUpperCase().charCodeAt(0);
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: key,
        keyCode: keyCode
      })
    );
  }

  function randomError() {
    if (Math.random() > ACCURACY) {
      return error();
    }
  }

  (function interval() {
    var raw_wpm = document.querySelector('.raw-wpm').childNodes[1].innerHTML.replace('wpm', '')
    if (raw_wpm < (INIT_WPM - INIT_WPM * 0.05)) {
      if (VAR_WPM < INIT_WPM * 1.4) {
        VAR_WPM = VAR_WPM + INIT_WPM * fluctuate(0.15, 0.2)
      }
    }
    else if (raw_wpm > (INIT_WPM + INIT_WPM * 0.1)) {
      if (VAR_WPM > INIT_WPM * 0.825) {
        VAR_WPM = VAR_WPM - INIT_WPM * fluctuate(0.05, 0.1)
      }
    }
    else {
      VAR_WPM = VAR_WPM + INIT_WPM * fluctuate(-0.11, 0.115)
    }
    setTimeout(function() {
      type();
      randomError();
      interval();  
    }, 12000/VAR_WPM);
  }());
  
})();
