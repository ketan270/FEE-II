// //object data type
// //object is a collection of key value pairs
// //object is a non primitive data type
// //object is a reference data type
// //object is a mutable data type
// //object is a unordered data type
// //object is a collection of properties


// //object can be created in 2 ways : constructor and literal



// // A: Constructor:

// const obj = new Object();
// obj.name = "Ketan";
// obj.age = 19;
// obj.city = "CHD";

// console.log(obj.name); // Output: Ketan
// console.log(obj.age); // Output: 19
// console.log(obj.city); // Output: CHD



// // B: Literal:
// // Define an object
// const person = {
//     name: "Ketan",
//     age: 19,
//     city: "Chandigarh"
// };

// // Access object properties
// console.log(person.name); // Output: Ketan
// console.log(person.age); // Output: 19
// console.log(person.city); // Output: Chandigarh

// // Modify object properties
// person.age = 35;
// console.log(person.age); // Output: 35

// // Add new properties to an object
// person.gender = "Male";
// console.log(person.gender); // Output: Male

// // Delete a property from an object
// delete person.city;
// console.log(person.city); // Output: undefined


const users = {
    user1: {
        name: 'Keshav',
        age: 19,
    },
    user2: {
        name: 'Krishna',
        age: 19,
    },
    user3:{
        name: 'Prateek',
        age: 20,
    },
}

console.log(users);
console.log(users.user2);
console.log(users.user2.age);
users.user3.name = "Ketan";
console.log(users.user3.name); // Output: Ketan
console.log(users.user3); 

// object merge:
const user1= {name: 'Keshav', age: 19};
const user2= {name: 'Krishna', age: 22};

const user3= Object.assign({}, user1, user2);

const user = {...user1, ...user2};
console.log(user);
console.log(user3);

// Create an array
let myArray = [
    {
        object1: {
            name: "Ankit",
            age: 19,
        },
        object2: {
            name: "Prateek",
            age: 20,
        },
        object3: {
            name: "Keshav",
            age: 18,
        }
    }
];

console.log(myArray[0].object1.name); 
console.log(myArray[0].object2.age);
console.log(myArray[0].object3.name);