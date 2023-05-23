import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './pages/error-page';
import Planejamento from './pages/Planejamento';
import Criacao from './pages/Criacao';
import Desing from './pages/Design';
import Desenvolvimento from './pages/Desenvolvimento';
import Solucao from './pages/Solucao';
import Negocio from './pages/Negocio';
import HomePage from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "planejamento",
        element: <Planejamento />,
      },

      {
        path: "criacao",
        element: <Criacao />,
      },

      {
        path: "design",
        element: <Desing />,
      },

      {
        path: "desenvolvimento",
        element: <Desenvolvimento />,
      },

      {
        path: "solucao",
        element: <Solucao />,
      },

      {
        path: "inteligencia-negocio",
        element: <Negocio />,
      },
    ],
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={ <p>Carregando...</p> }>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
