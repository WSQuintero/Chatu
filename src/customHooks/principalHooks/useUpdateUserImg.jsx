import { useEffect } from 'react'
import { useSearchAndUpdateUserInfo } from '../useSearchAndUpdateUserInfo'
import { useUploadAndChargeImg } from '../useUploadAndChargeImg'
import { getUserSs } from '../../helpers/getUserSs'

function useUpdateUserImg() {
  const updateUserImg = useUploadAndChargeImg()
  const sessionUser = getUserSs()
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
