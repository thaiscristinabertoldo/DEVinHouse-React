import * as Yup from 'yup'

import { isValidCPF } from '../../helpers'

Yup.addMethod(Yup.string, 'cpf', function cpfValidator(message = 'CPF inválido') {
  return this.test('cpf', message, isValidCPF)
})

export const signSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório').min(3, 'Mínimo 3 caracteres'),
  occupation: Yup.string().required('Campo obrigatório').max(20, 'Máximo 10 caracteres'),
  cpf: Yup.string().cpf('CPF inválido'),
  address: Yup.object().shape({
    city: Yup.string(),
    estate: Yup.string().length(2, 'Deve possuir 2 caracteres'),
    country: Yup.string().required('Campo obrigatório').min(3, 'Mínimo 3 caracteres'),
  }),
  email: Yup.string().email('E-mail inválido').required('Campo Obrigatório'),
  password: Yup.string().required('Campo obrigatório').min(6, 'Mínimo 6 caracteres').max(12, 'Mínimo 12 caracteres'),
  passwordCheck: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('password'), null], 'As senhas não conferem'),
  technologies: Yup.array().of(Yup.string().required('Campo obrigatório')).min(1, 'Mínimo 1 tecnologia'),
})

export const signInitalValues = {
  name: '',
  occupation: '',
  cpf: '',
  address: {
    city: '',
    estate: '',
    country: '',
  },
  email: '',
  password: '',
  passwordCheck: '',
  technologies: [],
}
