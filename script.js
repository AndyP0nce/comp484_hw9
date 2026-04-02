// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
var today = new Date();

// 2. Get the current month, day, and year
var month = today.getMonth() + 1; // Months are 0-based, so add 1
var day = today.getDate();
var year = today.getFullYear();
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
var formattedMonth = month < 10 ? "0" + month : month;
var formattedDay = day < 10 ? "0" + day : day;
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

var dateString = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

document.getElementById("dateOutput").textContent = dateString;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
var numString1 = "96";
var numString2 = "-3";
var decString = "17.38";
var stringValue = "Bacon";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
var convertedNum1 = Number(numString1);
var convertedNum2 = Number(numString2);
var convertedDec = Number(decString);
var convertedNonNum = Number(stringValue);

//    b. Check if it is NaN using Number.isNaN()
    var isNaNNum1 = Number.isNaN(convertedNum1);
    var isNaNNum2 = Number.isNaN(convertedNum2);
    var isNaNDec = Number.isNaN(convertedDec);
    var isNaNNonNum = Number.isNaN(convertedNonNum);

//    c. Check if it is an integer using Number.isInteger()
    var isIntNum1 = Number.isInteger(convertedNum1);
    var isIntNum2 = Number.isInteger(convertedNum2);
    var isIntDec = Number.isInteger(convertedDec);
    var isIntNonNum = Number.isInteger(convertedNonNum);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
var result1 = "Original value: '" + numString1 + "' -> Converted: " + convertedNum1 + " -> isNaN: " + isNaNNum1 + " -> isInteger: " + isIntNum1;
var result2 = "Original value: '" + numString2 + "' -> Converted: " + convertedNum2 + " -> isNaN: " + isNaNNum2 + " -> isInteger: " + isIntNum2;
var result3 = "Original value: '" + decString + "' -> Converted: " + convertedDec + " -> isNaN: " + isNaNDec + " -> isInteger: " + isIntDec;
var result4 = "Original value: '" + stringValue + "' -> Converted: " + convertedNonNum + " -> isNaN: " + isNaNNonNum + " -> isInteger: " + isIntNonNum;

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
var finalResult = result1 + "<br>" 
                + result2 + "<br>" 
                + result3 + "<br>" 
                + result4;

// TODO:
// 5. Display the final result inside the element:
//   id="numberConversionOutput" = finalResult;
document.getElementById("numberConversionOutput").innerHTML = finalResult;


// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
var itemPrice = 21.99;
var taxRate = 0.09;
var shippingCost = 6.66;
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
var subtotal = itemPrice + shippingCost;
var taxAmount = taxRate * subtotal;
var totalCost = subtotal + taxAmount;

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
var formattedSubtotal = subtotal.toFixed(2);
var formattedTaxAmount = taxAmount.toFixed(2);
var formattedTotalCost = totalCost.toFixed(2);

//
// 4. Build a string showing your results
var mathResult = "Item Price: $" + itemPrice.toFixed(2) + "<br>"
               + "Shipping Cost: $" + shippingCost.toFixed(2) + "<br>"
               + "Subtotal: $" + formattedSubtotal + "<br>"
               + "Tax Amount: $" + formattedTaxAmount + "<br>"
               + "Total Cost: $" + formattedTotalCost;
// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathResult;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value

var conditionMessage = "";

// condition 1: check if convertedNonNum is NaN
if (Number.isNaN(convertedNonNum)) {
    conditionMessage += "The value '" + stringValue + "' is not a number.<br>";
} else {
    conditionMessage += "The value '" + stringValue + "' is a valid number.<br>";
}

// condition 2: check if convertedDec is an integer or a decimal
if (Number.isInteger(convertedDec)) {
    conditionMessage += "The value '" + decString + "' is an integer.<br>";
} else {
    conditionMessage += "The value '" + decString + "' is not an integer.<br>";
}

// condition 3: check if totalCost is greater than $30
if (totalCost > 60) {
    conditionMessage += "The total cost of $" + formattedTotalCost + " is greater than $60.<br>";
} else {
    conditionMessage += "The total cost of $" + formattedTotalCost + " is not greater than $60.<br>";
}

// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
document.getElementById("conditionOutput").innerHTML = conditionMessage;


