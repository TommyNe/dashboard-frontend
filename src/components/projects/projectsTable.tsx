'use client'
import { useQuery } from '@tanstack/react-query'
import { getProjects } from '@/api/fetches/getProjects'

interface Project {
  fetch: {
    id: number
    title: string
    description: string
    created_at: string
  }[]
}

export default function ProjectsTable({ fetch }: Project) {
  const { data: products } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    initialData: fetch,
  })
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
