/**
 * \par Copyright (C), 206, Zeroworkshop
 * \class   StarterProI2C
 * \brief   Driver for Starter Pro module.
 * @file    StarterProI2C.h
 * @author  Zeroworkshop
 * @version V1.0.0
 * @date    2019/05/8
 * @brief   Header for StarterProI2C.cpp module
 *
 * \par Copyright
 * This software is Copyright (C), 2016-2019, Zeroworkshop. Use is subject to license \n
 * conditions. The main licensing options available are GPL V2 or Commercial: \n
 *
 * \par Open Source Licensing GPL V2
 * This is the appropriate option if you want to share the source code of your \n
 * application with everyone you distribute it to, and you also want to give them \n
 * the right to share who uses it. If you wish to use this software under Open \n
 * Source Licensing, you must contribute all your source code to the open source \n
 * community in accordance with the GPL Version 2 when your application is \n
 * distributed. See http://www.gnu.org/copyleft/gpl.html
 *
*/

#include "io_expander.h"

// move state and function
#define CMD_RESET         0x00


// config function
#define CMD_SET_DEVID     				0x10


#define CMD_SET_PIN_TYPE          0x11
#define CMD_SET_PIN_DIGITAL_VAL   0x12
#define CMD_SET_PIN_ANALOG_VAL    0x13
#define CMD_SET_SERVO_VAL         0x14




// get sensor status
#define CMD_GET_PIN_TYPE        0x21
#define CMD_GET_PIN_DIGITAL_VAL 0x22
#define CMD_GET_PIN_ANALOG_VAL  0x23




//#define I2C_DEFAULT_ADDR        0x9


/**
 * Alternate Constructor which can call your own function to map the Encoder Motor New to arduino port,
 * you can set any slot for the Encoder Motor New device. 
 * \param[in]
 *   port - RJ25 port from PORT_1 to PORT_10
 * \param[in]
 *   slot - SLOT1 or SLOT2
 */
IOExpander::IOExpander(uint8_t addr)
{
  address = addr;
}



/**
 * Alternate Constructor which can call your own function to map the Encoder Motor New to arduino port,
 * you should initialized slot and slaveAddress here for the Encoder Motor New device.
 * \param[in]
 *   None
 */
IOExpander::IOExpander(void)
{
  address = 0x09;
}



/**
 * \par Function
 *    begin
 * \par Description
 *    Initialize Encoder Motor New.
 * \param[in]
 *    None
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
void IOExpander::begin(void)
{
  Wire.begin();
}



/**
 * \par Function
 *    setAddr
 * \par Description
 *     Reset the i2c address of encoder motor .
 * \param[in]
 *    i2cAddr - i2c address of encoder motor
 * \param[in]
 *    slot - slot number of encoder motor
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
void IOExpander::setAddr(uint8_t i2cAddr)
{
  address = i2cAddr;
}


/**
 * \par Function
 *    reset
 * \par Description
 *    Reset the parameter of Motor.
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
void IOExpander::reset(void)
{
  cmdBuf[0] = _slot;
  cmdBuf[1] = CMD_RESET;
  sendCmd();
  delay(2);
}



/**
 * \par Function
 *    sendCmd
 * \par Description
 *    Send command to Motor.
 * \param[in]
 *    None
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
void IOExpander::sendCmd(void)
{
  Wire.beginTransmission(address); 
  for(int i=0;i<18;i++)
    Wire.write(cmdBuf[i]);       
  Wire.endTransmission();
}


/**
 * \par Function
 *    setDevid
 * \par Description
 *    Set the devid to Motor.
 * \param[in]
 *    devid - the I2C adress
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
void IOExpander::setDevid(uint8_t devid)
{
  cmdBuf[0] = _slot;
  cmdBuf[1] = CMD_SET_DEVID;
  cmdBuf[2] = devid;
  sendCmd();
}


void IOExpander::digitalRead(uint8_t pin, long * dValue)
{
    long raw_value;
  char buf[8];
  Wire.beginTransmission(address);
  Wire.write(pin);
  Wire.write(CMD_GET_PIN_DIGITAL_VAL);
  Wire.endTransmission(0);
  Wire.requestFrom(address,(uint8_t)4);
  for(int i=0;i<4;i++)
  {
    buf[i] = Wire.read();
  }                                   
  *dValue = *(long*)buf;      
}

void   IOExpander::analogRead(uint8_t pin,long * dValue)
{
  long raw_value;
  char buf[8];
  Wire.beginTransmission(address);
  Wire.write(pin);
  Wire.write(CMD_GET_PIN_ANALOG_VAL);
  Wire.endTransmission(0);
  Wire.requestFrom(address,(uint8_t)4);
  for(int i=0;i<4;i++)
  {
    buf[i] = Wire.read();
  }
  *dValue = *(long*)buf;   
     
}

long  IOExpander::analogRead(uint8_t pin)
{
    long val;
    analogRead(pin,&val);
    return val;
}

void IOExpander::digitalWrite( uint8_t pin, uint8_t dValue)
{
    cmdBuf[0] = pin;
    cmdBuf[1] = CMD_SET_PIN_DIGITAL_VAL;
    cmdBuf[2] = dValue;
    sendCmd();
    delay(10);
}
void IOExpander::analogWrite( uint8_t pin, long  dValue)
{
    cmdBuf[0] = pin;
    cmdBuf[1] = CMD_SET_PIN_ANALOG_VAL;
    memcpy(cmdBuf+2,&dValue,4);
    sendCmd();
   
    delay(10);
}



void IOExpander::servoWrite(uint8_t dValue)
{
    cmdBuf[0] = _slot;
    cmdBuf[1] = CMD_SET_SERVO_VAL;
    cmdBuf[2] = dValue;
    sendCmd();
    delay(10);
}