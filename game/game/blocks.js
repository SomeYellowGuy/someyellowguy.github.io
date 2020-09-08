Blockly.defineBlocksWithJsonArray([{
  "type": "move",
  "message0": "%{BKY_MOVE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "way",
      "options": [
        [
          "%{BKY_MOVE_FORWARD}",
          "forward"
        ],
        [
          "%{BKY_MOVE_BACKWARD}",
          "backward"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 105,
  "tooltip": "%{BKY_MOVE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "run",
  "message0": "%{BKY_WHEN_RUN}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "run"
    }
  ],
  "inputsInline": true,
  "colour": "#ff9f00",
  "tooltip": "%{BKY_WHEN_RUN_TOOLTIP}",
  "helpUrl": ""
},{
  "type": "move_forward",
  "message0": "%{BKY_MOVE_ONLY_FORWARD}",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 105,
  "tooltip": "%{BKY_MOVE_ONLY_FORWARD_TOOLTIP}",
  "helpUrl": ""
},{
  "type": "move_rotate",
  "message0": "%{BKY_MOVE_ROTATE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        [
          "%{BKY_MOVE_ROTATE_LEFT}",
          "left"
        ],
        [
          "%{BKY_MOVE_ROTATE_RIGHT}",
          "right"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "%{BKY_MOVE_ROTATE_LEFT_TOOLTIP}",
  "helpUrl": "",
  "extensions": ["move_rotate_change"]
},{
  "type": "controls_repeat_limited",
  "message0": "%{BKY_CONTROLS_REPEAT_LIMITED}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "count",
      "options": [
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ],
        [
          "9",
          "9"
        ],[
          "10",
          "10"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "command"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#9539f7",
  "tooltip": "%{BKY_CONTROLS_REPEAT_LIMITED_TOOLTIP}",
  "helpUrl": ""
}]);
Blockly.defineBlocksWithJsonArray([{
  "type": "logic_has_space",
  "message0": "%{BKY_LOGIC_HAS_SPACE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "%{BKY_STATEMENT_AHEAD}",
          "ahead"
        ],
        [
          "%{BKY_STATEMENT_LEFT}",
          "left"
        ],
        [
          "%{BKY_STATEMENT_RIGHT}",
          "right"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "script"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "%{BKY_LOGIC_HAS_SPACE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "logic_has_space_with_else",
  "message0": "%{BKY_LOGIC_HAS_SPACE_WITH_ELSE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "%{BKY_STATEMENT_AHEAD}",
          "ahead"
        ],
        [
          "%{BKY_STATEMENT_LEFT}",
          "left"
        ],
        [
          "%{BKY_STATEMENT_RIGHT}",
          "right"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "script"
    },
    {
      "type": "input_statement",
      "name": "script2"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "%{BKY_LOGIC_HAS_SPACE_WITH_ELSE_TOOLTIP}",
  "helpUrl": ""
},{
  "type": "loops_while_space",
  "message0": "%{BKY_LOOPS_WHILE_SPACE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "%{BKY_STATEMENT_AHEAD}",
          "ahead"
        ],
        [
          "%{BKY_STATEMENT_LEFT}",
          "left"
        ],
        [
          "%{BKY_STATEMENT_RIGHT}",
          "right"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "script"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#9539f7",
  "tooltip": "%{BKY_LOOPS_WHILE_SPACE_TOOLTIP}",
  "helpUrl": ""
},{
  "type": "loops_until_finish",
  "message0": "%{BKY_LOOPS_UNTIL_FINISH}",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY7D3OAMAAh0BVEDFEogAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "script"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "colour": "#9539f7",
  "tooltip": "%{BKY_LOOPS_UNTIL_FINISH_TOOLTIP}",
  "helpUrl": ""
},{
  "type": "loops_until_space",
  "message0": "%{BKY_LOOPS_UNTIL_SPACE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "%{BKY_STATEMENT_AHEAD}",
          "ahead"
        ],
        [
          "%{BKY_STATEMENT_LEFT}",
          "left"
        ],
        [
          "%{BKY_STATEMENT_RIGHT}",
          "right"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "script"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#9539f7",
  "tooltip": "%{BKY_LOOPS_UNTIL_SPACE_TOOLTIP}",
  "helpUrl": ""
}]);

Blockly.Constants = {};
Blockly.Constants.Move = {};
Blockly.Constants.Move.TOOLTIPS_BY_WAY = {
  // move_rotate
  'left': '%{BKY_MOVE_ROTATE_LEFT_TOOLTIP}',
  'right': '%{BKY_MOVE_ROTATE_RIGHT_TOOLTIP}',
};

Blockly.Extensions.register('move_rotate_change',Blockly.Extensions.buildTooltipForDropdown('direction', Blockly.Constants.Move.TOOLTIPS_BY_WAY));

if (isMobile) {
    document.getElementById("blocklyDiv").style = "height: 450px; width: 440px; float: right;";
}

var toolbox = document.getElementById("toolbox"+levelno);

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : workspaceMax, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true
};


var workspace = Blockly.inject("blocklyDiv", options);

var workspaceBlocks = document.getElementById("workspaceBlocks"); 

Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);