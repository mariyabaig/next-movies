import React from 'react'
import Link from 'next/link'

const HeroSection = ({title}) => {
  return (
   <>
    <div className='h-screen w-full bg-gray-200'>
        <h1>{title}</h1>
        <span>HADKHDEJFEAUFEANFKAFFWAOPEWFIPAIF</span>
       <Link href="/watch"><button>Lets go</button></Link> 
    </div>
   </>
  )
}

export default HeroSection