---
sidebar_position : 3
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';
import yengec6 from './image/yengec6.png';

# Thruster Connections and Configurations

Deep Diver currently supports 6 thruster body types. Support for more and customizable body types will be coming soon.
The PWM cables from the ESCs connected to the thrusters are connected to the PWM headers on the Degz Suibo in any order. Adjustment of thruster configurations and orientations can be done via Dive Control. You can see an example connection diagram below.

![PWM Connection](./image/pwm-connection.png)

## Supported Thruster Configurations

Thruster configurations should take into account the directions of the motors, the directions in which they give their maximum thrust and the directions of rotation. Thrusters shown in blue should rotate clockwise and thrusters shown in orange should rotate counterclockwise.

- Crab 6 Thruster Configuration

<img src={yengec6} width="250"/>

## How do I know the direction of the thruster?

To understand the direction of the thrusters, you can look at the angles of the propellers.The images below show propellers rotating in two different directions. The one on the left rotates clockwise, while the one on the right rotates counterclockwise.

![İtici Yön](./image/mitrasyone.png)
![İtici Yön](./image/mitrasyonee.png)

<DocCardList />
