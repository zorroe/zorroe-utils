import { formatDuration } from '../src/index'

describe('2000毫秒转换为时分秒值', () => {
  it('format', () => {
    const time = formatDuration(2000)
    expect(time).toBe('00:02')
  })
})

describe('100000毫秒转换为时分秒值', () => {
  it('format', () => {
    const time = formatDuration(100000)
    expect(time).toBe('01:40')
  })
})

describe('3601000毫秒转换为时分秒值', () => {
  it('format', () => {
    const time = formatDuration(3601000)
    expect(time).toBe('01:00:01')
  })
})
