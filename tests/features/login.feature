Feature: Login 
    As a user
    I want to login
    So that I can go to my account page

Scenario: Login successfully with valid user
    Given user has navigated to home page 
    And user has navigated to login page 
    When user types "email" 
    And user types "password"
    Then user should be navigated to my account page 
