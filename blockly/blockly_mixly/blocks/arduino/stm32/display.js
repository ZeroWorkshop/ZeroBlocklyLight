'use strict';

goog.provide('Blockly.Blocks.display');

goog.require('Blockly.Blocks');

Blockly.Blocks.display.HUE = 180;

Blockly.Blocks.group_lcd_init2 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('device')
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_SETUP)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldDropdown([['1602', '16,2'], ['2004', '20,4']]), 'TYPE')
    .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
    .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT) 
    .appendField(' '+Blockly.Msg.CONTROLS_FOR_INPUT_WITH) 
    .appendField(new Blockly.FieldDropdown([["I2C1","Wire1"],["I2C2","Wire2"]]), "i2c_type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_INIT2);
  }
};

Blockly.Blocks.group_lcd_init3 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_SETUP)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldDropdown([['1602', '16,2'], ['2004', '20,4']]), 'TYPE')
    .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
    .setAlign(Blockly.ALIGN_LEFT);      
    this.appendDummyInput()
    .appendField('RS')
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "RS")
    .appendField('EN')
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "EN")
    .appendField('D4')
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "D4")
    .appendField('D5')
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "D5")
    .appendField('D6')
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "D6")
    .appendField('D7')
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "D7");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_INIT3);
  }
};

Blockly.Blocks.group_lcd_print = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput("TEXT", String)
    .setCheck([String, Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
    .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String, Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_LCD_PRINT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_PRINT);
  }
};

Blockly.Blocks.group_lcd_print2 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput("row", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
    .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("column", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("TEXT", String)
    .setCheck([String, Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_LCD_PRINT);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_PRINT2.replace('%1', Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC)).replace('%2', Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC)));
  }
};

Blockly.Blocks.group_lcd_power = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "display"], [Blockly.MIXLY_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_POWER);
  }
};

//LCD自定义图案显示
Blockly.Blocks['lcd_display_pattern'] = {
  init: function() {
    this.appendValueInput("row")
    .setCheck(null)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldTextInput("mylcd"), "name")
    .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("column")
    .setCheck(null)
    .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("pattern")
    .setCheck(null)
    .appendField(Blockly.COLUMN_DISPLAY_IMAGE);
    this.appendDummyInput()
    .appendField(Blockly.LCD_NUMBERING)
    .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setTooltip("");
    this.setHelpUrl("https://www.arduino.cc/en/Reference/LiquidCrystalCreateChar");
  }
};

//点阵屏显示_图案数组
Blockly.Blocks.lcd_pattern = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
    .appendField(new Blockly.FieldTextInput("lcd"), "VAR");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a85");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a75");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a65");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a55");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a45");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a35");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a25");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a15");
    this.setOutput(true, Number);
    this.setTooltip("");
  }
};

Blockly.Blocks.group_lcd_init=Blockly.Blocks.group_lcd_init2;

//初始化OLED(I2C)
Blockly.Blocks.arduino_oled_begin_i2c= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.MIXLY_SETUP+" OLED") 
      .appendField(new Blockly.FieldDropdown([["128x64","128x64"],["128x32","128x32"],["96x16","96x16"]]), "arduino_oled_begin_type")
      .appendField(new Blockly.FieldTextInput("display"), "oled_begin_name");
  this.appendValueInput("oled_begin_pin_reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RESET#");
  this.appendValueInput("oled_begin_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.MIXLY_LCD_ADDRESS);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH) 
      .appendField(new Blockly.FieldDropdown([["I2C1","Wire1"],["I2C2","Wire2"]]), "arduino_oled_i2c_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化OLED(SPI)
Blockly.Blocks.arduino_oled_begin_spi_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.MIXLY_SETUP+" OLED")
      .appendField(new Blockly.FieldDropdown([["128x64","128x64"],["128x32","128x32"],["96x16","96x16"]]), "arduino_oled_begin_type")
      .appendField(new Blockly.FieldTextInput("display"), "oled_begin_name");
  this.appendValueInput("oled_begin_mosi")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("MOSI#");
  this.appendValueInput("oled_begin_clk")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CLK#");
  this.appendValueInput("oled_begin_dc")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("DC#");
  this.appendValueInput("oled_begin_reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RESET#");
  this.appendValueInput("oled_begin_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("CS#");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化OLED(SPI)
Blockly.Blocks.arduino_oled_begin_spi_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.MIXLY_SETUP+" OLED")  
      .appendField(new Blockly.FieldDropdown([["128x64","128x64"],["128x32","128x32"],["96x16","96x16"]]), "arduino_oled_begin_type")
      .appendField(new Blockly.FieldTextInput("display"), "oled_begin_name");
  this.appendValueInput("oled_begin_dc")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" DC#");
  this.appendValueInput("oled_begin_reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RESET#");
  this.appendValueInput("oled_begin_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("CS#");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(' '+Blockly.Msg.CONTROLS_FOR_INPUT_WITH) 
      .appendField(new Blockly.FieldDropdown([["SPI1","SPI_1"],["SPI2","SPI_2"]]), "spi_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//设置光标的位置，OLED将会从此位置开始，向后显示文本或数字
Blockly.Blocks.arduino_oled_set_cursor= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.MIXLY_STM32_OLED_SET_CURSOR_POSITION);
  this.appendValueInput("set_cursor_x")
      .setCheck(null)  
      .appendField("X#");
  this.appendValueInput("set_cursor_y")
      .setCheck(null)  
      .appendField("Y#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_set_font= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_SET_FONT);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_STM32_OLED_TINY,"0"],[Blockly.MIXLY_STM32_OLED_SMALL,"1"],[Blockly.MIXLY_MID,"2"],[Blockly.MIXLY_STM32_OLED_BIG,"3"],[Blockly.MIXLY_STM32_OLED_HUGE,"4"]]), "font_size");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_set_font_color= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.MIXLY_STM32_OLED_SET_FONT_COLOR);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_STM32_OLED_BLACK_ON_WHITE,"BLACK, WHITE"]]), "font_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_show_text= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.texttodisplay,"print"],[Blockly.Msg.texttodisplay+"("+Blockly.Msg.TEXT_PRINT_Huanhang_TOOLTIP+")","println"]]), "show_text_type");
  this.appendValueInput("oled_show_text_auto_linefeed_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_show_num= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_JS_MONITOR_SHOW_NUMBER,"print"],[Blockly.MIXLY_MICROBIT_JS_MONITOR_SHOW_NUMBER+"("+Blockly.Msg.TEXT_PRINT_Huanhang_TOOLTIP+")","println"]]), "show_num_type");
  this.appendValueInput("oled_show_num_auto_linefeed_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MATH_BIN,"BIN"],[Blockly.Msg.MATH_OCT,"OCT"],[Blockly.Msg.MATH_DEC,"DEC"],[Blockly.Msg.MATH_HEX,"HEX"]]), "oled_show_num_auto_linefeed_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_set_rotation= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.MIXLY_MICROBIT_monitor)
      .appendField(new Blockly.FieldDropdown([[Blockly.blockpy_turtle_rotate+" 0°","0"],[Blockly.blockpy_turtle_rotate+" 90°","1"],[Blockly.blockpy_turtle_rotate+" 180°","2"],[Blockly.blockpy_turtle_rotate+" 270°","3"]]), "oled_set_rotation_data");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_clear_update_display= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(new Blockly.FieldDropdown([[Blockly.OLED_CLEAR,"clearDisplay"],[Blockly.OLED_PAGE,"display"]]), "choose_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_pixel= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_DRAWPIXEL);
  this.appendValueInput("oled_draw_pixel_x")
      .setCheck(null)  
      .appendField("x");
  this.appendValueInput("oled_draw_pixel_y")
      .setCheck(null)  
      .appendField("y");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_pixel_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_line= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_DRAWLINE);
  this.appendValueInput("oled_draw_line_start_x")
      .setCheck(null)  
      .appendField(Blockly.OLED_START_X);
  this.appendValueInput("oled_draw_line_start_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_line_end_x")
      .setCheck(null)  
      .appendField(Blockly.OLED_END_X);
  this.appendValueInput("oled_draw_line_end_y")
      .setCheck(null)  
      .appendField("y");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_line_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_line1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(Blockly.OLED_DRAWSTRLINE)
      .appendField(new Blockly.FieldDropdown([[Blockly.OLED_HOR,"drawFastHLine"],[Blockly.OLED_VER,"drawFastVLine"]]), "oled_draw_line1_type");
  this.appendValueInput("oled_draw_line_start_x")
      .setCheck(null)  
      .appendField(Blockly.OLED_START_X);
  this.appendValueInput("oled_draw_line_start_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_line_length")
      .setCheck(null)  
      .appendField(Blockly.OLED_LENGTH);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_line_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_rect= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_DRAW_RECTANGLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.OLED_HOLLOW,"draw"],[Blockly.OLED_SOLID,"fill"]]), "oled_draw_rect_type_1");
  this.appendValueInput("oled_draw_rect_x")
      .setCheck(null)  
      .appendField(Blockly.OLED_L_U_X);
  this.appendValueInput("oled_draw_rect_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_rect_width")
      .setCheck(null)  
      .appendField(Blockly.MIXLY_WIDTH);
  this.appendValueInput("oled_draw_rect_height")
      .setCheck(null)  
      .appendField(Blockly.MIXLY_HEIGHT);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_rect_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_RoundRect= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_DRAW_RAD_RECTANGLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.OLED_HOLLOW,"draw"],[Blockly.OLED_SOLID,"fill"]]), "oled_draw_rect_type_1");
  this.appendValueInput("oled_draw_rect_x")
      .setCheck(null)  
      .appendField(Blockly.OLED_L_U_X);
  this.appendValueInput("oled_draw_rect_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_rect_width")
      .setCheck(null)  
      .appendField(Blockly.MIXLY_WIDTH);
  this.appendValueInput("oled_draw_rect_height")
      .setCheck(null)  
      .appendField(Blockly.MIXLY_HEIGHT);
  this.appendValueInput("oled_draw_rect_radius")
      .setCheck(null)  
      .appendField(Blockly.OLED_RADIUS);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_rect_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_circle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_DRAW_CIRCLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.OLED_HOLLOW,"draw"],[Blockly.OLED_SOLID,"fill"]]), "oled_draw_circle_type");
  this.appendValueInput("oled_draw_circle_x")
      .setCheck(null)  
      .appendField(Blockly.OLED_CENTER_CIRCLE_X);
  this.appendValueInput("oled_draw_circle_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_circle_radius")
      .setCheck(null)  
      .appendField(Blockly.OLED_CIRCLE_RADIUS);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_circle_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_triangle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_DRAW_TRIANGLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.OLED_HOLLOW,"draw"],[Blockly.OLED_SOLID,"fill"]]), "oled_draw_triangle_type");
  this.appendValueInput("oled_draw_triangle_x1")
      .setCheck(null)  
      .appendField("x1");
  this.appendValueInput("oled_draw_triangle_y1")
      .setCheck(null)  
      .appendField("y1");
  this.appendValueInput("oled_draw_triangle_x2")
      .setCheck(null)  
      .appendField("x2");
  this.appendValueInput("oled_draw_triangle_y2")
      .setCheck(null)  
      .appendField("y2");
  this.appendValueInput("oled_draw_triangle_x3")
      .setCheck(null)  
      .appendField("x3");
  this.appendValueInput("oled_draw_triangle_y3")
      .setCheck(null)  
      .appendField("y3");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_triangle_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_oled_draw_bitmap= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" "+Blockly.OLED_BITMAP);
  this.appendValueInput("oled_draw_bitmap_x")
      .setCheck(null)  
      .appendField(Blockly.OLED_L_U_X);
  this.appendValueInput("oled_draw_bitmap_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_bitmap_data")
      .setCheck(null)  
      .appendField(Blockly.OLED_BITMAP_NAME);
  this.appendValueInput("oled_draw_bitmap_width")
      .setCheck(null)  
      .appendField(Blockly.MIXLY_WIDTH);
  this.appendValueInput("oled_draw_bitmap_height")
      .setCheck(null)  
      .appendField(Blockly.MIXLY_HEIGHT);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_WHITE,"WHITE"],[Blockly.Msg.COLOUR_BLACK,"BLACK"],[Blockly.MIXLY_ESP32_TOGGLE,"INVERSE"]]), "oled_draw_bitmap_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.display.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};