export function avatarUrl() {
  const image = Math.floor(Math.random() * 70) + 1
  return `https://i.pravatar.cc/300?img=${image}`
}
