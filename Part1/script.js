/*
let js = "Amazing" ;

console.log(10 + 10 + 10);

console.log("Jonas") ;
console.log(23) ;

let firstName = "Szilveszter" ;
console.log(firstName);

let myFirstJob = "cook" ;
let myCurrentJob = "Programmer";
if(myCurrentJob === "cook") [
console.log(myCurrentJob)
]
 else [ 
        console.log("Your current job is not Programmer!")
 ]


 true ;
 let javascriptIsFun = true ;
 console.log(true);
 console.log(typeof true) ;
 console.log(typeof "Szilveszter") ;
 console.log(typeof javascriptIsFun) ;

 javascriptIsFun = "YES!" ;
 console.log(typeof javascriptIsFun) ;

 let year;
 console.log(year);
 console.log(typeof year);
 year = 1991;
 console.log(typeof year ) ;
 
 

 let age = 30;
 age = 31;

 const birthYear = 1991;

 var job= "programmer" ;
 job = "teacher" ;
 console.log(job);

 lastName = "Nemeth";
 

const now = 2037
 const ageSzilveszter = now - 1996;
 const ageSarah = now - 2018;
console.log(ageSzilveszter, ageSarah);

console.log(ageSzilveszter * 2, ageSzilveszter / 10, 2 ** 3)

// math operators
const firstName = " Szilveszter" ;
const lastName = "Nemeth";
console.log(firstName + " " + lastName);
// assigment operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x)

x *= 4;
x++;
x--;
console.log(x);
// comparison operators 
console.log(ageSzilveszter > ageSarah); // > < >= <= 
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018)



const firstName ="Szilveszter";
const job = "teacher";
const birthYear = 1996 ;
const year = 2025;

const szilveszter = "I'm " + firstName + ", a "+ (year - birthYear)
 + " years old " + job + "!" ;
 console.log(szilveszter);
 

 const szilveszternew = `I'm ${firstName}, a ${year - birthYear} year old ${job}! `;
 console.log(szilveszternew);

 console.log(`Just a regular string..`);

 console.log(`new
       line
       code`);



const age= 15;

if(age >= 18) {
       console.log("Sarah can start driving license!🙌")
} else {
 const yearsLeft = 18-age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years!😊`) ;    
}


const birthYear = 2012;
let century;

if(birthYear <= 2000){
        century = 20;
} else {
        century = 21;
}
console.log(century);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number())

console.log(String(23));

// type coercion 
console.log("I'am" + 23 + "years old");


// 5 Falsey values : 0, "" , undefined , null , Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if(money) {
       console.log("Don't spend it all;)")
}else {
       console.log("You should get a job!")

} 


let height = 0;
if(height) {
       console.log("Height is defined")
} else {
       console.log("height is undefined")
}
       


const age = 18;
if(age === 18 ) console.log("you just became an adult")

if(age == 18 ) console.log("you just became an adult") 
       
const favourite = Number
(prompt("What your favourite number?"));


console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
       console.log("Cool 23 is an amazing number! ")
} else if(favourite === 7) {
       console.log("7 is a cool number");
} else if  (favourite === 9) {
       console.log("9 is also a cool numbr!");

}else console.log ("Number is not 23 pr 7");


if(favourite !== 23) console.log ("why not 23?");



const hasDriversLicense = true ;
const hasGoodVision = true ;

console.log(hasDriversLicense && hasGoodVision);


console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

const shouldDrive = hasGoodVision && hasDriversLicense;

if(hasDriversLicense && hasGoodVision){
       console.log("Sarah should be drive");
}else {
       console.log("Someone else shpuld be hasDriversLicense..");
}

isTired = false;

if(hasDriversLicense && hasGoodVision && !isTired){
       console.log("Sarah should be drive");
}else {
       console.log("Someone else shpuld be hasDriversLicense..");
}



const day = "sunday" ;

switch(day) {
       case "monday" : // day === "monday"
       console.log("plan course structure");
       console.log("go to coding meetup");
       break;
   case "tuesday":
     console.log("prepare theory videos");
break;
case "wednesday":
case"thursday":
       console.log("i write code examples");
       break;
 case "friday" : 
console.log("record videos");
break;
case "saturday":
case "sunday" :
 console.log("enjoy weekend");
 break;
 default:
       console.log("not a valid day!");

}


if(day === "friday"){
       console.log("plan course structure");
       console.log("go to coding meetup");

}else if (day === "tuesday"){
       console.log("prepare theory videos");

}else if (day === "wednesday" || day === "thursday") {
       console.log("i write code examples");

} else if (day === "friday") {
       console.log("record videos");

}else if(day === "saturday" || day === "sunday") {
       console.log("enjoy weekend");

}else {
       console.log("not a valid day!");
}


3 + 4
1991
true && false && !false

if (23> 10) {
       const str = " 23 is bigger";
}
const me = 'Jonas'
console.log(`I'm ${2037 - 1991 } years old ${me}`);


const age = 5 ;
age >= 18 ? console.log("i like to drink wine."):
console.log("I like to drink water");


const drink = age >= 18 ? "wine" : "water" ;
console.log(drink);


let drink2 ;
if(age >= 18) {
       drink2 ="wine";
} else {
       drink2 = "water";
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`) ;


*/
