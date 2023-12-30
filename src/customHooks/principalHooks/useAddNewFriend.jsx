import { useUpdateNewFriendInDb } from '../useUpdateNewFriendInDb'
import { useUpdateNewFriendState } from '../useUpdateNewFriendState'

function UseAddNewFriend() {
  const { findUserId, isOkayUpdate, friendExist } = useUpdateNewFriendInDb()
  useUpdateNewFriendState(isOkayUpdate)

  return { findUserId, isOkayUpdate, friendExist }
}

export { UseAddNewFriend }
