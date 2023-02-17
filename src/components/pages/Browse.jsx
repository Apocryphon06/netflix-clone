import React from 'react'
import Header from '../Header'

import bg from '../assets/images/img1.png'
import Play from '../Play'
import MoreInfo from '../MoreInfo'


const categories = [
  {
    id: 1,
    name: 'My List',
  },
  {
    id: 2,
    name: '30-Minute laugh',
  },
  {
    id: 3,
    name: 'Trending Now',
  },
  {
    id: 4,
    name: 'Continue Watching',
  },
  {
    id: 5,
    name: 'Comedies',
  },
  {
    id: 6,
    name: 'Award Winning US Thrillers & Mysteries',
  },
  {
    id: 7,
    name: 'Documetaries',
  },
  {
    id: 8,
    name: 'New Releases',
  },
  {
    id: 9,
    name: 'Anime',
  },
  {
    id: 10,
    name: 'Blockbuster Movies',
  },
]

function Browse() {
  return (
    <div className="text-white m-auto overflow-hidden">
      <Header />
      <div className="lg:pt-[1px] pt-[60px]">
        <img className=" w-screen object-contain" src="https://picsum.photos/1440/900" alt={bg} />
        <div className="relative lg:bottom-[500px] md:bottom-[250px]  py-2">
          <div className="lg:px-10 px-5">
            <p className="lg:w-[546px] md:w-[611px] w-[312px] py-2 lg:text-[18px] text-[16px]">
              Et officia ut ex exercitation excepteur do ea commodo est Eiusmod
              laborum et ex proident culpa.Aute occaecat ut veniam labore dolor
              et exercitation velit reprehenderit nostrud deserunt.
            </p>

            <div className="flex flex-row items-center gap-3 my-3">
              <Play />
              <MoreInfo />
            </div>
          </div>

          <div className="lg:pt-[150px]" />

          {[
            categories.map((item) => (
              <>
                <p className="font-semiBold lg:text-[22px] text-[16px] pb-2 p-5">
                  {item.name}
                </p>

                <div className="flex grid-flow-col gap-2 overflow-x-auto">
                  {[1, 1, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 2].map((item) => (
                    <img
                      src={`https://picsum.photos/250/150?id=${
                        Math.random() * 10
                      }`}
                      className="rounded-md cursor-pointer "
                      alt={item.name}
                    />
                  ))}
                </div>
              </>
            )),
          ]}
        </div>
      </div>
    </div>
  )
}

export default Browse
