import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        <main className='mt-16 bg-gray-100 min-h-screen'>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout