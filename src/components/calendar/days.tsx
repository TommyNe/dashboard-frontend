function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

export default function Days() {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

  return (
    <div className={'text-white'}>
      <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
        {days.map((day, idx) => {
          return (
            <div key={idx} className="font-semibold">
              {capitalizeFirstLetter(day)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
