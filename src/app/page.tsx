import BackgroundSlider from '@/components/backgroundSlider'
import Calendar from '@/components/calendar/calendar'

export default async function Page() {
  return (
    <div>
      <BackgroundSlider />
      <div className={'container p-5'}>
        <Calendar />
      </div>
    </div>
  )
}
