var clear = function() {
    canvas.clearRect(0, 0, 1000,1000);
}
var paths_danger = [];
var paths_ = {};
var d = []
paths_.update = function(){
for (var i=0; i<paths.length; i++) {
    try {
      paths[i].update();
	  if (paths[i].c == c.s1 || paths[i].c == c.s2) paths_danger.push([paths[i].x,paths[i].y]);
	} catch(e){
	  if (d.indexOf(i) != -1) {
	   console.warn("Error trying to update (one-index-based) #"+(i+1)+"! Try to fix it!");
	   d.push(i);
	  }
	}
  }
}
paths_.update();
function updateGameArea() {
  clear();
  paths_.update();
  player.update();
  if (dir[0] === 1 && dir[1] === 0) {
       directionplayer.x = player.x + 27;
       directionplayer.y = player.y + 14;
  } else if (dir[0] === -1 && dir[1] === 0) {
	   directionplayer.x = player.x + 2;
       directionplayer.y = player.y + 14;
  } else if (dir[0] === 0 && dir[1] === 1) {
	   directionplayer.x = player.x + 14;
       directionplayer.y = player.y + 2;
  } else if (dir[0] === 0 && dir[1] === -1) {
	   directionplayer.x = player.x + 14;
	   directionplayer.y = player.y + 27;
  }
  directionplayer.update();
}
canvas.interval = setInterval(updateGameArea, 20);
function restartlevel(){
     switch(levelno){
	    case "1":
		   player.x = 40;
		   player.y = 40;
	 }
}