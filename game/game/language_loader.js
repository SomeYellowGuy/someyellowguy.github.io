/**
 *   Goal: Load the correct language and then load the other stuff.
 */

var getParameters = function(name, defaultValue) { // Taken from Blockly code.js
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};
// Get the language (Default is English).
var lang = getParameters("lang","en");
// Set the array.
var arrayfiles = [];
var i = -1;

var loadfile1 = function(){
	i = 0;
	arrayfiles[i] = document.createElement('script');
    arrayfiles[i].src = "game/blocks.js";
    arrayfiles[i].onload = loadfile2;

    document.head.appendChild(arrayfiles[i]);
}
var loadfile2 = function(){
	i = 1;
	arrayfiles[i] = document.createElement('script');
    arrayfiles[i].src = "game/levels.js";
    arrayfiles[i].onload = loadfile3;

    document.head.appendChild(arrayfiles[i]);
}
var loadfile3 = function(){
	i = 2;
	arrayfiles[i] = document.createElement('script');
    arrayfiles[i].src = "game/player.js";
    arrayfiles[i].onload = loadfile4;

    document.head.appendChild(arrayfiles[i]);
}
var loadfile4 = function(){
	i = 3;
	arrayfiles[i] = document.createElement('script');
    arrayfiles[i].src = "game/block_generators.js";
    arrayfiles[i].onload = loadfile5;

    document.head.appendChild(arrayfiles[i]);
}
var loadfile5 = function(){
	i = 4;
	arrayfiles[i] = document.createElement('script');
    arrayfiles[i].src = "game/core.js";
    arrayfiles[i].onload = loadfile6;

    document.head.appendChild(arrayfiles[i]);
}
var loadfile6 = function(){
	i = 5;
	arrayfiles[i] = document.createElement('script');
    arrayfiles[i].src = "game/core2.js";
    arrayfiles[i].onload = loadfile7;

    document.head.appendChild(arrayfiles[i]);
}
var loadfile7 = function(){
	i = 6;
	arrayfiles[i] = document.createElement('script');
    arrayfiles[i].src = "game/html_lang.js";

    document.head.appendChild(arrayfiles[i]);
	
	console.log("SUCCESSFUL: Loaded all files!")
}

/**
  *  Then load the correct language.
  *  Code is from stack overflow post (14521482)
  *  LINK: https://stackoverflow.com/a/14521482
  */
  
var langs = ["en","fr"];

if (langs.indexOf(lang) == -1) {
	console.warn("Language '"+lang+"' doesn't exist. Switching to 'en'.")
	lang = 'en';
}
  
var langload = document.createElement('script');
langload.src = "msg/" + lang + ".js";
langload.onload = loadfile1;

document.head.appendChild(langload);

var elem_ = document.getElementById("lang")

selectElement(elem_, lang)

function selectElement(a, valueToSelect) {    
    a.value = valueToSelect;
}

elem_.options[elem_.selectedIndex].id = lang;

elem_.addEventListener("change",function(){
  window.location.href = "?level="+levelno+"&lang="+document.getElementById('lang').value;
});