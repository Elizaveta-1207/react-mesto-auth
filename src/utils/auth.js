/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prefer-promise-reject-errors */
export const BASE_URL = "https://auth.nomoreparties.co";

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

export const register = (email, password) =>
  fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);

export const authorize = (email, password) => {
  fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const getContent = (token) => {
  fetch(`${BASE_URL}/users/me`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};