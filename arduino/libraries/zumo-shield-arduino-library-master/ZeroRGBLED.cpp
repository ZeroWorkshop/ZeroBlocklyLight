#include "ZeroRGBLED.h"
#include <Adafruit_NeoPixel.h>



ZeroRGBLED::ZeroRGBLED(Adafruit_NeoPixel a)
{
	//a = Adafruit_NeoPixel(n,p,NEO_RGB + NEO_KHZ800);	
	obj_name = a;
	
}
/*
ZeroRGBLED::~ZeroRGBLED() {

}	
*/

void ZeroRGBLED::begin(void) {
  obj_name.begin();

}

void ZeroRGBLED::rainbow_stream(uint8_t wait) {
	
  for (int i = 0; i < obj_name.numPixels(); i++) {
    int pixelHue = firstPixelHue + (i * 65536L / obj_name.numPixels());
    obj_name.setPixelColor(i, obj_name.gamma32(obj_name.ColorHSV(pixelHue)));
  }
  if (millis() - FStartT1 > wait) {
    obj_name.show(); // Update strip with new contents
    FStartT1 = millis();
     firstPixelHue += 256;
    if (firstPixelHue > 3 * 65536)
      firstPixelHue = 0;
  }
}

void ZeroRGBLED::theaterChaseRainbow(uint8_t wait) {
  for (int c = innerloop; c < obj_name.numPixels(); c += 3) {
    int hue = firstPixelHue + c * 65536L / obj_name.numPixels();
    uint32_t color = obj_name.gamma32(obj_name.ColorHSV(hue)); // hue -> RGB
    obj_name.setPixelColor(c, color);
  }
  if (millis() - FStartT2 <= wait) {
    obj_name.show();
  }
  else {
    obj_name.clear();
    FStartT2 = millis();
    firstPixelHue += 65536 / 90;
    innerloop += 1;

    if (innerloop >= 3) {
      innerloop = 0;
      outerloop += 1;
    }
    if (outerloop >= 30) {
      outerloop = 0;
      firstPixelHue = 0;
    }
  }
}

void ZeroRGBLED::FlashOneLED_RGB(int flash_speed, uint8_t pixel, uint32_t c) {
  long flash_time;

  switch (flash_speed) {
  case FAST:
    flash_time = FLASH_DURATION * 0.2;
    break;
  case MIDDLE:
    flash_time = FLASH_DURATION * 0.6;
    break;
  case SLOW:
    flash_time = FLASH_DURATION * 1.0;
    break;
  }
  if (millis() - FlashStartTime < flash_time / 2 ) {
    obj_name.setPixelColor(pixel, c);
    obj_name.show();
  }
  else if (millis() - FlashStartTime < flash_time ) {
    obj_name.setPixelColor(pixel, OFF_RGB);
    obj_name.show();
  }
  else {
    FlashStartTime = millis();
  }

}

void ZeroRGBLED::FlashOneLED_RGB(int flash_speed, uint8_t pixel, uint32_t c, int swap) {
  long flash_time;

  switch (flash_speed) {
  case FAST:
    flash_time = FLASH_DURATION * 0.2;
    break;
  case MIDDLE:
    flash_time = FLASH_DURATION * 0.6;
    break;
  case SLOW:
    flash_time = FLASH_DURATION * 1.0;
    break;
  }
  if (swap) {
    if (millis() - FlashStartTime < flash_time / 2 ) {
      obj_name.setPixelColor(pixel, OFF_RGB);
      obj_name.show();
    }
    else if (millis() - FlashStartTime < flash_time ) {
      obj_name.setPixelColor(pixel, c);
      obj_name.show();
    }
    else {
      FlashStartTime = millis();
    }
  }
  else {
    if (millis() - FlashStartTime < flash_time / 2 ) {
      obj_name.setPixelColor(pixel, c);
      obj_name.show();
    }
    else if (millis() - FlashStartTime < flash_time ) {
      obj_name.setPixelColor(pixel, OFF_RGB);
      obj_name.show();
    }
    else {
      FlashStartTime = millis();
    }
  }
}

void ZeroRGBLED::OneLED_RGB(uint8_t pixel, uint32_t c) {

  obj_name.setPixelColor(pixel, c);
  obj_name.show();

}

void ZeroRGBLED::policeLightWipe(int pix_num, int *pixel) {
  if (firstRun) {
    WipeStartTime = millis();
    firstRun = false;
  }

  if ((*pixel) < pix_num) {
    if (millis() - WipeStartTime < 100) {
      obj_name.setPixelColor((*pixel), ON_BLUE);
      obj_name.setPixelColor(pix_num - 1 - (*pixel), ON_RED);
      obj_name.show();
    }
    else {
      (*pixel)++;
      WipeStartTime = millis();
    }
  }
  else {
    if (millis() - WipeStartTime < 100) {
    	for (int i = 0; i < pix_num; i++) {
        OneLED_RGB(i, OFF_RGB);
      
      }
    }
    else {
      WipeStartTime = millis();
      (*pixel = pix_num / 2);
    }
  }
}


void ZeroRGBLED::policeLightFlash(int pix_num, int flashSpeed, int swap) {
  for (int i = 0; i < pix_num / 2; i++) {
    FlashOneLED_RGB(flashSpeed, i, ON_RED);
    FlashOneLED_RGB(flashSpeed, i + pix_num / 2, ON_BLUE, swap);
  }
}

void ZeroRGBLED::policeLightRun(int TotalPix, int *pixels) {

  if (millis() - policeLightStart < 4000) {
    policeLightFlash(TotalPix, MIDDLE, UNSWAP);
  }
  else if (millis() - policeLightStart < 10000) {
    policeLightFlash(TotalPix, SLOW, SWAP);
  }
  else if (millis() - policeLightStart < 15000) {
    policeLightWipe(TotalPix, pixels);
  }
  else if (millis() - policeLightStart < 20000) {
    policeLightFlash(TotalPix, FAST, UNSWAP);
  }
  else
    policeLightStart = millis();


}