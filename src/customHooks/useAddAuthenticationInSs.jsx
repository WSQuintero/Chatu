import { useEffect } from 'react'
import { setUserSstorage } from '../helpers/setUserSstorage'

function useAddAuthenticationInSs(searchActualUser) {
  useEffect(() => {
    if (searchActualUser.userState.loggedUser.email) {
      setUserSstorage({
        ...searchActualUser.userState.loggedUser,
        isUserAuthenticated: true
      })
    }
  }, [searchActualUser.userState.loggedUser])
}

export { useAddAuthenticationInSs }
