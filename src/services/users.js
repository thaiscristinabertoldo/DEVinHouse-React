import users from './data/users.json'

export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users)
    }, 3000)
  })
}
