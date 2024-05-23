class Book {
  constructor(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
  }

  //Getter methods
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getAuthor() {
    return this.author;
  }

  // Setter methods
  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setAuthor(author) {
    this.author = author;
  }
}

module.exports = { Book };
