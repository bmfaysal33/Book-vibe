import React from 'react'
import bookImg from "../../assets/books.jpg"



const Banner = () => {
  return (
    <div className='flex justify-around items-center'>
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta aliquid nulla minus culpa sunt at</h1>
                <button className='btn btn-primary'>Test Test</button>
        </div>
        <div><img className='w-3/12' src={bookImg} alt="" /></div>

    </div>
  )
}

export default Banner