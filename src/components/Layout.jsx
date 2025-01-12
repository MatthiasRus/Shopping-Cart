import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='main-container'>
        <Header/>
        <main className="main-content">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
