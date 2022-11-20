
// forloop
const nameString = '    todays session was fruitful with shravya Chunmai , sweeta, Amrit and suman     ';
// const regEx = replace(',','');
const ourArray = nameString.trim().replace(/,/g,'').split(' ');

console.log(ourArray);

// const ourNewArray = [];
// for (let i =0; i <ourArray.length; i++){

//   console.log(ourArray[i]);

//   if(ourArray[i].length>1){
//    const p =  ourArray[i].split(','); 
//    console.log(p)
//    ourNewArray.push(p[0]);
   
// }
// }

// console.log(ourNewArray)

