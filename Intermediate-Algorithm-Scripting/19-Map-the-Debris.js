function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  

  for(let i = 0; i < arr.length; i++) {
    var velocity = Math.sqrt(GM / (earthRadius + arr[i].avgAlt))
    console.log(velocity)
    var period = 2*Math.PI*(earthRadius + arr[i].avgAlt)/velocity
    console.log(period)
    var rounded = Math.round(period)
    console.log(rounded)
    delete(arr[i].avgAlt)
    arr[i].orbitalPeriod = rounded
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])