Feature: Login and Search
  Scenario: Login and search MacBook
    Given I launch the browser
    When I login with valid credentials
    And I search for "Macbook"
    Then I should see "MacBook Pro" in results