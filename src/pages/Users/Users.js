import { useEffect, useState } from 'react'

import { Grid } from '@material-ui/core'

import { Search } from '../../components'
import { getUsers } from '../../services'
import { UserItem, UserItemSkeleton } from './fragments'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function listUsers() {
      const usersList = await getUsers()
      setUsers(usersList)
      setIsLoading(false)
    }

    listUsers()
  }, [])

  return (
    <>
      <Search />
      {isLoading && <UserItemSkeleton />}
      <Grid container spacing={8} direction="row" justify="flex-start" alignItems="flex-start">
        {users.map((user) => {
          return (
            <Grid key={user.id} item xs={6}>
              <UserItem user={user} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
