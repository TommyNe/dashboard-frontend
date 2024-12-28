'use server'

export async function createProject(project: any) {
  return fetch('http://localhost:8080/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error:', error)
    })
}
