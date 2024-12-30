'use client'
import { useEffect, useState } from 'react'

export default function Time() {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      const dateObj = new Date()
      const hours = dateObj.getHours()
      const minutes = dateObj.getMinutes()
      const seconds = dateObj.getSeconds()
      const currentTime = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`
      setTime(currentTime)
    }, 1000)
  }, [])
  return (
    <div>
      <div className={'container p-5 flex justify-between'}>
        <div className={'text-4xl text-white text-shadow shadow-black'}>
          {time}
        </div>
      </div>
    </div>
  )
}
