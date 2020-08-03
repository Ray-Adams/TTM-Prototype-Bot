# TheTypingMatch Prototype Bot
A mediocre typing bot for TheTypingMatch.com prototype.

## Installation
Copy and paste the code below into the URL section of a new bookmark.

<details>
  <summary><strong>Tip</strong></summary>
  <br>
  <p>Triple-click on the code block below to quickly copy the bookmarklet's contents.</p>
</details>

```javascript
javascript:(()=>{var e,r="Enter (approximate) ",t=parseInt(prompt(r+"raw WPM:")),a=prompt(r+"accuracy in decimal form:"),n=document;e=t+.05*t,fluctuate=((e,r)=>Math.random()*(r-e)+e),type=(()=>{var e=n.querySelector(".current").innerHTML,r=e.toUpperCase().charCodeAt(0);n.dispatchEvent(new KeyboardEvent("keydown",{key:e,keyCode:r}))}),randomError=(()=>{Math.random()>a&&n.dispatchEvent(new KeyboardEvent("keydown",{key:"|",keyCode:220}))}),(interval=(()=>{var r=n.querySelector(".raw-wpm").childNodes[1].innerHTML.replace("wpm","");r<t-.05*t?e<1.4*t&&(e+=t*fluctuate(.15,.2)):r>t+.1*t?e>.825*t&&(e-=t*fluctuate(.05,.1)):e+=t*fluctuate(-.11,.115),setTimeout(function(){type(),randomError(),interval()},12e3/e)}))()})();
```
**NOTE**: You can view the beautified file here: [bot.js](../master/bot.js)

## Usage
1. Go to TheTypingMatch's typing prototype at: http://thetypingmatch.com/test
2. Click on the bookmarklet, and you will be prompted for raw WPM and accuracy as a decimal (e.g. 0.97).
3. Aftering completing both prompts, the bot will immediately begin to type, fluctuating both WPM and accuracy around your input.

## Compatibility
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
