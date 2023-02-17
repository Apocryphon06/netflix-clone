import React from 'react'
import info from '../components/assets/icons/info.svg'

function MoreInfo() {
  return (
    <div>
      <p className="flex flex-row items-center gap-2 backdrop-grayscale-0 bg-white/30 px-5 py-3 rounded-md lg:text-[16px] text-[14px] hover:opacity-75 cursor-pointer">
        <img
          width="24px"
          height="24px"
          src={info}
          alt={info}
          className="invert"
        />
        More info
      </p>
    </div>
  )
}

export default MoreInfo
