import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useState } from 'react'

function useSearchUserByEmail() {
  const [foundUser, setFoundUser] = useState(null)
  const [errorSearchUser, setErrorSearchUser] = useState(null)

  const searchUserByEmail = async (email) => {
    const usersCollection = collection(db, 'users')
    setFoundUser(null)
    try {
      setFoundUser(null)
      const querySnapshot = await getDocs(usersCollection)
      const user = [...querySnapshot.docs].find((doc) => {
        return (
          email === doc._document.data.value.mapValue.fields.email.stringValue
        )
      })._document.data.value.mapValue.fields

      if (user) setFoundUser(user)

      if (querySnapshot.empty) console.log('La colección está vacía.')
    } catch (error) {
      setErrorSearchUser(error)
      console.error('Error al obtener documentos de la colección:', error)
    }
  }

  return { searchUserByEmail, foundUser, errorSearchUser }
}

export { useSearchUserByEmail }
