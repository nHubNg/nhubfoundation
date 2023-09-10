import React from 'react'
import '../../App.css'

const AdminHeader = ({heading, text}) => {
  return (
    <div className='min-w-[100%]'>
       <div className='flex justify-between px-12  pt-10 pb-24 header '>
        <div className='text-white'>
          <h1 className='text-[25px]'>{heading}</h1>
          <p className='text-[15px]'>{text}</p>
        </div>
        <div className='md:flex items-center gap-4'>
          <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'><img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057817/nHubFoundation/Vector_apczk4.svg" alt="" /></div>
          <div  className='bg-white w-12 h-12 rounded-full flex justify-center items-center'><img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057927/nHubFoundation/Vector_lez7hd.svg" alt="" /></div>
          <div  className='bg-white w-12 h-12 rounded-full flex justify-center items-center'><img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691058052/nHubFoundation/feGooglePlus1_o1racc.svg" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
