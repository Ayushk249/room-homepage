import React, { useState } from 'react'
import arrow from '../icons/icon-arrow.svg'
import left from '../icons/icon-angle-left.svg'
import right from '../icons/icon-angle-right.svg'

const data = [
    {
        id: 1,
        title : "Discover innovative ways to decorate",
        description : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        image : require("../images/desktop-image-hero-1.jpg"),
        mobileImage : require("../images/mobile-image-hero-1.jpg")

    },
    {
        id: 2,
        title : " We are available all across the globe",
        description : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image : require("../images/desktop-image-hero-2.jpg"),
        mobileImage : require("../images/mobile-image-hero-2.jpg")

    },
    {
        id: 3,
        title : " Manufactured with the best materials",
        description : "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image : require("../images/desktop-image-hero-3.jpg"),
        mobileImage : require("../images/mobile-image-hero-3.jpg")

    },
    
]

const Showcase = () => {

    const [items] = useState(data)
    const[imageIndex, setImageIndex] = useState(1)

    function rightHandler(){
        if(imageIndex === 3){
            setImageIndex(1)
        }else{
            setImageIndex(imageIndex + 1) 
        }
    }

    function leftHandler(){
        if(imageIndex === 1){
            setImageIndex(3)
        }else{
            setImageIndex(imageIndex - 1)
    }
    
    }

  return (
    <>
        <section >
            {items.map((item,index) => {
                return(
                    <>
                    {imageIndex === index+1 &&
                    <article key={item.id} className='grid grid-cols-1 lg:grid-cols-2 lg:place-items-center'>
                    <div className='relative'>
                        <picture>
                         <source media='(min-width:768px)' srcSet={item.image}/>
                            <img src={item.mobileImage} alt="" 
                            className='w-full'/>
                        </picture>
                        

                    {/* Slider buttons */}
                        <ul className='flex absolute -bottom-1.5 -right-0 '>
                            <li><button className='bg-black hover:bg-neutral-600 transition-all duration-200'>
                                <img src={left} alt="" className='p-5' onClick={leftHandler}/></button>
                            </li>
                            <li><button className='bg-black  hover:bg-neutral-600 transition-all duration-200'>
                                <img src={right} alt="" className='p-5'onClick={rightHandler}/></button>
                            </li>
                        </ul>
                    </div>

                    <div className='p-8 lg:p-12'>
                        <h1 className='text-4xl lg:text-6xl font-semibold '>{item.title}</h1>
                        <p className='text-zinc-500/[.80] mt-5 mb-8'>{item.description}</p>
                        <button className='flex items-center gap-4 uppercase hover:opacity-80 font-semibold' style={{letterSpacing: "0.6rem"}}>Shop Now <img src= {arrow} alt="arrow" /></button>
                    </div>
                    
                </article>}
                </>
                )         
            })}

        </section>
    </>
  )
}

export default Showcase;