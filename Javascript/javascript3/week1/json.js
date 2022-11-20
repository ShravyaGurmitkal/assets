
/*
JSON
JSON stands for JavaScript Object Notation
JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page
Typical example of json: 
https://jsonplaceholder.typicode.com/users
For validating your JSON
https://jsonlint.com/
The most important rules:
JSON names require double quotes.
No trailing commas
In JSON, values must be one of the following data types:
a string
a number
an object (JSON object)
an array
a boolean
null
*/

// A string formatted like a JSON file
const jsonExample = '{"name": "Benjamin", "age": 23}';
// This is just a string!
console.log(jsonExample);
// Cannot access a the key name of a string
console.log(jsonExample.name);
 
// Now we parse (convert) the string (that we know is valid JSON) into a workable javascript object
const parsedJavascriptObject = JSON.parse(jsonExample);
// yeah we now have a js object
console.log(parsedJavascriptObject);
// where we can access the name key
console.log(parsedJavascriptObject.name);

// We can also go the other way! Here we have an object
const javascriptObject = {
    'name': 'TwentyThree',
    'age': 23
};
console.log(javascriptObject);

// Now we convert the object back into a string
console.log(JSON.stringify(javascriptObject));

// JSON does not have to be an object, it can also be an array
//console.log(JSON.parse('[1,2,3]'));
 
const arrayJson = JSON.parse('[1,2,3]');
console.log(typeof(arrayJson), arrayJson)

const arrayJsonString = JSON.stringify(arrayJson);
console.log(arrayJsonString, typeof arrayJsonString)