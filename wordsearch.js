//Paired Programming
// Peter Heyboer @pheyboer
// Kyle Bautista @kalaybot09

// Check to find words horizontally - fix code below
// Check to find words vertically - transpose - add this
// Return true if word is found
// False if word is not found
//add test for vertical words and empty array

// Stretch activity wordSearch function search backwards and diagonally


const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  //horizontal check
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(word.split('').reverse('').join(''))) return true;
  }
  //vertical check
  const verticalJoin = [];
  for (let col = 0; col < letters[0].length; col++) {
    let string = '';
    for (let row = 0; row < letters.length; row++) {
      string += letters[row][col];
            
    }
    verticalJoin.push(string);
    

    for (let v of verticalJoin) {
      if (v.includes(word) || v.includes(word.split('').reverse('').join(''))) {
        return true;
      }
    }
  }

  //check diagonally top left to bottom right
  const diagonalJoin = [];
  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[0].length; col++) {
      let stringDiagonal = '';
      for (let i = 0; i < Math.min(letters.length - row, letters[0].length - col); i++) {
        stringDiagonal += letters[row + i][col + i];
      }
      diagonalJoin.push(stringDiagonal);
    }
  }
  for (let d of diagonalJoin) {
    if (d.includes(word) || d.includes(word.split('').reverse('').join(''))) {
      return true;
    }
  }
  diagonalJoin.length = 0;

  // check diagonally bottom left to top right
  for (let row = 0; row < letters.length; row++) {
    for (let col = letters[0].length - 1; col >= 0; col--) {
      let stringDiagonal = '';
      for (let i = 0; i < Math.min(row + 1, letters[0].length - col); i ++) {
        stringDiagonal += letters[row - i][col + i];
      }
      if (stringDiagonal) diagonalJoin.push(stringDiagonal);
    }
  }
  for (let d of diagonalJoin) {
    if (d.includes(word) || d.includes(word.split('').reverse('').join(''))) {
      return true;
    }
  }
 
  return false;
};

module.exports = wordSearch;

