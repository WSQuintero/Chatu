import { useDispatch } from 'react-redux'
import { resetLoggedUser } from '../redux/slices/loggedUserSlice'
import { newUserInformation } from '../helpers/newUserInformation'
import { useEffect } from 'react'
import { setUserSstorage } from '../helpers/setUserSstorage'

function useResetLoggedUser() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetLoggedUser())
    setUserSstorage({ ...newUserInformation })
  }, [])

  return true
}

export { useResetLoggedUser }
