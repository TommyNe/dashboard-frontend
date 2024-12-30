'use client'
import { useQuery } from '@tanstack/react-query'
import { getNews } from '@/api/fetches/getNews'

interface Props {
  fetch: {
    breakingNews: boolean
    comments: string
    date: string
    details: string
    detailsweb: string
    externalId: string
    firstSentence: string
    geotags: []
  }[]
}

export default function NewsItems({ fetch }: Props) {
  console.log(fetch)
  const { data: news } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
    initialData: fetch,
  })
  return (
    <div className={'text-white text-shadow shadow-black flex flex-col gap-3'}>
      {news.news.slice(0, 2).map((item: any) => (
        <div key={item.externalId}>
          <p className={'text-sm'}>{item.date}</p>
          <p className={'text-xl'}>{item.firstSentence}</p>
        </div>
      ))}
    </div>
  )
}
