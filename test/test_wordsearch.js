//Paired Programming

const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

//test case for horizontal word backwards
  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  //test case for vertical words

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'P', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'T', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'E', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'R', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PETER')

    assert.isTrue(result);
  });

  //test case for vertical words backwards

  it("should return true if the word is present vertically and backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'T', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'E', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'P', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PETER')

    assert.isTrue(result);
  });

  // diagonal word search top left bottom right
  it("should return true if the word is present diagonally top left bottom right", function() {
    const result = wordSearch([
      ['P', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'P', 'F', 'Q', 'U', 'R', 'L'],
      ['H', 'M', 'J', 'E', 'E', 'E', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'T', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'T', 'B'],
      ['U', 'B', 'O', 'W', 'A', 'P', 'R', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'X', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PETER')

    assert.isTrue(result);
  });

  // diagonal word search top right bottom left
  it("should return true if the word is present diagonally top right bottom left", function() {
    const result = wordSearch([
      ['P', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'R', 'F', 'Q', 'U', 'R', 'L'],
      ['H', 'M', 'J', 'E', 'E', 'E', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'T', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'T', 'B'],
      ['U', 'B', 'P', 'W', 'A', 'P', 'Y', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'X', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PETER')

    assert.isTrue(result);
  });

  // Empty Array
  it("should return false if empty array", () => {
    const result = wordSearch([], '')
    assert.isFalse(result);
  })
});

