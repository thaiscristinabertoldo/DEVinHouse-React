import { Button, Divider, IconButton, OutlinedInput, Typography } from '@material-ui/core'
import { DeleteOutline as DeleteOutlineIcon } from '@material-ui/icons'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'

import { FieldPassword } from '../FieldPassword'
import { DivError } from '../DivError'
import { useStyles } from './FormSign.styles'

export const FormSign = () => {
  const classes = useStyles()

  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'E-mail inválido'
    }
    if (!values.password) {
      errors.password = 'Campo obrigatório'
    }
    return errors
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <>
      <div className={classes.title}>
        <Typography variant="h4" align="center">
          Efetuar Cadastro
        </Typography>
      </div>
      <Formik initialValues={{ email: '', password: '', technologies: [] }} onSubmit={handleSubmit} validate={validate}>
        {({ values, isSubmitting, isValid, errors, resetForm, touched }) => (
          <Form>
            <div className={classes.formItem}>
              <Field
                fullWidth
                autoFocus
                name="email"
                placeholder="E-mail"
                error={touched?.email && errors?.email}
                as={OutlinedInput}
              />
              <ErrorMessage name="email" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Field
                fullWidth
                name="password"
                placeholder="Senha"
                error={touched?.password && errors?.password}
                as={FieldPassword}
              />
              <ErrorMessage name="password" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Typography variant="body1">Tecnologias</Typography>
              <Divider />
            </div>

            <div className={classes.formItem}>
              <FieldArray
                name="technologies"
                render={(arrayHelpers) => (
                  <>
                    <div className={classes.formItem}>
                      <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => arrayHelpers.push('')}
                        disabled={isSubmitting}
                      >
                        Adicionar
                      </Button>
                    </div>

                    {values.technologies &&
                      values.technologies.map((technologie, index) => (
                        <div key={index} className={classes.formItem}>
                          <div className={classes.divTec}>
                            <Field
                              name={`technologies[${index}]`}
                              placeholder="Tecnologia"
                              className={classes.input}
                              as={OutlinedInput}
                            />

                            <IconButton aria-label="remover" onClick={() => arrayHelpers.remove(index)}>
                              <DeleteOutlineIcon className={classes.icon} />
                            </IconButton>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              />
            </div>

            <div className={classes.formButton}>
              <Button color="default" variant="contained" onClick={resetForm} disabled={isSubmitting}>
                Limpar
              </Button>

              <Button color="primary" variant="contained" type="submit" disabled={isSubmitting || !isValid}>
                Acessar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
