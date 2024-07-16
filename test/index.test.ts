import { formatTimeStamp } from '../src/index'

describe('格式化时间戳', () => {
  it('format', () => {
    const time = formatTimeStamp(1034242343)
    expect(time).toBe('1970-01-13')
  })
})
