import forums from './data/forums.json'

export function getForums() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(forums)
    }, 3000)
  })
}
