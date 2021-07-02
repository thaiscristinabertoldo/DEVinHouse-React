const isRepeatedString = (str) => str.split('').every((char) => char === str[0])

function onlyNumber(str) {
  return str ? str.toString().replace(/\D/g, '') : str
}

export const isValidCPF = (str) => {
  const cpf = onlyNumber(str)

  if (!cpf && str?.length > 0) {
    return false
  }

  if (!cpf) {
    return true
  }

  if (cpf.length !== 11 || isRepeatedString(cpf)) {
    return false
  }

  let sum = 0
  let rest
  let i

  for (i = 1; i <= 9; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) {
    rest = 0
  }

  if (rest !== parseInt(cpf.substring(9, 10), 10)) {
    return false
  }

  sum = 0

  for (i = 1; i <= 10; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) {
    rest = 0
  }

  if (rest !== parseInt(cpf.substring(10, 11), 10)) {
    return false
  }

  return true
}
