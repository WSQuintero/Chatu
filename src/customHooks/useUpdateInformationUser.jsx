import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useState } from 'react'

function useUpdateInformationUser () {
  const [isOkayUpdate, setIsOkayUpdate] = useState(false)

  const updateUser = async ({
    nameOfCollection,
    idDocument,
    newInformation
  }) => {
    const docRef = doc(db, nameOfCollection, idDocument)
    setIsOkayUpdate(false)
    try {
      await updateDoc(docRef, newInformation)
      setIsOkayUpdate(true)
      setTimeout(() => {
        setIsOkayUpdate(false)
      }, 2000)
    } catch (error) {
      console.error('Error al actualizar el documento:', error)
    }
  }

  return { updateUser, isOkayUpdate }
}

export { useUpdateInformationUser }
