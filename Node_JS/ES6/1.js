// Creating set and adding items to it and see size:
// let mySet = new Set();
// mySet.add("Limon");
// mySet.add(20);
// mySet.add(true);
// mySet.add(true); // This will not going to add to the set
// console.log(mySet);
// console.log(mySet.size);


// Checking value existed in set or not:
// console.log(mySet.has(20));
// console.log(mySet.has("NH"));


// forEach loop in set
// mySet.forEach((ind, val) => {
//     console.log(`Index : ${ind}, Value : ${val}`);
// });
// let a = new Set([1,2,3,4,5,6,7,8,9,10]);
// a.forEach((key, value, ownerSet) => {
//     console.log(key, value);
//     console.log(ownerSet);
// });


// Add object to sets
// let x = new Set();
// let key1 = {name : "Limon"};
// let key2 = {name : "Limon"};
// console.log(key1 == key2); // false
// x.add(key1);
// x.add(key2);
// console.log(x);
// console.log(x.size);


// Making set from an array
// let mySet = new Set([1,2,3,51,23,3,4,2]);
// console.log(mySet);


// Removing items:
// mySet.delete(1);
// mySet.delete(4);
// console.log(mySet);


// The Set constructor actually accepts any iterable object as an argument.
// let y = new Set('abcde');
// let y = new Set(['a', 'b', 'c', 'd', 'e']);
// console.log(y);


// let a = new Set([1,2,3,4,5,6]);
// console.log(a);
// a.delete(6);
// console.log(a);
// a.clear();
// console.log(a.size);


// Converting set to an array:
// let arr2 = [10,20,30,40];
// function myFunc(a, b, c, d) {
//     console.log(a + b + c + d);
// };
// myFunc(...arr2);
// let x = new Set([10,20,30,40,50]);
// let arr = [...x];
// console.log(x);
// console.log(arr);
// --
// function removeDuplicates(value) {
//     return [... new Set(value)]
// }
// let myArr = [10,20,30,10,20,50,60,40,20,10];
// let newArray = removeDuplicates(myArr);
// console.log(newArray);