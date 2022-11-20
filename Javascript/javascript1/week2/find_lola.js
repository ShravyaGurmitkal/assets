console.log('Find Lola')

const friendList = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
for(let i = 0; i < friendList.length; i++) {
    if(friendList[i] === 'Lola') {
        console.log(`I have found Lola at position ${i}`)
        break;
    }
}