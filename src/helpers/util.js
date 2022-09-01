export function friendlyDate(datStr) {
  const dateObj = typeof datStr === 'object' ? datStr : new Date(datStr)
  const time = dateObj.getTime()
  const now = Date.now()
  const space = now - time
  let str = ''

  switch (true) {
    case space < 1000 * 60:
      str = '刚刚'
      break
    case space < 1000 * 60 * 60:
      str = Math.floor((space) / (1000 * 60)) + '分钟前'
      break
    case space < 1000 * 60 * 60 * 24:
      str = Math.floor((space) / (1000 * 60 * 60)) + '小时前'
      break
    default:
      str = Math.floor((space) / (1000 * 60 * 60 * 24)) + '天前'
      break
  }
  return str
}
