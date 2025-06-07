@smoke @login @search
Feature: Login and Search

  Background:
    Given I launch the browser

  Scenario: Login and search MacBook
    When I login with valid credentials
    And I search for "Macbook"
    Then I should see "MacBook Pro" in results
