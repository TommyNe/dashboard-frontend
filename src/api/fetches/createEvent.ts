'use server'
export const createEvent = async (data: any) => {
  return fetch('http://localhost:8080/api/events', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error:', error)
    })
}
