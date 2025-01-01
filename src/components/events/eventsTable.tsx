'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getEvents } from '@/api/fetches/getEvents'
import { deleteEvent } from '@/api/fetches/deleteEvents'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import Trash from '@/components/icons/trash'
import Pencil from '@/components/icons/pencil'

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
            <td className=" text-right flex gap-3">
              <button className="text-blue-500">
                <Pencil />
              </button>
              <button
                className="text-red-600"
                onClick={() => handleDelete(event.id)}
              >
                <Trash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
