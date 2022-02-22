Feature: Login to Medimapp Application

   Scenario: Login to medimapp Application incorrect
      When the user logs in with invalid credentials
      Then the login page should be displayed

   Scenario: Login to medimapp Application correctly
      When the user logs in with valid credentials
      Then the home page should be displayed

   Scenario: logout
      When the user logs in with valid credentials
      And then logs out
      Then the login page should be displayed