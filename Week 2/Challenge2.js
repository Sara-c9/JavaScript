// Add the class constructor.
class User {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Add the getters and setters methods after the class constructor

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  // Change your hello() method to return 'Hello World!'

  hello() {
    return "Hello World!";
  }
}

// Create an user object called user that will represent the User class.

const user = new User("John", "Doe");

// Use the setters methods to set the firstName and lastName instance variables of your user object.

user.firstName = "Jane";
user.lastName = "Doe";

// Use getters methods to retrieve the firstName and lastName Strings from the user object and add a blank space in between.

console.log(user.hello());
console.log("My name is", user.firstName, user.lastName);
