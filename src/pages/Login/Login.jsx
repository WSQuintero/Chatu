import { useContext } from "react"
import { MyContext } from "../../context/MyContext"
import { useRedirectOnAuthentication } from "../../customHooks/useRedirectOnAuthentication"
import { useResetSession } from "../../customHooks/useResetSession"
import "./Login.css"

function Login() {
  const { authenticate } = useContext(MyContext)
  useResetSession()
  useRedirectOnAuthentication()

  const handleLogin = (event) => {
    event.preventDefault()
    const loginEmail = event.target.elements.loginEmail.value
    const loginPassword = event.target.elements.loginPassword.value
    authenticate.login.authenticateUser(loginEmail, loginPassword)
  }

  return (
    <main className="bg-gradient-to-r from-white to-lighterGreen w-full h-[100vh] relative flex flex-col justify-center items-center">
      <div className="sm:w-3/5 sm:h-4/5 w-[80%] h-5/6 bg-white rounded-3xl shadow-darkGreen shadow-xl flex justify-center text-green">
        <figure className=" h-full w-6/12 relative hidden lg:flex">
          <img
            src="/img/chica-texteando.jpg "
            alt="chica texteando"
            className="absolute bottom-0  w-full"
          />
        </figure>
        <form
          onSubmit={handleLogin}
          className="flex flex-col h-full w-full lg:w-5/12 overflow-hidden p-5 items-center gap-5 relative mr-5 ">
          <img src="/img/logo.png" alt="" className="h-2/6 object-contain " />
          <h2>Inicio de sesión</h2>
          <label
            htmlFor="loginEmail"
            className="h-1/6 w-full flex items-center gap-3  border-b border-green ">
            <span>
              <img
                src="/svg/email.svg"
                alt="email logo"
                className=" object-cover w-[30px] h-[30px]"
              />
            </span>
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              defaultValue={"sanago122@hotmail.com"}
              className="placeholder:text-green w-full"
              name="loginEmail"
              id={"loginEmail"}
            />
          </label>
          <label
            htmlFor="loginPassword"
            className="h-1/6 w-full flex items-center gap-3  border-b border-green">
            <span>
              <img
                src="/svg/Password.svg"
                alt="password logo"
                className=" object-cover w-[30px] h-[30px]"
              />
            </span>
            <input
              type="password"
              placeholder="Contraseña"
              required
              defaultValue={"qqqqqq"}
              className="placeholder:text-green w-full"
              name="loginPassword"
              id="loginPassword"
            />
          </label>
          <div className="relative w-full">
            <span className="h-1/6 absolute right-0 text-sm without">
              <a href="/sign-up">¿No tienes cuenta aún?</a>
            </span>
          </div>
          <button className="h-[30px]  bg-green text-white mt-3 px-10  rounded-xl hover:bg-lightestGreen hover:text-green hover:border hover:border-green ">
            Iniciar sesión
          </button>
          <span className="text-textRed text-center">
            {authenticate.errorLogin}
          </span>
        </form>
      </div>
    </main>
  )
}

export { Login }
