import { format, getDay, isToday } from 'date-fns'

interface BodyProps {
  daysInMonth: Date[]
}

export default function Body({ daysInMonth }: BodyProps) {
  const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ]
  return (
    <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
      {daysInMonth.map((day, idx) => {
        return (
          <div key={idx} className={colStartClasses[getDay(day)]}>
            <p
              className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full  hover:text-white text-white  ${!isToday(day) && 'hover:bg-blue-600'} ${
                isToday(day) && 'bg-red-600 text-white'
              }`}
            >
              {format(day, 'd')}
            </p>
          </div>
        )
      })}
    </div>
  )
}
