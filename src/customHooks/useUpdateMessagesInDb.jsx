import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchAndUpdateUserInfo } from './useSearchAndUpdateUserInfo'
import { getUserSs } from '../helpers/getUserSs'

function useUpdateMessagesInDb() {
  const messages = useSelector((state) => state.messages)
  const sessionUser = getUserSs()
  const { searchAndUpdateUser } = useSearchAndUpdateUserInfo()

  useEffect(() => {
    if (messages) {
      searchAndUpdateUser({
        email: sessionUser.email,
        newInfo: { messages }
      })
    }
  }, [messages])
}

export { useUpdateMessagesInDb }
