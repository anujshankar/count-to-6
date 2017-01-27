let userArray = process.argv.slice(2);
let userDataObject = {};
[, userDataObject.username, userDataObject.email] = userArray;
console.log(userDataObject);