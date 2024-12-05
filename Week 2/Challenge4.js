class User {
  constructor() {
    this._numberOfArticles = 0;
  }

  // Add to the User class the methods to set and get the number of articles

  get numberOfArticles() {
    return this._numberOfArticles;
  }

  set numberOfArticles(numberOfArticles) {
    this._numberOfArticles = numberOfArticles;
  }

  // Add to the User class a third method calcScores()

  calcScores() {
    throw new Error(
      "Method calcScores() must be implemented in the subclasses"
    );
  }
}

//Create an Author class that inherits from the User class

class Author extends User {
  constructor(numberOfArticles) {
    super();
  }

  calcScores() {
    return this.numberOfArticles * 10 + 20;
  }
}

//Create an Editor class that inherits from the User class

class Editor extends User {
  constructor() {
    super();
  }

  calcScores() {
    return this.numberOfArticles * 6 + 15;
  }
}

//reate an object, author, from the Author class, set the number of articles to 8, and print the scores that the author gained

const author = new Author();
author.numberOfArticles = 8;
console.log("Author's scores: ", author.calcScores());

//Create another object, editor, from the Editor class, set the number of articles to 15, and print the scores that the editor gained

const editor = new Editor();
editor.numberOfArticles = 15;
console.log("Editor's scores: ", editor.calcScores());
