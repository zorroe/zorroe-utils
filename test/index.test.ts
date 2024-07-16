import { formatDuration } from '../src/index'

describe('毫秒转换为分秒值', () => {
  it('format', () => {
    const time = formatDuration(100000)
    expect(time).toBe('01:40')
  })
})
