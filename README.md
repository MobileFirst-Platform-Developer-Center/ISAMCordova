IBM Mobile First Platform Foundation
===

## ISAMCordova
A sample application demonstrating ISAM LTPA functionality with ISAM

### Blog post
<TBD>

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

<TBD>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
