import { useEffect } from 'react'
import { useAddUserToDatabase } from '../useAddUserToDatabase'
import { useSelector } from 'react-redux'

function useUserRegistrationInDatabase(signUpData) {
  const userRegistrationInfoDb = useAddUserToDatabase()
  const newUserInfoInState = useSelector((state) => state.newUser)

  useEffect(() => {
    if (signUpData.signUp?.signedUpUser) {
      userRegistrationInfoDb.addUserInformation({
        ...newUserInfoInState,
        uid: signUpData.signUp?.signedUpUser?.uid || ''
      })
    }
  }, [signUpData.signUp.signedUpUser])
  return { userRegistrationInfoDb }
}

export { useUserRegistrationInDatabase }
