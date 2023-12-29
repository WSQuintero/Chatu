function setSelectedFriendSs(data) {
  sessionStorage.setItem('selectedFriend', JSON.stringify(data))
}

export { setSelectedFriendSs }
