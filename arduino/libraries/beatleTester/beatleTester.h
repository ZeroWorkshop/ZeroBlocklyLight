#pragma once
#include "Arduino.h"



namespace beatleCMD
{
	//-------------------------------------------------------------------------------------//
	// Packet Values
	//-------------------------------------------------------------------------------------//
	const uint8_t STACK_SIZE      = 10;   //total number of bytes in a stack/packet (same for cmds and queries)
	const uint8_t SB              = 0x3E; //start byte
	const uint8_t VER             = 0xFF; //version
	const uint8_t LEN             = 0x6;  //number of bytes after "LEN" (except for checksum data and EB)
	const uint8_t FEEDBACK        = 1;    //feedback requested
	const uint8_t NO_FEEDBACK     = 0;    //no feedback requested
	const uint8_t EB              = 0xEF; //end byte

	//-------------------------------------------------------------------------------------//
	// Control Command Values
	//-------------------------------------------------------------------------------------//
  const uint8_t RUNWHEELS       = 0x01;
	const uint8_t PLAYBUZZER      = 0x02;
	const uint8_t SETLED          = 0x03;
	const uint8_t RESET_BEATLE    = 0x04;
	const uint8_t WRITE_EEPROM    = 0x05;
	const uint8_t SET_PRODDATE    = 0x06;
	
  //-------------------------------------------------------------------------------------//
  // Run Wheel Parameter values
  //-------------------------------------------------------------------------------------//
  const uint8_t RUNFORWARD      = 0x00;
  const uint8_t RUNBACKWARD     = 0x01;
  const uint8_t WHEELSPEED      = 0x02;

  
  //-------------------------------------------------------------------------------------//
  // LED color Parameter values
  //-------------------------------------------------------------------------------------//
  const uint8_t LEDON           = 0x00;
  const uint8_t LEDOFF          = 0x01;
  const uint8_t LEDWHITE        = 0x02;
  const uint8_t LEDRED          = 0x03;
  const uint8_t LEDGREEN        = 0x04;
  const uint8_t LEDBLUE         = 0x05;
  
	//-------------------------------------------------------------------------------------//
	// Query Command Values
	//-------------------------------------------------------------------------------------//
	const uint8_t GET_STATUS_      = 0x81;
	const uint8_t GET_BUTTON_STATE = 0x82;
	const uint8_t GET_IRSENSORS    = 0x83;
	const uint8_t GET_LINESENSORS  = 0x84;
  
  //-------------------------------------------------------------------------------------//
  // Query return Values
  //-------------------------------------------------------------------------------------//
  const uint8_t BUTTON_PRESSED   = 0xF0;
  const uint8_t BUTTON_RELEASED  = 0xF1;
  const uint8_t IR_SENSED        = 0xA0;
  const uint8_t IR_UNSENSED      = 0xA1;
  
	//-------------------------------------------------------------------------------------//
	// Line sensor Values
	//-------------------------------------------------------------------------------------//
	const uint16_t ALLWHITE       = 0x0000;  //b00000000 
	const uint16_t ALLBLACK       = 0x007F;  //b01111111
	const uint16_t ZEBRA_0        = 0x0055;  //b01010101
	const uint16_t ZEBRA_1        = 0x002A;  //b00101010
	const uint8_t  SENSORPASS     = 0;
	const uint8_t  SENSORFAIL     = 1;
	const uint8_t  WHITESEEN      = 0;
	const uint8_t  BLACKSEEN      = 1;
	
	const uint8_t EQ_POP          = 1;
	const uint8_t EQ_ROCK         = 2;
	const uint8_t EQ_JAZZ         = 3;
	const uint8_t EQ_CLASSIC      = 4;
	const uint8_t EQ_BASE         = 5;
	

	//-------------------------------------------------------------------------------------//
	// Mode Values
	//-------------------------------------------------------------------------------------//
	const uint8_t REPEAT          = 0;
	const uint8_t FOLDER_REPEAT   = 1;
	const uint8_t SINGLE_REPEAT   = 2;
	const uint8_t RANDOM          = 3;

	//-------------------------------------------------------------------------------------//
	// Playback Source Values
	//-------------------------------------------------------------------------------------//
	const uint8_t U               = 1;
	const uint8_t TF              = 2;
	const uint8_t AUX             = 3;
	const uint8_t SLEEP           = 4;
	const uint8_t FLASH           = 5;

	//-------------------------------------------------------------------------------------//
	// Base Volume Adjust Value
	//-------------------------------------------------------------------------------------//
	const uint8_t VOL_ADJUST      = 0x10;

	//-------------------------------------------------------------------------------------//
	// Repeat Play Values
	//-------------------------------------------------------------------------------------//
	const uint8_t STOP_REPEAT     = 0;
	const uint8_t START_REPEAT    = 1;
}




class beatleTester
{
public:
	Stream* _serial;
    
	struct stack {
		uint8_t start_byte;
		uint8_t version;
		uint8_t length;
		uint8_t commandValue;
		uint8_t feedbackValue;
		uint8_t paramMSB;
		uint8_t paramLSB;
		uint8_t checksumMSB;
		uint8_t checksumLSB;
		uint8_t end_byte;
	} sendStack, recStack;

	unsigned long timer;
	unsigned long threshold = 500;




	bool begin(Stream& stream);
	void progEEPROM(uint8_t prodY, uint8_t prodM, uint8_t prodD, uint8_t delY, uint8_t delM, uint8_t delD);
	void resetBeatle();
	void runWheel(uint8_t direct, uint8_t speed);
	void playBuzzer();
	void setLED(uint8_t on_off, uint8_t color);

	
	bool isDocked();
	int16_t buttonState(uint8_t button);
	int16_t frontIRSensors();
	int16_t lineSensors();
	
	
	
////////////////////////////////////////////////////////////////////
	void findChecksum(stack *_stack);
	void sendData();
	void flush();
	int16_t query(uint8_t cmd, uint8_t msb=0, uint8_t lsb=0);
	bool getStatus(uint8_t cmd);
	bool parseFeedback();
	bool timeout();

	void printStack(stack _stack);
};