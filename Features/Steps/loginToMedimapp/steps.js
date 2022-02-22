"use strict";

var wd = require("selenium-webdriver"),
  By = wd.By,
  until = wd.until;

const {
  Before,
  Given,
  When,
  Then,
  After,
  BeforeStep,
  BeforeAll,
  Status,
} = require("@cucumber/cucumber");
var assert = require("assert");
const deviceFactory = require("../../../devices/deviceFactory/DeviceConstructor");
const selectedData = require("../../../Support/dataBuilder");
let loginPageElt = new selectedData("login_page");
let homePageElt = new selectedData("home_page");
let testData = new selectedData("test_data");
let driver;
let url = "http://127.0.0.1:4723/wd/hub";
////////////ids

// Setting Desired Capabilities.
var desiredCaps = new deviceFactory("android");
console.log(desiredCaps);
// Before function for driver initialization
Before({ timeout: 6000 * 10000 }, async function () {
  console.log("Before: Connecting to Device.....");
  driver = await new wd.Builder()
    .usingServer(url)
    .withCapabilities(new deviceFactory("android"))
    .build();
  console.log("...");
});
// When function for Action implementation
When("the user logs in with invalid credentials", async () => {
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["okbutton"]), 10000))
    .click();
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["usernameId"]), 10000))
    .sendKeys(testData["username"]);
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["passwordId"]), 10000))
    .sendKeys(testData["wrong_password"]);
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["loginId"]), 10000))
    .click();
});
// When function for Action implementation
When("the user logs in with valid credentials", async () => {
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["okbutton"]), 10000))
    .click();
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["usernameId"]), 10000))
    .sendKeys(testData["username"]);
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["passwordId"]), 10000))
    .sendKeys(testData["password"]);
  await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["loginId"]), 10000))
    .click();
});
When("then logs out", async () => {
  await driver
    .wait(until.elementLocated(By.xpath(homePageElt["logoutId"]), 10000))
    .click();
});
// Check the Result in Then function
Then("the login page should be displayed", async () => {
  // Check for the logout button
  let currentText = await driver
    .wait(until.elementLocated(By.xpath(loginPageElt["loginId"]), 5000))
    .getText();
  assert.equal(currentText, "Login");
});

Then("the home page should be displayed", async () => {
  // Check for the logout button
  let currentText = await driver
    .wait(until.elementLocated(By.xpath(homePageElt["logoutId"]), 5000))
    .getText();
  assert.equal(currentText, "Logout");
});

// After function to release the Driver

After(function (testCase) {
  var world = this;
  if (testCase.result.status === Status.FAILED) {
    return driver.takeScreenshot().then(function (screenShot) {
      world.attach(screenShot, "base64:image/png");
    });
  }

  driver.quit();
});
