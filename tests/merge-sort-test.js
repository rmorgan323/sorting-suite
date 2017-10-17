import { expect } from 'chai';
import '../scripts/merge-sort.js';
// import index from '../scripts/index'

describe('Merge Sort', () => {

	it.skip('should correctly sort a small array', function() {
	  
	  let array = [5, 20, 3, 17, 7, 10, 1, 13, 9, 15, 18, 6];
	  merge(array);
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

	  mergeSort(array);

	});

})