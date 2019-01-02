let newArr

function steamrollArray(arr, keep) {
  // I'm a steamroller, baby
  if(!keep) newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) == typeof([]) && arr[i].hasOwnProperty('length')) {
      steamrollArray(arr[i],true);
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))