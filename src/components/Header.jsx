import React from 'react'
import { Link } from 'react-router-dom'

import search from './assets/icons/search.svg'
import bell from './assets/icons/bell.svg'

import logo from './assets/logo/logo.png'

function Header() {
  const navItems = [
    {
      name: 'Home',
      link: '/browse',
    },
    {
      name: 'TV Shows',
      link: '/shows',
    },
    {
      name: 'Movies',
      link: '/movies',
    },
    {
      name: 'New & Popular',
      link: '/new-and-popular',
    },
    {
      name: 'My List',
      link: '/my-list',
    },
    {
      name: 'Browse by Languages',
      link: '/by-languages',
    },
  ]

  return (
    <div className="fixed top-0 z-10 w-full bg-[#141414] px-5 py-5 grid grid-flow-col lg:justify-between md:justify-around items-center shadow-lg overflow-hidden">

      <div className="flex flex-row items-center gap-5">
      {/* <p className="text-[#E50815] font-bold text-[22px] cursor-pointer">
        NETFLIX
      </p> */}
      <img width="100px" height="24px" src={logo} alt="netflix-logo"/>
        
        {navItems.map((item) => (
          <Link to={`${item.link}`}>
            <p className="lg:block md:hidden hidden text-[14px] hover:text-[#6B6B6B] cursor-pointer delay-90 font-semiBold">
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex flex-row justify-start items-center gap-5">
        <img
          // style={{ filter: 'invert(1)' }}
          className="cursor-pointer invert"
          width="24px"
          height="24px"
          src={search}
          alt="search"
        />
        <img
          width="24px"
          height="24px"
          // style={{ filter: 'invert(1)' }}
          className="cursor-pointer invert"
          src={bell}
          alt="bell"
        />
        <img
          src="https://picsum.photos/200?id=1"
          alt="avatar"
          className="h-[24px] w-[24px] cursor-pointer rounded-sm"
        />
      </div>
    </div>
  )
}

export default Header
