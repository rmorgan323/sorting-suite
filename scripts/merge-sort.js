function mergeSort(array) {
  
  if (array.length <= 1)
    return array;

  let midpoint = Math.floor(array.length / 2);
  let arrayLeft = array.slice(0,midpoint);
  let arrayRight = array.slice(midpoint);

  return merge(mergeSort(arrayLeft),mergeSort(arrayRight));
}

function merge(left, right) {

  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length){
    if(left[indexLeft] < right[indexRight]){
      result.push(left[indexLeft++]);
    }
    else{
      result.push(right[indexRight++]);
    }
  }  
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

module.exports = mergeSort;