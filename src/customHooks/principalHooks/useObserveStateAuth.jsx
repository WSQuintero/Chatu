import { useEffect } from 'react'
import { auth } from '../../firebase/firebase'
import { getUserSs } from '../../helpers/getUserSs'
import { setUserSstorage } from '../../helpers/setUserSstorage'
import { useDispatch } from 'react-redux'
import { isUserAuthenticated } from '../../redux/slices/userAtuhenticatedSlice'

function useObserveStateAuth() {
  const sessionUser = getUserSs()
  const dispatch = useDispatch()
  useEffect(() => {
    // Agrega un observador del estado de autenticación
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // El usuario está autenticado
        if (user.email === sessionUser.email) {
          setUserSstorage({ ...sessionUser, isUserAuthenticated: true })
          dispatch(isUserAuthenticated(true))
        }
      } else {
        // El usuario no está autenticado
        // setUsuario(null)
        setUserSstorage({ ...sessionUser, isUserAuthenticated: false })
        dispatch(isUserAuthenticated(false))
      }
    })

    // Limpia el observador al desmontar el componente para evitar fugas de memoria
    return () => {
      unsubscribe()
    }
  }, [])
}

export { useObserveStateAuth }
