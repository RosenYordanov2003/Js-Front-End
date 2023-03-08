function song(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let n = array[0];
  let typeListToSearch = array[array.length - 1];
  let songs = [];

  for (let index = 1; index <= n; index++) {
    let tokens = array[index].split("_");
    let currentSong = new Song(tokens[0], tokens[1], tokens[2]);
    songs.push(currentSong);
  }
    typeListToSearch === "all"
      ? songs.forEach((s) => console.log(s.name))
      : songs
          .filter((s) => s.typeList === typeListToSearch)
          .forEach((s) => console.log(s.name));
}
song([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);

song([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
