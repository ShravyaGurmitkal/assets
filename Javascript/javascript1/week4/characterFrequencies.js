function getCharacterFrequencies(word) {
    let copyWord = '';
    const characters = [];
    for (const character of word) {
        if (!copyWord.includes(character)) {
            copyWord += character;
            characters.push ({
                character,
                count: word.match(new RegExp(character, "g")).length,
                //count: word.split(character).length - 1,
            })
        }
    }

    return {
        characters,
        length: word.length,
    }
}


console.log(getCharacterFrequencies('happy'));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/
