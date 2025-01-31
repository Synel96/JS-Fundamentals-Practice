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





const szilveszter = {
    firstName: "Szilveszter",
    lastName: "Nemeth",
    birthYear: 1996,
    friends: ["Michael", "Steven", "Peter"],
    job:"cickány",
    hasDriversLicense: true,
     
    //calcAge: function(birthYear) {
     //   return 2025 - birthYear;
   // }

  // calcAge: function() {
   // return 2025 - this.birthYear ;
 //  }

 calcAge: function() {
    this.age = 2025 - this.birthYear ;
    return this.age;
   } ,

   getSummary : function() {
    return `${this.firstName} is a ${this.age}-years old ${this.job}, 
        and he ${this.hasDriversLicense ? `has a driver's license` : `not have a driver's license`}`;
   }
 };

 console.log(szilveszter.calcAge());
 //console.log(szilveszter["calcAge"](1996));
 console.log(szilveszter.age);
 console.log(szilveszter.age);
 console.log(szilveszter.age);

 //Challange
// console.log(`${szilveszter.firstName} is a ${szilveszter.age}-years old ${szilveszter.job}, 
 //   and he ${szilveszter.hasDriversLicense ? `has a driver's license` : `not have a driver's license`}`);

   console.log(szilveszter.getSummary());
  

   const mark = {
    fullName : "Mark Miller" ,
    mass: 78,
    height: 1.69,
    calcBMI : function() {
       this.bmi = this.mass / (this.height*this.height)
       return this.bmi ;

    },
    
}



const john = {
    fullName :"John Smith" ,
    mass: 92,
    height: 1.95,
    calcBMI : function() {
        this.bmi = this.mass / (this.height*this.height)
        return this.bmi ;
 
     },
}
if(john.calcBMI > mark.calcBMI ) {
 console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is
  higher than ${mark.fullName}'s (${mark.calcBMI()})!`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is
  higher than ${john.fullName}'s (${john.calcBMI()})!`)
};

 
//LOOPS

console.log("Lifting weigths repetition 1 !")

// for loop keeps running while condition is true 
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weigths repetition ${rep}!`)
   
}




const szilveszterArray = [
    "Szilveszter",
    "Nemeth",
    2025-1996,
    "programmer",
    ["Michael", "Peter", "Steven"] 
];

const types = [] ;

for(let i = 0;i < szilveszterArray.length ;i++) {
    //Reading from aray
    console.log(szilveszterArray[i]);
    // Filling types array
   // types[i] = typeof szilveszterArray[i]
types.push(typeof szilveszterArray[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
   ages.push(2025 - years[i]);
}

console.log(ages);

// contiune and break
console.log("---ONLY STRINGS----");

for(let i = 0;i < szilveszterArray.length ;i++) {
    if(typeof szilveszterArray[i] !== "string") continue;

    console.log(szilveszterArray[i], typeof szilveszterArray[i]);
   
}
console.log("------BREAK WITH NUMBER----");

for(let i = 0;i < szilveszterArray.length ;i++) {
    if(typeof szilveszterArray[i] === "number") break;

    console.log(szilveszterArray[i], typeof szilveszterArray[i]);
   
}



const szilveszterArray = [
    "Szilveszter",
    "Nemeth",
    2025-1996,
    "programmer",
    ["Michael", "Peter", "Steven"] 
];

for(let i = szilveszterArray.length - 1; i >= 0; i-- ) {
    console.log(szilveszterArray[i])
}

for(let exercise = 1; exercise < 4; exercise++ ) {
    console.log(`--------Starting exercise ${exercise}`);
    for(let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weigth repetition ${rep}`);
    }
}



// While Lopp 

//for(let rep = 1; rep <= 10; rep++) {
//    console.log(`Lifting weigths repetition ${rep}!`)
   
//}


let rep = 1;
while(rep <= 10) {
    console.log(`Lifting weigths repetition ${rep}!`);
   rep++;
}

let dice = Math.trunc(Math.random()* 6) +1;

console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random()* 6) +1

    if(dice === 6) console.log("Loop is about to end..");

}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
 const tips = [];
 const totals = [];

 for(let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = calcTip(bills[i]) + bills[i];
 }

 console.log(tips);
 console.log(totals);

 //BONUS CHALLANGE 
 

 function calcAverage(arr) {

    let sum = 0;
    
    for(let i = 0; i < arr.length; i++ ) {
        sum += arr[i] ;
    }
    return sum / arr.length ;
 }

 console.log(calcAverage(totals));
 console.log(calcAverage(totals));

 



 //Assignments for part 2
 
 
 function describeCountry(country, population, capitalCity) {
        return `${country} has ${population} million people and its capital city is ${capitalCity}`

 }

 const hungary = describeCountry("Hungary", 10, "Budapest");
const austria = describeCountry("Austria", 20, "Vienna");
 const finnland = describeCountry("Finnland", 6, "Helsinki");


 console.log(hungary, austria, finnland);


 
function percentageOfWorld1(population){
    return population / 7900 * 100;
}
const idk = percentageOfWorld1(200)
const kdi = percentageOfWorld1(200)
const kda = percentageOfWorld1(50)
console.log(idk);
console.log(kdi);
console.log(kda);

const percentageOfWorld2 = function(population){
    return population / 7900 * 100;
}

console.log(percentageOfWorld2(200));
console.log(percentageOfWorld2(10));
console.log(percentageOfWorld2(50));


const percentageOfWorld3 = (population) => population / 7900 * 100;

console.log(percentageOfWorld3(200));
console.log(percentageOfWorld3(10));
console.log(percentageOfWorld3(50));



function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
}

console.log(describePopulation("China", 56));
console.log(describePopulation("Hungary", 10));
console.log(describePopulation("Austria", 2201));


*/