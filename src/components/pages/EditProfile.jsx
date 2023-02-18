import React from 'react'
import { Link } from 'react-router-dom'

function EditProfile({ id, name }) {
  return (
    <div className="text-white lg:w-[604px] md:w-full lg:p-0 p-5 m-auto pt-[55px]">
      <p className="font-medium text-[55px] tracking-wide">Edit Profile</p>
      <div className="border-b border-[#666666] opacity-50 mb-2" />

      <div className="grid grid-flow-col gap-5">
        <img
          src={`https://picsum.photos/200?blur=1&id=${id}`}
          alt="profile_icon"
          className={`w-[120px] h-[120px] rounded-lg hover:border-2 hover:border-white`}
        />
        <div className="lg:w-[462px] h-full">
          <p className="p-2 bg-[#666666] text-[18px] font-medium mb-4">
            Hrithik{' '}
          </p>

          <div>
            <p className="lg:text-[20px] text-[16px] text-[#464646]">
              Location:{' '}
            </p>
            <p>English</p>

            <p className="lg:text-[20px] text-[16px] text-[#464646] my-2">
              Game Handle:{' '}
            </p>
            <p className="my-2">
              Dolor elit aute excepteur culpa ad exercitation excepteur aliqua
              officia. Excepteur esse epidatat laboris.{' '}
              <span className="cursor-pointer hover:underline font-bold">
                Learn more
              </span>
            </p>

            <p className="p-2 bg-[#666666] text-[18px] font-medium mb-4">
              Create Game Handle{' '}
            </p>

            <div className="border-b border-[#666666] opacity-50 my-2" />

            <p className="lg:text-[20px] text-[16px] text-[#464646]">
              Maturity Settings:{' '}
            </p>
            <p className="bg-[#333333] max-w-fit p-2 font-medium my-2">
              {' '}
              All Maturity Ratings
            </p>
            <p>Show titles of all maturity ratings for this profile</p>

            <p className="border-2 text-[#464646] justify-center items-center px-5 py-2 max-w-fit cursor-pointer border-[#464646] hover:border-white hover:text-white my-2">
              Edit
            </p>
            <div className="border-b border-[#666666] opacity-50 my-2" />
            <p className="lg:text-[20px] text-[16px] text-[#464646]">
              Autoplay controls{' '}
            </p>

            <li>Sit et non do sint et eiusmod amet ipsum fugiat.</li>
            <li>Nostrud ullamco fugiat magna sint aliquip .</li>
          </div>
        </div>
      </div>
      <br />
      <div className="border-b border-[#666666] opacity-50 mb-2" />
      <div className="lg:w-[604px] w-full flex flex-row justify-start items-center gap-5">
        <Link to="/">
          <p className="bg-white font-medium text-black px-5 py-2 max-w-fit hover:text-white hover:bg-[#E50914] cursor-pointer">
            Save
          </p>{' '}
        </Link>
        <Link to="/">
          <p className="border-2 font-medium text-[#464646] justify-center items-center px-5 py-2 max-w-fit cursor-pointer border-[#464646] hover:border-white hover:text-white my-2">
            Cancel
          </p>
        </Link>
      </div>
    </div>
  )
}

export default EditProfile
