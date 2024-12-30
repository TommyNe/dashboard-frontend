import BackgroundSlider from '@/components/backgroundSlider'
import Calendar from '@/components/calendar/calendar'
import Time from '@/components/Time/Time'
import News from '@/components/news'

export default async function Page() {
  return (
    <div className={'w-full'}>
      <BackgroundSlider />
      <div className={'container p-5 flex justify-between w-full'}>
        <Calendar />
        <div className={'w-1/4'}>
          <Time />
          <News />
        </div>
      </div>
    </div>
  )
}
