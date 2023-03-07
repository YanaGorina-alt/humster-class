class Hamster{
    // attributes:
      
    // owner - string, initially set as an empty string
    // name - string, set the name from parameter in constructor method
    // price - integer, set as 15
      constructor(name,owner="",price=15){
        this.owner = owner;
        this.name = name;
        this.price = price;
      }
    // methods:
    
    // wheelRun() - log "squeak squeak"
      wheelRun(){
        console.log("squeak squeak");
      }
    // eatFood() - log "nibble nibble"
      eatFood(){
        console.log("nibble nibble");
      }
    // getPrice() - return the price
      getPrice(){
        return this.price;
      }
}
    const pik = new Hamster("Pik","Tom",5);
    console.log(pik);
    pik.wheelRun();
    pik.eatFood();
    console.log(pik.getPrice());

  
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
  constructor(name,age=0,height=0,weight=0,mood=0,bankAccount=0,hamsters=[]){
    this.name=name;
    this.age =age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
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
  eat(){
    this.weight+=2;
    this.mood+=4;
  }

  // exercise() - decrement weight
  exercise(){
    this.weight-=1;
  }

  // ageUp() - increment age, increment height, increment weight,
  // decrement mood, increment bank account by 10 (birthday money)
  ageUp(){
    this.age+=1;
    if(this.age < 18){
      this.height+=1;
      this.weight+=1;
      this.mood+=5;
    }else if(this.age < 45){
      this.mood+=1;
      this.bankAccount+=10;
    }else{
      this.height-=1;
      this.weight+=4;
      this.bankAccount+=10;
      this.mood--;
    }
  }

  // buyHamster(hamster) - push the hamster object onto the hamster array,
  // increment mood by 10, decrement bankAccount by the value of the hamster 
  //(hint: use getPrice())
  buyHamster(humster){
    this.hamsters.push(humster);
    this.mood+=10;
    this.bankAccount-=humster.getPrice();
  }
}

const yana = new Person("Yana",45,5,115,9,10000);
console.log(yana);
yana.eat();
yana.buyHamster;
yana.ageUp();
yana.exercise();
yana.buyHamster(pik);
console.log(yana);