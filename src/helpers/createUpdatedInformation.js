import { transformFriends } from './transformFriends'
import { transformMessages } from './transformMessages'

function createUpdatedInformation (userFound) {
  const information = {
    email: userFound?.email?.stringValue,
    friends: transformFriends(userFound) || [],
    idConnection: userFound?.idConnection?.stringValue || '',
    messages: transformMessages(userFound) || [],
    name: userFound?.name?.stringValue,
    uid: userFound?.uid?.stringValue,
    perfilPhoto: userFound?.perfilPhoto?.stringValue,
    isUserAuthenticated: userFound?.isUserAuthenticated?.stringValue || ''
  }
  return information
}

export { createUpdatedInformation }
