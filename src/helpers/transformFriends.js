import { transformMessages } from './transformMessages'

function transformFriends (userFound) {
  function transformFriendsRecursively (friend) {
    const friends = friend?.friends?.arrayValue?.values?.map((fOf) => {
      return {
        email: fOf?.mapValue.fields.email?.stringValue,
        friends: transformFriendsRecursively(fOf) || [],
        idConnection: fOf?.mapValue.fields?.idConnection?.stringValue,
        messages: transformMessages(friend) || [],
        name: fOf?.mapValue.fields?.name?.stringValue,
        uid: fOf?.mapValue.fields?.uid?.stringValue,
        perfilPhoto: fOf?.mapValue.fields?.perfilPhoto?.stringValue
      }
    })

    return friends
  }

  return transformFriendsRecursively(userFound)
}

export { transformFriends }
