import { Button } from '@material-ui/core'
import { OutlinedInput } from '@material-ui/core'
import { FormikProvider, useFormik, useFormikContext } from 'formik'
import { DivError } from '../DivError'
import { useStyles } from './FormLogin.styles'

export const FormLoginHook = () => {
  const classes = useStyles()

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Campo obrigatório'
    }
    if (!values.lastName) {
      errors.lastName = 'Campo obrigatório'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      city: '',
    },
    onSubmit: handleSubmit,
    validate: validate,
  })

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Names />

        <div className={classes.formItem}>
          <OutlinedInput
            fullWidth
            name="city"
            type="text"
            placeholder="Cidade"
            onChange={formik.handleChange}
            value={formik.values?.city}
          />
          {formik.errors?.city && <DivError>{formik.errors?.city}</DivError>}
        </div>

        <Footer />
      </form>
    </FormikProvider>
  )
}

const Names = () => {
  const { handleChange, errors, values } = useFormikContext()
  const classes = useStyles()

  return (
    <>
      <div className={classes.formItem}>
        <OutlinedInput
          fullWidth
          name="firstName"
          type="text"
          placeholder="Nome"
          error={errors?.firstName}
          onChange={handleChange}
          value={values?.firstName}
        />
        {errors?.firstName && <DivError>{errors?.firstName}</DivError>}
      </div>

      <div className={classes.formItem}>
        <OutlinedInput
          fullWidth
          name="lastName"
          type="text"
          placeholder="Sobrenome"
          error={errors?.lastName}
          onChange={handleChange}
          value={values?.lastName}
        />
        {errors?.lastName && <DivError>{errors?.lastName}</DivError>}
      </div>
    </>
  )
}

const Footer = () => {
  const { submitForm, isValid, isSubmitting, resetForm } = useFormikContext()
  const classes = useStyles()

  return (
    <div className={classes.formButton}>
      <Button color="default" variant="contained" onClick={resetForm} disabled={isSubmitting}>
        Limpar
      </Button>

      <Button color="primary" variant="contained" onClick={submitForm} disabled={isSubmitting || !isValid}>
        Acessar
      </Button>
    </div>
  )
}
