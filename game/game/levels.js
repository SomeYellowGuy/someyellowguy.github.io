var canvas = document.getElementById("a").getContext("2d");
var can = document.getElementById("a");
function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.c = color;
  ctx = canvas;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.update = function(){
    ctx = canvas;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
var dir = [1,0];
var paths = [];
var c = {};
c.g1 = "#00ff00";
c.g2 = "#00dd00";
c.b1 = "#0000ee";
c.b2 = "#0000cc";
c.s1 = "#000000";
c.s2 = "#444444";
c.t1 = "#aaffaa";
c.t2 = "#666666";
switch(levelno){
  case "1":
     // W, H, color, X, Y
	 for (var i=-1; i<12; i++){
      paths[i+8] = new component(40,40,eval("c.s"+(i%2+1)),40*i-40,80);
	 }
	 for (var i=-1; i<12; i++){
      paths[i+21] = new component(40,40,eval("c.s"+(i%2+1)),40*i-40,0);
	 }
	 for (var i=0; i<8; i++){
      paths[i] = new component(40,40,eval("c.g"+(i%2+1)),40*i+40,40);
	 }
	 paths[33] = new component(40,40,c.s1,400,40);
	 paths[34] = new component(40,40,c.s1,0,40);
	 paths[8] = new component(40,40,c.b1,360,40);
     var player = new component(40, 40, "red",40, 40);
	 var directionplayer = new component(10,10,"#ff8888",40,40)
	 Blockly.goal(Blockly.Msg["GOAL_LEV_1"],function(){
	    Blockly.how(Blockly.Msg["HELP_LEV_1"])
	 },1)
	 break;
  case "2":
	 for (var i=0; i<12; i++){
      paths[i] = new component(40,40,eval("c.s"+(i%2+1)),40*i,80);
	 }
	 paths[12] = new component(40,40,c.s2,0,120)
	 for (var i=0; i<10; i++){
      paths[i+13] = new component(40,40,eval("c.s"+(i%2+1)),40*i,160);
	 }
	 for (var i=0; i<10; i++){
      paths[i+23] = new component(40,40,eval("c.g"+(i%2+1)),40*i+40,120);
	 }
	 for (var i=2; i<9; i++){
      paths[i+31] = new component(40,40,eval("c.g"+((i+1)%2+1)),400,40*i+40);
	 }
	 for (var i=1; i<10; i++){
      paths[i+39] = new component(40,40,eval("c.s"+(i%2+1)),440,40*i+40);
	 }
	 for (var i=1; i<7; i++){
      paths[i+48] = new component(40,40,eval("c.s"+((i+1)%2+1)),360,40*i+160);
	 }
	 paths[55] = new component(40,40,c.s1,400,400);
	 var player = new component(40, 40, "red",40, 120);
	 var directionplayer = new component(10,10,"#ff8888",40,120)
	 paths[56] = new component(40,40,c.b1,400,360);
	 
	 Blockly.goal(Blockly.Msg["GOAL_LEV_2"],function(){
	    Blockly.how(Blockly.Msg["HELP_LEV_2"]);
	 },2)
	 break;
  case "3":
  // Black and grey part.
     for (var i=0; i<7; i++){
      paths[i] = new component(40,40,eval("c.s"+(i%2+1)),40*i,40);
	 }
	  paths[7] = new component(40,40,c.s2,0,80);
	 for (var i=0; i<6; i++){
      paths[i+8] = new component(40,40,eval("c.s"+(i%2+1)),40*i,120);
	 }
	 for (var i=0; i<7; i++){
      paths[i+14] = new component(40,40,eval("c.s"+(i%2+1)),200,40*i+160);
	 }
	 for (var i=0; i<4; i++){
      paths[i+21] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+240,400);
	 }
	 for (var i=0; i<10; i++){
      paths[i+25] = new component(40,40,eval("c.s"+((i+1)%2+1)),360,40*i+40);
	 }
	 for (var i=0; i<2; i++){
      paths[i+35] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+280,40);
	 }
	 for (var i=0; i<7; i++){
      paths[i+37] = new component(40,40,eval("c.s"+(i%2+1)),280,40*i+80);
	 }
	 // Green part.
	 for (var i=1; i<6; i++){
      paths[i+43] = new component(40,40,eval("c.g"+(i%2+1)),40*i,80);
	 }
	 for (var i=0; i<8; i++){
      paths[i+49] = new component(40,40,eval("c.g"+(i%2+1)),240,40*i+80);
	 }
	 for (var i=0; i<7; i++){
      paths[i+57] = new component(40,40,eval("c.g"+((i+1)%2+1)),320,40*i+120);
	 }
	 paths[64] = new component(40,40,c.g1,280,360);
	 // Finish (blue spot).
	 paths[65] = new component(40,40,c.b1,320,80);
	 // Player (red square).
	 var player = new component(40, 40, "red",40, 80);
	 var directionplayer = new component(10,10,"#ff8888",40,80)
	 Blockly.goal(Blockly.Msg["GOAL_LEV_3"],function(){
	    Blockly.how(Blockly.Msg["HELP_LEV_3"])
	 },3);
	 break;
  case "4":
     //Message
	 Blockly.goal(Blockly.Msg["GOAL_LEV_4"],function(){
	    Blockly.how(Blockly.Msg["HELP_LEV_4A"],function(){
		   Blockly.how(Blockly.Msg["HELP_LEV_4B"])
		},4)
	 },4);
	 // Black and grey part.
	 for (var i=0; i<11; i++){
      paths[i] = new component(40,40,eval("c.s"+(i%2+1)),40*i,400);
	 }
	 for (var i=0; i<10; i++){
      paths[i+11] = new component(40,40,eval("c.s"+(i%2+1)),400,40*i);
	 }
	 for (var i=0; i<11; i++){
      paths[i+21] = new component(40,40,eval("c.s"+(i%2+1)),40*i,0);
	 }
	 for (var i=0; i<9; i++){
      paths[i+32] = new component(40,40,eval("c.s"+(i%2+1)),0,40*i);
	 }
	 for (var i=0; i<8; i++){
      paths[i+41] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+40,320);
	 }
	 for (var i=0; i<6; i++){
      paths[i+49] = new component(40,40,eval("c.s"+(i%2+1)),320,40*i+80);
	 }
	 for (var i=0; i<6; i++){
      paths[i+55] = new component(40,40,eval("c.s"+(i%2+1)),40*i+80,80);
	 }
	 for (var i=0; i<4; i++){
      paths[i+61] = new component(40,40,eval("c.s"+((i+1)%2+1)),80,40*i+120);
	 }
	 for (var i=0; i<5; i++){
      paths[i+65] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+120,240);
	 }
	 for (var i=0; i<5; i++){
      paths[i+70] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+120,160);
	 }
	 for (var i=0; i<5; i++){
      paths[i+75] = new component(40,40,eval("c.s"+(i%2+1)),40*i+120,120);
	 }
	 for (var i=0; i<5; i++){
      paths[i+80] = new component(40,40,eval("c.s"+(i%2+1)),40*i+120,200);
	 }
	 for (var i=0; i<5; i++){
	  for (var j=0; j<3; j++) {
	   paths[(i*3)+j+85] = new component(40,40,eval("c.t"+((((i*3)+j)%2+1))),40*i+120,120+j*40);
	  }
	 }
	 // Green part.
	 var player = new component(40, 40, "red",0, 360);
	 var directionplayer = new component(10,10,"#ff8888",0,360)
	 for (var i=0; i<10; i++){
       paths[i+100] = new component(40,40,eval("c.g"+(i%2+1)),40*i,360);
	 }
	 for (var i=0; i<8; i++){
      paths[i+110] = new component(40,40,eval("c.g"+(i%2+1)),360,40*i+80);
	 }
	 for (var i=0; i<9; i++){
       paths[i+118] = new component(40,40,eval("c.g"+((i+1)%2+1)),40*i+40,40);
	 }
	 for (var i=0; i<6; i++){
      paths[i+127] = new component(40,40,eval("c.g"+(i%2+1)),40,40*i+80);
	 }
	 for (var i=0; i<5; i++){
       paths[i+133] = new component(40,40,eval("c.g"+(i%2+1)),40*i+80,280);
	 }
	 paths[138] = new component(40,40,eval("c.b2"),40*i+80,280);
	 break;
  case "5":
     dir = [0,-1];
	 Blockly.goal(Blockly.Msg["GOAL_LEV_5"],function(){
	    Blockly.how(Blockly.Msg["HELP_LEV_5"])},4);
	 var player = new component(40, 40, "red",40, 40);
	 var directionplayer = new component(10,10,"#ff8888",40,40)
	 // Black and grey part.
	 // Exterior
	 for (var i=0; i<3; i++){
      paths[i] = new component(40,40,eval("c.s"+(i%2+1)),40*i,0);
	 }
	 for (var i=0; i<6; i++){
      paths[i+3] = new component(40,40,eval("c.s"+((i+1)%2+1)),0,40*i+40);
	 }
	 for (var i=0; i<4; i++){
      paths[i+9] = new component(40,40,eval("c.s"+((i+1)%2+1)),80,40*i+40);
	 }
	 for (var i=0; i<4; i++){
      paths[i+13] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+40,240);
	 }
	 for (var i=0; i<2; i++){
      paths[i+17] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+120,80);
	 }
	 for (var i=0; i<2; i++){
      paths[i+19] = new component(40,40,eval("c.s"+(i%2+1)),160,40*i);
	 }
	 for (var i=0; i<6; i++){
      paths[i+21] = new component(40,40,eval("c.s"+(i%2+1)),40*i+160,0);
	 }
	 for (var i=0; i<8; i++){
      paths[i+27] = new component(40,40,eval("c.s"+(i%2+1)),400,40*i);
	 }
	 for (var i=0; i<2; i++){
      paths[i+35] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+320,280);
	 }
	 for (var i=0; i<3; i++){
      paths[i+37] = new component(40,40,eval("c.s"+((i+1)%2+1)),320,40*i+280);
	 }
	 for (var i=0; i<4; i++){
      paths[i+40] = new component(40,40,eval("c.s"+((i+1)%2+1)),i*40+160,360);
	 }
	 for (var i=0; i<3; i++){
      paths[i+44] = new component(40,40,eval("c.s"+(i%2+1)),i*40+80,400);
	 }
	 for (var i=0; i<3; i++){
      paths[i+47] = new component(40,40,eval("c.s"+((i+1)%2+1)),80,40*i+280);
	 }
	 // Interior
	 for (var i=0; i<2; i++){
      paths[i+50] = new component(40,40,eval("c.s"+(i%2+1)),160,40*i+160);
	 }
	 for (var i=0; i<2; i++){
      paths[i+52] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+200,160);
	 }
	 for (var i=0; i<3; i++){
	  for (var j=0; j<2; j++) {
      paths[i+j*3+54] = new component(40,40,eval("c.s"+((i+j+2)%2+1)),40*i+240,(j-1)*40+120);
	  }
	 }
	 for (var i=0; i<2; i++){
      paths[i+60] = new component(40,40,eval("c.s"+(i%2+1)),320,40*i+160);
	 }
      paths[62] = new component(40,40,eval("c.t1"),200,40*i+200);
      paths[63] = new component(40,40,eval("c.s2"),240,200);
	  paths[101] = new component(40,40,eval("c.s1"),200,200);
	  paths[102] = new component(40,40,eval("c.s2"),200,240);
	 for (var i=0; i<4; i++){
      paths[i+64] = new component(40,40,eval("c.s"+(i%2+1)),120+(i*40),280);
	 }
	 // Green part.
	 for (var i=0; i<5; i++) {
	 paths[i+68] = new component(40,40,eval("c.g"+((i+1)%2+1)),40,40*i+40);
	 }
	 for (var i=0; i<6; i++) {
	 paths[i+73] = new component(40,40,eval("c.g"+((i+1)%2+1)),360,40*i+40);
	 }
	 for (var i=0; i<5; i++) {
	 paths[i+79] = new component(40,40,eval("c.g"+(i%2+1)),280,40*i+160);
	 }
	 for (var i=0; i<4; i+=2) { // twice
	 paths[i/2+84] = new component(40,40,eval("c.g2"),40*i+120,(-40)*i+200);
	 }
	 for (var i=0; i<4; i+=2) { // twice
	 paths[i/2+86] = new component(40,40,eval("c.g1"),40*i+80,(-40)*i+200);
	 }
	 for (var i=0; i<3; i+=2) { // once
	 paths[i/2+88] = new component(40,40,eval("c.g2"),40*i+120,(-40)*i+120);
	 }
	 for (var i=0; i<3; i+=2) { // once
	 paths[i/2+90] = new component(40,40,eval("c.g1"),40*i+120,(-40)*i+160);
	 }
	 for (var i=0; i<3; i++) {
	 paths[i+92] = new component(40,40,eval("c.g"+(i%2+1)),40*i+240,40);
	 }
	 for (var i=0; i<4; i++) {
	 paths[i+95] = new component(40,40,eval("c.g"+(i%2+1)),40*i+120,320);
	 }
	 paths[99] = new component(40,40,eval("c.b2"),120,360);
	 paths[100] = new component(40,40,eval("c.g2"),320,240);
	 paths[103] = new component(40,40,eval("c.g2"),240,240);
	 break;
   case "6":
     dir = [0,1];
	 Blockly.goal(Blockly.Msg["GOAL_LEV_6"],function(){
	    Blockly.how(Blockly.Msg["HELP_LEV_6"])},4);
	 var player = new component(40, 40, "red",40, 400);
	 var directionplayer = new component(10,10,"#ff8888",40,40)
	 for (var i=0; i<11; i++){
      paths[i] = new component(40,40,eval("c.s"+(i%2+1)),0,40*i);
	 }
	 for (var i=0; i<11; i++){
      paths[i+11] = new component(40,40,eval("c.s"+(i%2+1)),400,40*i);
	 }
	 for (var i=0; i<9; i++){
      paths[i+22] = new component(40,40,eval("c.s"+(i%2+1)),80,40*i+80);
	 }
	 for (var i=0; i<6; i++){
      paths[i+31] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+120,80);
	 }
	 for (var i=0; i<9; i++){
      paths[i+37] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+40,0);
	 }
	 for (var i=0; i<6; i++){
      paths[i+46] = new component(40,40,eval("c.s"+(i%2+1)),40*i+160,160);
	 }
	 for (var i=0; i<6; i++){
      paths[i+52] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+120,320);
	 }
	 for (var i=0; i<6; i++){
      paths[i+58] = new component(40,40,eval("c.s"+(i%2+1)),40*i+160,400);
	 }
	 for (var i=0; i<2; i++){
      paths[i+64] = new component(40,40,eval("c.s"+(i%2+1)),200,40*i+200);
	 }
	 for (var i=0; i<2; i++){
      paths[i+66] = new component(40,40,eval("c.s"+((i+1)%2+1)),280,40*i+240);
	 }
	 paths[68] = new component(40,40,eval("c.s1"),160,240);
	 paths[69] = new component(40,40,eval("c.s1"),320,240);
	 // Green part.
	 for (var i=0; i<10; i++){
      paths[i+70] = new component(40,40,eval("c.g"+((i+1)%2+1)),40,40*i+40);
	 }
	 for (var i=0; i<8; i++){
      paths[i+80] = new component(40,40,eval("c.g"+(i%2+1)),40*i+80,40);
	 }
	 for (var i=0; i<7; i++){
      paths[i+88] = new component(40,40,eval("c.g"+((i+1)%2+1)),40*i+120,360);
	 }
	 for (var i=0; i<7; i++){
      paths[i+95] = new component(40,40,eval("c.g"+((i+1)%2+1)),40*i+120,120);
	 }
	 for (var i=0; i<4; i++){
      paths[i+102] = new component(40,40,eval("c.g"+((i+1)%2+1)),40*i+120,280);
	 }
	 for (var i=0; i<4; i++){
      paths[i+106] = new component(40,40,eval("c.g"+(i%2+1)),40*i+240,200);
	 }
	 for (var i=0; i<2; i++){
      paths[i+110] = new component(40,40,eval("c.g"+(i%2+1)),360-120*i,160*i+80);
	 }
	 for (var i=0; i<3; i++){
      paths[i+112] = new component(40,40,eval("c.g"+(i%2+1)),120,40*i+160);
	 }
	 for (var i=0; i<3; i++){
      paths[i+115] = new component(40,40,eval("c.g"+(i%2+1)),360,40*i+240);
	 }
	 paths[118] = new component(40,40,eval("c.g1"),160,200);
	 paths[119] = new component(40,40,eval("c.g1"),320,280);
	 paths[120] = new component(40,40,eval("c.b1"),120,400);
	 break;
   case "7":
     var dir = [0,1];
   	 var player = new component(40, 40, "red",360, 360);
	 var directionplayer = new component(10,10,"#ff8888",40,40)
	 Blockly.goal(Blockly.Msg["GOAL_LEV_7"],function(){
	 Blockly.how(Blockly.Msg["HELP_LEV_7"])},4);
	 for (var i=0; i<3; i++){
      paths[i] = new component(40,40,eval("c.s"+((i+1)%2+1)),320,40*i+280);
	 }
	 for (var i=0; i<3; i++){
      paths[i+3] = new component(40,40,eval("c.s"+(i%2+1)),280,40*i+280);
	 }
	 for (var i=0; i<7; i++){
      paths[i+6] = new component(40,40,eval("c.s"+(i%2+1)),200,40*i+120);
	 }
	 for (var i=0; i<4; i++){
      paths[i+13] = new component(40,40,eval("c.s"+(i%2+1)),40*i+280,200);
	 }
	 for (var i=0; i<8; i++){
	  if (i+17 != 23) {
        paths[i+17] = new component(40,40,eval("c.s"+(i%2+1)),400,40*i+80);
	  } else {
        paths[23] = new component(40,40,c.g2,400,320);
	  }
	 }
	 for (var i=0; i<3; i++){
      paths[i+25] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i+240,120);
	 }
	 for (var i=0; i<11; i++){
      paths[i+28] = new component(40,40,eval("c.s"+((i+1)%2+1)),40*i,40);
	 }
	 for (var i=0; i<7; i++){
      paths[i+39] = new component(40,40,eval("c.s"+((i+1)%2+1)),120,40*i+80);
	 }
	 for (var i=0; i<11; i++){
      paths[i+46] = new component(40,40,eval("c.s"+(i%2+1)),40*i,400);
	 }
	 for (var i=0; i<3; i++){
      paths[i+57] = new component(40,40,eval("c.s"+(i%2+1)),80,40*i+240);
	 }
	 for (var i=0; i<8; i++){
      paths[i+60] = new component(40,40,eval("c.s"+(i%2+1)),0,40*i+80);
	 }
	 for (var i=0; i<4; i++){
      paths[i+68] = new component(40,40,eval("c.s"+(i%2+1)),40,40*i+40);
	  // paths[69] = new component(40,40,eval("c.s2"),40,80);
	 }
	 // finish.
      paths[72] = new component(40,40,eval("c.b2"),80,80);
	 // Green part.
	 for (var i=0; i<4; i++) {
       paths[i+73] = new component(40,40,eval("c.g"+((i+1)%2+1)),80,40*i+80);
	 }
	 for (var i=0; i<8; i++) {
  	   paths[i+77] = new component(40,40,eval("c.g"+((i+1)%2+1)),160,40*i+80);
	 }
	 for (var i=0; i<6; i++) {
  	   paths[i+85] = new component(40,40,eval("c.g"+((i+1)%2+1)),240,40*i+160);
	 }
	 for (var i=0; i<5; i++) {
  	   paths[i+91] = new component(40,40,eval("c.g"+((i+1)%2+1)),40,40*i+200);
	 }
	 for (var i=0; i<4; i++) {
  	   paths[i+96] = new component(40,40,eval("c.g"+(i%2+1)),360,40*i+240);
	 }
	 for (var i=0; i<3; i++) {
  	   paths[i+100] = new component(40,40,eval("c.g"+(i%2+1)),360,40*i+80);
	 }
	 for (var i=0; i<2; i++) {
  	   paths[i+103] = new component(40,40,eval("c.g"+(i%2+1)),40*i+80,360);
	 }
	 for (var i=0; i<4; i++) {
  	   paths[i+105] = new component(40,40,eval("c.g"+(i%2+1)),40*i+200,80);
	 }
	 for (var i=0; i<2; i++) {
  	   paths[i+109] = new component(40,40,eval("c.g"+(i%2+1)),40*i+280,160);
	 }
	 for (var i=0; i<2; i++) {
  	   paths[i+111] = new component(40,40,eval("c.g"+(i%2+1)),40*i+280,240);
	 }
	 paths[113] = new component(40,40,eval("c.b2"),80,80);
	 paths[69] = new component(40,40,eval("c.g2"),40,80); // Replace 69 to a grass. Funny that it is 69.
	 paths[19] = new component(40,40,eval("c.g2"),400,160);
}	 
console.warn("Took "+((new Date())-load)+"ms to load the game!")
/// Funny how level 1 has a simpler level than level 2, which has a simpler level than level 3, and so on... until level 5 being the most complex :P

//       paths[i+14] = new component(40,40,eval("c.s"+(i%2+1)),40,40*i);
//            ------                            -----        -------
///          blocknum                           colour   pos   (x)  (y)