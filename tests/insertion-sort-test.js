import { assert } from 'chai';
const insertionSort = require( '../scripts/insertion-sort.js');

describe('Insertion Sort', () => {

	it('should be a function', function() {
		assert.isFunction(insertionSort);
	});

	it('should correctly sort a small array', function() {
	  const array = [5, 20, 3, 17, 7, 10, 1, 13, 9, 15, 18, 6];
	  assert.deepEqual(insertionSort(array), [1, 3, 5, 6, 7, 9, 10, 13, 15, 17, 18, 20] )
	});

	it('should sort an array of letters', function() {
		const array = ['c', 'x', 'e', 'r', 't', 'a', 'd', 'f', 's', 'l', 'k', 'i', 'm', 'b', 'p'];
		assert.deepEqual(insertionSort(array), ['a', 'b', 'c', 'd', 'e', 'f', 'i', 'k', 'l', 'm', 'p', 'r', 's', 't', 'x'] )
	})

	it('should sort an array that includes positive AND negative numbers', function() {
		const array = [-13, 76, 14, -41, 19, -33, -91, 31, 6, -65, 83, -9, -57];
		assert.deepEqual(insertionSort(array), [-91, -65, -57, -41, -33, -13, -9, 6, 14, 19, 31, 76, 83])
	})

	it('should sort an array of 10,000 values', function() {
	  let array = [];
	  for (let i = 0; i < 10000; i++) {
	  	let randomNum = Math.floor(Math.random() * 20000);
	  	array.push(randomNum);
	  }
	  let sortedArray = insertionSort(array);

	  for (let i = 0; i < sortedArray.length - 1; i++) {
	  	assert.equal(sortedArray[i] <= sortedArray[i+1], true)
	  }
	  //Took 408ms
	});

	it('should sort an array of 20,000 values', function() {
	  let array = [];
	  for (let i = 0; i < 20000; i++) {
	  	let randomNum = Math.floor(Math.random() * 40000);
	  	array.push(randomNum);
	  }
	  let sortedArray = insertionSort(array);

	  for (let i = 0; i < sortedArray.length - 1; i++) {
	  	assert.equal(sortedArray[i] <= sortedArray[i+1], true)
	  }
	  //Took 1534ms
	});

})