console.log('Count by sound')

let count = 0;
const friendList = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
for (let i = 0; i < friendList.length; i++) {
    if (friendList[i].includes('a')) {
        count++;
        continue;
    }
    console.log(friendList[i]);
}