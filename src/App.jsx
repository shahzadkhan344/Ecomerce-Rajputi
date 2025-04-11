import React from 'react'
import Container from './components/Container'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import All from './pages/All'
import Saress from './pages/Saress'
import ChunriPila from './pages/ChunriPila'
import Suits from './pages/Suits'
import Dupatta from './pages/Dupatta'
import Kurtis from './pages/Kurtis'
import IndoWestron from './pages/IndoWestron'
import Reviews from './pages/Reviews'
import TrackOrder from './pages/TrackOrder'
import Lehnaga from './pages/Lehnaga'
import Detailspage from './pages/Detailspage'
import AddToCart from './pages/AddToCart'
import Login from './pages/Login'
import Successfully from './pages/Successfully'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/all",
      element: <All />
    },
    {
      path: "/saress",
      element: <Saress />
    },
    {
      path: "/lehnga",
      element: <Lehnaga />
    },
    {
      path: "/chunripila",
      element: <ChunriPila />
    },
    {
      path: "/suits",
      element: <Suits />
    },
    {
      path: "/dupatta",
      element: <Dupatta />
    },
    {
      path: "/kurtis",
      element: <Kurtis />
    },
    {
      path: "/indowestron",
      element: <IndoWestron />
    },
    {
      path: "/reviews",
      element: <Reviews />
    },
    {
      path: "/trackorder",
      element: <TrackOrder />
    }
    ,
    {
      path: "/detailspage",
      element: <Detailspage />
    },
    {
      path: "/addtocart",
      element: <AddToCart />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/successfully",
      element: <Successfully />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
