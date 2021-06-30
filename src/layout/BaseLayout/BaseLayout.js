import { NavBar } from '../../components'
import { useStyles } from './BaseLayout.styles'

export const BaseLayout = ({ children, onToggleTheme }) => {
  const classes = useStyles()

  return (
    <>
      <NavBar onToggleTheme={onToggleTheme} />
      <div className={classes.root}>{children}</div>
    </>
  )
}
