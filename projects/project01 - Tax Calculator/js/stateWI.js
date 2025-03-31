/*
    Contains values for calculating the State Tax Rates of Wisconsin
    @author kkindrai
    5th feburary, 2025
*/

const calculateStateTax = grossIncome => {
    "use strict";
    // Declare Local Variables
    let tax;

    // Determining Tier & Calculating the Amount
    if (grossIncome > 0 && grossIncome <= 12760) {
        // Tier 1 (Max: $12,760)
        tax = grossIncome * 0.0354;

    } else if (grossIncome >= 12761 && grossIncome <= 25520) {
        // Tier 2 (Max: $25,520)
        tax = 451.70 + ((grossIncome - 12760) * 0.0465);

    } else if (grossIncome >= 25521 && grossIncome <= 280950) {
        // Tier 3 (Max: $280,950)
        tax = 1045.04 + ((grossIncome - 25520) * 0.0530);

    } else if (grossIncome >= 280951) {
        // Tier 4 (Over: $280,951)
        tax = 14582.83 + ((grossIncome - 280950) * 0.0765);

    } else {
        console.log("Error: Invalid gross income amount entered.");
        
    }

    // Return the State Tax Value (WI)
    return tax;
    

}