#include <Beatle.h>

Beatle beatle;

int maxspeed  = 128;
double kp = 1.0/12.0;
double ki = 0;
double kd = 6.0;

void setup()
{  
  Serial.begin(115200);
  beatle.motors.flipLeftMotor(true);
  beatle.StartProgram();
  
  beatle.led.colorAll(led.strip.Color(0,0,255));
  delay(500);
  beatle.SetPID(kp,ki,kd);
  beatle.SetMaxSpeed(maxspeed);
  beatle.LineSensorCalibration(true.128,20);
  beatle.button.waitForButton();
  beatle.buzzer.play("L16 cdegreg4");
  while(beatle.buzzer.isPlaying());  
}

void loop()
{
  beatle.followSegment();
}