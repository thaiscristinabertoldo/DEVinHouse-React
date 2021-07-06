import { NavBar } from '../../components'
import { useStyles } from './BaseLayout.styles'

export const BaseLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <NavBar />
      <div className={classes.root}>{children}</div>
    </>
  )
}
