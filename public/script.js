import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({
    name: "Lola",
    age: 30,
});
console.log(docOne.name);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["book"] = 0] = "book";
    ResourceType[ResourceType["auth"] = 1] = "auth";
    ResourceType[ResourceType["film"] = 2] = "film";
    ResourceType[ResourceType["director"] = 3] = "director";
    ResourceType[ResourceType["person"] = 4] = "person";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceName: ResourceType.book,
    data: {
        name: "Aishat",
    },
};
const docThree = {
    uid: 2,
    resourceName: ResourceType.person,
    data: ["Bread", "Milk", "Tissue Paper"],
};
console.log(docThree, docTwo);
// tuples
let tup = ["hey", 15, true];
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
