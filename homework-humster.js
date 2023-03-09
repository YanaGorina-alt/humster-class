class Hamster{
    // attributes:
      
    // owner - string, initially set as an empty string
    // name - string, set the name from parameter in constructor method
    // price - integer, set as 15
      constructor(name){
        this.owner = "";
        this.name = name;
        this.price = 15;
      }
    // methods:
    
    // wheelRun() - log "squeak squeak"
      wheelRun(){
        console.log("squeak squeak");
      }
    // eatFood() - log "nibble nibble"
      eatFood(num){
        for(let i = 0; i< num; i++){
        console.log("nibble nibble");
        }
      }
    // getPrice() - return the price
      getPrice(){
        return this.price;
      }
}
    
  
// PERSON
// attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0

class Person{
  constructor(name){
    this.name=name;
    this.age =0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

 
// methods:

// getName() - returns name
  getName(){
    return this.name;
  }

  // getAge() - returns age
  getAge(){
    return this.age;
  }

  // getWeight() - returns weight
  getWeight(){
    return this.weight;
  }
  // greet() - logs a message with person's name

  greet(){
    console.log(`My name is ${this.name}.`)
  }

  // eat() - increment weight, increment mood
  eat(num){
    for(let i=0; i<num; i++){
      this.weight+=2;
      this.mood+=4;
    }
  }

  // exercise() - decrement weight
  exercise(num){
    for(let i=0; i<num; i++){
      this.weight-=1;
    }
  }

  // ageUp() - increment age, increment height, increment weight,
  // decrement mood, increment bank account by 10 (birthday money)
  ageUp(num){
    for(let i=0; i<num; i++){
      this.age+=1;
      this.bankAccount+=10;
      if(this.age < 18){
        this.height+=0.4;
        this.weight+=7;
        this.mood+=1;
      }else if(this.age < 45){
        this.mood+=0;
      }else{
        this.height-=1;
        this.weight+=4;
        this.mood--;
      }
    }
  }

  
  // buyHamster(hamster) - push the hamster object onto the hamster array,
  // increment mood by 10, decrement bankAccount by the value of the hamster 
  //(hint: use getPrice())
  buyHamster(humster){
    this.hamsters.push(humster);
    this.mood+=10;
    this.bankAccount-=humster.getPrice();
    humster.owner = this.name;
  }
}


// Create a Story with your Person class

//1. Instantiate a new Person named Timmy
const timmy = new Person("Timmy");
console.log(timmy)

// 2.Age Timmy five years
timmy.ageUp(5);

// 3.At this point Timmy's a little bummed.
// As a precocious child, he feels he's "seen it all" already.
// Have him eat five times.
timmy.eat(5);

//4. Now Timmy's a little heavier than he wants to be. 
//Kindergarten's coming up and he wants to look good.
// Have him exercise five times
timmy.exercise(5);

// 5.Age Timmy 9 years
timmy.ageUp(4);

//6. Create a hamster named "Gus"
const gus = new Hamster("Gus");

//7. Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";

//8. Have Timmy "buy" Gus
timmy.buyHamster(gus);

//9. Age Timmy 15 years
timmy.ageUp(6);

// 10.Have Timmy eat twice
timmy.eat(2);

//11. Have Timmy exercise twice
timmy.exercise(2);


//Chef Make Dinners

/**
 * Chef should be a factory of Dinner
Add a constructor to dinner that sets the string properties: appetizer, entree and dessert.
Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
Have the Chef create 3 dinners, log the dinners
 */
class Dinner {
  constructor(appetizer, entree, dessert){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }

}

class Chef {
  constructor(){
    this.dinners = [];
  }
  generate(appetizer, entree,dessert){
    const dinner = new Dinner(appetizer,entree,dessert);
    this.dinners.push(dinner);
    return dinner;
  }
}

const order = new Chef();
order.generate('Mozzarella Sticks', 'Butter Chicken','Custards');
order.generate('Cocktail Meatballs', 'Palak Panneer','Cheesecake');
order.generate('Mac and Chees Bites', 'Spicy Pork Vindaloo', 'Ice Cream');
console.log(order.dinners);
 
