function move_(a) {
    switch(a){
	   case "forward":
	      player.x += 40*dir[0];
		  player.y += -40*dir[1];
		  return;
	   case "backward":
	      player.x += -40*dir[0]
		  player.y += 40*dir[1]
		  return;
	}
	throw "Unknown path way '"+a+"'."
}
var turn__ = function(a,b){
    switch(a){
	   case 90:
	      var radians = Math.atan2(dir[1],dir[0]);
		  var degrees = radians * (180/Math.PI);
		  if (b == 'right') {
		    turn__(90,'left');
			turn__(90,'left');
			turn__(90,'left');
		    return;
		  }
		  degrees += 90;
		  radians = degrees * (Math.PI/180);
		  dir = [Math.round(Math.cos(radians)),Math.round(Math.sin(radians))];
		  break;
	   case 180:
	      turn(90,'left');
		  turn(90,'left');
	}
};
var touchingFinish__ = function(){
    var blueblock = [];
	for (var i=0; i<paths.length; i++){
	  if (paths[i].c == c.b1 || paths[i].c == c.b2){
	    blueblock.push(paths[i]);
	  }
	};
	if (blueblock.length < 1) throw new Error("Cannot find the finish.");
	blueblock = blueblock[0];
	return (player.x == blueblock.x) && (player.y == blueblock.y);
}
workspace.addChangeListener(Blockly.Events.disableOrphans);
function initApi(interpreter, globalObject) {
  // Add an API function for the move('forward / backward') block.
  var wrapper = function(a){return move_(arguments.length ? a : 'forward')};
  interpreter.setProperty(globalObject, 'move',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(id) {
    return workspace.highlightBlock(id);
  };
  interpreter.setProperty(globalObject, 'highlightBlock',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(a,b) {return turn__(((a != 90 && a != 180) ? 180 : a),b)};
  interpreter.setProperty(globalObject, 'turn',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(){
    return __checkBlocks();
  }
  interpreter.setProperty(globalObject, '__checkBlocks',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(a){
    return isThere(a);
  }
  interpreter.setProperty(globalObject, 'isThere',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(){
    return touchingFinish__();
  }
  interpreter.setProperty(globalObject, 'touchingFinish',
      interpreter.createNativeFunction(wrapper));
}
function result(a){
    setTimeout(function(a){
	  workspace.highlightBlock('');
	  var level_XY = [[360,40],[400,360],[320,80],[280,280],[120,360],[120,400],[80,80]]; // Finish
	  var level_start_XY = [[40,40],[40,120],[40,80],[0,360],[40,40],[40,400],[360,360]]; // Start
	  var level_directions = [[1,0],[1,0],[1,0],[1,0],[0,-1],[0,1],[0,1]]; // Directions
	  
	  var level_XY_current = level_XY[Number(levelno)-1];
	  var level_start_XY_current = level_start_XY[Number(levelno)-1];
	  var level_directions_current = level_directions[Number(levelno)-1];
	  
	  
	  if (player.x == level_XY_current[0] && player.y == level_XY_current[1]){
	    Blockly.congrats(Blockly.Msg["ALERT_SUCCESS"].split("%1").join(levelno),function(){window.location.href = "?level="+(Number(levelno)+1)+"&lang="+lang;});
		stepper = null;
	  } else if (a === 1) { // Means that player touched a black block.
	     Blockly.alert(Blockly.Msg["ALERT_FAIL_LAVA"]);
	  } else if (a === 2) { // Means that player is off the screen.
	     Blockly.alert(Blockly.Msg["ALERT_FAIL_OUTSIDE"]);
	  } else if (a === 3) { // For stopping the code.
	     var a = document.getElementById("run");
		 var b = document.getElementById("stop");
	     a.disabled = false;
         b.disabled = true;
		 stepper = null;
		 console.log("Stopped the code!")
	  } else if (a === true) {
	     Blockly.alert(Blockly.Msg["ALERT_FAIL"]);
	  }
	  player.x = level_start_XY_current[0]; player.y = level_start_XY_current[1]; dir = level_directions_current;
	},1000,a);
}