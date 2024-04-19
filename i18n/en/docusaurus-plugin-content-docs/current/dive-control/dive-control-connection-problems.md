---
sidebar_position : 3
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';

# Connection Problems Solution

If you are having trouble connecting to your control boards running Deep Diver with Dive Control, you can try these steps.

## ERR-001 Error (Stuck in Waiting For Data)

It may be caused by the cable connections or the control board not working.

- Make sure that you have made the cable connections correctly, the RS485 connection must be oriented correctly.
- Make sure the control board is working and the Rx Tx lights on it are blinking. If both are not blinking, there may be a problem with your wiring.
- The first boot time of the control board may take 5 or 6 seconds, if you still have problems with the connection after this time, make sure that you have installed the Deep Diver correctly on the control board.

## ERR-002 Error

This error is related to the connection of Sublink to your computer. You may get this error if your COM Port is selected incorrectly or if you do not have permission to access your COM Port.

- Make sure the Sublink is connected to your computer with a Type-C cable that you are sure works (some Type-C cables are only for charging and do not carry data).
- Make sure you have selected your COM Port correctly. If another application (Arduino etc.) is currently using the COM port, close that application and try again.
- If you see "Access Denied", "Permission Denied" error on the console (you can open the console with F10), unplug the Sublink from your computer, plug it back in, refresh the port list and select it again.

<DocCardList />
