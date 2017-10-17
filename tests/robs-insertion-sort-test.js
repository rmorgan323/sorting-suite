import { expect } from 'chai';
import '../scripts/robs-insertion-sort.js';
// import index from '../scripts/index'

describe('Rob\'s Insertion Sort', () => {

	it.skip('should correctly sort a small array', function() {
	  
	  let array = [5, 20, 3, 17, 7, 10, 1, 13, 9, 15, 18, 6];
	  robsInsertionSort(array);
	  assert.equal(array, [1, 3, 5, 6, 7, 9, 10, 13, 15, 17, 18, 20])

	});

	it.skip('should correctly sort an array of up to 50000 values', function() {
	  
	  //create array
	  let array = [];

	  //populate array
	  for (let i = 0; i < 50000; i++) {
	  	let randomNum = Math.floor(Math.random() * 100000);
	  	array.push(randomNum);
	  }

	  robsInsertionSort(array);

	});

})