---
sidebar_position : 1
pagination_next: null
pagination_prev: null
---

import DocCardList from '@theme/DocCardList';

# SpeedyBee F405 Wing Flight Board



![SpeedyBee F405 Wing Flight Card](./image/speedy-bee-3.jpg)
SpeedyBee F405 Wing is a flight control board with autonomous flight capabilities. It is compatible with Ardupilot and Inav and is offered as an alternative to Pixhawk through these software. It can also be used for underwater vehicles by adding external compass sensors such as the HMC5883L via the I2C port. This kit consists of three boards: a control board, a power distribution board and a wireless connectivity board. The power distribution board provides various voltage outputs, while the wireless connectivity board can communicate with mobile applications and ground station software via Bluetooth and Wi-Fi. It offers powerful energy management with an input voltage range of 7-36V and a maximum battery capacity of 6S. Integration with apps such as SpeedyBee App, MissionPlanner, QGroundControl allows users to manage and monitor their projects remotely.



## About the Board

| Feature | Value |
|-------------------------- |--------------------------------------------------------------------------------------------------------|
| MCU | STM32F405,168MHz,1MB Flash |
| IMU(Gyro & Accelerometer) | ICM-42688-P |
| Barometer | SPL006-001 |
| OSD Chip | AT7456E |
| Blackbox | MicroSD Card Slot |
| UART | 6 sets(USART1, USART2, USART3, UART4, UART5, UART6(Dedicated for Wireless board Telemetry connection)) |
| I2C | 1x Used for magnetometer, digital airspeed sensor |
| ADC | 4x (VBAT, Current, RSSI, Analog AirSpeed) |
| PWM | 12x (11+1 "LED "pad) |
| ELRS/CRSF receiver | Supported, connected to UART1 |
| SBUS | Built in inverter for SBUS input (UART2-RX) |
| LED | 3x LEDs for FC STATUS (Blue, Green) and 3.3V indicator(Red) 1x RGB |
| RSSI | Supported, Named as RS. |
| Supported FC Firmware | INAV:SpeedyBeeF405WING(default) ArduPilot: SpeedyBeeF405WING |

### SpeedyBee F405 WING PDB Card

| Feature | Value |
|------------------------ |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input voltage range | 7~36V (2~6S LiPo) |
| Battery Voltage Sensor | Connect to FC board VBAT, 1K:10K (Scale 1100 in iNav, BATT_VOLT_MULT 11.0 in ArduPilot) |
| Battery Current Sensor | 90A continuous, 215A peak Connect to FC board Current (Scale 195 in iNav, 50 A/V in ArduPilot) |
| TVS Protective diode | Yes |
| FC BEC output | Output 5.2V +/- 0.1V DC Continuous current 2.4 Amps, 3A Peak Designed for FC, Receiver, GPS module, AirSpeed module, Telemetry module, WS2812 LED_Strip |
| VTX BEC output | Output 9V +/- 0.1V DC Continuous current 1.8 Amps, 2.3A Peak Voltage adjustable, 9V Default, 12V or 5V via jumper Designed for Analog Video Transmitter, Digital Video Transmitter, Camera. |
| Servo BEC output | Output 4.9V +/- 0.1V DC Continuous current 4.5 Amps, 5.5A Peak Voltage adjustable, 4.9V Default, 6V or 7.2V via jumper Designed for Servos. |
| Weight | 11.4g |

#### SpeedyBee F405 WING Wireless Kart

| Feature | Value |
|-------------------------------------------------------------------------------------------------------- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wireless Configuration (long press BOOT button for 6 seconds to switch modes) | BLE mode, connect to Speedybee APP. / Wi-Fi mode, connect to QGroundControl APP, Speedybee APP, MissionPlanner, etc. / Classic Bluetooth SPP mode, connect to QGroundControl APP, MissionPlanner |
| LED strip controller (short press BOOT button to switch effects, long press 2 seconds to switch modes) | 4x WS2812 LED strip connectors, adjustable colors and flashing modes / Max 5.2V 1.3A, supports around 70pcs 5050 WS2812 LED beads |
| On-board battery level indicator | 4x RGB indicator LED for battery level display by number of lights |
| Weight | 4.2g|                                                                                                                                                                                              
**Click here to buy this product [click here](https://degzrobotics.com/product/speedybee-ucus-karti-seti/).** 


**You can reach us through the [forum](https://forum.degzrobotics.com/) for questions and suggestions**
<DocCardList />
