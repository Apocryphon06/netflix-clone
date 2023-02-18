import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import edit from '../assets/icons/edit.svg'

function IntroPage({ title }) {
  const profiles = [
    {
      id: 1,
      name: 'Hrithik',
    },
    {
      id: 2,
      name: 'Nishchal',
    },
    {
      id: 3,
      name: 'Jyothi',
    },
    {
      id: 4,
      name: 'Mahesh',
    },
    {
      id: 5,
      name: 'Madhusudhan',
    },
  ]

  const [gray, setGray] = useState('')

  useEffect(() => {
    if (title === 'Manage Profiles:') {
      setGray('grayscale-[50%]')
    } else {
      setGray('')
    }
  }, [title])

  return (
    <div className="h-[100vh] w-full ">
      <div className="">
        <p className="text-white lg:text-[45px] md:text-[36px] text-[32px] flex flex-col justify-center items-center pt-[150px] tracking-wide">
          {title}
        </p>

        <div className="grid lg:grid-flow-col grid-col-row gap-[25px] justify-center items-center mt-5">
          {profiles.map((item) => (
            <>
              <Link to="/browse">
                <div className="grid lg:grid-flow-row text-center justify-center items-center cursor-pointer text-[#6B6B6B] hover:text-white ">
                  <img
                    src={`https://picsum.photos/200?blur=1&id=${item.id}`}
                    alt="profile_icon"
                    className={`w-[150px] h-[150px] rounded-lg hover:border-2 hover:border-white ${gray}`}
                  />
                  <p className=" text-[18px] my-2">{item.name}</p>

                  {title === 'Manage Profiles:' && (
                    <Link to="/edit-profile">
                      <img
                        width="40px"
                        height="40px"
                        className="relative bottom-[140px] left-[55px] invert"
                        src={edit}
                        alt={edit}
                      />
                    </Link>
                  )}
                </div>
              </Link>
            </>
          ))}
        </div>

        {title === "Who's Watching?" && (
          <Link to="/manage-profiles">
            <p className="my-5 text-[#6B6B6B] p-2 border-2 border-[#6B6B6B] flex justify-center items-center max-w-fit m-auto cursor-pointer text-[18px] hover:border-white hover:text-white">
              Manage Profiles
            </p>
          </Link>
        )}

        {title === 'Manage Profiles:' && (
          <Link to="/">
            <p className="bg-white text-black hover:bg-[#E50914] hover:text-white cursor-pointer p-2 px-3 my-5 max-w-fit m-auto text-[18px]">
              Done
            </p>
          </Link>
        )}
        <br />
      </div>
    </div>
  )
}

export default IntroPage
