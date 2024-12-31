import { AddButton } from '@/components/events/addButton'
import EventsTable from '@/components/events/eventsTable'
import { getEvents } from '@/api/fetches/getEvents'

export default async function Page() {
  const fetch = await getEvents()
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className={'py-3 flex'}>
        <h1 className="text-2xl dark:text-white">Events</h1>
        <AddButton />
      </div>
      <div className={'bg-gray-100 dark:bg-gray-700 w-full rounded p-3'}>
        <div className={'pt-3'}>
          <EventsTable fetch={fetch} />
        </div>
      </div>
    </div>
  )
}
