import BackgroundSlider from '@/components/backgroundSlider'

export default async function Page() {
  return (
    <div>
      <BackgroundSlider />
      <div className={'container p-5'}>
        {/* Ihr Seiteninhalt */}
        <h1 className={'text-2xl'}>Willkommen auf meiner Seite</h1>
      </div>
    </div>
  )
}
