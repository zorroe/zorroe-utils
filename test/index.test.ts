import { formatTimeStamp, random } from '../src/index'

describe('生成数字范围内的随机数', () => {
  it('random(1, 1) -> should return 1', () => {
    const rand = random(1, 1)
    expect(rand).toBe(1)
  })
})

describe('格式化时间戳', () => {
  it('format', () => {
    const time = formatTimeStamp(1034242343)
    expect(time).toBe('1970-01-13')
  })
})
