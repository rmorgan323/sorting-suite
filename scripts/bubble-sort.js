const bubbleSort = (array) => {

  let incBig = 0;
  let incSmall = 0;

  for ( let i = 0; i < array.length; i++ ) {

  if (incBig >= array.length) {
    return array;
  }
	  for ( let i = 0; i < array.length - incBig; i++ ) {
	  	if ( array[i] > array[i + 1] ) {
	  		[ array[i], array[i + 1] ] = [ array[i + 1], array[i] ]
	  		incSmall = 0;
	  	} else {
	  	  incSmall++;
	  	}
		
	  }
	  incBig += incSmall;
	  incSmall = 0;
  }
  return array
}

module.exports = bubbleSort;
