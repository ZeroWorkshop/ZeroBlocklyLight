'use strict';

goog.provide('Blockly.Blocks.beatle');
goog.require('Blockly.Blocks');
Blockly.Blocks.beatle.HUE = "#09B9DF";


/*************************************************************************************************************/
/*************************************************************************************************************/
Blockly.Blocks.beatleColorFollower = {
  init: function() {
		this.appendDummyInput().appendField('  ' + Blockly.BeatleColorFollower);
		/*
		this.appendDummyInput()
		    .appendField(Blockly.BeatleSpeedPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('1500'),'speedP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedD');
		*/
		this.appendDummyInput()
		    .appendField(Blockly.BeatleServoPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('100'),'servoP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'servoI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'servoD');
		  	

		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlewandering.gif',150,150));
		this.setColour('#CC66CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleObjectFollower = {
  init: function() {
		this.appendDummyInput().appendField('  ' + Blockly.BeatleObjectFollower);
		/*
		this.appendDummyInput()
		    .appendField(Blockly.BeatleSpeedPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('1500'),'speedP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedD');
		*/
		this.appendDummyInput()
		    .appendField(Blockly.BeatleServoPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('50'),'servoP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'servoI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('50'),'servoD');
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlewandering.gif',150,150));
		this.setColour('#CC66CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleObjectClassifierFollower = {
  init: function() {
		this.appendDummyInput().appendField('  ' + Blockly.beatleObjectClassifierFollower);
		/*
		this.appendDummyInput()
		    .appendField(Blockly.BeatleSpeedPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('1500'),'speedP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedD');
		*/
		this.appendDummyInput()
		    .appendField(Blockly.BeatleServoPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('50'),'servoP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'servoI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('50'),'servoD');
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlewandering.gif',150,150));
		this.setColour('#CC66CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleLineTracking = {
  init: function() {
		this.appendDummyInput().appendField('  ' + Blockly.BeatleCamFollowline);
		
		this.appendDummyInput()
		    .appendField(Blockly.BeatleSpeedPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('2000'),'speedP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'speedD');
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#CC66CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleFaceTracking = {
  init: function() {
		this.appendDummyInput().appendField('  ' + Blockly.beatleFaceTracking);
		
    this.appendDummyInput()
		    .appendField(Blockly.BeatleServoPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('200'),'servoP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'servoI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'servoD');
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#CC66CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleQRcodeRecog = {
  init: function() {
		this.appendDummyInput().appendField('  ' + Blockly.beatleQRcodeRecog);
		
    this.appendDummyInput()
		    .appendField(Blockly.BeatleServoPID)
		  	.appendField(Blockly.linesensors).appendField("P: ")
		  	.appendField(new Blockly.FieldTextInput('150'),'servoP')
		  	.appendField(Blockly.linesensors).appendField("I: ")
		  	.appendField(new Blockly.FieldTextInput('0'),'servoI')
		  	.appendField(Blockly.linesensors).appendField("D: ")
		  	.appendField(new Blockly.FieldTextInput('50'),'servoD');
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#CC66CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};


Blockly.Blocks.beatleCombo = {
  init: function() {
		this.appendDummyInput().appendField('  ' + Blockly.beatleCombo);
		
    
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#CC66CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};


Blockly.Blocks.beatleAIRequest = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequesting)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequest, "request"],
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	[Blockly.beatleAIrequesLearned, "requestLearned"],
			  	[Blockly.beatleAIrequesBlocksLearned, "requestBlocksLearned"],
			  	[Blockly.beatleAIrequesArrowsLearned, "requestArrowsLearned"],
		  	]), "AICamRequest");
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, Boolean);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIRequestID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestingID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
		  	.appendField(Blockly.beatleAIrequestingDe)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequest, "request"],
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	[Blockly.beatleAIrequesLearned, "requestLearned"],
			  	[Blockly.beatleAIrequesBlocksLearned, "requestBlocksLearned"],
			  	[Blockly.beatleAIrequesArrowsLearned, "requestArrowsLearned"],
		  	]), "AICamRequest");
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, Boolean);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIRequestLearnedIDCount = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestAllLearnedIDCount);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIRequestCount = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	]), "AICamRequest")
		  	.appendField(Blockly.beatleAIrequestCountNumber);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAICheckBlocksArrows = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	]), "AICamRequest")
		  	.appendField(Blockly.beatleAIrequestInCam);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, Boolean);
		this.setTooltip('');
	}
};


Blockly.Blocks.beatleAIgetBlockParam = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCenter)
		  	.appendField(Blockly.beatleAIrequestBlocks)
		  	/*.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	]), "AICamRequest")*/
			  .appendField(Blockly.beatleAIrequestingDe)	
			  .appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXcenter, "xCenter"],
			  	[Blockly.beatleAIrequestParamYcenter, "yCenter"],
			  	[Blockly.beatleAIrequestParamWidth, "width"],
			  	[Blockly.beatleAIrequestParamHeight, "height"],
			  	]), "AIResultPara")
		  	.appendField(Blockly.beatleAIrequestiParam1);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetArrowParam = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCenter)
		  	.appendField(Blockly.beatleAIrequesArrows)
		  	/*.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	]), "AICamRequest")*/
			  .appendField(Blockly.beatleAIrequestingDe)	
			  .appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXStart, "xOrigin"],
			  	[Blockly.beatleAIrequestParamYStart, "yOrigin"],
			  	[Blockly.beatleAIrequestParamXEnd, "xTarget"],
			  	[Blockly.beatleAIrequestParamYEnd, "yTarget"],
			  	]), "AIResultPara")
		  	.appendField(Blockly.beatleAIrequestiParam1);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIisLearned = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestParamID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
			  .appendField(Blockly.beatleAIrequestisLearned);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, Boolean);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIisLearnedAny = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAICamera)
			  .appendField(Blockly.beatleAIrequestisLearned);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, Boolean);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIisAvailable = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIisAvailable);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, Boolean);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIRead = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIRead);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAItrackTarget = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAItrackTarget);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIisInCam = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestParamID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	]), "AICamRequest")
			  .appendField(Blockly.beatleAIrequestInCam);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, Boolean);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetBlockInfowithID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestParamID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
		  	.appendField(Blockly.beatleAIrequestBlocks)
		  	.appendField(Blockly.beatleAIrequestiParam)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXcenter, "xCenter"],
			  	[Blockly.beatleAIrequestParamYcenter, "yCenter"],
			  	[Blockly.beatleAIrequestParamWidth, "width"],
			  	[Blockly.beatleAIrequestParamHeight, "height"],
			  	]), "AIResultPara");
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetArrowInfowithID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestParamID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
		  	.appendField(Blockly.beatleAIrequesArrows)
		  	.appendField(Blockly.beatleAIrequestiParam)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXStart, "xOrigin"],
			  	[Blockly.beatleAIrequestParamYStart, "yOrigin"],
			  	[Blockly.beatleAIrequestParamXEnd, "xTarget"],
			  	[Blockly.beatleAIrequestParamYEnd, "yTarget"],
			  	]), "AIResultPara");
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetBlockArrowCount = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	]), "AICamRequest")
			  .appendField(Blockly.beatleAIrequestTotal);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetBlockCountwithID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestNum)
		  	.appendField(new Blockly.FieldTextInput('1'),'Num')
		  	.appendField(Blockly.beatleAIrequestGe)
		  	.appendField(Blockly.beatleAIrequestBlocks)
		  	.appendField(Blockly.beatleAIrequestingDe)
			  .appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXcenter, "xCenter"],
			  	[Blockly.beatleAIrequestParamYcenter, "yCenter"],
			  	[Blockly.beatleAIrequestParamWidth, "width"],
			  	[Blockly.beatleAIrequestParamHeight, "height"],
			  	]), "AIResultPara")
			  	.appendField(Blockly.beatleAIrequestiParam1);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetArrowCountwithID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestNum)
		  	.appendField(new Blockly.FieldTextInput('1'),'Num')
		  	.appendField(Blockly.beatleAIrequestGe)
		  	.appendField(Blockly.beatleAIrequesArrows)
		  	.appendField(Blockly.beatleAIrequestingDe)
			  .appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXStart, "xOrigin"],
			  	[Blockly.beatleAIrequestParamYStart, "yOrigin"],
			  	[Blockly.beatleAIrequestParamXEnd, "xTarget"],
			  	[Blockly.beatleAIrequestParamYEnd, "yTarget"],
			  	]), "AIResultPara")
			  	.appendField(Blockly.beatleAIrequestiParam1);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetBlockArrowCountwitID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestParamID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestBlocks, "requestBlocks"],
			  	[Blockly.beatleAIrequesArrows, "requestArrows"],
			  	]), "AICamRequest")
			  .appendField(Blockly.beatleAIrequestTotal);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetBlockNumCountwithID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestParamID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
		  	.appendField(Blockly.beatleAIrequestNum)
		  	.appendField(new Blockly.FieldTextInput('1'),'Num')
		  	.appendField(Blockly.beatleAIrequestGe)
		  	.appendField(Blockly.beatleAIrequestBlocks)
		  	.appendField(Blockly.beatleAIrequestingDe)
			  .appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXcenter, "xCenter"],
			  	[Blockly.beatleAIrequestParamYcenter, "yCenter"],
			  	[Blockly.beatleAIrequestParamWidth, "width"],
			  	[Blockly.beatleAIrequestParamHeight, "height"],
			  	]), "AIResultPara")
			  	.appendField(Blockly.beatleAIrequestiParam1);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAIgetArrowNumCountwithID = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIrequestCount)
		  	.appendField(Blockly.beatleAIrequestParamID)
		  	.appendField(new Blockly.FieldTextInput('1'),'ID')
		  	.appendField(Blockly.beatleAIrequestNum)
		  	.appendField(new Blockly.FieldTextInput('1'),'Num')
		  	.appendField(Blockly.beatleAIrequestGe)
		  	.appendField(Blockly.beatleAIrequesArrows)
		  	.appendField(Blockly.beatleAIrequestingDe)
			  .appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIrequestParamXStart, "xOrigin"],
			  	[Blockly.beatleAIrequestParamYStart, "yOrigin"],
			  	[Blockly.beatleAIrequestParamXEnd, "xTarget"],
			  	[Blockly.beatleAIrequestParamYEnd, "yTarget"],
			  	]), "AIResultPara")
			  .appendField(Blockly.beatleAIrequestiParam1);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleAISwitchAlrorithm = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleAIswitchAlorithm)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleAIfaceRecog, "faceRecog"],
			  	[Blockly.beatleAIobjTracking, "objTracking"],
			  	[Blockly.beatleAIobjRecog, "objRecog"],
			  	[Blockly.beatleAIlineTracking, "lineTracking"],
			  	[Blockly.beatleAIcolorRecog, "colorRecog"],
			  	[Blockly.beatleAItagRecog, "tagRecog"],
		  	]), "AIAlgorithm");
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#3366CC');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

//////////////////////////////////////////////////////////////////////////////////////////
Blockly.Blocks.beatleESP32TempSensor = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadTempvalue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32HumSensor = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadHumvalue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32PressureSensor = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadPressurevalue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32GestureSensor = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadGesturevalue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32GestureSensored = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32GestureSensored)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32GestureUP, "UP"],
			  	[Blockly.beatleESP32GestureDOWN, "DOWN"],
			  	[Blockly.beatleESP32GestureLEFT, "LEFT"],
			  	[Blockly.beatleESP32GestureRIGHT, "RIGHT"],
			  	]), "gesture");

		
		//this.appendDummyInput()
		//    .appendField(Blockly.beatleESP32IRkeyValue)
		//    .appendField(new Blockly.FieldTextInput('100'),'keyValue');	    
		
		this.setColour('#006633');
		this.setOutput(true, null);
		
		this.setTooltip('');
	}
};
Blockly.Blocks.beatleESP32IRRecorder = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadIRRecordervalue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32MPU9250 = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadGyroAllValue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32MPU9250Acc = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadAccValue)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatlePitch, "IMUAccX"],
			  	[Blockly.beatleRoll, "IMUAccY"],
		  	]), "IMUAccAxis")
		  	.appendField(Blockly.beatleESP32IMUAccValue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32MPU9250Gyro = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadGyroValue)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatlePitch, "IMUGyroX"],
			  	[Blockly.beatleRoll, "IMUGyroY"],
			  	[Blockly.beatleYaw, "IMUGyroZ"],
		  	]), "IMUGyroAxis")
		  	.appendField(Blockly.beatleESP32IMUGyroValue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};


Blockly.Blocks.beatleESP32MicDB = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32ReadSoundDBValue);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#006633');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

////////////////////////////////////////////////////////////////////////////////////////////////////
Blockly.Blocks.beatleESP32Weatherstation = {
  init: function() {
    this.setColour('#FF168B');
    
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32Weatherstation);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_NETWORK_INIT);
    this.appendValueInput("SSID")
    .appendField(Blockly.Msg.HTML_NAME);
    this.appendValueInput("PWD")
    .appendField(Blockly.Msg.HTML_PASSWORD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};
Blockly.Blocks.beatlePS4padMAC = {
  init: function() {
		
		this.appendDummyInput()
		    .appendField(Blockly.beatlePS4padMAC)
		  	.appendField(new Blockly.FieldTextInput('00'),'add0')
		  	.appendField(Blockly.linesensors).appendField(":")
		  	.appendField(new Blockly.FieldTextInput('01'),'add1')
		  	.appendField(Blockly.linesensors).appendField(":")
		  	.appendField(new Blockly.FieldTextInput('02'),'add2')
		  	.appendField(Blockly.linesensors).appendField(":")
		  	.appendField(new Blockly.FieldTextInput('03'),'add3')
		  	.appendField(Blockly.linesensors).appendField(":")
		  	.appendField(new Blockly.FieldTextInput('04'),'add4')
		  	.appendField(Blockly.linesensors).appendField(":")
		  	.appendField(new Blockly.FieldTextInput('05'),'add5');
		  	

		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlewandering.gif',150,150));
		this.setColour('#FF168B');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};
Blockly.Blocks.beatleESP32PS4pad = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32PS4padPressed)
		  	.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32PS4buttonUP, "UP"],
			  	[Blockly.beatleESP32PS4buttonDOWN, "DOWN"],
			  	[Blockly.beatleESP32PS4buttonLEFT, "LEFT"],
			  	[Blockly.beatleESP32PS4buttonRIGHT, "RIGHT"],
			  	[Blockly.beatleESP32PS4buttonTRIANGLE, "TRIANGLE"],
			  	[Blockly.beatleESP32PS4buttonCROSS, "CROSS"],
			  	[Blockly.beatleESP32PS4buttonSQUARE, "SQUARE"],
			  	[Blockly.beatleESP32PS4buttonCIRCLE, "CIRCLE"],
			  	[Blockly.beatleESP32PS4buttonL1, "L1"],
			  	[Blockly.beatleESP32PS4buttonL2, "L2"],
			  	[Blockly.beatleESP32PS4buttonR1, "R1"],
			  	[Blockly.beatleESP32PS4buttonR2, "R2"],
			  	[Blockly.beatleESP32PS4buttonL3, "L3"],
			  	[Blockly.beatleESP32PS4buttonR3, "R3"],
			  	[Blockly.beatleESP32PS4buttonUPLEFT, "UPLEFT"],
			  	[Blockly.beatleESP32PS4buttonUPRIGHT, "UPRIGHT"],
			  	[Blockly.beatleESP32PS4buttonDOWNLEFT, "DOWNLEFT"],
			  	[Blockly.beatleESP32PS4buttonDOWNRIGHT, "DOWNRIGHT"],
			  	[Blockly.beatleESP32PS4buttonLEFT, "LEFT"],
			  	[Blockly.beatleESP32PS4buttonRIGHT, "RIGHT"],
			  	[Blockly.beatleESP32PS4buttonSHARE, "SHARE"],
			  	[Blockly.beatleESP32PS4buttonOPTIONS, "OPTIONS"],
			  	[Blockly.beatleESP32PS4buttonPS, "PS"],
			  	[Blockly.beatleESP32PS4buttonTOUCHPAD, "TOUCHPAD"],
			  	]), "button")
			  	.appendField(Blockly.beatleESP32PS4padButton);

		
		//this.appendDummyInput()
		//    .appendField(Blockly.beatleESP32IRkeyValue)
		//    .appendField(new Blockly.FieldTextInput('100'),'keyValue');	    
		
		this.setColour('#FF168B');
		this.setOutput(true, null);
		
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32LRWheels = {
  	init: function() {
		this.appendDummyInput()
		  	.appendField(Blockly.beatleLWheel)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleWheelForward, "FORWARD"],
			  	[Blockly.beatleWheelBackward, "BACKWARD"],
			  	[Blockly.beatleWheelStop, "STOP"]
		  	]), "LRunningStatus");
		  	
		this.appendValueInput('LspeedValue').appendField(Blockly.beatleWheelSpeed);
		this.appendDummyInput()
		  	.appendField(Blockly.beatleRWheel)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleWheelForward, "FORWARD"],
			  	[Blockly.beatleWheelBackward, "BACKWARD"],
			  	[Blockly.beatleWheelStop, "STOP"]
		  	]), "RRunningStatus");
			 this.appendValueInput('RspeedValue').appendField(Blockly.beatleWheelSpeed);

		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
		this.setInputsInline(false);
	}
};

Blockly.Blocks.beatleESP32Wheel = {
  	init: function() {
		this.appendDummyInput()
		  //.appendField(Blockly.beatleWheel)

			.appendField(new Blockly.FieldDropdown([
				[Blockly.beatleWheelLeft, "M1"],
				[Blockly.beatleWheelRight, "M2"]
			]), "MotorName")
			.appendField(Blockly.beatleWheel)

			.appendField(new Blockly.FieldDropdown([
				[Blockly.beatleWheelForward, "FORWARD"],
				[Blockly.beatleWheelBackward, "BACKWARD"],
				[Blockly.beatleWheelStop, "STOP"]
			]), "RunningStatus");
			
			this.appendValueInput('speedValue')
			    .appendField(Blockly.beatleWheelSpeed);
			

		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32PlayMP3 = {
  init: function() {
				
		this.appendDummyInput()
		    .appendField(Blockly.BeatleESP32PlayMP3)
		  	
		  	.appendField(new Blockly.FieldTextInput('dummy.mp3'),'mp3file');
		  	
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#FF168B');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.BeatleESP32PlayMP3fromSD = {
  init: function() {
				
		this.appendDummyInput()
		    .appendField(Blockly.BeatleESP32PlayMP3fromSD);
		  	
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#FF168B');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32Servo = {
  	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Servo)

			
			this.appendValueInput('speedValue')
			    .appendField(Blockly.beatleESP32ServoAngle);
			

		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32ServoScan = {
  	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32ServoScan);
			

		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32ServoScanStopAngle = {
  	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32ServoScanStopAngle);
			
    this.appendValueInput('speedValue')
			    .appendField(Blockly.beatleESP32ServoAngle);
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};
Blockly.Blocks.beatleESP32getIRbuttonKey = {
  	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32getIRbuttonKey)

		
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32compareIRbuttonKey = {
  	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32compareIRbuttonKey);
		this.appendValueInput('A')
    .setCheck([String,Number]);
		 //   .appendField(new Blockly.FieldTextInput('0xFFFFFF'),'servoP');

		
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setInputsInline(true);
		this.setOutput(true, Boolean);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};


Blockly.Blocks.beatleESP32IRSend = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32SendIRvalue);
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32IRencoding)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32IRsendNEC, "NEC"],
			  	[Blockly.beatleESP32IRsendSONY, "SONY"],
			  	[Blockly.beatleESP32IRsendRC5, "RC5"],
			  	[Blockly.beatleESP32IRsendRC6, "RC6"],
			  	[Blockly.beatleESP32IRsendDISH, "DISH"],
			  	[Blockly.beatleESP32IRsendSHARP, "SHARP"],
			  	[Blockly.beatleESP32IRsendJVC, "JVC"],
			  	[Blockly.beatleESP32IRsendSANYO, "SANYO"],
			  	[Blockly.beatleESP32IRsendSAMSUNG, "SAMSUNG"],
			  	[Blockly.beatleESP32IRsendMITSUBISHI, "MITSUBISHI"],
			  	[Blockly.beatleESP32IRsendPANASONIC, "PANASONIC"],
			  	[Blockly.beatleESP32IRsendDENON, "DENON"],
			  	[Blockly.beatleESP32IRsendBOSEWAVE, "BOSEWAVE"],
			  	[Blockly.beatleESP32IRsendLG, "LG"],
			  	]), "encodingType");

		this.appendValueInput("keyValue")
			  .appendField(Blockly.beatleESP32IRkeyValue);
		
		//this.appendDummyInput()
		//    .appendField(Blockly.beatleESP32IRkeyValue)
		//    .appendField(new Blockly.FieldTextInput('100'),'keyValue');	    
		
		this.setColour('#FF168B');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.RGBLED_functions = {
  init: function () {
  
    this.setColour('#FF168B');
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_RGB);
       


    this.appendDummyInput("")
        .appendField(Blockly.beatleLEDnumber);
    this.appendValueInput("LEDN")
       .setAlign(Blockly.ALIGN_RIGHT); 
       
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([
							[Blockly.beatleRainbow, "option_1"],
							[Blockly.beatleTheaterRainbow, "option_2"]
						]), 'OPTION')
    .setAlign(Blockly.ALIGN_RIGHT);
    
    this.appendValueInput("WAIT")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.beatleInterval);
    
    
    this.setInputsInline(true);
    this.appendDummyInput("")
    .appendField(Blockly.beatleMS);
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

  }
};

Blockly.Blocks.beatle_display_rgb_show = {
  init: function () {
    this.setColour('#FF168B');
    
    
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_RGB_SHOW)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

  Blockly.Blocks.beatle_RGB_color_rgb = {
    init: function () {
      this.setColour('#FF168B');
      this.appendValueInput("R")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_R);
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      this.setInputsInline(true);
      this.setOutput(true);
      this.setTooltip('');
    }
  };
  
Blockly.Blocks.beatle_display_rgb = {
  init: function () {
    this.setColour('#FF168B');
    this.appendDummyInput("")
    .appendField(Blockly.beatleSetRGB)
    .setAlign(Blockly.ALIGN_RIGHT);
    
    this.appendValueInput("_LED_")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_NUM);
    this.appendDummyInput("")
    .appendField(Blockly.Msg.HTML_COLOUR);
    this.appendValueInput("COLOR", Number)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    
  }
};

Blockly.Blocks.RGBLED_policelight = {
	init: function() {
		
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Policelight);
		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32KeepDirection = {
  init: function() {
		
		
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32KeepDirection);
		
		this.setColour("#FF168B");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);		
		this.setTooltip('');
	}

};

////////////////////////////////////////////////////////////////////////////////////////////////////
Blockly.Blocks.beatleESP32CleanScreen = {
    init: function () {
      this.setColour('#ffaa00');
      
      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Cls)
		    
      this.appendValueInput("color")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.HMIColor);
      /*
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      */
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  
  Blockly.Blocks.beatleESP32ShowPic = {
    init: function () {
      this.setColour('#ffaa00');
      
      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Pic);
		  
		  this.appendDummyInput()
		    .appendField(Blockly.beatleESP32PicXY);  
      this.appendValueInput("X")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX);
      this.appendValueInput("Y")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY);
      this.appendValueInput("ID")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicID);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  
    Blockly.Blocks.beatleESP32ShowString = {
    init: function () {

      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32String)
		    .appendField(new Blockly.FieldTextInput('abcd'),'str');
		    
		  this.appendDummyInput();  
		    
      this.appendValueInput("X")
      .appendField(Blockly.beatleESP32PicXY)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX);
      this.appendValueInput("Y")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY);
      
      this.appendDummyInput();
      this.appendValueInput("W")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicW);
      this.appendValueInput("H")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicH);
      this.appendValueInput("ID")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32FontID);
      
      this.appendDummyInput();
		    
		  
		  this.appendValueInput("fontcolor")
      .appendField(Blockly.beatleESP32fontcolor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT);  
      this.appendValueInput("color")
      .appendField(Blockly.beatleESP32backcolor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT);
      /*
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      */
      this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32XAlign)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32LeftAlign, "LeftAlign"],
			  	[Blockly.beatleESP32RightAlign, "RightAlign"],
			  	[Blockly.beatleESP32MiddleAlign, "MiddleAlign"]
		  	]), "XAlignStatus");
		  this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32YAlign)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32LeftAlign, "UpAlign"],
			  	[Blockly.beatleESP32RightAlign, "DownAlign"],
			  	[Blockly.beatleESP32MiddleAlign, "MiddleAlign"]
		  	]), "YAlignStatus");
		  this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32BackgroundStatus)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32backstatus0, "backstatus0"],
			  	[Blockly.beatleESP32backstatus1, "backstatus1"],
			  	[Blockly.beatleESP32backstatus2, "backstatus2"],
			  	[Blockly.beatleESP32backstatus3, "backstatus3"]
		  	]), "backstatus");
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
      this.setTooltip('');
      this.setColour('#ffaa00');
    }
  };
  
Blockly.Blocks.beatleESP32Fill = {
    init: function () {

      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Fill);
		    
		  this.appendDummyInput();  
		    
      this.appendValueInput("X")
      .appendField(Blockly.beatleESP32PicXY)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX);
      this.appendValueInput("Y")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY);
      
      this.appendDummyInput();
      this.appendValueInput("W")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicW);
      this.appendValueInput("H")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicH);
      
      
      this.appendDummyInput();
		    
		  this.appendValueInput("color")
      .appendField(Blockly.beatleESP32FillColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT);
      /*  
      this.appendValueInput("R")
      .appendField(Blockly.beatleESP32FillColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_R);
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      */
      
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
      this.setTooltip('');
      this.setColour('#ffaa00');
    }
  };
  
Blockly.Blocks.beatleESP32Line = {
    init: function () {

      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Line);
		    
		  this.appendDummyInput();  
		    
      this.appendValueInput("X")
      .appendField(Blockly.beatleESP32PicXY)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX);
      this.appendValueInput("Y")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY);
      
      this.appendDummyInput();
      this.appendValueInput("X2")
      .appendField(Blockly.beatleESP32PicX2Y2)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX2);
      this.appendValueInput("Y2")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY2);
      
      
      this.appendDummyInput();
		    
		  this.appendValueInput("color")
      .appendField(Blockly.beatleESP32LineColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT);   
      /*
      this.appendValueInput("R")
      .appendField(Blockly.beatleESP32LineColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_R);
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      */
      
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
      this.setTooltip('');
      this.setColour('#ffaa00');
    }
};

Blockly.Blocks.beatleESP32Rectangle = {
    init: function () {

      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Rectangle);
		    
		  this.appendDummyInput();  
		    
      this.appendValueInput("X")
      .appendField(Blockly.beatleESP32PicXY)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX);
      this.appendValueInput("Y")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY);
      
      this.appendDummyInput();
      this.appendValueInput("X2")
      .appendField(Blockly.beatleESP32PicX2Y2)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX2);
      this.appendValueInput("Y2")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY2);
      
      
      this.appendDummyInput();
		    
		  this.appendValueInput("color")
      .appendField(Blockly.beatleESP32LineColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT);   
      /*  
      this.appendValueInput("R")
      .appendField(Blockly.beatleESP32LineColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_R);
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      */
      
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
      this.setTooltip('');
      this.setColour('#ffaa00');
    }
};

Blockly.Blocks.beatleESP32Circle = {
    init: function () {

      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Circle);
		    
		  this.appendDummyInput();  
		    
      this.appendValueInput("X")
      .appendField(Blockly.beatleESP32CircleXY)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX);
      this.appendValueInput("Y")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY);
      
      this.appendDummyInput();
      this.appendValueInput("R")
      .appendField(Blockly.beatleESP32PicRadius)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicR);

      
      
      this.appendDummyInput();
		    
		  this.appendValueInput("color")
      .appendField(Blockly.beatleESP32LineColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT);   
      /*    
      this.appendValueInput("R")
      .appendField(Blockly.beatleESP32LineColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_R);
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      */
      
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
      this.setTooltip('');
      this.setColour('#ffaa00');
    }
};

Blockly.Blocks.beatleESP32Circle2 = {
    init: function () {

      this.appendDummyInput()
		    .appendField(Blockly.beatleESP32Circle2);
		    
		  this.appendDummyInput();  
		    
      this.appendValueInput("X")
      .appendField(Blockly.beatleESP32CircleXY)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicX);
      this.appendValueInput("Y")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicY);
      
      this.appendDummyInput();
      this.appendValueInput("R")
      .appendField(Blockly.beatleESP32PicRadius)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.beatleESP32PicR);

      
      
      this.appendDummyInput();
		    
		  this.appendValueInput("color")
      .appendField(Blockly.beatleESP32FillColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT);   
      /*   
      this.appendValueInput("R")
      .appendField(Blockly.beatleESP32FillColor)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_R);
      this.appendValueInput("G")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_G);
      this.appendValueInput("B")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_B);
      */
      
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
      this.setTooltip('');
      this.setColour('#ffaa00');
    }
};

//////////////////////////////////////////////////////////////////////////////
Blockly.Blocks.beatleESP32WebRadio = {
  init: function() {
    this.setColour('#FF168B');
    
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32WebRadio);
    this.appendValueInput("SSID")
    .appendField(Blockly.WifiSSID);
    this.appendValueInput("PWD")
    .appendField(Blockly.WifiPASSWORD);
    this.appendValueInput("station")
    .appendField(Blockly.beatleESP32Radiostation);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

Blockly.Blocks.beatleESP32WebRadioList = {
  init: function() {
    
    this.appendDummyInput()
		  	.appendField(Blockly.beatleESP32WebRadioList);
	  this.appendDummyInput()	  
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32Radio1, "station1"],
			  	[Blockly.beatleESP32Radio2, "station2"],
			  	[Blockly.beatleESP32Radio3, "station3"],
			  	[Blockly.beatleESP32Radio4, "station4"],
		  	]), "radiostation");
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#FF168B');
		this.setOutput(true, null);
		this.setTooltip('');
  }
   
};

Blockly.Blocks.beatleESP32speechSynthesis = {
  init: function() {
    this.setColour('#FF168B');
    
    this.appendDummyInput()
        .appendField(Blockly.beatleESP32speechSynthesis);
		this.appendDummyInput()
		    .appendField("");
    this.appendValueInput("SSID")
        .appendField(Blockly.WifiSSID);
    this.appendValueInput("PWD")
        .appendField(Blockly.WifiPASSWORD);
    this.appendValueInput("token")
        .appendField(Blockly.beatleESP32BaiduToken);
    this.appendDummyInput()
		    .appendField(Blockly.BeatleESP32Text)
		  	.appendField(new Blockly.FieldTextInput('你好，欢迎使用文字转语音功能'),'speechTXT');
		this.appendValueInput('speechVol')
		    .appendField(Blockly.beatleESP32speechVol);
		this.appendDummyInput()	  
		    .appendField(Blockly.beatleESP32speechPer)
    		.appendField(new Blockly.FieldDropdown([
			  	[Blockly.beatleESP32person1, "person1"],
			  	[Blockly.beatleESP32person2, "person2"],
			  	[Blockly.beatleESP32person3, "person3"],
			  	[Blockly.beatleESP32person4, "person4"],
		  	]), "person");
		this.appendValueInput('speechSpd')
		    .appendField(Blockly.beatleESP32speechSpd);
		this.appendValueInput('speechPit')
		    .appendField(Blockly.beatleESP32speechPit);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

Blockly.Blocks.beatleESP32MazeSolvergotoFinish = {
  
	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32MazeSolvergotoFinish);
		
		 //   .appendField(new Blockly.FieldTextInput('0xFFFFFF'),'servoP');

		
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32StopFollowline = {
  
	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32StopFollowline);
		
		 //   .appendField(new Blockly.FieldTextInput('0xFFFFFF'),'servoP');

		
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32WaitforStart = {
  
	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32WaitforStart);
		
		 //   .appendField(new Blockly.FieldTextInput('0xFFFFFF'),'servoP');

		
		    
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32MazeSolvergotoTarget = {
  
	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32MazeSolvergotoTarget)
		    .appendField(Blockly.beatleESP32MazeSolvergotoTargetCmd)
		  	.appendField(new Blockly.FieldTextInput('1'),'cmdNO');
		this.appendValueInput('CMD')
    .setCheck([String,Number]);
		 //   .appendField(new Blockly.FieldTextInput('0xFFFFFF'),'servoP');

		
		    
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32MazeSolverTargetReached = {
  init: function() {
		//this.appendDummyInput().appendField('  ' + Blockly.beatleAIReuest);
		
    this.appendDummyInput()
        .appendField(Blockly.beatleESP32reachTargetIn)
		    .appendField(new Blockly.FieldTextInput('10000'),'timeout')
		    .appendField(Blockly.MIXLY_MILLIS)
		  	.appendField(Blockly.beatleESP32MazeSolverTargetReached);
		//this.appendDummyInput().appendField(new Blockly.FieldImage('../../media/ZeroWorkshop/beatlefollowline.gif',150,150));
		this.setColour('#FF168B');
		this.setOutput(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.beatleESP32MazeSolverWaitUntillTargetReached = {
  
	init: function() {
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32MazeSolverWaitUntillTargetReached);
		this.appendDummyInput()
		    .appendField(Blockly.beatleESP32MazeSolveTimeout)
		    .appendField(new Blockly.FieldTextInput('10000'),'timeout')
		    .appendField(Blockly.MIXLY_MILLIS);
		

		
		//.appendField(new Blockly.FieldImage("../../media/ZeroWorkshop/catch.png", 150, 80, ""));
		//this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF168B');
		this.setTooltip('');
	}
};
