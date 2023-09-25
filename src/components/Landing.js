import React from 'react'

export const Landing = () => {
  return (
    <div className='absolute top-1/4 rounded-3xl p-5  border border-sky-800 text-center sm:left-[10%] z-30 sm:w-1/2 w-full h-1/2 bg-transparent'>
        <h1 className=' uppercase font-bold text-5xl'>Travel now</h1>
        <p className='font-bold p-3 text-2xl'>feel natural</p>
        <p className='text-3xl'>Enjoy your summer vacation with the most amazing scenery</p>
        <button className=' w-40 h-10 text-xl rounded-xl text-white bg-cyan-500 hover:bg-cyan-300 p-1 mt-6 relative'>Get Started</button>
    </div>
  )
}
