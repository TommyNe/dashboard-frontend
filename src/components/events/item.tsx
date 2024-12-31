'use client'

import { useQuery } from '@tanstack/react-query'
import { getEvents } from '@/api/fetches/getEvents'
import { format } from 'date-fns'

interface Event {
  fetch: any
}

export default function Item({ fetch }: Event) {
  const { data: events } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(),
    initialData: fetch,
  })
  console.log(events)
  return (
    <tbody>
      {events.map((event: any) => (
        <tr key={event.id}>
          <td className={'border px-4 py-2'}>{event.title}</td>
          <td className={'border px-4 py-2'}>
            {format(event.date, 'dd.MM.yyyy')}
          </td>
          <td className={'border px-4 py-2'}>{format(event.date, 'hh:mm')}</td>
          <td className={'border px-4 py-2'}>{event.description}</td>
        </tr>
      ))}
    </tbody>
  )
}
