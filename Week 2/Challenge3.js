//Create a  User class:
class User {
  //Add to the class a property with the name of username.
  constructor() {
    this._username = "";
  }

  //Create a setter method that can set the value of the username.

  get username() {
    return this._username;
  }

  set username(username) {
    this._username = username;
  }
}

// Create the Admin class that inherits the User class:

class Admin extends User {
  constructor() {
    super();
  }
  //Add a method by the name of expressYourRole(), and make it return the string: "Admin"

  expressYourRole() {
    return "Admin";
  }

  //Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX"
  sayHello() {
    return `Hello admin, ${this._username}`;
  }
}

//Create an object admin out of the class Admin:
//Set its name to "Balthazar" and say hello to the user.
const admin = new Admin();
admin.username = "Balthazar";

console.log(admin.sayHello());
