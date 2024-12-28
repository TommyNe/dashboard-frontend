import { getNews } from '@/api/fetches/getNews'

export default async function Page() {
  const news = await getNews()
  console.log(news)
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className={'py-3 flex'}>
        <h1 className="text-2xl dark:text-white">News</h1>
      </div>
      <div className={'bg-gray-100 dark:bg-gray-700 w-full rounded p-3'}>
        <div className={'pt-3'}>
          <table className="table-auto w-full">
            <thead>
              <tr className={'border-b'}>
                <th className="text-left">News</th>
                <th className="text-left">Description</th>
                <th className="text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">Title</td>
                <td className="">Description</td>
                <td className="">Date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
