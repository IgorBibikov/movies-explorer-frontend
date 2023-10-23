function getAllMovies() {
  return fetch('https://api.nomoreparties.co/beatfilm-movies', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  });
}

export default getAllMovies;
