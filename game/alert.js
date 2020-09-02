/// Create a namespace:

var Dialog = {};
var l = [7]
var isitHard = l.indexOf(Number(levelno)) != -1;

/// Functions:

Dialog.isActive = false;

Blockly.alert = function(mes, callback){
	if (typeof callback !== "function") callback = function(){};
	console.log(["Info",mes]);
	Dialog.show('Alert:', mes, {
		showOkay: true,
		onOkay: callback,
		onCancel: callback,
		isitHard: isitHard
	});
}

Blockly.goal = function(mes,callback){
	if (typeof callback === 'undefined') callback = function(){};
	console.log(["Goal",mes]);
	Dialog.show(!isitHard?'Goal:':'Challenge:', mes, {
		showOkay: true,
		onOkay: function(){setTimeout(callback,500)},
		onCancel: function(){setTimeout(callback,500)},
		isitHard: isitHard
	});
}

Blockly.how = function(mes,callback,m){
	if (typeof callback === 'undefined') callback = function(){};
	setHint(function(a,b){
	 console.warn(["How to use",mes]);
	 Dialog.show('How to use:', mes, {
		showOkay: true,
		onOkay: function(){setTimeout(callback,500)},
		onCancel: function(){setTimeout(callback,500)},
		isitHard: isitHard
	 });
	},a,b);
}

Blockly.code = function(mes){
	
	console.log(["Code",mes]);
	Dialog.show('Code Generated:', mes, {
		showOkay: true,
		showGen: true,
		isitHard: isitHard
	});
}

Blockly.congrats = function(mes,callback){
	console.log(["Congrats",mes]);
	Dialog.show('Congratulations!', mes, {
		showOkay: true,
		nextmode: true,
		showCancel: true,
		onOkay: callback,
		isitHard: isitHard
	});
}

Blockly.confirm = function(mes, callback){
	if (typeof callback !== "function") callback = function(bool){};
	console.log(["Confirmation",mes]);
	Dialog.show("Confirmation:", mes, {
		showOkay: true,
		onOkay: function(){
			callback(true);
		},
		showCancel: true,
		onCancel: function(){
			callback(false);
		},
		isitHard: isitHard
	});
}

Blockly.prompt = function(mes, default_, callback){
	if (typeof default_ !== "string") callback = String(default_) || "";
	if (typeof callback !== "function") callback = function(value){};
	console.log(["Prompt",mes,"Default value: "+default_]);
	Dialog.show('Answer: ', mes, {
		showInput: true,
		showOkay: true,
		onOkay: function(){
			callback(Dialog.inputField.value);
		},
		showCancel: true,
		onCancel: function(){
			callback(null);
		},
		isitHard: isitHard
	});
	Dialog.inputField.value = default_;
}

Dialog.hide = function() {
  if (Dialog.backdropDiv_) {
    Dialog.backdropDiv_.style.display = 'none';
    Dialog.dialogDiv_.style.display = 'none';
  }
};

/**
  * Allowed options:
  * - showOkay
  * - showCancel
  * - showInput
  * - onOkay
  * - onCancel
  * - variablemode
  * - nextmode
  * - showGen (Changes message's font to code)
  * - isitHard (Is it hard?)
  */
  
Dialog.show = function(title,mes,options){
	var x = "";
	if (typeof options !== "object") options = {};
	if (typeof options.variablemode === "undefined") options.variablemode = false;
	if (typeof options.showGen === "undefined") options.showGen = false;
	if (options.isitHard) x = "_hard";
	var cancelButton = options.variablemode ? 'Back' : 'Cancel';
	var okButton = options.variablemode ? 'Delete' : (options.nextmode ? 'Next' : 'Okay');
	var backdropDiv = Dialog.backdropDiv_;
	var dialogDiv = Dialog.dialogDiv_;
	if (!dialogDiv){
		Dialog.isActive = true;
		// Generate the HTML.
		backdropDiv = document.createElement('div');
		backdropDiv.id = 'DialogBackdrop';
		document.body.appendChild(backdropDiv);
		
		dialogDiv = document.createElement('div');
		dialogDiv.id = 'Dialog'+x;
		backdropDiv.appendChild(dialogDiv);
		
		dialogDiv.onclick = function(event){
			event.stopPropagation();
		}
		
		Dialog.backdropDiv_ = backdropDiv;
		Dialog.dialogDiv_ = dialogDiv;
	}
	backdropDiv.style.display = 'block';
    dialogDiv.style.display = 'block';
	var z = options.showGen ? 'textarea' : 'p';
	var a = (options.showGen ? 'DialogCode' : 'DialogMessage') + x;
	var b = options.showGen ? 'width="800" style="margin: 0px; width: 397px; height: 142px; resize: none;" readonly' : '';
	var c = options.showGen ? '<p>' : ''
	var d = options.showGen ? '</p>' : ''
	dialogDiv.innerHTML = '<header class="DialogTitle' + x + '"></header>' +
	c+'<'+z+' class="'+a+'"'+b+'></'+z+'>'+d+(options.showInput?'<div><p><input id="dialogInput' + x + '" size="60"><p></div>':'') +
	'<div class="DialogButtons">'+
	(options.showCancel?'<button id="DialogCancel' + x + '">' + cancelButton + '</button>':'') + (options.showCancel && options.showOkay ? '<a'+x+'>--------------------------------------------</a>' : '') +
	(options.showOkay?'<button id="DialogOkay' + x + '">' + okButton + '</button>':'') +
	'</div>';
	dialogDiv.getElementsByClassName('DialogTitle'+x)[0]
      .appendChild(document.createTextNode(title));
	dialogDiv.getElementsByClassName(a)[0]
      .appendChild(document.createTextNode(mes));
	  
	var onOkay = function(event){
		Dialog.hide();
		options.onOkay && options.onOkay();
		Dialog.isActive = false;
		event && event.stopPropagation();
	};
	var onCancel = function(event){
		Dialog.hide();
		options.onCancel && options.onCancel();
		Dialog.isActive = false;
		event && event.stopPropagation();
	};
	var dialogInput = document.getElementById('dialogInput'+x);
	Dialog.inputField = dialogInput;
	if (dialogInput){
		dialogInput.focus();
		dialogInput.onkeyup = function(e){
			switch(e.keyCode){
				case 13: // Stands for [< ENTER]
				  Dialog.isActive = false;
				  onOkay();
				  return false;
				  break;
				case 27: // Stands for [ESC]
				  Dialog.isActive = false;
				  onCancel();
				  return false;
				  break;
			}
		};
	} else {
		var okay = document.getElementById('DialogOkay'+x);
        okay && okay.focus();
	}
	
	if (options.showOkay) {
		document.getElementById('DialogOkay'+x)
        .addEventListener('click', function(event){
		Dialog.hide();
		options.onOkay && options.onOkay();
		Dialog.isActive = false;
		event && event.stopPropagation();
	});
	}
	
	if (options.showCancel) {
		document.getElementById('DialogCancel'+x)
        .addEventListener('click', function(event){
		Dialog.hide();
		options.onCancel && options.onCancel();
		Dialog.isActive = false;
		event && event.stopPropagation();
	});
	}
	
	backdropDiv.onclick = onCancel;
}