import { useReceiveMessagesFromServer } from '../useReceiveMessagesFromServer'
import { useUpdateStateMessages } from '../useUpdateStateMessages'
import { useUpdateMessagesInDb } from '../useUpdateMessagesInDb'

function useServerMessages() {
  const { test } = useReceiveMessagesFromServer()
  useUpdateStateMessages(test)
  useUpdateMessagesInDb()
}

export { useServerMessages }
