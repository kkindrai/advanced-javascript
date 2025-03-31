/*
    This Document controls the calculations of this program

    @author kkindrai
    5th feburary, 2025
*/

// The Init Function
const init = () => {
    "use strict";

    // Creating Local Variables
    let calcButton = document.querySelector("#calculateButton");

    // The event handler
    calcButton.addEventListener("click", generateTaxInfo);
}


// The Main Controller Function
const generateTaxInfo = () => {
    "use strict";
    // Declare Local Variables
    let federal,
        state,
        medicare,
        socialSecurity,
        totalTax,
        netIncome,
        grossIncome;
    

    // Assigning grossIncome from document
    grossIncome = document.querySelector("#grossIncome").value;

    // If not null
    if (grossIncome != 0) {
        
        // Assigning Values
        federal         = calculateFederalTax(grossIncome);
        state           = calculateStateTax(grossIncome);
        medicare        = calculateMedicare(grossIncome);
        socialSecurity  = calculateSocialSecurity(grossIncome);

        // Calculating Total Tax
        totalTax = (federal + state + medicare + socialSecurity);

        // Calculating Net Income
        netIncome = (grossIncome - totalTax);

        // Creating a Map Object of our Data
        const taxData = new Map([
            ["Gross Income", grossIncome],
            ["Federal Tax", federal],
            ["State Tax", state],
            ["FICA Medicare Tax", medicare],
            ["FICA Social Security Tax", socialSecurity],
            ["Total Taxes", totalTax],
            ["Net Income", netIncome]
        ]);

        // Creating an Output & purging input field
        outputData(taxData);

        // Clearing the Input Field
        document.querySelector("#grossIncome").value = "";

    }
    

}


// output Function for Display
const outputData = (taxData) => {
    "use strict";
    
    // Getting output field reference
    let output = document.querySelector("#output");
    
    // Open a table object
    let outputTable = "<table class='table'><tbody>";

    // Getting Table Rows
    taxData.forEach((amount, title) => {
        outputTable += "<tr><td>"
            + title
            + "</td><td>"
            + formatCurrency(amount);
            + "</td></tr>";
    })

    // Closing the Table Object
    outputTable += "</tbody></table>";
    
    // Outputting Data to the Documnet
    output.innerHTML = outputTable;
}


// formatCurrency Function
const formatCurrency = number => {
    "use strict";

    // Format as US dollars
    const formattedNumber = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number);

    return formattedNumber;
}
