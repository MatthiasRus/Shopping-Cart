import {RouterProvider,
       createBrowserRouter,
       createRoutesFromElements,
       Route
      } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Layout from './components/Layout'
import Contents from './pages/Contents'
import Cart from './pages/Cart'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='contents' element={<Contents/>}/>
    <Route path='cart' element={<Cart/>}/>
  </Route>
))
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
