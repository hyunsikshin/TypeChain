class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const xic = new Human('xic', 22, 'male');

const sayHi = (person: Human): string => {
  return `Hello ${person.name}! You're ${person.age} years old. You're a ${
    person.gender
  }!`;
};

console.log(sayHi(xic));

export {};
