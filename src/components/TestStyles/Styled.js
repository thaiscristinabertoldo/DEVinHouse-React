import { styled } from '@material-ui/core/styles'

const ButtonStyled = styled('button')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(4),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[800],
  height: 48,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.grey[400],
    color: theme.palette.grey[800],
  },
}))

export const Button = () => <ButtonStyled>Button customizado</ButtonStyled>