import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useState } from 'react'

function useSearchUserByEmail () {
  const [foundUser, setFoundUser] = useState(false)

  const searchUserByEmail = async (email) => {
    const usersCollection = collection(db, 'users')

    try {
      const querySnapshot = await getDocs(usersCollection)
      const user = [...querySnapshot.docs].find((doc) => {
        return (
          email === doc._document.data.value.mapValue.fields.email.stringValue
        )
      })._document.data.value.mapValue.fields

      if (user) setFoundUser(user)

      if (querySnapshot.empty) console.log('La colección está vacía.')
    } catch (error) {
      console.error('Error al obtener documentos de la colección:', error)
    }
  }

  return { searchUserByEmail, foundUser }
}

export { useSearchUserByEmail }
