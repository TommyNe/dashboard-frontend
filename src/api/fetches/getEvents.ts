export const getEvents = async () => {
  return fetch('http://localhost:8080/api/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
