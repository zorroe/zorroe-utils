/**
 * 将毫秒值转换成分:秒，最大60分钟
 * @param duration 时长字符串(毫秒值)
 */
export function formatDuration(duration: number) {
  const minute = Math.floor(duration / 1000 / 60).toString().padStart(2, '0')
  const second = (duration / 1000 % 60).toFixed(0).toString().padStart(2, '0')
  return `${minute}:${second}`
}
