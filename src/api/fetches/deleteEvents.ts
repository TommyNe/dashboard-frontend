'use server'

export async function deleteEvent(eventId: number) {
  return fetch(`http://localhost:8080/api/events/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error:', error)
    })
}
