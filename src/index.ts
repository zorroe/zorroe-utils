/**
 * 将毫秒值转换成  "时:分:秒"
 * @param duration 时长字符串(毫秒值)
 */
export function formatDuration(duration: number) {
  let minute = Math.floor(duration / 1000 / 60).toString().padStart(2, '0')
  const second = (duration / 1000 % 60).toFixed(0).toString().padStart(2, '0')
  let hour = ''
  if (Number(minute) >= 60) {
    hour = Math.floor(Number(minute) / 60).toString().padStart(2, '0')
    minute = Math.floor(Number(minute) % 60).toString().padStart(2, '0')
  }
  if (hour !== '') {
    return `${hour}:${minute}:${second}`
  }
  return `${minute}:${second}`
}
