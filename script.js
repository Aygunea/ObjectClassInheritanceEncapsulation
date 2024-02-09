//Task1. Product class olacaq.Name price count gələcək.Ve ayri bir funksiya olacaq ki bu funksiya total Price hesablayacaq.Və bu yaranan productlari
//bu funksiyaya gondərdiyimdə mənə total price console cixardacaq.
class Product {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  static gettotalPrice(product1, product2, product3) {
    let totalPrice =
      product1.count * product1.price +
      product2.count * product2.price +
      product3.count * product3.price;
    return totalPrice;
  }
}
const product1 = new Product("kofe", 0.5, 2);
const product2 = new Product("cay", 4, 3);
const product3 = new Product("fanta", 2, 2);
console.log(Product.gettotalPrice(product1, product2, product3));
//Task2 Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).Və consolda arrayın ən kiçik elementini qaytarsın
let array = [1, 6, -80, 78, -5];
let minNum = 0;
function FindMinNum(array) {
  if (!Array.isArray(array)) {
    console.log("Parametr olaraq array daxil edin!");
  } else {
    for (let i = 1; i < array.length; i++) {
      if (minNum > array[i]) {
        minNum = array[i];
      }
    }
    return minNum;
  }
}
console.log(FindMinNum(array));
//Task3 Animal adında  class yaradın. butun heyvanlarin ortaq özəlliklərin burda tutacaqsız.
//  3.1 Default olaraq Eat() metodu yaradın.
//  3.2 Daha sonra Walk() metodu yaradın.
//  3.3 GetInfo() metodu yaradın.
//  3.4 Animal-dan törəyən Bird klass-ı yaradın.
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Eat(name) {
    return `${this.name} is eating`;
  }
  Walk(name) {
    return `${this.name} is walking`;
  }
  GetInfo(name, age) {
    return `${this.name} is ${this.age} years old`;
  }
}
class Bird extends Animal {
  constructor(name, age, fly) {
    super(name, age);
    this.fly = fly;
  }
}
const bird1 = new Bird("pigeon", 5, "600 miles");
console.log(bird1.Eat());
console.log(bird1.Walk());
console.log(bird1.GetInfo());
