/// English
// English

// Block translations
Blockly.Msg["WHEN_RUN"] = "when run %1 %2";
Blockly.Msg["WHEN_RUN_TOOLTIP"] = "Execute code inside it when the 'Run' button gets clicked.";
Blockly.Msg["MOVE"] = "move %1";
Blockly.Msg["MOVE_TOOLTIP"] = "Makes the cube move forward or backward once."
Blockly.Msg["MOVE_FORWARD"] = "forward";
Blockly.Msg["MOVE_BACKWARD"] = "backward";
Blockly.Msg["MOVE_ROTATE"] = "turn %1 90\u00b0";
Blockly.Msg["MOVE_ROTATE_LEFT"] = "left \u21ba";
Blockly.Msg["MOVE_ROTATE_RIGHT"] = "right \u21bb";
Blockly.Msg["MOVE_ROTATE_LEFT_TOOLTIP"] = "Rotate the cube's direction by -90\u00b0.";
Blockly.Msg["MOVE_ROTATE_RIGHT_TOOLTIP"] = "Rotate the cube's direction by 90\u00b0.";
Blockly.Msg["MOVE_ONLY_FORWARD"] = "move forward";
Blockly.Msg["MOVE_ONLY_FORWARD_TOOLTIP"] = "Makes the cube move forward.";
Blockly.Msg["CONTROLS_REPEAT_LIMITED"] = "repeat %1 times %2 %3";
Blockly.Msg["CONTROLS_REPEAT_LIMITED_TOOLTIP"] = "Execute code a set number of times.";
Blockly.Msg["STATEMENT_AHEAD"] = "ahead \u2191";
Blockly.Msg["STATEMENT_LEFT"] = "to the left \u2190";
Blockly.Msg["STATEMENT_RIGHT"] = "to the right \u2192";
Blockly.Msg["LOOPS_TOOLTIP_BEGIN"] = "Repeat code inside the statement until";
Blockly.Msg["LOGIC_HAS_SPACE"] = "if path %1 exists %2 do %3";
Blockly.Msg["LOGIC_TOOLTIP_BEGIN"] = "Check if a path exists and if it does, execute code";
Blockly.Msg["LOGIC_HAS_SPACE_TOOLTIP"] = "%{BKY_LOGIC_TOOLTIP_BEGIN}.";
Blockly.Msg["LOGIC_HAS_SPACE_WITH_ELSE"] = "%{BKY_LOGIC_HAS_SPACE} else %4";
Blockly.Msg["LOGIC_HAS_SPACE_WITH_ELSE_TOOLTIP"] = "%{BKY_LOGIC_TOOLTIP_BEGIN} in the 'if' statement, otherwise execute the code in the 'else' statement.";
Blockly.Msg["LOOPS_WHILE_SPACE"] = "while path %1 exists %2 do %3";
Blockly.Msg["LOOPS_WHILE_SPACE_TOOLTIP"] = "%{BKY_LOOPS_TOOLTIP_BEGIN} a path doesn't exist.";
Blockly.Msg["LOOPS_UNTIL_SPACE"] = "repeat until path %1 exists %2 do %3";
Blockly.Msg["LOOPS_UNTIL_SPACE_TOOLTIP"] = "%{BKY_LOOPS_TOOLTIP_BEGIN} a path exists.";
Blockly.Msg["LOOPS_UNTIL_FINISH"] = "repeat until %1 %2 do %3";
Blockly.Msg["LOOPS_UNTIL_FINISH_TOOLTIP"] = "%{BKY_LOOPS_TOOLTIP_BEGIN} the player reaches the blue space.";

// HTML translations
Blockly.Msg["HTML_UNLOCK_LEV_2"] = "Unlocked in level 2!";
Blockly.Msg["HTML_UNLOCK_LEV_3"] = "Unlocked in level 3!";
Blockly.Msg["HTML_UNLOCK_LEV_4"] = "Unlocked in level 4!";
Blockly.Msg["HTML_UNLOCK_LEV_5"] = "Unlocked in level 5!";
Blockly.Msg["HTML_UNLOCK_LEV_6"] = "Unlocked in level 6!";
Blockly.Msg["HTML_UNLOCK_LEV_7"] = "Unlocked in level 7!";
Blockly.Msg["HTML_LOCK_LEV_7"] = "Cannot be used in level 7.";
Blockly.Msg["HTML_CATEGORY_MOVE"] = "Move";
Blockly.Msg["HTML_CATEGORY_LOOPS"] = "Loops";
Blockly.Msg["HTML_CATEGORY_LOGIC"] = "Logic";
Blockly.Msg["HTML_RUN"] = "Run %play%";
Blockly.Msg["HTML_STOP"] = "Stop %stop% (buggy)";
Blockly.Msg["HTML_BLOCKS_MAXIMUM"] = "Blocks maximum: %1/%2";
Blockly.Msg["HTML_BLOCKS_MINIMUM"] = "Blocks minimum: %1/%2";
Blockly.Msg["HTML_SEECODE"] = "See code %code%";
Blockly.Msg["HTML_LEVEL_SELECT"] = "Level Select";
Blockly.Msg["HTML_HELP"] = "Help";

// Buttons
Blockly.Msg["BUTTON_OK"] = "Okay";
Blockly.Msg["BUTTON_CANCEL"] = "Cancel";
Blockly.Msg["BUTTON_DELETE"] = "Delete";
Blockly.Msg["BUTTON_NEXT"] = "Next";
Blockly.Msg["BUTTON_BACK"] = "Back";

// Alert translations
Blockly.Msg["ALERT_ALERT_COLON"] = "Alert:";
Blockly.Msg["ALERT_GOAL_COLON"] = "Goal:";
Blockly.Msg["ALERT_CHALLENGE_COLON"] = "Challenge:";
Blockly.Msg["ALERT_CODE_COLON"] = "Code Generated:";
Blockly.Msg["ALERT_HOW_COLON"] = "How to use:";
Blockly.Msg["ALERT_CONGRATS"] = "Congratulations!";
Blockly.Msg["ALERT_CONFIRM_COLON"] = "Confirmation:";
Blockly.Msg["ALERT_ANSWER_COLON"] = "Answer:";

Blockly.Msg["ALERT_FAIL"] = "Keep trying! Something is not right.";
Blockly.Msg["ALERT_SUCCESS"] = "You finished level %1! Continue to next level?"
Blockly.Msg["ALERT_FAIL_OUTSIDE"] = "The player got outside the game board and got teleported to the beginning.";
Blockly.Msg["ALERT_FAIL_LAVA"] = "The cube touched a black block and got teleported to the beginning.";

// Help and level translations
Blockly.Msg["GOAL_LEV_1"] = "Make the red cube go to the blue square.";
Blockly.Msg["HELP_LEV_1"] = "Move forward: This block makes the cube move to its direction. Click on the Move category to get the block.";
Blockly.Msg["GOAL_LEV_2"] = "The player can now turn left or right, but help him reach the blue space!";
Blockly.Msg["HELP_LEV_2"] = "Turn (left/right) 90\u00b0: Rotates the cube\'s direction by 90\u00b0 in the specified direction.";
Blockly.Msg["GOAL_LEV_3"] = "There is now a 'repeat' block to make it easier! Can you help the player to get to the blue space?";
Blockly.Msg["HELP_LEV_3"] = "Repeat block: Repeats the script inside by the specified number.";
Blockly.Msg["GOAL_LEV_4"] = "You now have if path blocks to shorten your code, but that is exactly what that is! You have a 5 block limit, so try to use the most minimum blocks possible! The goal is the same: Help the player to reach the blue space. Use the repeat until block to complete it!";
Blockly.Msg["HELP_LEV_4A"] = "If path blocks: Checks if a path given exists (depends on the player\'s direction), if it is true, runs the script inside.";
Blockly.Msg["HELP_LEV_4B"] = "Repeat until [finish]: Keeps repeating the script inside until the player reaches the finish.";
Blockly.Msg["GOAL_LEV_5"] = "You now have if path else blocks! Try using one to complete the level!";
Blockly.Msg["HELP_LEV_5"] = "If path else blocks: Checks if a path given exists (depends on the player\'s direction), if it is true, runs the script on the top, else runs the script on the bottom.";
Blockly.Msg["GOAL_LEV_6"] = "You now have while path blocks! Use one with three blocks in it to complete the level!";
Blockly.Msg["HELP_LEV_6"] = "While path blocks: Executes the script inside until a path doesn\'t exist.";
Blockly.Msg["GOAL_LEV_7"] = "You now have repeat until path blocks! Use one with exactly 3 blocks in it to complete the level!";
Blockly.Msg["HELP_LEV_7"] = "Repeat until path blocks: Executes the script inside until a path exists. Hint 1: Put a move forward before the repeat until block. Hint 2: Use the \'to the left\' option.";

// Level select translations
Blockly.Msg["LEVEL_SELECT_HEADER"] = "Select a level:";
Blockly.Msg["GO"] = "Go to level %1";
Blockly.Msg["GO_LEVEL"] = "Go to level %1!";

/// This took a lot of manual work. Phew!