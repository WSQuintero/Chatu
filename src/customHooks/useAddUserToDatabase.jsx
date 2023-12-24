import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase/firebase'

function useAddUserToDatabase () {
  const [addedUserInfoConfirmation, setAddedUserInfoConfirmation] = useState(null)
  const [errorAddingUserInfo, setErrorAddingUserInfo] = useState(null)

  const addUserInformation = async (userInfo) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), userInfo)
      setAddedUserInfoConfirmation(docRef.id)
    } catch (error) {
      setErrorAddingUserInfo(error)
    }
  }
  return { addUserInformation, errorAddingUserInfo, addedUserInfoConfirmation }
}

export { useAddUserToDatabase }
