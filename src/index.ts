import { concatenation } from "./concatenation";

// const button = document.querySelector("button")!;
// const input = document.querySelector("input")!;

// if (button && input) {
//   button.addEventListener("click", () => {
//     concatenation(input.value, "hello!");
//   });
// }

let total: number = 100;
// let user: string = "Bobby";
let adult: boolean = true;
// user = "5";

const numbers: number[] = [1, 2, 3, 5, 6, 9, 0];

const userObj: { name: string; age: number } = {
  name: "Eddie",
  age: 17,
};

// const appUser: User = {
//   name: "Eddie",
//   age: 17,
// };

type size = "small" | "medium" | "large";

//цей метод кращій тому що краще уберігає від помилок
enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}

const button: size = "large";
const button2: Sizes = Sizes.small;

function add(num1: number, num2: number): string {
  return `${num1}` + `${num2}`;
}

function addTwo(num1: number, num2: number): void {
  console.log(num1 + num2);
}

type User = {
  name: string;
  age: number;
  hobby: string;
};

function great(user: User): void {
  console.log(`Hello ${user.name}`);
}

function userConstructor(name: string, age: number, hobby: string): User {
  return { name, age, hobby };
}

// CAr

type Car = {
  color: string;
  price: number;
  currency: string;
  start: (priceTotal: number) => {};
};

const Car = {
  color: "red",
  price: 1000,
  currency: "UAH",
  start(priceTotal) {
    console.log(this.price + priceTotal);
  },
};

//необов'язковий параметр

type UsersType = {
  name: string;
  age: number;
  role?: string;
};

const user1: UsersType = {
  name: "Ihor",
  age: 22,
};
const admin: UsersType = {
  name: "Boris",
  age: 37,
  role: "Admin",
};
