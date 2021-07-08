import { Card, CardContent } from '@material-ui/core'

export const CardContainer = ({ children, ...props }) => {
  return (
    <Card {...props}>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
