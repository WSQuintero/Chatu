import { useContext, useEffect } from 'react'
import { MyContext } from '../../context/MyContext'
import { newUserInformation } from '../../helpers/newUserInformation'
import { useNavigate } from 'react-router'
import './SignUp.css'

function SignUp () {
  const navigate = useNavigate()

  const { signUpData, userRegistrationInfoDb } = useContext(MyContext)

  const handleSignUp = (event) => {
    signUpData.newUserState.resetNewUser()
    event.preventDefault()
    const SignUpUser = String(event.target.elements.SignUpUser.value)
    const SignUpEmail = String(event.target.elements.SignUpEmail.value)
    const SignUpPassword = String(event.target.elements.SignUpPassword.value)
    const repeatPassword = String(event.target.elements.repeatPassword.value)

    if (SignUpPassword === repeatPassword) {
      signUpData.signUp.signUpUser(SignUpEmail, SignUpPassword)
      signUpData.newUserState.updateNewUser({ ...newUserInformation, email: SignUpEmail, name: SignUpUser })
    } else {
      signUpData.signUpErrorData.setErrorSignUp('Las contraseñas deben coincidir')
    }
  }

  useEffect(() => {
    if (userRegistrationInfoDb.addedUserInfoConfirmation)navigate('/')
  }, [userRegistrationInfoDb.addedUserInfoConfirmation])

  return (
    <main className='bg-gradient-to-r from-white to-green-500 w-full h-[100vh] relative flex flex-col justify-center items-center'>
      <div className='sm:w-3/5 sm:h-auto sm:max-h-[90%] w-[90%] h-[96%] bg-white rounded-3xl shadow-green-950 shadow-xl flex justify-center text-[#37E23B]'>
        <figure className=' h-full w-6/12 relative hidden lg:flex'>
          <img
            src='/img/chica-señalando.jpg '
            alt='chica texteando'
            className='absolute bottom-0  w-full'
          />
        </figure>
        <form
          onSubmit={handleSignUp}
          className='flex flex-col h-auto w-full lg:w-5/12 overflow-hidden p-10 items-center gap-5 relative mr-5 '>
          <img
            src='/img/logo.png'
            alt='logo'
            className='h-1/6 sm:h-1/6 object-contain '
          />
          <h2>Registro de usuario</h2>
          <label
            htmlFor='SignUpUser'
            className='h-1/6 w-full flex items-center gap-3  border-b border-[#37E23B] '>
            <span>
              <img
                src='/svg/user.svg'
                alt='user logo'
                className=' object-cover w-[30px] h-[30px]'
              />
            </span>
            <input
              type='text'
              placeholder='Nombre de usuario'
              required
              className='placeholder:text-[#37E23B] w-full'
              name='SignUpUser'
              id='SignUpUser'
            />
          </label>
          <label
            htmlFor='SignUpEmail'
            className='h-1/6 w-full flex items-center gap-3  border-b border-[#37E23B] '>
            <span>
              <img
                src='/svg/email.svg'
                alt='email logo'
                className=' object-contain w-[30px] h-[30px]'
              />
            </span>
            <input
              type='email'
              placeholder='Correo electrónico'
              required
              className='placeholder:text-[#37E23B] w-full'
              name='SignUpEmail'
              id='SignUpEmail'
            />
          </label>
          <label
            htmlFor='SignUpPassword'
            className='h-1/6 w-full flex items-center gap-3  border-b border-[#37E23B]'>
            <span>
              <img
                src='/svg/Password.svg'
                alt='password logo'
                className=' object-cover w-[30px] h-[30px]'
              />
            </span>
            <input
              type='password'
              placeholder='Contraseña'
              required
              className='placeholder:text-[#37E23B] w-full'
              name='SignUpPassword'
              id='SignUpPassword'
            />
          </label>
          <label
            htmlFor='repeatPassword'
            className='h-1/6 w-full flex items-center gap-3  border-b border-[#37E23B]'>
            <span>
              <img
                src='/svg/Password.svg'
                alt='password logo'
                className=' object-cover w-[30px] h-[30px]'
              />
            </span>
            <input
              type='password'
              placeholder='Repetir contraseña'
              required
              className='placeholder:text-[#37E23B] w-full'
              name='repeatPassword'
              id='repeatPassword'
            />
          </label>
          <div className='relative w-full'></div>
          <button className='  bg-[#37E23B] text-white p-1 px-6  rounded-xl hover:bg-[#D7FFD7] border border-[#37E23B] hover:text-[#37E23B] hover:border hover:border-[#37E23B]  text-xs'>
            Registrar usuario
          </button>
          <span className='text-red-600 text-center'>{signUpData.signUpErrorData.errorSignUp}</span>
        </form>
      </div>
    </main>
  )
}

export { SignUp }
