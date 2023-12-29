import { useEffect } from 'react'
import { useSearchAndUpdateUserInfo } from '../useSearchAndUpdateUserInfo'
import { useUploadAndChargeImg } from '../useUploadAndChargeImg'

function useUpdateUserImg() {
  const updateUserImg = useUploadAndChargeImg()
  const sessionUser = JSON.parse(sessionStorage.getItem('loggedUser'))
  const { searchAndUpdateUser } = useSearchAndUpdateUserInfo()

  const handleUpdateUserImg = (file) => {
    updateUserImg.uploadImg(file)
  }

  useEffect(() => {
    if (updateUserImg.imgUrl) {
      searchAndUpdateUser({
        email: sessionUser.email,
        newInfo: { perfilPhoto: updateUserImg.imgUrl }
      })
    }
  }, [updateUserImg.imgUrl])

  return { handleUpdateUserImg, imgUrl: updateUserImg.imgUrl }
}

export { useUpdateUserImg }
