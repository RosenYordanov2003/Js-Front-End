function movies(array) {
  let movies = [];
  for (const line of array) {
    let tokens = line.split(" ");
    if (line.includes("addMovie")) {
      let movie = tokens.slice(1).join(" ");
      addMovie(movie);
    } else if (line.includes("directedBy")) {
      let cmdIndex = tokens.indexOf("directedBy");
      let movie = tokens.slice(0, cmdIndex).join(" ");
      let directorName = tokens.slice(cmdIndex + 1).join(" ");
      addDirector(movie, directorName);
    } else {
      let cmdIndex = tokens.indexOf("onDate");
      let movieName = tokens.slice(0, cmdIndex).join(" ");
      let date = tokens.slice(cmdIndex + 1).join(" ");
      addDate(movieName, date);
    }
  }
  for (const movie of movies) {
    if (
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("director") &&
      movie.hasOwnProperty("date")
    ) {
      console.log(JSON.stringify(movie));
    }
  }
  function addMovie(movieName) {
    movies.push({ name: movieName });
  }

  function addDirector(movieName, directorName) {
    let movieToFind = movies.find((movie) => movie.name === movieName);
    if (movieToFind) {
      movieToFind.director = directorName;
    }
  }

  function addDate(movieName, date) {
    let movieToFind = movies.find((movie) => movie.name === movieName);
    if (movieToFind) {
      movieToFind.date = date;
    }
  }
}
movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
