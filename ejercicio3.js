const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function favoriteMusic(users) {
  const listOfMusic = [];
  const countOfMusic = [];

  for (const user of users) {
    for (const sound in user.favoritesSounds) {
      if (user.favoritesSounds.hasOwnProperty(sound)) {
        if (listOfMusic.hasOwnProperty(sound)) {
          listOfMusic[sound].push(user.favoritesSounds[sound]);
          countOfMusic[sound] = (countOfMusic[sound] || 0) + 1;
        } else {
          listOfMusic[sound] = [user.favoritesSounds[sound]];
          countOfMusic[sound] = 1;
        }
      }
    }
  }
  return countOfMusic;
}


console.log("Recuento de música por género:", favoriteMusic(users) );
