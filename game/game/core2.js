document.getElementById("run").addEventListener("click",function(){
  Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  console.log("Execute: \n"+Blockly.JavaScript.workspaceToCode(workspace));
  var stepper = new Interpreter(Blockly.JavaScript.workspaceToCode(workspace),initApi);
  var nextStep = function(a) {
    if (a !== true) a = false;
	if (a) {
	document.getElementById("run").disabled = true;
	document.getElementById("stop").disabled = false;
	}
    var isg = true;
    for (var i=0; i<paths_danger.length; i++){
	   if (player.x == paths_danger[i][0] && player.y == paths_danger[i][1]) isg = 1;
	}
	if (player.y > 400 || player.y < 0 || player.x < 0 || player.x > 440) isg = 2;
    if (stepper.step() && (isg === true)) {
      setTimeout(nextStep, 105 - document.getElementById('speed').value);
    } else {
	  document.getElementById("run").disabled = false;
      document.getElementById("stop").disabled = true;
	  result(isg);
	}
  }
  nextStep(true);
});
/**
    Function: __checkBlocks
    Args: none
	What it does: Takes the 4 nearest blocks (-x, -y, +x, +y), and returns them in {
	   -x
	   -y
	   +x
	   +y
	}
	For each item it returns: {
	  true - It is a grass block.
	  false - It is a black block.
	  null - No block in the position.
	  '$CUSTOM' - Custom block?
	  'NOT' - Not recongized.
	}
*/
var __checkBlocks = function(){
   var x = player.x;
   var y = player.y;
   var blocks = {};
   var isGreen = function(a){
     if (a.c == c.s1 || a.c == c.s2) return false;
	 if (a.c == c.g1 || a.c == c.g2) return true;
	 return 'NOT';
   }
   for (var i = 0; i < paths.length; i++) {
      var bx = paths[i].x
	  var by = paths[i].y;
	  var difx = Math.abs(x - bx);
	  var _difx = x - bx;
	  difx /= 40;
	  var _dify = y - by;
	  var dify = Math.abs(y - by);
	  dify /= 40;
      if ((difx == 1 && dify == 0) || (difx == 0 && dify == 1)) {
	     var part = (difx == 1) ? (_difx == 40 ? ("-x") : ("+x")) : (_dify == 40 ? ("+y") : ("-y")) // ( IF X [IF NEG,POS]) ( IF Y [IF POS,NEG])
	     blocks[part] = isGreen(paths[i]);
	  }
   }
   if (typeof blocks["-x"] === "undefined") blocks["-x"] = null;
   if (typeof blocks["-y"] === "undefined") blocks["-y"] = null;
   if (typeof blocks["+x"] === "undefined") blocks["+x"] = null;
   if (typeof blocks["+y"] === "undefined") blocks["+y"] = null;
   return blocks;
}
  document.getElementById("seecode").addEventListener("click",function(){
       Blockly.JavaScript.STATEMENT_PREFIX = '';
	   Blockly.JavaScript.INFINITE_LOOP_TRAP = '';
	   var code = Blockly.JavaScript.workspaceToCode(workspace);
	   Blockly.code(code);
  });
 
var elem = document.getElementById("b");
setInterval(function(){
   elem.innerHTML = mes_maxblock;
   elem.style.color = mes_maxblocks_color;
},50)

/**
  Function: isThere
  Args: dir - left, right, ahead
  What it does: Check if there is space in a path
  Dependencies: __checkBlocks [function]
*/
var isThere = function(dir_){
  switch(dir_){
    case "ahead":
	   var degrees = Math.atan2(dir[0],dir[1]) * (180 / Math.PI)
	   var temp_d = "";
	   break;
	case "left":
	   var degrees = Math.atan2(dir[0],dir[1]) * (180 / Math.PI) - 90;
	   if (degrees == -180) degrees = 180;
	   var temp_d = "";
	   break;
	case "right":
	   var degrees = Math.atan2(dir[0],dir[1]) * (180 / Math.PI) + 90;
	   if (degrees == 270) degrees = -90;
	   var temp_d = "";
	   break;
  }
  console.log(degrees);
  switch(degrees){
         case -360:
		   temp_d = "+y"
		   break;
         case 360:
		   temp_d = "+y"
		   break;
         case 90:
		   temp_d = "+x"
		   break;
	     case -270:
		   temp_d = "+x"
		   break;
		 case 0:
		   temp_d = "+y"
		   break;
		 case -90:
		   temp_d = "-x";
		   break;
		 case 270:
		   temp_d = "-x";
		   break;
		 case -180:
		   temp_d = "-y";
           break;		   
		 case 180:
		   temp_d = "-y";
		   break;
  }
  var blocks = __checkBlocks();
  var b__= blocks[temp_d];
  console.log(temp_d);
  return !!b__;
}
document.getElementById('stop').disabled = true;
document.getElementById('stop').addEventListener("click",function(){
     result(3);
});
document.getElementById('levelselect').addEventListener("click",function(){
	window.location.href = 'level.html?level='+levelno+'&lang='+lang;
});