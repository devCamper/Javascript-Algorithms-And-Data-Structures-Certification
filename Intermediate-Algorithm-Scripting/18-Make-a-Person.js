var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let FirstName
  let LastName
  this.getFirstName = function() {
    return FirstName;
  };
  this.getLastName = function() {
    return LastName;
  };
  this.getFullName = function() {
    return `${FirstName} ${LastName}`;
  };
  this.setFirstName = function(firstName) {
    FirstName = firstName;
  };
  this.setLastName = function(lastName) {
    LastName = lastName;
  };
  this.setFullName = function(fullName) {
    let arr = fullName.split(" ");
    let firstName = arr[0]
    let lastName = arr[1]
    this.setFirstName(firstName)
    this.setLastName(lastName)
  };
  
  this.setFullName(firstAndLast)
};

var bob = new Person('Bob Ross');
bob.getFullName();