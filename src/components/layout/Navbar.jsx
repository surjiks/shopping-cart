import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='p-2 px-10 fixed left-0 right-0 top-0 z-50 flex justify-between bg-white'>
        <div onClick={()=>navigate("/")}>
            <img src={logo} alt="logo" className='h-12'/>
        </div>
        <div className='flex gap-5  items-center'>
            <button onClick={()=>navigate('/cart')} className='flex items-center gap-2 hover:cursor-pointer'><FaShoppingCart className='text-2xl'/>Cart</button>
            <FaUser className='text-2xl'/>
        </div>
    </div>
  )
}

export default Navbar