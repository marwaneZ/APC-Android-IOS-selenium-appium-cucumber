# Introduction 
assignment made with Javascript shocase a single spec file with 3 tests, the project contain an apk/ipa file for Android/IOS.

the tests should run for both Android and IOS, for this assignment (as am having multiple others running) , i only specified App Elements ids only for Android .
the framework is using cucumber , assertion libraries, selenium-webdriver and appium.
the reports are issued by cucumber reporter with embedded screenshots in case of Test fail

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
    after cloning the project in your local repository , enter the following command in the terminal :
    >npm install --saved-dev
2. in the same terminal execute the following command to verify that your machine has all require conditions:
   > appium-doctor (if the command is not available execute : npm i appium-doctor --saved-dev
   
the result of the command should look like : 

info AppiumDoctor Appium Doctor v.1.16.0

info AppiumDoctor ### Diagnostic for necessary dependencies starting ###

info AppiumDoctor  ✔ The Node.js binary was found at: C:\Program Files\nodejs\node.EXE

info AppiumDoctor  ✔ Node version is 14.15.1

info AppiumDoctor  ✔ ANDROID_HOME is set to: C:\Users\Marwane Ziani\AppData\Local\Android\Sdk

info AppiumDoctor  ✔ JAVA_HOME is set to: C:\Program Files\Java\jdk-17.0.2

info AppiumDoctor    Checking adb, android, emulator

info AppiumDoctor      'adb' is in C:\Users\Marwane Ziani\AppData\Local\Android\Sdk\platform-tools\adb.exe

info AppiumDoctor      'android' is in C:\Users\Marwane Ziani\AppData\Local\Android\Sdk\tools\android.bat

info AppiumDoctor      'emulator' is in C:\Users\Marwane Ziani\AppData\Local\Android\Sdk\emulator\emulator.exe

info AppiumDoctor  ✔ adb, android, emulator exist: C:\Users\Marwane Ziani\AppData\Local\Android\Sdk

info AppiumDoctor  ✔ 'bin' subfolder exists under 'C:\Program Files\Java\jdk-17.0.2'

info AppiumDoctor ### Diagnostic for necessary dependencies completed, no fix needed. ###


if not , then please go ahead and install the needed software and update the environment variable of your machine.

3. open android simulator then turn on emulated device:
4. open the terminal and enter the following command:
> adb devices
5. save the device name and change it in the project at the path : devices\deviceDescription\devices_spec.json
<img width="389" alt="image" src="https://user-images.githubusercontent.com/16085428/155185007-ee0ef6b2-8057-443c-8031-3638372d7c38.png">


# Build and Test
to run the tests, with device connected or emulated turned on , execute the following command:
  1. start appium server: npm run start:appium
  3. execute tests: npm run test

# Reporting :
the reports are available in report\cucumber_report.html
<img width="845" alt="image" src="https://user-images.githubusercontent.com/16085428/155185806-ee2312f9-9be5-4058-b03f-bcfbc8f285b1.png">
<img width="782" alt="image" src="https://user-images.githubusercontent.com/16085428/155186290-a63cc2d7-150c-4ee8-b047-f43f280d6347.png">

