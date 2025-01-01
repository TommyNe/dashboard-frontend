'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getProjects } from '@/api/fetches/getProjects'
import { deleteProject } from '@/api/fetches/deleteProject'
import Trash from '@/components/icons/trash'
import Pencil from '@/components/icons/pencil'
import { Table } from 'flowbite-react'

interface Project {
  fetch: {
    id: number
    title: string
    description: string
    created_at: string
  }[]
}

export default function ProjectsTable({ fetch }: Project) {
  const queryClient = useQueryClient()
  const { data: products } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    initialData: fetch,
  })

  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteProject(id),
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
        {products.map((product: any) => (
          <tr key={product.id}>
            <td className="">{product.title}</td>
            <td className="">{product.description}</td>
            <td className="">{product.created_at}</td>
            <td className=" text-right">
              <button className="text-blue-500">Edit</button>
              <button
                className="text-red-600"
                onClick={() => handleDelete(product.id)}
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
