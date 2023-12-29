function getUserSs(){
const sessionUser =JSON.parse(sessionStorage.getItem("loggedUser"))
return sessionUser
}

export {getUserSs}