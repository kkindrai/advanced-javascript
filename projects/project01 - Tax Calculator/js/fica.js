/*
    Contains values for calculating FICA (Medicare & Social Security)
    @author kkindrai
    5th feburary, 2025
*/

/*
    Controller Function
*/
const calculateFicaTax = grossIncome => {
    "use strict";
    // Declare Local Variables
    let tax = []; // [0] -> Medicare, [1] -> Social Security
    let medicare;
    let socialSecurity;

    // Getting the Tax Rates
    medicare        = calculateMedicare(grossIncome);
    socialSecurity  = calculateSocialSecurity(grossIncome);

    // Assmble the return
    tax = [medicare, socialSecurity];

    // Return the FICA Tax Values
    return tax;

}


/*
    calculateMedicare Function
*/
const calculateMedicare = grossIncome => {
    "use strict";

    // Local Variables
    let medicareTax;
    const limit = 200000;
    const rate1 = 0.0145; // For the first $200,000
    const rate2 = 0.0235; // For any amount over 200,000

    // If under or at limit (200,000)
    if (grossIncome <= limit) {
        medicareTax = grossIncome * rate1;
    } else {
        // over the limit
        medicareTax = (limit * rate1) + ((grossIncome - limit) * rate2);
    }


    return medicareTax;
}


/*
    calculateSocialSecurity Function
*/
const calculateSocialSecurity = grossIncome => {
    "use strict";
    // Local Variables
    let socialSecurityTax;
    const limit = 168600;
    const rate = 0.062; 

    // If under or at limit (168,600)
    if (grossIncome <= limit) {
        socialSecurityTax = grossIncome * rate;
    } else {
        // over the limit
        socialSecurityTax = (limit * rate);
    }

    return socialSecurityTax;
}
