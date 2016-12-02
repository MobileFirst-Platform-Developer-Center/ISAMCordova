IBM Mobile First Platform Foundation
===

## ISAMCordova
A sample application demonstrating ISAM LTPA functionality.

### Blog post
[http://ibm.biz/mobilefirstdatapower](http://ibm.biz/mobilefirstdatapower)

### Usage
1. Use either Maven, MobileFirst CLI or your IDE of choice to [build and deploy the available `ResourceAdapter` adapter](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/adapters/creating-adapters/).
The ResourceAdapter adapter can be found in https://github.com/MobileFirst-Platform-Developer-Center/SecurityCheckAdapters/tree/release80.
2.  From a command-line window, navigate to the project's root folder and run the commands:

  * `cordova platform add` - to add a Platform.
  * `mfpdev app register` - to register the application.
  * `mfpdev app push` - to map the `accessRestricted` scope to the `LtpaBasedSSO` security check.
3. Update the **config.xml**'s `mfp:server` tag with the IP and port for your configured ISAM server instance.
4. `cordova run` - to run the application.

### Supported Levels
* IBM MobileFirst Platform Foundation 8.0
* IBM Security Access Manager 9.0.2

### License
Copyright 2016 IBM Corp.

This information contains sample application programs in source language, which illustrate
programming techniques on various operating platforms. You may copy, modify, and distribute these
sample programs in any form without payment to IBM, for the purposes of developing, using,
marketing or distributing application programs conforming to the application programming interface for
the operating platform for which the sample programs are written. These examples have not been
thoroughly tested under all conditions. IBM, therefore, cannot guarantee or imply reliability,
serviceability, or function of these programs. You may copy, modify, and distribute these sample
programs in any form without payment to IBM for the purposes of developing, using, marketing, or
distributing application programs conforming to IBM's application programming interfaces.
Each copy or any portion of these sample programs or any derivative work, must include a copyright
notice as follows:
© IBM 2016. Portions of this code are derived from IBM Corp. Sample Programs. ©Copyright IBM
Corp 2016. All rights reserved.
