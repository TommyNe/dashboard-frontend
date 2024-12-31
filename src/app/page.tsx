import BackgroundSlider from '@/components/backgroundSlider'
import Calendar from '@/components/calendar/calendar'
import Time from '@/components/Time/Time'
import News from '@/components/news'
import Weather from '@/components/weather/weather'
import Events from '@/components/events/events'

export default async function Page() {
  return (
    <div className={'w-full'}>
      <BackgroundSlider />
      <div className={'p-5 flex flex-row justify-between w-full'}>
        <div className={'w-1/2 flex flex-col gap-3'}>
          <Time />
          <Calendar />
        </div>
        <div className={'w-1/2 flex flex-col gap-3'}>
          <div className={'w-full flex flex-row gap-3 h-auto'}>
            <Weather />
            <News />
          </div>
          <div className={'w-full flex flex-row gap-3'}>
            <Events />
          </div>
        </div>
      </div>
    </div>
  )
}
