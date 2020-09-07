(() => {
  
    var INIT_WPM = parseInt(prompt('Enter (approximate) raw WPM:')), ACCURACY = prompt('Enter (approximate) accuracy in decimal form:'), VAR_WPM;
    VAR_WPM = (INIT_WPM + INIT_WPM * 0.05);
  
    fluctuate = (min, max) => Math.random() * (max - min) + min;

    error = () => {
        document.dispatchEvent(
            new KeyboardEvent("keydown", {key: '|', keyCode: 220})
        )
    }
  
    type = () => {
      var keyCode = document.querySelector('.current').innerHTML.toUpperCase().charCodeAt(0);
      document.dispatchEvent(
        new KeyboardEvent("keydown", {
          keyCode: keyCode
        })
      )
    }
  
    randomError = () => {
      if (Math.random() > ACCURACY) {
        return error();
      }
    }
  
    (interval = () => {
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
      setTimeout(() => {
        type();
        randomError();
        interval();  
      }, 12000/VAR_WPM)
    })();
    
  })();
  
