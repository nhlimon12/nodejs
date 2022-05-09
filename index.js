// console.log(window); // This is for browser, not for node js
var a, b, c;
a = "First";
b = "Second";
c = "Third";
console.log(global);
console.log("-------------------------");
console.log(process);
console.log(process.version); // Node Version
console.log(process.versions); // Different things versions in a object
console.log(process.versions.node);  // Node Version
console.log(process.versions.v8);  // Node Version
console.log(process.exit(0)); // Session has been exited