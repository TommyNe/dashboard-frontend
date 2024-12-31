import { getNews } from '@/api/fetches/getNews'
import NewsItems from '@/components/news/newsItems'

export default async function News() {
  const news = await getNews()
  console.log(news)
  return (
    <div
      className={
        'text-white text-shadow shadow-black bg-black opacity-50 p-3 w-1/2 h-full rounded'
      }
    >
      <p className={'text-2xl text-blue-500 pb-5'}>Tagesschau Schlagzeilen</p>
      <NewsItems fetch={news} />
    </div>
  )
}
