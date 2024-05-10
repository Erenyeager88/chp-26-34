// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
    // var num = prompt("Enter a positive integer");
    // number = parseInt(num);
    // if(isNaN(number)||number<=0){
    //     alert("Invalid Input!Please enter a positive integer");
    // }else{
    //    var roundOff = Math.round(number)
    //    var floor = Math.floor(number)
    //    var ceil = Math.ceil(number)
    //     document.write("Number: " + num + "<br>");
    //     document.write("Round off value: " + roundOff + "<br>");
    //     document.write("Floor value " + floor + "<br>");
    //     document.write("Ceil value: " + ceil + "<br>");
    // }

    // 2. Write a program that takes a negative floating point
    // number from user & display the following in your browser.
    // a. number
    // b. round off value of the number
    // c. floor value of the number
    // d. ceil value of the number
// var num = prompt("Enter a negative floating point number");
// if(isNaN(num)||num>=0){
//     alert("Invalid Input!Please enter a negative floating point number");
// }
// else{
//     var roundOff = Math.round(num)
//     var floor =Math.floor(num)
//     var ceil = Math.ceil(num)
//     document.write("Number: " + num + "<br>");
//     document.write("roundOff " + roundOff + "<br>");
//     document.write("Floor value " + floor + "<br>");
//     document.write("Ceil value " + ceil + "<br>");
// }

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var number = prompt("Enter a number");
// function absoluteValue() {
//     if (number < 0) {
//         var result= -number;
//         return result
//     } else {
//         var result= number;
//         return result;
//     }
// }
// var call = absoluteValue(number);
// document.write("the absolute value of "+number+" is "+ call)

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var dice = Math.random() * 7;
// var floor = Math.floor(dice);
// document.write("Random dice value: " + floor);
// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// function generateRandomNumber() {
//     var randomNumber = Math.floor(Math.random() * 100) + 1;
//     document.write("Random Number: " + randomNumber)
//   }
//   generateRandomNumber();

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// function displayWeight() {
//     var weightInput = document.getElementById("weightInput").value;
//     var weight = parseWeight(weightInput);
  
//     if (weight !== null) {
//       document.getElementById("result").innerHTML = "Your weight is: " + weight + " kgs";
//     } else {
//       document.getElementById("result").innerHTML = "Invalid weight input. Please try again.";
//     }
//   }
  
//   function parseWeight(weight) {
//     weight = weight.trim();
  
//     if (weight.endsWith("kgs")) {
//       weight = weight.slice(0, -3);
//     } else if (weight.endsWith("kg")) {
//       weight = weight.slice(0, -2);
//     }
  
//     if (weight.includes(".")) {
//       weight = parseFloat(weight);
//     } else {
//       weight = parseInt(weight);
//     }
  
//     if (weight > 0) {
//       return weight;
//     } else {
//       return null;
//     }
//   }

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// function checkGuess() {
 
//   var guess = parseInt(input);

//   if (isNaN(guess)) {
//     alert("Please enter a valid number.");
//   } else if (guess === secretNumber) {
//     alert("Congratulations! You guessed the secret number.");
//   } else {
//     alert("Sorry, that's not the secret number. Please try again.");
//   }
// }

// var input = prompt("enter your lucky number")
// result = checkGuess(input)


// CHP 31-34;

// Write a program that displays current date and time in
// your browser.
// var date = new Date();
// document.write(date);

// Write a program that alerts the current month in words.
// For example December.
// var date = new Date();
// var month = date.getMonth();
// document.write(month);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var date = new Date();
// var day = date.getDay();
// document.write(day);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var date = new Date();
// var day = date.getDay();

// if (day === 0 || day === 6) {
//   alert("It's Fun day");
// }            

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var date = new Date();
// var day = date.getDate();

// if (day < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var date = new Date();
// var day = date.getTime();
// document.write("Current Date: " + date + "<br>");

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var date = new Date();
// var hour = date.getHours();
// if (hour < 12) {
//   alert("Its AM");
// } else {
//   alert("Its PM");
// }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named
// laterDate.
 // var laterDate = new Date("Dec 31, 2020");

//  9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
 // var date = new Date("June 18, 2015");
 // var today = new Date();
 // var diff = today.getTime() - date.getTime();
 // document.write(diff+" have passed since 1st ramadan,2015");

//  10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// const startOf2015 = new Date(2015, 0, 1); // January 1, 2015
// const unixEpoch = new Date(1970,0,1); 
// const elapsedSeconds = (startOf2015 - unixEpoch) / 1000;
// document.write("The number of seconds that elapsed between the Unix epoch and the beginning of 2015 is: " + elapsedSeconds);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var date = new Date();
// document.write("Current Date: " + date + "<br>");
// var hour = date.getHours();
// date.setHours(hour - 1);
// document.write("1 hour ago, it was " + date);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// var date = new Date();
// document.write("Current Date: " + date + "<br>");

// var year = date.getFullYear();

// date.setFullYear(year - 100);

// document.write("100 years back, it was " + date);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// var age = +prompt("Enter your age");
// var date = new Date();
// var year = date.getFullYear();
// var birthYear = year - age;

// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge    

// function generateKElectricBill() {
//     const customerName = "John Doe";
//     const currentMonth = "February 2023";
//     const numberOfUnits = 500;
//     const chargesPerUnit = 12.50;
//     const latePaymentSurcharge = 500.00;
  
//     const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
//     const grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
  
//     const billHTML = `
//       <h1>K-Electric Bill</h1>
//       <table>
//         <tr>
//           <th>Customer Name:</th>
//           <td>${customerName}</td>
//         </tr>
//         <tr>
//           <th>Current Month:</th>
//           <td>${currentMonth}</td>
//         </tr>
//         <tr>
//           <th>Number of units:</th>
//           <td>${numberOfUnits}</td>
//         </tr>
//         <tr>
//           <th>Charges per unit:</th>
//           <td>${chargesPerUnit.toFixed(2)}</td>
//         </tr>
//         <tr>
//           <th>Net Amount Payable (within Due Date):</th>
//           <td>${netAmountPayable}</td>
//         </tr>
//         <tr>
//           <th>Late Payment Surcharge:</th>
//           <td>${latePaymentSurcharge.toFixed(2)}</td>
//         </tr>
//         <tr>
//           <th>Gross Amount Payable (after Due Date):</th>
//           <td>${grossAmountPayable}</td>
//         </tr>
//       </table>
//     `;
  
//     document.write(billHTML);
//   }
  
//   generateKElectricBill();