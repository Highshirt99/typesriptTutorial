import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// interface isPerson{
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: isPerson = {
//   name: "Aishat",
//   age: 20,
//   speak(text: string) {
//     console.log(text)
//     return text
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount)
//     return amount
//   }
// }

// const greetPerson = (person: isPerson) =>{
//   console.log("Hello", person.name)
// }

// greetPerson(me)

// console.log(me.spend(20), me.speak("Hey"))

// const invOne = new Invoice("Ayo", "work on the e-commerce website", 300);
// const invTwo = new Invoice("Richie", "work on the mario website", 200);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.details, inv.amount, inv.format());
// });

// const docOne = new Invoice("Aishat", "Web work", 500);
// const docTwo = new Payment("Layo", "Subscription", 150);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)

// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({
  name: "Lola",
  age: 30,
});
console.log(docOne.name);

// ENUMS

enum ResourceType {
  book,
  auth,
  film,
  director,
  person,
}

// with interfaces

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.book,
  data: {
    name: "Aishat",
  },
};

const docThree: Resource<string[]> = {
  uid: 2,
  resourceName: ResourceType.person,
  data: ["Bread", "Milk", "Tissue Paper"],
};

console.log(docThree, docTwo);

// tuples

let tup: [string, number, boolean] = ["hey", 15, true]

// list template instance

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});
