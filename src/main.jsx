import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './Routes/Routes'
import 'aos/dist/aos.css';
import Aos from 'aos'

Aos.init()


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}> </RouterProvider>
)
