import { Button, IconButton, OutlinedInput, Typography } from '@material-ui/core'
import { DeleteOutline as DeleteOutlineIcon } from '@material-ui/icons'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'

import { DivError } from '../DivError'
import { FormTitle } from '../FormTitle'
import { useStyles } from './FormForum.styles'
import { forumSchema, forumInitalValues } from './ForumFormSchema'

export const FormForum = ({ onSubmit }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.title}>
        <Typography variant="h4" align="center" color="textSecondary">
          Cadastrar Fórum
        </Typography>
      </div>
      <Formik initialValues={forumInitalValues} onSubmit={onSubmit} validationSchema={forumSchema}>
        {({ values, isSubmitting, isValid, errors, resetForm, touched }) => (
          <Form>
            <div className={classes.formItem}>
              <Field
                fullWidth
                autoFocus
                required
                name="question.title"
                placeholder="Título"
                error={Boolean(touched?.question?.title && errors?.question?.title)}
                as={OutlinedInput}
              />
              <ErrorMessage name="question.title" component={DivError} />
            </div>

            <div className={classes.formItem}>
              <Field
                fullWidth
                name="question.details"
                placeholder="Detalhes"
                error={Boolean(touched?.question?.details && errors?.question?.details)}
                as={OutlinedInput}
              />
              <ErrorMessage name="question.details" component={DivError} />
            </div>

            <FormTitle title="Tags" />

            <div className={classes.formItem}>
              <FieldArray
                name="question.tags"
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

                    {values?.question?.tags &&
                      values?.question?.tags?.map((_, index) => (
                        <div key={index} className={classes.formItem}>
                          <div className={classes.divArray}>
                            <Field
                              name={`question.tags[${index}]`}
                              placeholder="Tecnologia"
                              error={Boolean(touched?.question?.tags?.[index] && errors?.question?.tags?.[index])}
                              className={classes.input}
                              as={OutlinedInput}
                            />

                            <IconButton aria-label="remover" onClick={() => arrayHelpers.remove(index)}>
                              <DeleteOutlineIcon className={classes.icon} />
                            </IconButton>
                          </div>
                          <ErrorMessage name={`question.tags[${index}]`} component={DivError} />
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
