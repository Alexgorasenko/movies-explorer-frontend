export const BASE_URL = "https://api.alex-gorasenko.movies.nomoreparties.co";


const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => {
      return Promise.reject(`${err.message}`);
    })
}};



export const register = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, password, email }),
  }).then(checkResponse)
  ;
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse)
};

export const patchUserInfo = ({ email, name }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name }),
  }).then(checkResponse);
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    }
  }).then(checkResponse);
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    }
  }).then(checkResponse);
}


export const postSavedMovie = (...body) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(...body),
  }).then(checkResponse);
}


export const deleteSavedMovie = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    }
  }).then(checkResponse);
}
