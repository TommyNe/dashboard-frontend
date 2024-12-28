export const getNews = async () => {
  return fetch('http://localhost:8080/api/news', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
