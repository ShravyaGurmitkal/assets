//make an array of your classmates? Imagine each classmate is an Object
const myClassmates = [ {
    name : 'shravya',
    age : 26,
}, {
    name : 'abc',
    age : 19,
}, {
    name : 'Ali',
    age : 19,
}, {} ]

for (const classmate of myClassmates) {
    console.log(classmate.name + ":" + classmate.age + "   " + classmate);
}

for (const classmate of myClassmates) {
    if (classmate.name === 'Ali') {
        console.log('Ali is present in the class')
        break;
    }
    console.log('Ali is not present in the class')
}

myClassmates[1].name = "abc2"
myClassmates[1].age = 17
console.log(myClassmates)

console.log(Object.keys(myClassmates[3]).length === 0)
console.log(Object.hasOwn(myClassmates[0],'color'))
console.log(myClassmates[0].hasOwnProperty('name'))

// Using below code we can find is ali present in class
const isAli = myClassmates.find ((classmate) => {
    return classmate.name === 'Ali'
})

console.log(isAli !== undefined)

myClassmates.forEach((classmate) => {
    if (classmate.name === 'abc2') {
        classmate.age = 28
    }
})

console.log(myClassmates)