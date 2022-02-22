"use strict";
const baseCaps = require("../devices/deviceDescription/baseCaps.json");
const deviceSpecs = require("../devices/deviceDescription/devices_spec.json");
const testData = require("../Fixtures/testData.json");
const objectData = require("../Fixtures/elements_Ids.json");
module.exports = function testDataBuilder(target) {
  let data,
    selectedData = {
      android_base_caps: () => {
        return (data = {
          app: baseCaps.android.app,
          appPackage: baseCaps.android.appPackage,
          appActivity: baseCaps.android.appActivity,
          noReset: baseCaps.android.noReset,
          browserName: baseCaps.android.browserName,
        });
      },
      ios_base_caps: () => {
        return (data = {
          app: baseCaps.ios.app,
          appPackage: baseCaps.ios.appPackage,
          appActivity: baseCaps.ios.appActivity,
          noReset: baseCaps.ios.noReset,
          browserName: baseCaps.ios.browserName,
        });
      },
      android_device: () => {
        return (data = {
          deviceName: deviceSpecs.android.deviceName,
          platformName: deviceSpecs.android.platformName,
          platformVersion: deviceSpecs.android.platformVersion,
        });
      },
      ios_device: () => {
        return (data = {
          deviceName: deviceSpecs.ios.deviceName,
          platformName: deviceSpecs.ios.platformName,
          automationName: deviceSpecs.ios.automationName,
          platformVersion: deviceSpecs.ios.platformVersion,
        });
      },
      test_data: () => {
        return (data = {
          username: testData.user.username,
          password: testData.user.password,
        });
      },
      login_page: () => {
        return (data = {
          usernameId: objectData.LoginPage.usernameId,
          passwordId: objectData.LoginPage.passwordId,
          loginId: objectData.LoginPage.loginId,
          okbutton: objectData.LoginPage.okbutton,
        });
      },
      home_page: () => {
        return (data = {
          logoutId: objectData.homePage.logoutId,
        });
      },
    };
  return selectedData[target]();
};
