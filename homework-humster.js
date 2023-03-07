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
      eatFood(){
        console.log("nibble nibble");
      }
    // getPrice() - return the price
      getPrice(){
        return this.price;
      }
    }