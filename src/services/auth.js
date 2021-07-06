export function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        user: {
          id: '7402ee55-5333-a3f7-d3ce-1d9373ab603f',
          name: 'Carol J. Wilson',
        },
      })
    }, 2000)
  })
}
