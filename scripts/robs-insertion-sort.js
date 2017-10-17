const robsInsertionSort = (array) => {

  Array.prototype.insert = function ( index, item ) {
      this.splice( index, 0, item );
  };

  let z = array.length

  for (let i = 0; i < z; i++) {
    var x = array.shift();
    
    if (arraySorted[0] >= x || arraySorted.length === 0) {
      arraySorted.unshift(x);
      
    } else if (arraySorted[arraySorted.length - 1] <= x) {
      arraySorted.push(x);
      
    } else {
      
      arraySorted.find(( value, indexNum ) => {
        if (x >= value && x <= arraySorted[indexNum + 1]) {
          arraySorted.insert(indexNum + 1, x)
          return true;
        }
      })
    }
  }
}