const quickSort = (array) => {
	if( array.length <= 1 ) {
		return array
	};
	let pivot = array.pop();
	let arrayLeft = []
	let arrayRight = [];

	for ( let i = 0; i < array.length; i++ ) {
		if( array[i] < pivot ) {
			arrayLeft.push(array[i]);
		} else {
			arrayRight.push(array[i]);
		}
	}
	return ( quickSort(arrayLeft)).concat([pivot], quickSort(arrayRight) );
}

module.exports = quickSort;
