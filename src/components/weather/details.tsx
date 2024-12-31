'use client'
import { useQuery } from '@tanstack/react-query'
import { getWeather } from '@/api/fetches/getWeather'
import Sunny from '@/components/icons/weather/Sunny'

interface Props {
  fetch: Weather
}

type Weather = {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    },
  ]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  rain: {
    '1h': number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export default function Details({ fetch }: Props) {
  const { data: weather } = useQuery<Weather>({
    queryKey: ['weather'],
    queryFn: () => getWeather(),
    initialData: fetch,
  })
  console.log(weather)
  const windSpeed = weather.wind.speed * 3.6
  return (
    <div className={'flex flex-col'}>
      <p className={'text-lg'}>{weather.weather[0].description}</p>
      <p className={'text-lg'}>{weather.main.temp}°</p>
      <p className={'text-lg'}>{windSpeed.toFixed(2)} km/h</p>
      <p className={'text-lg'}>{weather.main.humidity}%</p>
    </div>
  )
}
