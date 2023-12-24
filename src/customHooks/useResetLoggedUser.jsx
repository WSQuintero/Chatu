import { useDispatch } from 'react-redux'
import { resetLoggedUser } from '../redux/slices/loggedUserSlice'
import { newUserInformation } from '../helpers/newUserInformation'
import { useEffect } from 'react'

function useResetLoggedUser () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetLoggedUser())
    sessionStorage.setItem('loggedUser',
      JSON.stringify({ ...newUserInformation }))
  }, [])

  return true
}

export { useResetLoggedUser }
