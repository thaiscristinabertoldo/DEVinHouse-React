import { Redirect, Route } from 'react-router-dom'

import { Forums, Users, UserDetail } from './pages'

export const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/forums" />
      </Route>
      <Route path="/forums" component={Forums} />
      <Route exact path="/users" component={Users} />
      <Route path="/users/:id" component={UserDetail} />
    </>
  )
}
