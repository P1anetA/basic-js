const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

// npm run test
function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = Array(matrix[i].length);}
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
      let count = 0;
      if (i == 0 && matrix.length > 0) {
      if (matrix[i+1][j]  == true) {
        count += 1;
      }
      }
      if (i == matrix.length-1 && matrix.length > 0) {
      if (matrix[i-1][j] == true){
        count += 1;
      }
      }
      if (i !== 0 && i !== matrix.length-1 && matrix.length > 0) {
      if (matrix[i+1][j] == true){
        count += 1;
      }
      if (matrix[i-1][j] == true){
        count += 1;
      }
    }
      if (j == 0 && matrix[i].length > 0) {
      if ( matrix[i][j+1] == true) {
      count += 1;
      }
      }
      if (j == matrix[i].length  && matrix[i].length > 0) {
      if ( matrix[i][j-1] == true) {
        count += 1;
      }
      }
      if (j !== 0 && j !== matrix.length-1 && matrix[i].length > 0) {
        if ( matrix[i][j+1] == true) {
        count += 1;
      }
        if (matrix[i][j-1]  == true) {
        count += 1;
      }
      }
      if (i == 0 && j == 0 && matrix[i].length > 0) {
        if (matrix[i+1][j+1] == true) {
          count += 1;
        }
      }
      if (i == matrix.length && j == 0 && matrix[i].length > 0) {
        if (matrix[i-1][j+1] == true) {
          count += 1;
        }
      }
      if (i !== 0 && i !== matrix.length-1 && j == 0 && matrix[i].length > 0) {
        if (matrix[i+1][j+1] == true){
          count += 1;
        }
          if ( matrix[i-1][j+1]  == true) {
          count += 1;
        }
      }

      if (i == 0 && j == matrix[i].length && matrix[i].length > 0) {
        if (matrix[i+1][j-1] == true) {
          count += 1;
        }
      }
      if (i == matrix.length - 1 && j == matrix[i].length-1 && matrix[i].length > 0) {
        if (matrix[i-1][j-1] == true) {
          count += 1;
        }
      }
      if (i == matrix.length-1 && j == 0 && matrix[i].length > 0) {
        if (matrix[i-1][j+1] == true) {
          count += 1;
        }
      }
      if (i !== 0 && i !== matrix.length && j == matrix[i].length && matrix[i].length > 0) {
        if (matrix[i-1][j-1] == true) {
          count += 1;
        }
        if (matrix[i+1][j-1] == true) {
          count += 1;
        }
      }
      if (i == 0 && j !== matrix[i].length && j !== 0 && matrix[i].length > 0) {
        if (matrix[i+1][j+1] == true) {
          count += 1;
        }
        if (matrix[i+1][j-1] == true) {
          count += 1;
        }
      }
      if (i == matrix.length && j !== matrix[i].length && j !== 0 && matrix[i].length > 0) {
        if (matrix[i+1][j+1] == true) {
          count += 1;
        }
        if (matrix[i+1][j-1] == true) {
          count += 1;
        }
      }
      if (i !== matrix.length-1 && i !== 0 && j !== matrix[i].length && j !== 0 && matrix[i].length > 0) {
        if (matrix[i+1][j+1] == true) {
          count += 1;
        }
        if (matrix[i+1][j-1] == true) {
          count += 1;
        }
        if (matrix[i+1][j] == true) {
          count += 1;
        }
        if (matrix[i-1][j] == true) {
          count += 1;
        }
        if (matrix[i-1][j+1] == true) {
          count += 1;
        }
        if (matrix[i-1][j-1] == true) {
          count += 1;
        }
        if (matrix[i][j+1] == true) {
          count += 1;
        }
        if (matrix[i][j-1] == true) {
          count += 1;
        }
      }
      result[i][j] = count;
    }
  }
    return result;
}
// console.log(minesweeper([
//  [true, false, false],
//  [false, true, false],
//  [false, false, false]
// ]))
module.exports = {
  minesweeper
};
