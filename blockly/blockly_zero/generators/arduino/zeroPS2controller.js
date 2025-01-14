Blockly.Arduino.zeroPS2 = function() {

	Blockly.Arduino.definitions_['include_ZumoShield'] = '#include <Beatle.h>';
	Blockly.Arduino.definitions_['zeroPS2_def'] = 'int PS2_Button_Read[6];';
  Blockly.Arduino.definitions_['declare_Beatle_beatle'] = 'Beatle beatle;\n';
  
	Blockly.Arduino.setups_['beatle_serial'] = 'Serial.begin(115200);\n';

  Blockly.Arduino.setups_['beatle_basicSetup'] = 'beatle.StartProgram();\n';
	//var code = 'PS2_RF_ReadButton(PS2_Button_Read);\n';
	
	var code = '';

	var branch = Blockly.Arduino.statementToCode(this, 'DO' + 0);

	var n = 0;
	var button_ = '';
	var buttonLogic = '';

	var buttonUp = this.getFieldValue('UP0');
	var buttonRight = this.getFieldValue('RIGHT0');
	var buttonDown = this.getFieldValue('DOWN0');
	var buttonLeft = this.getFieldValue('LEFT0');
	var buttonTriangle = this.getFieldValue('TRIANGLE0');
	var buttonCircle = this.getFieldValue('CIRCLE0');
	var buttonCross = this.getFieldValue('CROSS0');
	var buttonSquare = this.getFieldValue('SQUARE0');
	var buttonSelect = this.getFieldValue('SELECT0');
	var buttonStart = this.getFieldValue('START0');
	var buttonL1 = this.getFieldValue('L10');
	var buttonR1 = this.getFieldValue('R10');
	var buttonL2 = this.getFieldValue('L20');
	var buttonR2 = this.getFieldValue('R20');

	var UP_pressed = 0;
	var RIGHT_pressed = 0;
	var DOWN_pressed = 0;
	var LEFT_pressed = 0;
	var TRIANGLE_pressed = 0;
	var CIRCLE_pressed = 0;
	var CROSS_pressed = 0;
	var SQUARE_pressed = 0;
	var SELECT_pressed = 0;
	var START_pressed = 0;
	var L1_pressed = 0;
	var R1_pressed = 0;
	var L2_pressed = 0;
	var R2_pressed = 0;

	if(buttonUp == 'TRUE') UP_pressed = 1;
	else UP_pressed = 0;
	if(buttonRight == 'TRUE') RIGHT_pressed = 1;
	else RIGHT_pressed = 0;
	if(buttonDown == 'TRUE') DOWN_pressed = 1;
	else DOWN_pressed = 0;
	if(buttonLeft == 'TRUE') LEFT_pressed = 1;
	else LEFT_pressed = 0;
	if(buttonTriangle == 'TRUE') TRIANGLE_pressed = 1;
	else TRIANGLE_pressed = 0;
	if(buttonCircle == 'TRUE') CIRCLE_pressed = 1;
	else CIRCLE_pressed = 0;
	if(buttonCross == 'TRUE') CROSS_pressed = 1;
	else CROSS_pressed = 0;
	if(buttonSquare == 'TRUE') SQUARE_pressed = 1;
	else SQUARE_pressed = 0;
	if(buttonSelect == 'TRUE') SELECT_pressed = 1;
	else SELECT_pressed = 0;
	if(buttonStart == 'TRUE') START_pressed = 1;
	else START_pressed = 0;
	if(buttonL1 == 'TRUE') L1_pressed = 1;
	else L1_pressed = 0;
	if(buttonR1 == 'TRUE') R1_pressed = 1;
	else R1_pressed = 0;
	if(buttonL2 == 'TRUE') L2_pressed = 1;
	else L2_pressed = 0;
	if(buttonR2 == 'TRUE') R2_pressed = 1;
	else R2_pressed = 0;

	var button_pressed_num = UP_pressed + RIGHT_pressed + DOWN_pressed + LEFT_pressed +
		TRIANGLE_pressed + CIRCLE_pressed + CROSS_pressed + SQUARE_pressed + SELECT_pressed + START_pressed +
		L1_pressed + R1_pressed + L2_pressed + R2_pressed;
	
	var buttonSelectedNum = button_pressed_num;	
	var isAnd = this.getFieldValue('andOr');
	if(isAnd == '&&'){
	
	if (button_pressed_num > 0) button_ = 'Rx_Buffer[5] == ';
	
	if(buttonL1 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_L1 + ';
	else if(buttonL1 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_L1';

	if(buttonR1 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_R1 + ';
	else if(buttonR1 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_R1';

	if(buttonL2 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_L2 + ';
	else if(buttonL2 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_L2';

	if(buttonR2 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_R2 + ';
	else if(buttonR2 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_R2';

	if(buttonSelect == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_SELECT + ';
	else if(buttonSelect == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_SELECT';

	if(buttonStart == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_START + ';
	else if(buttonStart == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_START';

	if(buttonUp == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_UP + ';
	else if(buttonUp == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_UP';

	if(buttonRight == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_RIGHT + ';
	else if(buttonRight == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_RIGHT';

	if(buttonDown == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_DOWN + ';
	else if(buttonDown == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_DOWN';

	if(buttonLeft == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_LEFT + ';
	else if(buttonLeft == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_LEFT';

	if(buttonTriangle == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_TRIANGLE + ';
	else if(buttonTriangle == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_TRIANGLE';

	if(buttonCircle == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_CIRCLE + ';
	else if(buttonCircle == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_CIRCLE';

	if(buttonCross == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_CROSS + ';
	else if(buttonCross == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_CROSS';

	if(buttonSquare == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_SQUARE';
	else if(buttonSquare == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_SQUARE';
	
	if(buttonL1 == 'TRUE') buttonLogic += ' && _ButtonL1';
	

	if(buttonR1 == 'TRUE') buttonLogic += ' && _ButtonR1';
	

	if(buttonL2 == 'TRUE') buttonLogic += ' && _ButtonL2';
	

	if(buttonR2 == 'TRUE') buttonLogic += ' && _ButtonR2';
	

	if(buttonSelect == 'TRUE') buttonLogic += ' && _ButtonSelect';
	

	if(buttonStart == 'TRUE' ) buttonLogic += ' && _ButtonStart';
	

	if(buttonUp == 'TRUE') buttonLogic += ' && _ButtonUp';
	

	if(buttonRight == 'TRUE') buttonLogic += ' && _ButtonRight';
	

	if(buttonDown == 'TRUE') buttonLogic += ' && _ButtonDown';
	

	if(buttonLeft == 'TRUE') buttonLogic += ' && _ButtonLeft';
	

	if(buttonTriangle == 'TRUE') buttonLogic += ' && _ButtonTriangle';
	

	if(buttonCircle == 'TRUE') buttonLogic += ' && _ButtonCircle';
	

	if(buttonCross == 'TRUE') buttonLogic += ' && _ButtonCross';
	

	if(buttonSquare == 'TRUE') buttonLogic += ' && _ButtonSquare';
	
	
	}else{
		
	

	if(buttonL1 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonL1 || ';
	else if(buttonL1 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonL1';

	if(buttonR1 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonR1 || ';
	else if(buttonR1 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonR1';

	if(buttonL2 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonL2 || ';
	else if(buttonL2 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonL2';

	if(buttonR2 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonR2 || ';
	else if(buttonR2 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonR2';

	if(buttonSelect == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonSelect || ';
	else if(buttonSelect == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonSelect';

	if(buttonStart == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonStart || ';
	else if(buttonStart == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonStart';

	if(buttonUp == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonUp || ';
	else if(buttonUp == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonUp';

	if(buttonRight == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonRight || ';
	else if(buttonRight == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonRight';

	if(buttonDown == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonDown || ';
	else if(buttonDown == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonDown';

	if(buttonLeft == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonLeft || ';
	else if(buttonLeft == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonLeft';

	if(buttonTriangle == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonTriangle || ';
	else if(buttonTriangle == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonTriangle';

	if(buttonCircle == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonCircle || ';
	else if(buttonCircle == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonCircle';

	if(buttonCross == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonCross || ';
	else if(buttonCross == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonCross';

	if(buttonSquare == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonSquare';
	else if(buttonSquare == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonSquare';
	
	
		
	}
  
  if (buttonSelectedNum == 0) code += 'if (false) {\n//CAUTION: NO BUTTON is selected on the game pad for the \'if\' branch!\n//Nothing will run here!\n}';
	else code += 'if ((' + button_ + ')' + buttonLogic + ') {\n' + branch + '\n}';

	for(n = 1; n <= this.elseifCount_; n++) {

		button_ = '';
		buttonLogic = '';

		buttonUp = this.getFieldValue('UP' + n);
		buttonRight = this.getFieldValue('RIGHT' + n);
		buttonDown = this.getFieldValue('DOWN' + n);
		buttonLeft = this.getFieldValue('LEFT' + n);
		buttonTriangle = this.getFieldValue('TRIANGLE' + n);
		buttonCircle = this.getFieldValue('CIRCLE' + n);
		buttonCross = this.getFieldValue('CROSS' + n);
		buttonSquare = this.getFieldValue('SQUARE' + n);
		buttonSelect = this.getFieldValue('SELECT' + n);
		buttonStart = this.getFieldValue('START' + n);
		buttonL1 = this.getFieldValue('L1' + n);
		buttonR1 = this.getFieldValue('R1' + n);
		buttonL2 = this.getFieldValue('L2' + n);
		buttonR2 = this.getFieldValue('R2' + n);

		UP_pressed = 0;
		RIGHT_pressed = 0;
		DOWN_pressed = 0;
		LEFT_pressed = 0;
		TRIANGLE_pressed = 0;
		CIRCLE_pressed = 0;
		CROSS_pressed = 0;
		SQUARE_pressed = 0;
		SELECT_pressed = 0;
		START_pressed = 0;
		L1_pressed = 0;
		R1_pressed = 0;
		L2_pressed = 0;
		R2_pressed = 0;

		if(buttonUp == 'TRUE') UP_pressed = 1;
		else UP_pressed = 0;
		if(buttonRight == 'TRUE') RIGHT_pressed = 1;
		else RIGHT_pressed = 0;
		if(buttonDown == 'TRUE') DOWN_pressed = 1;
		else DOWN_pressed = 0;
		if(buttonLeft == 'TRUE') LEFT_pressed = 1;
		else LEFT_pressed = 0;
		if(buttonTriangle == 'TRUE') TRIANGLE_pressed = 1;
		else TRIANGLE_pressed = 0;
		if(buttonCircle == 'TRUE') CIRCLE_pressed = 1;
		else CIRCLE_pressed = 0;
		if(buttonCross == 'TRUE') CROSS_pressed = 1;
		else CROSS_pressed = 0;
		if(buttonSquare == 'TRUE') SQUARE_pressed = 1;
		else SQUARE_pressed = 0;
		if(buttonSelect == 'TRUE') SELECT_pressed = 1;
		else SELECT_pressed = 0;
		if(buttonStart == 'TRUE') START_pressed = 1;
		else START_pressed = 0;
		if(buttonL1 == 'TRUE') L1_pressed = 1;
		else L1_pressed = 0;
		if(buttonR1 == 'TRUE') R1_pressed = 1;
		else R1_pressed = 0;
		if(buttonL2 == 'TRUE') L2_pressed = 1;
		else L2_pressed = 0;
		if(buttonR2 == 'TRUE') R2_pressed = 1;
		else R2_pressed = 0;

		button_pressed_num = UP_pressed + RIGHT_pressed + DOWN_pressed + LEFT_pressed + TRIANGLE_pressed +
			CIRCLE_pressed + CROSS_pressed + SQUARE_pressed + SELECT_pressed + START_pressed +
			L1_pressed + R1_pressed + L2_pressed + R2_pressed;
	  buttonSelectedNum = button_pressed_num;	
			var isAndx = this.getFieldValue('andOr'+n);
			
			if(isAndx == '&&'){
				
			if (button_pressed_num > 0) button_ = 'Rx_Buffer[5] == ';

		if(buttonL1 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_L1 + ';
		else if(buttonL1 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_L1';

		if(buttonR1 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_R1 + ';
		else if(buttonR1 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_R1';

		if(buttonL2 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_L2 + ';
		else if(buttonL2 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_L2';

		if(buttonR2 == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_R2 + ';
		else if(buttonR2 == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_R2';

		if(buttonSelect == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_SELECT + ';
		else if(buttonSelect == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_SELECT';

		if(buttonStart == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_START + ';
		else if(buttonStart == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_START';

		if(buttonUp == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_UP + ';
		else if(buttonUp == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_UP';

		if(buttonRight == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_RIGHT + ';
		else if(buttonRight == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_RIGHT';

		if(buttonDown == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_DOWN + ';
		else if(buttonDown == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_DOWN';

		if(buttonLeft == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_LEFT + ';
		else if(buttonLeft == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_LEFT';

		if(buttonTriangle == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_TRIANGLE + ';
		else if(buttonTriangle == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_TRIANGLE';

		if(buttonCircle == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_CIRCLE + ';
		else if(buttonCircle == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_CIRCLE';

		if(buttonCross == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_CROSS + ';
		else if(buttonCross == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_CROSS';

		if(buttonSquare == 'TRUE' && --button_pressed_num > 0) button_ += 'PS2_SQUARE';
		else if(buttonSquare == 'TRUE' && button_pressed_num == 0) button_ += 'PS2_SQUARE';
		
		if(buttonL1 == 'TRUE') buttonLogic += ' && _ButtonL1';
	

	if(buttonR1 == 'TRUE') buttonLogic += ' && _ButtonR1';
	

	if(buttonL2 == 'TRUE') buttonLogic += ' && _ButtonL2';
	

	if(buttonR2 == 'TRUE') buttonLogic += ' && _ButtonR2';
	

	if(buttonSelect == 'TRUE') buttonLogic += ' && _ButtonSelect';
	

	if(buttonStart == 'TRUE' ) buttonLogic += ' && _ButtonStart';
	

	if(buttonUp == 'TRUE') buttonLogic += ' && _ButtonUp';
	

	if(buttonRight == 'TRUE') buttonLogic += ' && _ButtonRight';
	

	if(buttonDown == 'TRUE') buttonLogic += ' && _ButtonDown';
	

	if(buttonLeft == 'TRUE') buttonLogic += ' && _ButtonLeft';
	

	if(buttonTriangle == 'TRUE') buttonLogic += ' && _ButtonTriangle';
	

	if(buttonCircle == 'TRUE') buttonLogic += ' && _ButtonCircle';
	

	if(buttonCross == 'TRUE') buttonLogic += ' && _ButtonCross';
	

	if(buttonSquare == 'TRUE') buttonLogic += ' && _ButtonSquare';
		}else{
				
			

		if(buttonL1 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonL1 || ';
		else if(buttonL1 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonL1';

		if(buttonR1 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonR1 || ';
		else if(buttonR1 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonR1';

		if(buttonL2 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonL2 || ';
		else if(buttonL2 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonL2';

		if(buttonR2 == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonR2 || ';
		else if(buttonR2 == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonR2';

		if(buttonSelect == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonSelect || ';
		else if(buttonSelect == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonSelect';

		if(buttonStart == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonStart || ';
		else if(buttonStart == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonStart';

		if(buttonUp == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonUp || ';
		else if(buttonUp == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonUp';

		if(buttonRight == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonRight || ';
		else if(buttonRight == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonRight';

		if(buttonDown == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonDown || ';
		else if(buttonDown == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonDown';

		if(buttonLeft == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonLeft || ';
		else if(buttonLeft == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonLeft';

		if(buttonTriangle == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonTriangle || ';
		else if(buttonTriangle == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonTriangle';

		if(buttonCircle == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonCircle || ';
		else if(buttonCircle == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonCircle';

		if(buttonCross == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonCross || ';
		else if(buttonCross == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonCross';

		if(buttonSquare == 'TRUE' && --button_pressed_num > 0) button_ += '_ButtonSquare';
		else if(buttonSquare == 'TRUE' && button_pressed_num == 0) button_ += '_ButtonSquare';
		
			
		}

		branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
		
    if (buttonSelectedNum == 0) code += '\n//CAUTION: NO BUTTON is selected on the game pad for the ' + n + ' \'else if\' branch!\n';
		else code += '\nelse if ((' + button_ + ')' + buttonLogic + ') {\n' + branch + '\n}';

	}

	if(this.elseCount_) {
		branch = Blockly.Arduino.statementToCode(this, 'ELSE');
		code += '\nelse {\n' + branch + '\n}';
	}

	
	var new_code = '(' + button_ + ')' + buttonLogic;
	return [new_code, Blockly.Arduino.ORDER_ATOMIC];



};