import { Button, IconButton, OutlinedInput, Typography } from '@material-ui/core'
import { DeleteOutline as DeleteOutlineIcon } from '@material-ui/icons'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'

import { FieldPassword } from '../FieldPassword'
import { DivError } from '../DivError'
import { FormTitle } from '../FormTitle'
import { useStyles } from './FormSign.styles'
import { CardContainer } from '../CardContainer'
import { signSchema, signInitalValues } from './FormSignSchema'
import { FieldCpf } from '../FieldCpf'

export const FormSign = () => {
  const classes = useStyles()

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <CardContainer>
      <div className={classes.title}>
        <Typography variant="h4" align="center" color="textSecondary">
          Efetuar Cadastro
        </Typography>
      </div>
      <Formik initialValues={signInitalValues} onSubmit={handleSubmit} validationSchema={signSchema}>
        {({ values, isSubmitting, isValid, errors, resetForm, touched }) => (
          <Form>
            <FormTitle title="Dados de identificação" />

            <div className={classes.formItem}>
              <Field
                fullWidth
                autoFocus
                required
                name="name"
                placeholder="Nome"
                error={touched?.name && errors?.name}
                as={OutlinedInput}
              />
              <ErrorMessage name="name" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Field
                fullWidth
                name="occupation"
                placeholder="Profissão"
                error={touched?.occupation && errors?.occupation}
                as={OutlinedInput}
              />
              <ErrorMessage name="occupation" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Field
                type="text"
                fullWidth
                name="cpf"
                placeholder="CPF"
                error={touched?.cpf && errors?.cpf}
                as={FieldCpf}
              />
              <ErrorMessage name="cpf" component={DivError} />
            </div>

            <FormTitle title="Dados de endereço" />
            <div className={classes.formItem}>
              <Field
                fullWidth
                name="address.city"
                placeholder="Cidade"
                error={touched?.address?.city && errors?.address?.city}
                as={OutlinedInput}
              />
              <ErrorMessage name="address.city" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Field
                fullWidth
                name="address.estate"
                placeholder="Estado"
                error={touched?.address?.estate && errors?.address?.estate}
                as={OutlinedInput}
              />
              <ErrorMessage name="address.estate" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Field
                fullWidth
                name="address.country"
                placeholder="Pais"
                error={touched?.address?.country && errors?.address?.country}
                as={OutlinedInput}
              />
              <ErrorMessage name="address.country" component={DivError} />
            </div>

            <FormTitle title="Dados de Login" />

            <div className={classes.formItem}>
              <Field
                fullWidth
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
              <Field
                fullWidth
                name="passwordCheck"
                placeholder="Confirmar senha"
                error={touched?.passwordCheck && errors?.passwordCheck}
                as={FieldPassword}
              />
              <ErrorMessage name="passwordCheck" component={DivError} />
            </div>

            <FormTitle title="Tecnologias" />
            {typeof errors?.technologies === 'string' && <DivError>{errors?.technologies}</DivError>}

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
                      values.technologies.map((_, index) => (
                        <div key={index} className={classes.formItem}>
                          <div className={classes.divTec}>
                            <Field
                              name={`technologies[${index}]`}
                              placeholder="Tecnologia"
                              error={touched?.technologies?.[index] && errors?.technologies?.[index]}
                              className={classes.input}
                              as={OutlinedInput}
                            />

                            <IconButton aria-label="remover" onClick={() => arrayHelpers.remove(index)}>
                              <DeleteOutlineIcon className={classes.icon} />
                            </IconButton>
                          </div>
                          <ErrorMessage name={`technologies[${index}]`} component={DivError} />
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
                Cadastrar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </CardContainer>
  )
}
