import { Redirect, Route, Switch } from 'react-router-dom'
import { FormLogin, FormSign, FormLoginHook } from './components'

import { Forums, Users, UserDetail } from './pages'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/forums" />
      </Route>
      <Route path="/forums" component={Forums} />
      <Route exact path="/users" component={Users} />
      <Route path="/users/:id" component={UserDetail} />
      <Route path="/login" component={FormLogin} />
      <Route path="/loginhook" component={FormLoginHook} />
      <Route path="/sign" component={FormSign} />
    </Switch>
  )
}
