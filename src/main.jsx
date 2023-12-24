import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ContextProvider } from './context/MyContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
  </Provider>

)
