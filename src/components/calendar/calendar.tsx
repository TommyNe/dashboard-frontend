'use client'
import Header from '@/components/calendar/header'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from 'date-fns'
import { useState } from 'react'
import Body from '@/components/calendar/body'

export default function Calendar() {
  const today = startOfToday()

  const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'))
  const firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date())

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth),
  })

  const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault()
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 })
    setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'))
  }

  const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault()
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 })
    setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'))
  }
  return (
    <div className={'w-2/3 bg-black opacity-40 p-5'}>
      <Header
        firstDayOfMonth={firstDayOfMonth}
        getNextMonth={getNextMonth}
        getPrevMonth={getPrevMonth}
      />
      <Body daysInMonth={daysInMonth} />
    </div>
  )
}
