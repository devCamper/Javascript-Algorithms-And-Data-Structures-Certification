function addTogether(arg1, arg2 = null) {
  if(typeof(arg1) != typeof(0)) {
    return undefined
  }
  function add(arg2) {
      if(typeof(arg2) != typeof(0)) {
        return undefined
    }
    return arg1 + arg2
  }
  if(arg2 == null) {
    return add
  }
  else if(typeof(arg1) === typeof(0) && typeof(arg2) === typeof(0)) {
    return arg1 + arg2
  }
}

console.log(addTogether(2,"3")) ;