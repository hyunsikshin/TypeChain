const name = 'hyunxic',
  age = 24,
  gender = 'male';

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}! You're ${age} years old. You're a ${gender}!`;
};

console.log(sayHi(name, age, gender));

export {};
