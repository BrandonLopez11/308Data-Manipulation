// Define four numbers
let n1 = 10; // Change these values as needed
let n2 = 15;
let n3 = 5;
let n4 = 20;

// Check if the numbers add up to 50
let sum = n1 + n2 + n3 + n4;
let isValid = sum === 50;
console.log(`The four numbers add up to 50: ${isValid}.`);

// Check if all numbers are divisible by 5
let allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}.`);

// Check if the first number is larger than the last
let isFirstLargerThanLast = n1 > n4;
console.log(`The first number is larger than the last: ${isFirstLargerThanLast}.`);

// Do some simple math
let subtractResult = n2 - n1; // Subtract the first number from the second
let multiplyResult = subtractResult * n3; // Multiply the result by the third number
let remainderResult = multiplyResult % n4; // Find the remainder when dividing by the fourth number

console.log(`Subtracting the first number from the second gives: ${subtractResult}.`);
console.log(`Multiplying that result by the third number gives: ${multiplyResult}.`);
console.log(`The remainder when dividing by the fourth number is: ${remainderResult}.`);


// Trip details
let totalDistance = 1500; // in miles
let budget = 175; // in dollars
let fuelCostPerGallon = 3; // in dollars

// Speeds and fuel efficiencies
let speeds = [55, 60, 75]; // in mph
let fuelEfficiencies = [30, 28, 23]; // in mpg

// Loop through speeds and calculate details
for (let i = 0; i < speeds.length; i++) {
    let speed = speeds[i];
    let fuelEfficiency = fuelEfficiencies[i];

    // Calculate gallons needed
    let gallonsNeeded = totalDistance / fuelEfficiency;

    // Calculate total cost
    let totalCost = gallonsNeeded * fuelCostPerGallon;

    // Calculate time in hours
    let timeInHours = totalDistance / speed;

    // Check if budget is enough
    let isBudgetEnough = budget >= totalCost;

    // Log results
    console.log(`At ${speed} mph:`);
    console.log(`Gallons needed: ${gallonsNeeded.toFixed(2)}`);
    console.log(`Total cost: $${totalCost.toFixed(2)}`);
    console.log(`Time needed: ${timeInHours.toFixed(2)} hours`);
    console.log(`Is budget enough? ${isBudgetEnough ? "Yes" : "No"}`);
    console.log('-----------------------');
}