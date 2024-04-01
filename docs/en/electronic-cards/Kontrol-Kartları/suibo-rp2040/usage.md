---
sidebar_position : 3
---

# Use of the product



## Pin diagram


![Pin Diagram](./image/suibo.png)

 ## Pin Descriptions:




 
|Port A | Features |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Vin (5V)| Used to supply 5V from an external power supply.
|3.3V | Provides 3.3V power output for systems on the board.|
|GND (Ground)| -|
|5V| Provides a 5V power output.
|Buzzer| Can be connected to a buzzer used for audio output.
|SWD, SWC | SWC and SWD pins are used for serial wire debugging of the microcontroller.
|**Port B** | **Features** |                                                                                            
| GP29 | is the ADC pin and is used to convert analog signals to digital data.
|GP24, GP23, GP22, GP21, GP20, GP19, GP15| are pins that can generate PWM signals and are used for tasks such as adjusting the brightness of LEDs or controlling motor speed. |                                                                                         
|**Port C** | **Features**                                                                                               
|GP0 (TX) and GP1 (RX) are used for serial communication, TX is for sending data and RX is for receiving data.
|GP2 (SCL) and GP3 (SDA)| Used as clock (SCL) and data (SDA) line for I2C communication protocol.
|GP6 (MISO), GP7 (MOSI), GP17 (CS), GP16 (SCK)| For SPI communication protocol, MISO is used to receive data from Master to Slave, MOSI is used to send data from Slave to Master, CS (Chip Select) is used to select the device to be activated and SCK (Serial Clock) is used to send clock signal.
|GP10, GP11, GP12, GP13| are general purpose pins and can be programmed for various input/output functions. |  

