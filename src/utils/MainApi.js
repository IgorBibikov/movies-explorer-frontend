class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }
  _checkRequestStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  getProfileData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkRequestStatus(res));
  }
  editProfileData(user) {
    return fetch(`${this._baseUrl}/users/me `, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    }).then((res) => this._checkRequestStatus(res));
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkRequestStatus(res));
  }
  createNewMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }),
      credentials: 'include',
    }).then((res) => this._checkRequestStatus(res));
  }

  removeMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => this._checkRequestStatus(res));
  }
}

// export const api = new Api('http://localhost:3000');
export const api = new Api('https://api.igormovies.nomoredomainsicu.ru');
