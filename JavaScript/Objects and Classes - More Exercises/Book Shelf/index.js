function bookShelf(array) {
  let shelves = {};
  for (let index = 0; index < array.length; index++) {
    if (array[index].includes("->")) {
      const [id, genre] = array[index].split(" -> ");
      if (!shelves.hasOwnProperty(id)) {
        shelves[id] = { shelfId: id, shelfGenre: genre, books: [] };
      }
    } else {
      const dotIndex = array[index].indexOf(":");
      const bookTitle = array[index].slice(0, dotIndex);
      const [bookAuthor, bookGenre] = array[index]
        .slice(dotIndex + 2)
        .split(", ");
      addBook(bookTitle, bookAuthor, bookGenre);
    }
  }
  printResult();



  function addBook(bookTitle, bookAuthor, bookGenre) {
    const bookObject = {
      title: bookTitle,
      author: bookAuthor,
      genre: bookGenre,
    };
    for (const shelf in shelves) {
      if (shelves[shelf].shelfGenre === bookGenre) {
        shelves[shelf].books.push(bookObject);
        break;
      }
    }
  }

  function printResult() {
    const keys = Object.keys(shelves).sort(
      (shelfA, shelfB) =>
        shelves[shelfB].books.length - shelves[shelfA].books.length
    );
    for (let index = 0; index < keys.length; index++) {
       console.log(`${keys[index]} ${shelves[keys[index]].shelfGenre}: ${shelves[keys[index]].books.length}`);
       shelves[keys[index]].books.sort((bookA, bookB)=>bookA.title.localeCompare(bookB.title))
       .forEach(book => {
        console.log(`--> ${book.title}: ${book.author}`);
       });        
    }
  }
}
bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);
