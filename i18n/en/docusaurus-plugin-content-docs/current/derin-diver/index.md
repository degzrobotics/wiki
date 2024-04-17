---
sidebar_position : 1
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';

# What is Derin Diver?

Derin Diver is an Underwater Vehicle Software designed to be used on Degz Suibo Control Board. With this software you can easily provide manual and autonomous control of supported types of underwater vehicles. Thanks to the Dive Control interface that comes with Derin Diver, you can control, adjust and calibrate your underwater vehicles very easily. Deringezen X works with Derin Diver. Thanks to the Derin Commander Python software prepared for autonomous control, you can use Derin Diver in your autonomous projects very easily.

## Features of Derin Diver

Derin Diver has been developed specifically for underwater vehicles and aims to provide all the features required for the control of an underwater vehicle. It is currently designed to work on Degz Suibo and has an architecture that can be added with different sensors and hardware support.

- Suitable for 6 and 8 engine vehicles (support for different engine configurations will be coming soon).
- 9 Axis stabilization with protractor, accelerometer and compass sensors.
- Depth and water temperature measurement [with Degz Robotics D300 Depth Sensor](https://degzrobotics.com/product/derinlik-ve-sicaklik-sensoru/).
- Instant voltage and current measurement.
- Manual, Stabilize, Depth Hold (in test phase), Loiter (to be added) diving modes with State Machine system.
- Easily adjustable PID control.
- Parameter System with easy access to all settings
- Log system
- Compatible with the modern and easy-to-use [Dive Control Interface](https://github.com/degzrobotics/Dive-Control)
- Compatible with the [Derin Commander](https://github.com/degzrobotics/DerinCommander) Autopilot library where you can easily send autonomous commands
- Ready to work with Degz Rolicam.

## How can I get Derin Diver?

You can get the compiled version of Derin Diver on the Degzrobotics Github page. Derin Diver is constantly being updated and tested. New versions will be released on Github. Discussions about the development process of Derin Diver are held on forum.degzrobotics.com.

## How Can I Access the Source Code of Derin Diver?

Derin Diver is currently in closed beta development. If you want to be involved in the source code and development process, you can contact us at info@degzrobotics.com. Derin Diver is a software designed to be open source and aims to be completely open source in the future.

## Can I Use Derin Diver in Competitions?

Yes, you can use Derin Diver and Degz Suibo Control card in competitions such as Teknofest. These systems are produced as an alternative to their counterparts in the market for people who want to develop underwater robotics. Our aim is to make underwater robotics more accessible and to produce domestic and national solutions in this field.

## Dictionary of Terms in the Derin Diver Ecosystem

### Electronic Boards

- Degz Suibo: Control board designed to run the Derin Diver software.
- Degz Sublink: Electronic board for communication with Degz Suibo.

#### Software

- Derin Diver: Underwater vehicle control software designed to work on Degz Suibo and similar boards.
- Dive Control: Underwater vehicle interface for control and calibration of the Derin Diver, designed for use with control boards running Derin Diver.
- Derin Commander: Software designed to send commands via Python to control boards running Derin Diver.

### Other

- RS485: The communication protocol used by Derin Diver for long distance communication over cable.
- Arm / Disarm: Represents when the software starts sending commands to the thrusters. When the Derin Diver is Arm, it sends commands to the thrusters, when it is Disarm, it stops sending commands to the motors.

<DocCardList />
