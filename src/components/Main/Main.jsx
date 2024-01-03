import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Main({ children }) {
  const isUserAuthenticated = useSelector((state) => state.isUserAuthenticated)
  const navigate = useNavigate()

  return (
    <>
      {isUserAuthenticated ? (
        <main className='bg-gradient-to-r from-white to-lighterGreen w-full h-[100vh] relative flex flex-col justify-center items-center'>
          {children}
        </main>
      ) : (
        <main className='h-[100vh] w-full grid place-content-center'>
          <p className='text-lighterGreen text-3xl m-auto p-5 border-2 border-greenish font-bold'>
            Usuario no autenticado
          </p>
          <button
            className='h-[30px]  bg-green text-white mt-3 px-10  rounded-xl hover:bg-lightestGreen hover:text-green hover:border hover:border-green '
            onClick={() => {
              navigate('/')
            }}>
            Ir a inicio de sesión
          </button>
        </main>
      )}
    </>
  )
}

export { Main }
