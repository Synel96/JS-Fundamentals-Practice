/*
const country = "Hungary" ;
const continent = "Europe";
let population = 10 ;

const isIsland = false;
const language = "Hungarian";

console.log(typeof country );
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);


console.log(population / 2);

console.log(population ++);

console.log(country > 33) ;

let description = 
country + " is in " + continent +", and its "
+ population + " million people speak " +  language ;

console.log(description);


numNeighbours = prompt('How many neighbour countries does your contry have?');

if(numNeighbours == 1 ) { 
  console.log("Only 1 Boarder!");
} else if(numNeighbours > 1) {
  console.log("More than 1 Boarder!")
}else {
  console.log("No Boarders!")
}
 

const country = "Hungary";
const population = 10;
const language = "Hungarian";
const isIsland = false;

if(language === "English" && population < 50 && isIsland === false ) {
  console.log('You should live in Hungary :)') ;
} else {
  console.log("Portugal does not meet your criteria :(");
}
 

const language = "arabic"
switch(language) {
       case "chinese or mandarin" : 
       console.log("MOST number of native speakers!");
       break; 

       case "spanish" : 
       console.log("2nd place in number of native speakers");
       break; 

       case "english" : 
       console.log('3rd place');
       break; 

       case "hindi" : 
       console.log("Number 4");
       break; 

       case "arabic" : 
       console.log("5th most spoken language");
       break; 

       default : 
       console.log("Great language too :D");

}



let population = 10;
const country = "Hungary";

console.log(`${country}'s is ${population > 33 ? "above" : "below"} average!`  );

*/

const guessMyAge = prompt("Hány éves vagyok?");
const myAge = 28 ;

if(guessMyAge == myAge) {
  console.log("Eltaláltad");
}else if(guessMyAge > myAge) {
  console.log("Kevesebb");

}else if(guessMyAge == myAge -1 ) {
  console.log("Közelít!");

}else{
  console.log("Több");
}



