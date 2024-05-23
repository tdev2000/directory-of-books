const express = require("express");
const cors = require("cors");
const app = express();
//Use cors middleware
const path = require("path");
var uniqid = require("uniqid");
const { Book } = require("./Model/Book");

const PORT = 5000;
let bookDirectory = [];

//API call- http://localhost:5000/
app.get("/", (req, res) => {
  console.log("api call recived !");
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/get-all-books/", (req, res) => {
  res.send({ status: "success", response: bookDirectory });
});

// API call - add new book
app.post("/api/add-book/", (req, res) => {
  const bookName = req.query.bookName;
  const bookAuthor = req.query.bookAuthor;
  const bookId = uniqid();

  const newBook = new Book(bookId, bookName, bookAuthor);

  bookDirectory.push(newBook);
  console.log(bookDirectory);
  res.send({ status: "success", response: bookDirectory });
});

app.put("/api/update-book/", (req, res) => {
  const bookName = req.query.bookName;
  const bookAuthor = req.query.bookAuthor;
  const bookId = req.query.bookId;

  for (let index = 0; index < bookDirectory.length; index++) {
    if (bookId == bookDirectory[index].id) {
      console.log(
        "Exsiting book  -  " +
          " name : " +
          bookDirectory[index].name +
          " author : " +
          bookDirectory[index].author
      );

      bookDirectory[index].name = bookName;
      bookDirectory[index].author = bookAuthor;

      console.log(
        "Updated book  -  " +
          " name : " +
          bookDirectory[index].name +
          " author : " +
          bookDirectory[index].author
      );
    }
    res.send({ status: "success", response: bookDirectory });
  }
});

app.delete("/api/delete-book/", (req, res) => {
  const bookId = req.query.bookId;

  for (let index = 0; index < bookDirectory.length; index++) {
    if (bookId == bookDirectory[index].id) {
      console.log(
        "Deleted book - " +
          " name : " +
          bookDirectory[index].name +
          " author : " +
          bookDirectory[index].author
      );
      bookDirectory.splice(index, 1);
      console.log("Book removed...");
    }
    res.send({ status: "success", response: bookDirectory });
  }
});

// query strings - name, author
// book ID - random number generator -

app.listen(PORT, () => {
  console.log("App is running on : " + PORT);
});
