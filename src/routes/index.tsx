import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const PrivateRoutes = lazy(() => import('../components/PrivateRoutes'))
const HomePage = lazy(() => import('../pages'))
const Profile = lazy(() => import('../pages/profile'))

//Auth pages
const Login = lazy(() => import('../pages/auth/login'))
const Register = lazy(() => import('../pages/auth/register'))

//Tourist pages
const TouristList = lazy(() => import('../pages/tourist'))
const TouristDetail = lazy(() => import('../pages/tourist/id'))

const routes = createBrowserRouter([
  {
    path: '*',
    element: (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-5xl">Not Found</h1>
      </div>
    ),
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile/:id',
    element: <PrivateRoutes Component={() => <Profile />} />,
  },
  {
    path: '/tourist',
    children: [
      {
        path: '',
        element: <PrivateRoutes Component={() => <TouristList />} />,
      },
      {
        path: ':id',
        element: <PrivateRoutes Component={() => <TouristDetail />} />,
      },
    ],
  },
])

export default routes
