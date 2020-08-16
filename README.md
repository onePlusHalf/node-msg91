# node-msg91
How to send Message/Otp using MSG91 API's in NodeJs

## How it works
 - `index.js` exposes `sendOtp` method which takes in following arguments : 
    - otp : One Time Password that you want to send
    - phoneNumber: Phone Number to which you want to send the OTP to
## What things are required:
- `authKey`, which you'll have to get after logging into `https://msg91.com`
- `templateId` which you'll get from `https://msg91.com`
- `senderId` , similarly you'll have to get this from `https://msg91.com`
