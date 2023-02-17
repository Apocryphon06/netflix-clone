import React from 'react'
import play from '../components/assets/icons/play.svg'

function Play() {
  return (
    <div>
      <p className="flex flex-row items-center gap-2 bg-white px-5 py-3 rounded-md text-black lg:text-[16px] text-[14px] hover:opacity-75 cursor-pointer">
        <img
          width="24px"
          height="24px"
          src={play}
          alt={play}
          className=""
        />
        Play
      </p>
    </div>
  )
}

export default Play
