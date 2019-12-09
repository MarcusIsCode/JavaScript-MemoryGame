<img src="https://media.giphy.com/media/LuTTpUgOtgZVK/giphy.gif" width="100%">


# JavaScript-MemoryGame

## Asignment
Make a memory game with only hmtl,css and JavaSrcipt

## Instalment
* Enter this webbsite [https://memoryiscode.netlify.com/](https://memoryiscode.netlify.com/)
* Or download the rapsotory and open in the index.html file in your browser

## Testers
* [Mark Dela Cruz](https://github.com/deinnielle)
* [Bernhard Stedt](https://github.com/Vehx)

## Codereview by: [Camilla Kylmänen Sjörén](https://github.com/camiwd)
function.js:211 - when the code is finished, remember to remove the console.log(s) 
stats.css:11 if the list of players (statsContainer) contains many players it overflows the “Reset”- and “New Player”-buttons. Add overflow: scroll to stats.css to avoid this
If I play and make it to level 2, but then press the button “New player”, the grid is still styled as ‘.gridTwo’ even if the new grid only has 16 cards. Maybe add the classList ‘.gridOne’ when the user press the button New player?
Try to keep your syntax consistent. Sometimes there is no space after curly brackets (i.e. functions.js:184 & functions.js:188) and sometimes there is a lot of space (i.e. functions.js:146 & buttonEvents.js:55). 
Good job and fun to be able to track the scores in the statsContainer :)

### Licence 
MIT-license
