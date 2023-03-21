const strLength = 6

const chars = "qwertyuiopasdfghjklzxcvbnm1234567890"

export const randomId = () => {
  let str = ""
  for (let i = 0; i < strLength; i++) {
    str += chars.charAt(Math.round(Math.random() * chars.length))
  }
  return str
}
