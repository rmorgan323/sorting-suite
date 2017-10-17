import { assert } from 'chai';
// const chai = require('chai');
const insertionSort = require( '../scripts/insertion-sort.js');
// const assert = chai.assert;
// import index from '../scripts/index'

describe('Insertion Sort', () => {

	it('should correctly sort a small array', function() {
	  
	  const array = [5, 20, 3, 17, 7, 10, 1, 13, 9, 15, 18, 6];
	  assert.deepEqual( insertionSort(array), [1, 3, 5, 6, 7, 9, 10, 13, 15, 17, 18, 20] )
	});

	it.skip('should correctly sort an array of up to 50000 values', function() {
	  
	  //create array
	  let array = [];

	  //populate array
	  for (let i = 0; i < 50000; i++) {
	  	let randomNum = Math.floor(Math.random() * 100000);
	  	array.push(randomNum);
	  }

	  insertionSort(array);

	});

})