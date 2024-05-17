---
sidebar_position : 1
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';

# Using DerinCommander

You can run your own code in the rovUpdate() function in main.py. Within this function you can also access the rov class and various commands from the rov class. Here are the basic control commands:

- **`rov.arm()`**: Makes the underwater vehicle ready to use. This command is executed at the beginning when the code is run. You do not need to arm your vehicle again.
- **`rov.disarm()`**: Allows you to disarm your underwater vehicle.
- **`rov.move(0,0,0)`**: Allows you to move your underwater vehicle. The values it includes are heave (up and down movement), strafe (right left movement), surge (forward and backward movement). All these values should be between -500 and 500.
- **`rov.turn(0)`**: In stabilized mode, it allows your underwater vehicle to turn to the angle you want. This angle value is calculated from the compass and can take a value between 0 and 360.
- **`rov.turnDegrees(0)`**: In Stabilized mode, it allows your underwater vehicle to turn at the desired angle. Takes a value between -180 and 180. You can use **`rov.turnDegrees(70)`** to turn the underwater vehicle 70 degrees to the right and **`rov.turnDegrees(-50)`** to turn it 50 degrees to the left.

You can also access the data of the vehicle in the receivedData variable in this function. According to the latest version, the data in the receivedData variable are as follows:

- **`receivedData.rovState`**: Current mode of the underwater vehicle
- **`receivedData.pitch`**: Underwater vehicle pitch angle
- **`receivedData.roll`**: Roll angle of the underwater vehicle
- **`receivedData.yaw`**: Deflection angle of the underwater vehicle (right to left rotation)
- **`receivedData.accelX`**: X value of the accelerometer
- **`receivedData.accelY`**: Y value of the accelerometer
- **`receivedData.accelZ`**: Z value of the accelerometer
- **`receivedData.depth`**: Depth data received from the pressure sensor
- **`receivedData.battV`**: Voltage value received from Voltage Sense pin
- **`receivedData.battA`**: Current value received from Current Sense pin
- **`receivedData.waterTemp`**: Water temperature value received from the pressure sensor
- **`receivedData.internalTemp`**: Board temperature value received from the IMU sensor
- **`receivedData.errCode`**: Notifications from inside the vehicle

Within the same function you can access the commandData variable, which contains the commands you can send to the vehicle. The data in the commandData variable varies according to the usage mode. According to the latest version, in stabilized mode, the data in the commandData variable is as follows:

- **`commandData.rovState`**: Mode selection, 1 manual (without stabilization), 2 stabilized, 3 depth stabilization. (For autonomous control you can choose mode 2, i.e. stabilized mode)
- **`commandData.heading`**: The specified heading angle. This value comes according to the data read from the compass. When in stabilization mode, your vehicle tries to reach this degree angularly.
- **`commandData.heave`**: Up-down movement. Can take a value between -500 and 500.
- **`commandData.strafe`**: Right-left movement (crab movement). Allows the vehicle to slide left and right according to the supported body type. Can take a value between -500 and 500.
- **`commandData.surge`**: Forward-backward movement. Allows the vehicle to move forward and backward, can take values between -500 and 500.
- **`commandData.roll`**: Controls the roll angle of the vehicle. Allows you to change the roll angle of your vehicle for supported body types. It takes an angular value, by default it takes the angle at which the vehicle is on the armrest.
- **`commandData.pitch`**: Controls the pitch angle of the vehicle. Depending on the body type supported, you can make your vehicle look up and down. It takes an angular value, by default it takes the angle at which the vehicle is armored.
- **`commandData.roliCamPitchControl`**: If you are using Roli Camera System in your vehicle, it allows you to change the angle of the camera system. Takes a value between -10 and 10.
- **`commandData.lightControl`**: Allows you to control if you are using a lighting system. It takes values between 0-255. You can select the pin it is connected to with the LIGHT_PIN parameter.
- **`commandData.buttons`**: Allows you to execute various commands in Derin Diver.
- **`commandData.linkCommand`**: Provides communication control of Derin Diver.

*The values that provide angular control in manual mode also take values between -500 and 500.*

## Things to Watch Out For

The RovUpdate function works in a loop. It calls itself continuously, so you need to adjust the code you write accordingly. Keep in mind that the code written in this function will be sent to the vehicle continuously. Continuously sending Arm commands to the vehicle may block the communication. By default, the arm command is sent the first time main.py is run. You don't need to send an arm command again, but if you want to send a command again after disarming your vehicle, you need to send the arm command.  

<DocCardList />
