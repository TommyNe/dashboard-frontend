export default function projects() {
  return (
    <div
      className={
        'text-white text-shadow shadow-black rounded bg-black opacity-50 p-3 w-full h-full'
      }
    >
      <p className={'text-2xl text-blue-500 pb-5'}>ToDos</p>
      <div className={'flex flex-row w-full'}>
        <table className={'table-auto w-full'}>
          <thead>
            <tr>
              <th className={'px-4 py-2'}></th>
              <th className={'px-4 py-2'}>Projekt</th>
              <th className={'px-4 py-2'}>Erledigen bis</th>
              <th className={'px-4 py-2'}>Beschreibung</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}
