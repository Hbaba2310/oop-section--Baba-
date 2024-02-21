//Classes
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.name = width;
    this.name = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log("Rectangle Area: " + this.area());
  }
}

const square = new Rectangle("Square", 20, 20);
console.log(square);

//Class Inheritance

// parent class
class Shape {
  constructor(name) {
    this.name = name;
  }
}
  logName(){
    console.log('Shape Name: this.name');
  }




//Sub class
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
    
  }

  //polymorphism 
  logName(){
    console.log('Circle Name: ' + this.name);
  }
}

const rect = new Rectangle("Rect 1", 20, 20);
rect.logName();

const cir = new Circle('Cir 1', 30); 
cir.logName();

//Static Methods 

area() {
  return this.height * this.width;
}

 static getClass(){
  return 'Rectangle';
}


const rect = new Rectangle ('Rect', 10, 10);


// Getters & setters 

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName; // keep it private
    this._firstName = firstName;
  }

  get firstName(){
    return this.capitalizeFirst(this._firstName);

  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName(){
    return this.capitalizeFirst(this._firstName);

  }
  
  set lastName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  }

  


const person1 = new Person ('John', 'Doc'); 


