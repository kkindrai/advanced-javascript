/*
    This Document Contains values for calculating the Federal Tax Rates
    @author kkindrai
    5th feburary, 2025
*/

const calculateFederalTax = grossIncome => {
    "use strict";
    // Declare Local Variables
    let tax;

    // Determining Tier & Calculating the Amount
    if (grossIncome > 0 && grossIncome <= 11600) {
        // Tier 1 (Max: $11,600)
        tax = grossIncome * 0.10;

    } else if (grossIncome >= 11601 && grossIncome <= 47150) {
        // Tier 2 (Max: $47,150)
        tax = 1160 + ((grossIncome - 11600) * 0.12);

    } else if (grossIncome >= 47151 && grossIncome <= 100525) {
        // Tier 3 (Max: $100,525)
        tax = 5426 + ((grossIncome - 47150) * 0.22);

    } else if (grossIncome >= 100526 && grossIncome <= 191950) {
        // Tier 4 (Max: $191,950)
        tax = 17168.50 + ((grossIncome - 100525) * 0.24);

    } else if (grossIncome >= 191951 && grossIncome <= 243725) {
        // Tier 5 (Max: $243,725)
        tax = 39110.50 + ((grossIncome - 191950) * 0.32);

    } else if (grossIncome >= 243726 && grossIncome <= 609350) {
        // Tier 6 (Max: $609,350)
        tax = 55678.50 + ((grossIncome - 243725) * 0.35);

    } else if (grossIncome >= 609351) {
        // Tier 7 (Over: $609,351)
        tax = 183647.25 + ((grossIncome - 609350) * 0.37);

    } else {
        console.log("Error: Invalid gross income amount entered.");
        
    }

    // Return the Federal Tax Value
    return tax;
    

}