import React from 'react'

import facebook from '../components/assets/social/facebook.svg'
import instagram from '../components/assets/social/instagram.svg'
import twitter from '../components/assets/social/twitter.svg'
import youtube from '../components/assets/social/youtube.svg'

function Footer() {
  const contents = [
    {
      id: 1,
      name: 'Audio Description',
    },
    {
      id: 2,
      name: 'Investor Relations',
    },
    {
      id: 3,
      name: 'Legal Notices',
    },
    {
      id: 4,
      name: 'Help Center ',
    },

    {
      id: 5,
      name: 'Jobs',
    },
    {
      id: 6,
      name: 'Cookie Preferences',
    },
    {
      id: 7,
      name: 'Gift Cards',
    },
    {
      id: 8,
      name: 'Terms of Use',
    },
    {
      id: 9,
      name: 'Corporate Information',
    },
    {
      id: 10,
      name: 'Media Centre',
    },
    {
      id: 11,
      name: 'Privacy',
    },
    {
      id: 12,
      name: 'Contact Us',
    },
  ]
  return (
    <div className="lg:w-[1090px] m-auto my-5 p-5">
      <div className="flex flex-row  items-center gap-8">
        <img
          width="24px"
          height="24px"
          className="cursor-pointer invert"
          src={facebook}
          alt={facebook}
        />
        <img
          width="24px"
          height="24px"
          className="cursor-pointer invert"
          src={instagram}
          alt={instagram}
        />
        <img
          width="24px"
          height="24px"
          className="cursor-pointer invert"
          src={twitter}
          alt={twitter}
        />
        <img
          width="24px"
          height="24px"
          className="cursor-pointer invert"
          src={youtube}
          alt={youtube}
        />
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-4 my-5">
        {contents.map((item) => (
          <p
            key={item.id}
            className="text-[14px] text-[#d6d6d6] hover:underline cursor-pointer "
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Footer
