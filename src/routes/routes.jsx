import { Login } from '../pages/Login/Login'
import { createBrowserRouter } from 'react-router-dom'
import { SignUp } from '../pages/SignUp/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }

])
