import React, { useState } from 'react'
import logo from '../icons/logo.svg'
import menu from '../icons/icon-hamburger.svg'
import close from '../icons/icon-close.svg'



const Header = () => {

  const [isOpen,setIsOpen] = useState(false)
  function navbarHandler(){
    if(isOpen === true){
      document.querySelector('nav').classList.remove('open')
      setIsOpen(!isOpen)
    }else{
      document.querySelector('nav').classList.add('open')
      setIsOpen(!isOpen)
    }
    
    
  }

  return (
   <>
    <header className='w-full absolute z-10 p-8 flex justify-center items-center lg:justify-start lg:items-start'>
      <img src={logo} alt=""/>
    

    <div >
      <nav className='top-0 w-full lg:top-0 lg:left-0 lg:ml-14 '>
        <ul className='flex justify-center place-items-center flex-wrap py-8 gap-8 lg:py-0 lg:gap-6 lg:justify-start lg:place-items-start'>
          <li><button className='lg:text-white text-md font-semibold hover:border-b-black transition-all duration-200 lg:hover:border-b-white '>home</button></li>
          <li><button className='lg:text-white text-md font-semibold hover:border-b-black transition-all duration-200 lg:hover:border-b-white'>Shop</button></li>
          <li><button className='lg:text-white text-md font-semibold hover:border-b-black transition-all duration-200 lg:hover:border-b-white'>About</button></li>
          <li><button className='lg:text-white text-md font-semibold hover:border-b-black transition-all duration-200 lg:hover:border-b-white'>Contact</button></li>
        </ul>
      </nav>
    </div>

      {/* for mobile screen */}
      <div className="absolute left-0 top-0 p-8 z-20 lg:hidden">
        {isOpen === true ? <button onClick={navbarHandler}><img src={close} alt="" /></button> : <button onClick={navbarHandler}><img src={menu} alt="" /></button>}
      </div>
    </header>
   </>
  )
}

export default Header