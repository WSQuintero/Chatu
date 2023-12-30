import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessages } from '../redux/slices/messagesSlice'
import { getUserSs } from '../helpers/getUserSs'

function useUpdateStateMessages(test) {
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.messages)
  const sessionUser = getUserSs()

  useEffect(() => {
    if (test) {
      if (messages) {
        dispatch(updateMessages([...messages, test]))
      } else {
        dispatch(updateMessages([...sessionUser.messages, test]))
      }
    }
  }, [test])
  return <div>useUpdateStateMessages</div>
}

export { useUpdateStateMessages }
