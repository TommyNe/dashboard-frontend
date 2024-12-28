'use client'
import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import { createProject } from '@/api/fetches/createProject'
import { useMutation } from '@tanstack/react-query'

export function AddButton() {
  const [openModal, setOpenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleClick = () => {
    setOpenModal(true)
  }

  const { mutateAsync } = useMutation({
    mutationKey: ['projects'],
    mutationFn: (project: { title: string; description: string }) =>
      createProject(project),
    onMutate: (project) => {
      console.log('onMutate', project)
    },
    onError: (error) => {
      console.log('onError', error)
    },
    onSuccess: (data) => {
      console.log('onSuccess', data)
      window.location.reload()
    },
  })
  const handleSave = () => {
    const data = {
      title: title,
      description: description,
    }
    mutateAsync(data)
    setOpenModal(false)
  }
  return (
    <>
      <button
        className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Add
      </button>
      <Modal show={openModal}>
        <Modal.Body>
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSave()}>Speichern</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Abbrechen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
