"use strict";
const testDatabuilder = require("../../Support/dataBuilder");
let android_caps = new testDatabuilder("android_base_caps"),
  ios_caps = new testDatabuilder("ios_base_caps"),
  android_device = new testDatabuilder("android_device"),
  ios_device = new testDatabuilder("ios_device");

module.exports = function Device(target) {
  target = target.toString().toLowerCase();
  let data,
    selectedData = {
      android: () => {
        return (
          (this.app = android_caps["app"]),
          (this.appPackage = android_caps["appPackage"]),
          (this.appActivity = android_caps["appActivity"]),
          (this.noReset = android_caps["noReset"]),
          (this.browserName = ""),
          (this.deviceName = android_device["deviceName"]),
          (this.platformName = android_device["platformName"]),
          (this.platformVersion = android_device["platformVersion"])
        );
      },
      ios: () => {
        return (
          (this.app = ios_caps["app"]),
          (this.appPackage = ios_caps["appPackage"]),
          (this.appActivity = ios_caps["appActivity"]),
          (this.noReset = ios_caps["noReset"]),
          (this.browserName = ""),
          (this.deviceName = ios_device["deviceName"]),
          (this.platformName = ios_device["platformName"]),
          (this.automationName = ios_device["automationName"]),
          (this.platformVersion = ios_device["platformVersion"])
        );
      },
    };
  return selectedData[target]();
};
