var jsonString = '{"name":"Dav", "age":29}';

//convert text to json
var person = JSON.parse(jsonString);

console.log(jsonString.name);
console.log(person.name);
console.log(person.age);

console.log(person);

//convert json to string
console.log(JSON.stringify(person));

