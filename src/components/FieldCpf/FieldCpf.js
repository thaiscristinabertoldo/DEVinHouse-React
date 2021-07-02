import { OutlinedInput } from '@material-ui/core'
import MaskedInput from 'react-text-mask'

const cpfMask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      id="cpf"
      type="text"
      ref={(ref) => {
        inputRef(ref ? ref.inputRef : null)
      }}
      mask={cpfMask}
      {...other}
    />
  )
}

export const FieldCpf = (props) => <OutlinedInput {...props} inputComponent={TextMaskCustom} />
