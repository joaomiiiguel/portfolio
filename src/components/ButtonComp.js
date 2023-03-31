import React from 'react'
import Link from 'next/link'


export default function ButtonComp({darkButton, title, link, icon}) {
  return (
    <>
    {darkButton ? 
      <Link className='flex bg-primary-light rounded-full items-center space-x-2 text-center mt-4 p-2 w-full justify-center' href={link} target="_blank">
          <p className='text-seconday font-semibold'>{title}</p>
          {icon}
      </Link>
      :
      <Link download className='flex bg-seconday rounded-full items-center space-x-2 text-center mt-4 w-full justify-center' href={link} target="_blank">
          <p className='font-semibold'>{title}</p>
          {icon}
      </Link>
    }
    </>
  )
}
