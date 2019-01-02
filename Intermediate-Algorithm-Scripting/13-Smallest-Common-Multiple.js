function smallestCommons(arr) {
  arr = arr.sort((a,b) => a - b)
  let num = arr[1];
  while(true) {
    let gocont;
    for(let i = arr[0]; i <= arr[1]; i++) {
      //console.log(i)
      if(num % i != 0) {
        num++;
        gocont = true;
        break;
      }
    }
    if(gocont) {
      continue;
    } 
    break;
  }
  return num;
}


console.log(smallestCommons([23,18]));
