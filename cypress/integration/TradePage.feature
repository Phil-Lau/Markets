Feature: Navigate to the trade page of ZIL/USDT

    Scenario: Navigate to the trade page of ZIL/USDT
        Given I access the exchange market page
        And I dismissed the disclaimer pop ups
        When I selected the USDT tab
        And I click on the Trade button against ZIL USDT
        Then I am taken to the trade page


