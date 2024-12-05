// In this task , we will create an abstract User class and two child classes (Admin and Viewer classes) that inherit from the abstract class.

//Create an abstract class with the name of User:

class User {
  // Add to the class, a property with the name of username

  constructor(username) {
    this._username = username;
  }

  // Add to the class, an abstract method with the name of stateYourRole()

  stateYourRole() {}

  // Add to the class, the setter and getter methods to set and get the username

  get username() {
    return this._username;
  }
  set username(username) {
    this._username = username;
  }
}

//Create an Admin class that inherits the User abstract class:

class Admin extends User {
  // Add to the class a method stateYourRole() and let it return the string "admin"

  stateYourRole() {
    return "admin";
  }
}

// Create another class, Viewer that inherits the User abstract class

class Viewer extends User {
  // Add to the class a method stateYourRole() and let it return the string "viewer"
  stateYourRole() {
    return "viewer";
  }
}

// Create an object, admin, from the Admin class, set the username to "Balthazar", and make it return the string "admin".

const admin = new Admin("Balthazar");
console.log(admin.username, admin.stateYourRole());

// Create an object, viewer, from the Viewer class, set the username to "Melchior", and make it return the string "viewer"

const viewer = new Viewer("Melchior");
console.log(viewer.username, viewer.stateYourRole());
