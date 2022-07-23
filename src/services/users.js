//llamdo api para obtener los usuarios

const API_URL = 'https://reqres.in/api/users?page=1';

export async function getUsers() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.data;
}