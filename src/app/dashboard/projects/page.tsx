import { AddButton } from '@/components/projects/addButton'
import { getProjects } from '@/api/fetches/getProjects'
import ProjectsTable from '@/components/projects/projectsTable'

export default async function Page() {
  const products = await getProjects()
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className={'py-3 flex'}>
        <h1 className="text-2xl dark:text-white">Projects</h1>
        <AddButton />
      </div>
      <div className={'bg-gray-100 dark:bg-gray-700 w-full rounded p-3'}>
        <div className={'pt-3'}>
          <ProjectsTable fetch={products} />
        </div>
      </div>
    </div>
  )
}
