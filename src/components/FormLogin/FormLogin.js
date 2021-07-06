import { Link, useHistory } from 'react-router-dom'
import { Button, OutlinedInput, Typography } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import { CardContainer } from '../CardContainer'
import { DivError } from '../DivError'
import { FieldPassword } from '../FieldPassword/FieldPassword'
import { useStyles } from './FormLogin.styles'
import { useAuth } from '../../contexts'

export const FormLogin = () => {
  const classes = useStyles()
  const history = useHistory()

  const { login } = useAuth()

  const handleSubmit = async (values, { setSubmitting }) => {
    await login()
    setSubmitting(false)
    history.push('/')
  }

  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Campo é obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'E-mail inválido'
    }

    if (!values.password) {
      errors.password = 'Campo é obrigatório'
    }

    return errors
  }

  return (
    <CardContainer>
      <div className={classes.title}>
        <Typography variant="h4" align="center">
          Efetuar Login
        </Typography>
      </div>
      <Formik initialValues={{ email: '', password: '' }} validate={validate} onSubmit={handleSubmit}>
        {({ isValid, isSubmitting, resetForm }) => (
          <Form>
            <div className={classes.formItem}>
              <Field fullWidth name="email" placeholder="E-mail" as={OutlinedInput} />
              <ErrorMessage name="email" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Field fullWidth name="password" placeholder="Senha" as={FieldPassword} />
              <ErrorMessage name="password" component={DivError} />
            </div>

            <div className={classes.formButton}>
              <Button variant="contained" color="default" disabled={isSubmitting} onClick={resetForm}>
                Limpar
              </Button>

              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting || !isValid}>
                Enviar
              </Button>
            </div>

            <Link className={classes.link} to="/signIn">
              <Typography variant="body2" color="textPrimary">
                Não tem uma conta? Registre-se!
              </Typography>
            </Link>
          </Form>
        )}
      </Formik>
    </CardContainer>
  )
}
