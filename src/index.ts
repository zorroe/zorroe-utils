import dayjs from 'dayjs'

export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function formatTimeStamp(timestamp: string | number, format = 'YYYY-MM-DD') {
  return dayjs(timestamp).format(format)
}

export function formatDuration(duration: number) {
  const minute = Math.floor(duration / 1000 / 60).toString().padStart(2, '0')
  const second = (duration / 1000 % 60).toFixed(0).toString().padStart(2, '0')
  return `${minute}:${second}`
}
