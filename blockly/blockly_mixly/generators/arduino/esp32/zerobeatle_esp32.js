'use strict';

goog.provide('Blockly.Arduino.beatle');
goog.require('Blockly.Arduino');


var beatleSingleFunc = "";
Blockly.Arduino.beatleColorFollower = function () {
	var speedP = 1500;
	var speedI = 0;
	var speedD = 0;
	var servoP = this.getFieldValue('servoP');
	var servoI = this.getFieldValue('servoI');
	var servoD = this.getFieldValue('servoD');
  Blockly.Arduino.definitions_['include_beatleColorFollower'] = '#include "beatleESP32_functions.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleColorFollower'] = 'int ID1 = 1;' + '\n' + 
	                                                              'int32_t size = 400;' + '\n' + 
	                                                              'int32_t speedP = ' + speedP + ',\tspeedI = ' + speedI + ',\tspeedD =' + speedD + ';\n' +
	                                                              'int32_t servoP = ' + servoP + ',\tservoI = ' + servoI + ',\tservoD =' + servoD + ';\n';



	

	Blockly.Arduino.setups_['beatleESP32_basicSetup'] = 'follower_setup(ALGORITHM_COLOR_RECOGNITION);\n';
	
	
  beatleSingleFunc = 'follower(huskylens,ID1);\n';
                
  return beatleSingleFunc;
};

Blockly.Arduino.beatleObjectFollower = function () {
	var speedP = 1500;
	var speedI = 0;
	var speedD = 0;
	var servoP = this.getFieldValue('servoP');
	var servoI = this.getFieldValue('servoI');
	var servoD = this.getFieldValue('servoD');
  Blockly.Arduino.definitions_['include_beatleColorFollower'] = '#include "beatleESP32_functions.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleColorFollower'] = 'int ID1 = 1;' + '\n' + 
	                                                              'int32_t size = 400;' + '\n' + 
	                                                              'int32_t speedP = ' + speedP + ',\tspeedI = ' + speedI + ',\tspeedD =' + speedD + ';\n' +
	                                                              'int32_t servoP = ' + servoP + ',\tservoI = ' + servoI + ',\tservoD =' + servoD + ';\n';



	

	Blockly.Arduino.setups_['beatleESP32_basicSetup'] = 'follower_setup(ALGORITHM_OBJECT_TRACKING);\n';
	
	
  beatleSingleFunc = 'follower(huskylens,ID1);\n';
                
  return beatleSingleFunc;
};

Blockly.Arduino.beatleObjectClassifierFollower = function () {
	var speedP = 1500;
	var speedI = 0;
	var speedD = 0;
	var servoP = this.getFieldValue('servoP');
	var servoI = this.getFieldValue('servoI');
	var servoD = this.getFieldValue('servoD');
  Blockly.Arduino.definitions_['include_beatleColorFollower'] = '#include "beatleESP32_functions.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleColorFollower'] = 'int ID1 = 1;' + '\n' + 
	                                                              'int32_t size = 400;' + '\n' + 
	                                                              'int32_t speedP = ' + speedP + ',\tspeedI = ' + speedI + ',\tspeedD =' + speedD + ';\n' +
	                                                              'int32_t servoP = ' + servoP + ',\tservoI = ' + servoI + ',\tservoD =' + servoD + ';\n';



	

	Blockly.Arduino.setups_['beatleESP32_basicSetup'] = 'follower_setup(ALGORITHM_OBJECT_RECOGNITION);\n';
	
	
  beatleSingleFunc = 'follower(huskylens,ID1,true);\n';
                
  return beatleSingleFunc;
};
Blockly.Arduino.beatleLineTracking = function () {
	var speedP = this.getFieldValue('speedP');
	var speedI = this.getFieldValue('speedI');
	var speedD = this.getFieldValue('speedD');
  var servoP = 100;
	var servoI = 0;
	var servoD = 0;
  Blockly.Arduino.definitions_['include_beatleLineTracking'] = '#include "beatleESP32_functions.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleLineTracking'] =  'int ID1 = 1;' + '\n' + 
	                                                              'int32_t size = 400;' + '\n' + 
	                                                              'int32_t speedP = ' + speedP + ',\tspeedI = ' + speedI + ',\tspeedD =' + speedD + ';\n' +
	                                                              'int32_t servoP = ' + servoP + ',\tservoI = ' + servoI + ',\tservoD =' + servoD + ';\n';



	

	Blockly.Arduino.setups_['beatleESP32_basicSetup'] = 'follower_setup(ALGORITHM_LINE_TRACKING);\n';
	
	
  beatleSingleFunc = 'lineTracking(huskylens,ID1);\n';
                
  return beatleSingleFunc;
};

Blockly.Arduino.beatleFaceTracking = function () {
	var speedP = 2000;
	var speedI = 0;
	var speedD = 0;
  var servoP = this.getFieldValue('servoP');
	var servoI = this.getFieldValue('servoI');
	var servoD = this.getFieldValue('servoD');
  Blockly.Arduino.definitions_['include_beatleLineTracking'] =  '#include "beatleESP32_functions.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleLineTracking'] =  'int ID1 = 1;' + '\n' + 
	                                                              'int32_t size = 400;' + '\n' + 
	                                                              'int32_t speedP = ' + speedP + ',\tspeedI = ' + speedI + ',\tspeedD =' + speedD + ';\n' +
	                                                              'int32_t servoP = ' + servoP + ',\tservoI = ' + servoI + ',\tservoD =' + servoD + ';\n';



	

	Blockly.Arduino.setups_['beatleESP32_basicSetup'] = 'follower_setup(ALGORITHM_FACE_RECOGNITION);\n';
	
	
  beatleSingleFunc = 'servoTrackingOnly(huskylens,ID1);\n';
                
  return beatleSingleFunc;
};

Blockly.Arduino.beatleQRcodeRecog = function () {
	var speedP = 2000;
	var speedI = 0;
	var speedD = 0;
  var servoP = this.getFieldValue('servoP');
	var servoI = this.getFieldValue('servoI');
	var servoD = this.getFieldValue('servoD');
  Blockly.Arduino.definitions_['include_beatleLineTracking'] = '#include "beatleESP32_functions.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleLineTracking'] = 'int ID1 = 1;' + '\n' + 
	                                                              'int32_t size = 400;' + '\n' + 
	                                                              'int32_t speedP = ' + speedP + ',\tspeedI = ' + speedI + ',\tspeedD =' + speedD + ';\n' +
	                                                              'int32_t servoP = ' + servoP + ',\tservoI = ' + servoI + ',\tservoD =' + servoD + ';\n';



	

	Blockly.Arduino.setups_['beatleESP32_basicSetup'] = 'follower_setup(ALGORITHM_TAG_RECOGNITION );\n';
	
	
  beatleSingleFunc = 'servoTrackingOnly(huskylens,ID1,false);\n';
                
  return beatleSingleFunc;
};


Blockly.Arduino.beatleCombo = function () {
	var speedP = 2000;
	var speedI = 0;
	var speedD = 0;
  var servoP = 100;
	var servoI = 0;
	var servoD = 0;
  Blockly.Arduino.definitions_['include_beatleLineTracking'] = '#include "beatleESP32_functions.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleLineTracking'] = 'int ID1 = 1;' + '\n' + 
	                                                              'int32_t size = 400;' + '\n' + 
	                                                              'int32_t speedP = ' + speedP + ',\tspeedI = ' + speedI + ',\tspeedD =' + speedD + ';\n' +
	                                                              'int32_t servoP = ' + servoP + ',\tservoI = ' + servoI + ',\tservoD =' + servoD + ';\n';



	

	Blockly.Arduino.setups_['beatleESP32_basicSetup'] = 'combo_setup();\n';
	
	
  beatleSingleFunc = 'combo();\n';
                
  return beatleSingleFunc;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Blockly.Arduino.beatleAIRequest = function () {
	var requestType = this.getFieldValue('AICamRequest');
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	if (requestType == "request")
	    code = "huskylens.request()";
	else if (requestType == "requestBlocks")
	    code = "huskylens.requestBlocks()";
	else if (requestType == "requestArrows")
	    code = "huskylens.requestArrows()";    
  else if (requestType == "requestLearned")
	    code = "huskylens.requestLearned()";
	else if (requestType == "requestBlocksLearned")
	    code = "huskylens.requestBlocksLearned()";  
	else if (requestType == "requestArrowsLearned")
	    code = "huskylens.requestArrowsLearned()";      
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAIRequestID = function () {
	var requestType = this.getFieldValue('AICamRequest');
	var requestID = this.getFieldValue('ID');
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	if (requestType == "request")
	    code = 'huskylens.request(' + requestID + ')';
	else if (requestType == "requestBlocks")
	    code = 'huskylens.requestBlocks(' + requestID + ')';
	else if (requestType == "requestArrows")
	    code = 'huskylens.requestArrows(' + requestID + ')';    
  else if (requestType == "requestLearned")
	    code = 'huskylens.requestLearned(' + requestID + ')';
	else if (requestType == "requestBlocksLearned")
	    code = 'huskylens.requestBlocksLearned(' + requestID + ')';  
	else if (requestType == "requestArrowsLearned")
	    code = 'huskylens.requestArrowsLearned(' + requestID + ')';      
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAIRequestLearnedIDCount = function () {
	var requestType = this.getFieldValue('AICamRequest');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readLearnedIDCount()';    
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAIRequestCount = function () {
	var requestType = this.getFieldValue('AICamRequest');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	if (requestType == "requestBlocks")
	    code = 'huskylens.countBlocks()';
	else if (requestType == "requestArrows")
	    code = 'huskylens.countArrows()';    
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAICheckBlocksArrows = function () {
	var requestType = this.getFieldValue('AICamRequest');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	if (requestType == "requestBlocks")
	    code = 'huskylens.isAppearDirect(HUSKYLENSResultBlock)';
	else if (requestType == "requestArrows")
	    code = 'huskylens.isAppearDirect(HUSKYLENSResultArrow)';    
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.beatleAIgetBlockParam = function () {
	var requestType = this.getFieldValue('AICamRequest');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readBlockCenterParameterDirect().' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAIgetArrowParam = function () {
	var requestType = this.getFieldValue('AICamRequest');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readArrowCenterParameterDirect().' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAIisLearned = function () {
	var requestID = this.getFieldValue('ID');
		
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.isLearned(' + requestID + ')';
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAIisInCam = function () {
	var requestType = this.getFieldValue('AICamRequest');
	var requestID = this.getFieldValue('ID');
		
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.isAppear(' + requestID + ')';
	
  if (requestType == "requestBlocks")
	    code = 'huskylens.isAppear(' + requestID + ',HUSKYLENSResultBlock)';
	else if (requestType == "requestArrows")
	    code = 'huskylens.isAppear(' + requestID + ',HUSKYLENSResultArrow)';
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAIgetBlockInfowithID = function () {
	var requestID = this.getFieldValue('ID');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readBlockParameter(' + requestID + ').' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAIgetArrowInfowithID = function () {
	var requestID = this.getFieldValue('ID');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readArrowParameter(' + requestID + ').' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAIgetBlockArrowCount = function () {
	var requestType = this.getFieldValue('AICamRequest');
	var requestID = this.getFieldValue('ID');
		
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.isAppear(' + requestID + ')';
	
  if (requestType == "requestBlocks")
	    code = 'huskylens.readCount(HUSKYLENSResultBlock)';
	else if (requestType == "requestArrows")
	    code = 'huskylens.readCount(HUSKYLENSResultArrow)';
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAIgetBlockCountwithID = function () {
	var requestNum = this.getFieldValue('Num');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readBlockParameterDirect(' + requestNum + ').' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAIgetArrowCountwithID = function () {
	var requestNum = this.getFieldValue('Num');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readArrowParameterDirect(' + requestNum + ').' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAIgetBlockArrowCountwitID = function () {
	var requestType = this.getFieldValue('AICamRequest');
	var requestID = this.getFieldValue('ID');
		
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.isAppear(' + requestID + ')';
	
  if (requestType == "requestBlocks")
	    code = 'huskylens.readCount(' + requestID + ',HUSKYLENSResultBlock)';
	else if (requestType == "requestArrows")
	    code = 'huskylens.readCount(' + requestID + ',HUSKYLENSResultArrow)';
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAIgetBlockNumCountwithID = function () {
	var requestNum = this.getFieldValue('Num');
	var requestID = this.getFieldValue('ID');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readBlockParameter(' + requestID + ',' + requestNum + ').' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.beatleAIgetArrowNumCountwithID = function () {
	var requestNum = this.getFieldValue('Num');
	var requestID = this.getFieldValue('ID');
	var requestParam = this.getFieldValue('AIResultPara');
	
	var code;
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



	

	Blockly.Arduino.setups_['beatleAICamSetup'] = '//combo_setup();\n';
	
	
	code = 'huskylens.readArrowParameter(' + requestID + ',' + requestNum + ').' + requestParam;
	
  
                
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.beatleAISwitchAlrorithm = function () {
	var Algorithm = this.getFieldValue('AIAlgorithm');
	var code;
	
  Blockly.Arduino.definitions_['include_beatleAICam'] = '#include "ZWHuskyLens.h"\n';
  
  
	Blockly.Arduino.definitions_['declare_beatleAICam'] = 'ZWHuskyLens huskylens;' + '\n';



  if (Algorithm == "faceRecog")
	    code = "huskylens.writeAlgorithm(ALGORITHM_FACE_RECOGNITION);";
	else if (Algorithm == "objTracking")
	    code = "huskylens.writeAlgorithm(ALGORITHM_OBJECT_TRACKING);";
	else if (Algorithm == "objRecog")
	    code = "huskylens.writeAlgorithm(ALGORITHM_OBJECT_RECOGNITION);";
  else if (Algorithm == "lineTracking")
	    code = "huskylens.writeAlgorithm(ALGORITHM_LINE_TRACKING);"; 
  else if (Algorithm == "colorRecog")
	    code = "huskylens.writeAlgorithm(ALGORITHM_COLOR_RECOGNITION);";
	else if (Algorithm == "tagRecog")
	    code = "huskylens.writeAlgorithm(ALGORITHM_TAG_RECOGNITION);";
	

	Blockly.Arduino.setups_['beatleAISwitchAlgorithmSetup'] = code;
	
	
    
                
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};