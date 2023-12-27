import { Login } from '../pages/Login/Login'
import { createBrowserRouter } from 'react-router-dom'
import { SignUp } from '../pages/SignUp/SignUp'
import { ActiveChats } from '../pages/ActiveChats/ActiveChats'
import ChatDesktop from '../pages/ChatDesktop/ChatDesktop'
import { Chat } from '../pages/Chat/Chat'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/active-chats',
    element: <ActiveChats />
  },
  {
    path: '/chat-desktop',
    element: <ChatDesktop />
  },
  {
    path: '/chat',
    element: <Chat />
  }

])
