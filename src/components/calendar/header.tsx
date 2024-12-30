'use client'
import { format } from 'date-fns'
import ChevronRight from '@/components/icons/chevron-right'
import ChevronLeft from '@/components/icons/chevron-left'
import Days from '@/components/calendar/days'

interface HeaderProps {
  getPrevMonth: (event: React.MouseEvent<SVGSVGElement>) => void
  getNextMonth: (event: React.MouseEvent<SVGSVGElement>) => void
  firstDayOfMonth: Date
}

export default function Header({
  getPrevMonth,
  getNextMonth,
  firstDayOfMonth,
}: HeaderProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl text-white text-shadow shadow-black">
          {' '}
          {format(firstDayOfMonth, 'MMMM yyyy')}{' '}
        </p>
        <div className="flex items-center justify-evenly gap-6 sm:gap-12 text-white text-shadow shadow-black">
          <ChevronLeft
            className="w-6 h-6 cursor-pointer drop-shadow"
            onClick={getPrevMonth}
          />
          <ChevronRight
            className="w-6 h-6 cursor-pointer drop-shadow"
            onClick={getNextMonth}
          />
        </div>
      </div>
      <Days />
    </div>
  )
}
