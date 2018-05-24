interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'hyunxic',
  age: 24,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}! You're ${person.age} years old. You're a ${
    person.gender
  }!`;
};

console.log(sayHi(person));

export {};
