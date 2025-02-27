//                                  CHAPTER 26 TO 30 

// Qno:1 Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// let num = prompt("Enetr your number");
// let round = Math.round(num);
// let floor = Math.floor(num);
// let ceil = Math.ceil(num);
// document.write(`Number: ${num} <br />Round of value: ${round} <br /> Floor value: ${floor} <br /> Ceil value: ${ceil}`)

// Qno:2 Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// let num = prompt("Enter your number");
// let round = Math.round(num);
// let floor = Math.floor(num);
// let ceil = Math.ceil(num)
// document.write(`Number:${num}<br />Round off value: ${round}<br /> Floor value: ${floor}<br />Ceil value: ${ceil}`);

// Qno:3 Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// let num = +prompt("Enter your number");
// let absolute = Math.abs(num)
// document.write(`The absolute value of: ${num} is ${absolute}`);

// Qno:4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
// let random = Math.random()*6;
// let floor= Math.floor(random);
// let random1=Math.random()*7;
// let floor1=Math.floor(random1)
// document.write(`Random dice value: ${floor}<br />Random dice value: ${floor1}`);

// Qno:5 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
// let coinNum=Math.random()*3;
// let floor=Math.floor(coinNum);
// console.log(floor)
// if(coinNum<2){
//     document.write(`${floor}<br /> Random coin value: Tail`)

// }
// else{
//     document.write(`${floor}<br /> Random coin value: Head`)
// }

// Qno:6 Write a program that shows a random number between 1 and 100 in your browser.
// let random=Math.random()*100;
// let floor=Math.floor(random);
// console.log(floor)
// document.write(`Random number between 1 and 100:${floor}`)

// Qno:7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// let weight=prompt("Enter your weight in kilograms");
// let par=parseFloat(weight);
// document.write(`The weight of user is ${par.toFixed(1)} kilograms`)

// Qno:8 Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// let random=Math.ceil((Math.random()*10));
// console.log(random);

// let userInput=prompt("Enter your number between 1 to 10");
// if(userInput===random){
//     alert("Congratulate; you entered the same number")
// }
// else{
//     alert("Try again")
// }


//                                        END OF THE CHAPTER 
