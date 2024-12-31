import { getWeather } from '@/api/fetches/getWeather'
import Details from '@/components/weather/details'

export default async function Weather() {
  const fetch = await getWeather()
  return (
    <div
      className={
        'text-white text-shadow shadow-black rounded bg-black opacity-50 p-3 w-1/2  h-3/4'
      }
    >
      <p className={'text-2xl text-blue-500 pb-5'}>Wetter</p>
      <div className={'flex justify-between'}>
        <div className={'flex flex-col'}>
          <p className={'text-lg'}>Wetterlage:</p>
          <p className={'text-lg'}>Temperatur:</p>
          <p className={'text-lg'}>Wind:</p>
          <p className={'text-lg'}>Luftfeuchtigkeit:</p>
        </div>
        <Details fetch={fetch} />
      </div>
    </div>
  )
}
