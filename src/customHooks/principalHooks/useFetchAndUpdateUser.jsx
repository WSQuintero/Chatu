import { useEffect } from 'react'
import { createUpdatedInformation } from '../../helpers/createUpdatedInformation'
import { useSearchUserByEmail } from '../useSearchUserByEmail'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserLogged } from '../../redux/slices/loggedUserSlice'

function useFetchAndUpdateUser () {
  const dispatch = useDispatch()

  const userState = {
    loggedUser: useSelector((state) => state.loggedUser),
    updateLoggedUser: (updatedLoggedUser) =>
      dispatch(updateUserLogged(updatedLoggedUser))
  }
  const searchUser = useSearchUserByEmail()

  useEffect(() => {
    if (searchUser.foundUser) {
      const newInformationUser = createUpdatedInformation(searchUser.foundUser)
      userState.updateLoggedUser(newInformationUser)
    }
  }, [searchUser.foundUser])

  return { searchUser, userState }
}

export { useFetchAndUpdateUser }
