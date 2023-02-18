import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className="text-white text-xl text-center font-light pt-[150px]">
        Sorry, we couldn't find what you are looking for!
      </div>
      <Link to="/">
        <p className="my-5 text-[#6B6B6B] p-2 flex justify-center items-center max-w-fit m-auto cursor-pointer text-[18px] hover:underline">
          Go back
        </p>
      </Link>
    </>
  )
}

export default NotFound
