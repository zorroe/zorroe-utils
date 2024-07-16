declare namespace zorroeUtils {
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  export function random(min: number, max: number): number

  /**
   * 将时间戳格式化成指定格式
   * @param timestamp 时间戳
   * @param format 格式化字符串
   */
  export function formatTimeStamp(timestamp: string | number, format: string): string

  /**
   * 将毫秒值转换成分:秒，最大60分钟
   * @param duration 时长字符串(毫秒值)
   */
  export function formatDuration(duration: number): string
}

declare module 'zorroe-utils' {
  export = zorroeUtils
}
