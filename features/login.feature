Feature: Login and Search
  Scenario: Login and search MacBook
    Given I launch the browser
    When I login with username "septbatch2024@open.com" and password "Selenium@12345"
    And I search for "Macbook"
    Then I should see "MacBook Pro" in results