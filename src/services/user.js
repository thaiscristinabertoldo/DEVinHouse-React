import users from './data/users.json'

export function getUser(id) {
  const user = users.filter((item) => item.id === id) || []

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user.length > 0 ? user[0] : [])
    }, 3000)
  })
}
