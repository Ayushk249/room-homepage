import React from 'react'

const Footer = () => {
  return (
        <section className='grid grid-cols-1 lg:grid-cols-3 '>
            <div>
                {/* photo 1 */}
                <img src={require("../images/image-about-dark.jpg")} alt="" className='w-full'/>
            </div>
                
            <div className='p-8 lg:p-14'>
                <h3 className='uppercase font-semibold text-lg lg:text-xl  '  style={{letterSpacing: "0.6rem"}}>
                    About our furniture</h3>
                <p className='mt-3 text-zinc-500/[.80]'>Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>

            <div>
                {/* photo 2 */}
                <img src={require("../images/image-about-light.jpg")} alt="" className='w-full'/>
            </div>
        </section>
  )
}

export default Footer