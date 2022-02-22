"use strict";
(function () {
  var reporter = require("cucumber-html-reporter");

  var options = {
    theme: "bootstrap",
    jsonFile: "report/cucumber_report.json",
    output: "report/cucumber_report.html",
    screenshotsDirectory: "Screenshots/",
    storeScreenshots: true,
    reportSuiteAsScenarios: false,
    scenarioTimestamp: true,
    noInlineScreenshots: true,
    launchReport: true,
    metadata: {
      "App Version": "0.3.2",
      "Test Environment": "STAGING",
      Platform: "Windows 10",
      Parallel: "Scenarios",
      Executed: "Remote",
    },
  };

  reporter.generate(options);

  //more info on `metadata` is available in `options` section below.

  //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
});
//initiate all needed objects
