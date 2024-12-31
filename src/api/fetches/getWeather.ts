export const getWeather = async () => {
  return fetch('http://localhost:8080/api/weather', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
