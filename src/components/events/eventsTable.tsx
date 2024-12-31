'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getEvents } from '@/api/fetches/getEvents'
import { deleteEvent } from '@/api/fetches/deleteEvents'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

interface Project {
  fetch: {
    id: number
    title: string
    description: string
    created_at: string
  }[]
}

export type Event = {
  id: number
  title: string
  description: string
  image: string
  date: string
  created_at: string
}

export default function EventsTable({ fetch }: Project) {
  const queryClient = useQueryClient()
  const { data: events } = useQuery({
    queryKey: ['projects'],
    queryFn: getEvents,
    initialData: fetch,
  })

  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteEvent(id),
    onSuccess: () => {
      window.location.reload()
    },
  })

  const handleDelete = async (id: number) => {
    mutate(id)
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className={'border-b'}>
          <th className="text-left">Name</th>
          <th className="text-left">Description</th>
          <th className={'text-left'}>Date</th>
          <th className="text-left"></th>
        </tr>
      </thead>
      <tbody>
        {events.map((event: Event) => (
          <tr key={event.id}>
            <td className="">{event.title}</td>
            <td className="">{event.description}</td>
            <td className="">
              {format(event.date, 'dd.MM.yyyy hh:mm', { locale: de })}
            </td>
            <td className=" text-right">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
