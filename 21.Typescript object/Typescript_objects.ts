
//write a program that creates objects containing these items.


interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean 
}

let person :person = {
    age : 26 ,
    name : 'Shafaq' ,
    nationality : 'Pakistan' ,
    student : true

}

console.log(person);


// Datatype of Dinner
interface Dinner {
    maker : string
    dish : string
    tasty : Boolean
} 

//Dinner object

let Dinner = {
    maker : 'Chief iqra',
    dish : 'Chicken biryani' ,
    tasty : true
}

//print Dinner
console.log(Dinner);