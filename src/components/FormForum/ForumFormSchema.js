import * as Yup from 'yup'

export const forumSchema = Yup.object().shape({
  question: Yup.object().shape({
    title: Yup.string().required('Campo obrigatório').max(30, 'Máximo 30 caracteres'),
    details: Yup.string().required('Campo obrigatório'),
    tags: Yup.array().of(Yup.string().required('Campo obrigatório')),
  }),
})

export const forumInitalValues = {
  id: 0,
  user: {
    id: 1,
    name: 'Carol J. Wilson',
  },
  date: '',
  question: {
    title: '',
    details: '',
    tags: [],
  },
  totalLikes: 0,
  comments: [],
}
