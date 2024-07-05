import React from 'react'
import logo from '../icons/logo.svg'
import menu from '../icons/icon-hamburger.svg'

const header = () => {
  return (
   <>
    <header className='absolute z-10 p-8 flex justify-start items-start'>
      <img src={logo} alt="" />
    


      <nav></nav>


      {/* for mobile screen */}
      <div className="">
        <button>
          <img src={menu} alt="" />
        </button>
      </div>
    </header>
   </>
  )
}

export default header