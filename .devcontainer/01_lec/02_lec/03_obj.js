// Object.create // singleton
// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Sachin",
//     "full name": "Yadav Sachin",
//      [mySym] : "mykey1",
//     age: 18,
//     location: "Mumbai",
//     email: "sachin@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
  
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

//const tinder = new Object() // singleton object

// const tinderUser = {}

// tinderUser.id = "99759"
// tinderUser.name = "Sachin"
// tinderUser.isLoggedIn = false

// //console.log(tinderUser);

// const regularUser = {
//     eamil: "kjdissfs.com",
//     fullname:{
//         userfullname:{
//             firstname: "Sachin",
//             lastname: "Yadav"
//         }
//     }
// }
// //console.log(regularUser.fullname.userfullname.firstname);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// const users = {
//     [
//         id1: 1,
//         email: "sifhsihf.gmail.com"
//     },
//     ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entriess(tinderUser));

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(courseInstructor);


