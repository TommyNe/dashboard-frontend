export const getProjects = async () => {
  return fetch('http://localhost:8080/api/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
