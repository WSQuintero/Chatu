function getSelectedFriendSs() {
  const selectedFriend = JSON.parse(sessionStorage.getItem('selectedFriend'))
  return selectedFriend
}

export { getSelectedFriendSs }
