import dayjs from 'dayjs'
import provinces from './location/provinces.json'
import cities from './location/cities.json'

/**
 * 根据省份code和城市code返回对应汉字字符串
 * @param provinceCode 省份code
 * @param cityCode 城市code
 * @returns 省份 城市
 */
export function getLocation(provinceCode: string, cityCode: string) {
  const province = provinces.find(p => `${p.code}0000` === `${provinceCode}`)?.name || ''
  const city = cities.find(c => `${c.code}00` === `${cityCode}`)?.name || ''
  return `${province} • ${city}`
}

/**
 * 将时间戳格式化成指定格式
 * @param timestamp 时间戳
 * @param format 格式化字符串
 */
export function formatTimeStamp(timestamp: string | number, format = 'YYYY-MM-DD') {
  return dayjs(timestamp).format(format)
}

/**
 * 将毫秒值转换成分:秒，最大60分钟
 * @param duration 时长字符串(毫秒值)
 */
export function formatDuration(duration: number) {
  const minute = Math.floor(duration / 1000 / 60).toString().padStart(2, '0')
  const second = (duration / 1000 % 60).toFixed(0).toString().padStart(2, '0')
  return `${minute}:${second}`
}
