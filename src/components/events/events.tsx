import { getEvents } from '@/api/fetches/getEvents'
import Item from '@/components/events/item'

export default async function Events() {
  const fetch = await getEvents()

  return (
    <div
      className={
        'text-white text-shadow shadow-black rounded bg-black opacity-50 p-3 w-full h-full'
      }
    >
      <p className={'text-2xl text-blue-500 pb-5'}>Termine</p>
      <div className={'flex flex-row w-full'}>
        <table className={'table-auto w-full'}>
          <thead>
            <tr>
              <th className={'px-4 py-2'}></th>
              <th className={'px-4 py-2'}>Datum</th>
              <th className={'px-4 py-2'}>Uhrzeit</th>
              <th className={'px-4 py-2'}>Beschreibung</th>
            </tr>
          </thead>
          <Item fetch={fetch} />
        </table>
      </div>
    </div>
  )
}
