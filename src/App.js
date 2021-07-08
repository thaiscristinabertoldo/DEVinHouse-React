import { Divider } from '@material-ui/core'
import { BaseLayout } from './layout'
import { Forums, Users, UserDetail } from './pages'

function App() {
  return (
    <BaseLayout>
      <div style={{ marginBottom: '50px', marginTop: '50px' }}>
        <h1>Users</h1>
        <Users />
      </div>
      <Divider />
      <div style={{ marginBottom: '50px', marginTop: '50px' }}>
        <h1>UserDetail</h1>
        <UserDetail />
      </div>
      <Divider />
      <div style={{ marginBottom: '50px', marginTop: '50px' }}>
        <h1>Forums</h1>
        <Forums />
      </div>
      <Divider />
    </BaseLayout>
  )
}

export default App
