---
sidebar_position : 2
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';

# Dive Control Initial Setup

After installing your control board that is compatible with Derin Diver, you can connect to your board with Dive Control. You can follow here for the installation and connection diagram of Derin Diver.

## Dive Control Installation - Windows

- If you have not installed CH340 drivers, install them from [this link](https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all).
- Download the latest released version of Dive Control as a ZIP file from [Degz Robotics Github page](https://github.com/degzrobotics/Dive-Control)
- Extract the ZIP file you downloaded.
- Run DiveControl.exe.
- Windows may give a warning because your file was downloaded from the internet, click OK to continue.
After you are able to run Dive Control on your computer, connect your control board with Derin Diver installed to your computer via Sublink. You can see an example connection diagram here.

Once you have powered up your control board and made sure the connection is correct, you can connect via Dive Control.

- Open Dive Control and go to settings on the top left.
- Select COM Port in the General tab. If you don't know the port your Sublink is connected to, you can look it up in Device Manager. If the COM Port is not listed, click the refresh button next to it and try again.
- Go back to the Home page from the top right and click the Connect button at the top. If there is no problem with your wiring, data will start coming from the vehicle and the 3D image on the screen will move. If you are having trouble connecting to your control board, you can follow the troubleshooting steps here.
- You can verify that you are connected by moving your control board or vehicle.

<DocCardList />
