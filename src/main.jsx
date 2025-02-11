import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/home/Home.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Project } from './components/project/Project.jsx';
import { Research } from './components/research/Research.jsx';

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/project",
        element: <Project />
      },
      {
        path: "/research",
        element: <Research />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
