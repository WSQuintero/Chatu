function setUserSstorage(data){
sessionStorage.setItem(
  'loggedUser',
  JSON.stringify(data)
)
}

export { setUserSstorage }