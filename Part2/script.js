"use strict";

/*
let hasDriverslicense = false;
const passTest = true ;

if(passTest) hasDriverslicense = true;
 if(hasDriverslicense) console.log("I'can drive!");

 


 function logger() {
    console.log("My name is Szilveszter");
 }


 logger();
 logger();
 logger();
 

 function fruitProcessor(apples, oranges) {

   console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
 }

 const appleJuice = fruitProcessor(5, 0);

 console.log(appleJuice);

 console.log(fruitProcessor(5,0));


 const appleOrangeJuice = fruitProcessor(2, 4);

 console.log(appleOrangeJuice);

 

// Function declaration
 function calcAge1(birthYear) {
    
    return 2037 - birthYear;
 }

 const  age1 = calcAge1(1991);

 console.log(age1);

 //Function expression
 const calcAge2 = function (birthYear) {
    return 2037 - birthYear;


 }

 const age2 = calcAge2(1991);

 console.log(age1, age2);

 

 


 


 // Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Szilveszter"));
console.log(yearsUntilRetirement(1980, "Bob"));



function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
 
     return juice;
  }

  console.log(fruitProcessor(2,3));

  

  // i try the same example with arrow functions too 


  const cutFruitPieces = fruit => fruit * 2 ;


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
 
     return juice;
  }

  console.log(fruitProcessor(2, 4));

  
 
  const calcAge = function (birthYear) {
    return 2037 - birthYear;
  }

  const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0){ 
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    
   } else {
    console.log(`${firstName} has already retired!`)
    return -1;
          }
   


  // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, "Szilveszter"));
console.log(yearsUntilRetirement(1950, "Mike"));




//CODE CHALLANGE

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) /3;

//Test case 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins,scoreKoalas)

// test case 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34 , 27);

console.log(scoreDolphins2,scoreKoalas2) ;


function checkWinner(avgDolphins,avgKoalas) {
    if(avgDolphins >= avgKoalas *2) {
         console.log(`Dolphins win (${avgDolphins} : ${avgKoalas})`);
    }else if(avgKoalas >= avgDolphins * 2){
         console.log(`Koalas wins (${avgKoalas} : ${avgDolphins})`);
    }else {
         console.log("No team wins...");
    }
    
}

const winner1 = checkWinner(scoreDolphins, scoreKoalas);
const winner2 = checkWinner(scoreDolphins2, scoreKoalas2);




// ARRAYS



const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

const lol = new Array(1991, 1984, 2008, 2020);



console.log(friends[0]);
console.log(friends[2]);


console.log(friends.length);
console.log(friends.length - 1);

friends[2] = "Jay";
console.log(friends);

const firstName = "Szilveszter";
const szilveszter = [firstName, "Nemeth", 2037 - 1996, "programmer", friends];
console.log(szilveszter);
console.log(szilveszter.length);


//Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;


 }

 const years = [1990, 1967, 2002, 2010, 2018];

 const age1 = calcAge(years[0]);
 const age2 = calcAge(years[1]);
 const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]) ]

console.log(ages);







//Add elements
const friends = ["Michael", "Steven", "Peter"];


const newLength = friends.push("Jay");

console.log(friends);


friends.unshift("John");
console.log(friends);

// Remove Elements

friends.pop(); //last
const popped = friends.pop();
console.log(friends);
console.log(popped)

friends.shift(); // First

console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));


if(friends.includes("Steven")) {

    console.log("You have a friend called Steven");
}




// Coding Challange :)

// Tip Calculator function
const calcTip = bill => 
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ; 
   
   console.log(calcTip(100));
   
// Arrays

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])] ;

//  Bonus Challange 

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];

console.log(tips);
console.log(totals);




//Objects 
const szilveszter = {
   firstName: "Szilveszter",
   lastName: "Nemeth",
   age: 2037 - 1991,
   friends: ["Michael", "Steven", "Peter"],
   job:"cickány"
    

};

console.log(szilveszter);

console.log(szilveszter.lastName);

console.log(szilveszter["lastName"]);

const nameKey = "Name";
console.log(szilveszter[`first` + nameKey]);
console.log(szilveszter[`last` + nameKey]);


const InterestedIn = prompt(`What do you want to know about Szilveszter?
    Choose between firstName, lastName, age, job and friends!`);
    console.log(szilveszter[InterestedIn]);


    if(szilveszter[InterestedIn]) {
        console.log(szilveszter[InterestedIn]);

    }else { 
        console.log("Wrong request!");
    }



    szilveszter.location = "Portugal";
    szilveszter["twitter"] = "@nmszilveszter";
    console.log(szilveszter);

    // Challange
    console.log(`${szilveszter.firstName} has ${szilveszter.friends.length} friends, and his best friend is called ${szilveszter.friends[0]}`);

*/

