'use server'

export async function deleteProject(projectId: number) {
  return fetch(`http://localhost:8080/api/projects/${projectId}`, {
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
