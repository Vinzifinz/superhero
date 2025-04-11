import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/App'
import RegisterPage from './Pages/RegisterPage/RegisterPage'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/registerpage",
        element: <RegisterPage />
    }
])
