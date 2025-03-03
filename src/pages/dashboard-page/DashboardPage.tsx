import React from 'react'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import Posts from '@/components/Posts'
import Artists from '@/components/Artists'

import artist1 from '@/assets/pexels-anastasia-shuraeva-4406721@2x.png'
import artistbg1 from '@/assets/pexels-ekaterina-12203460.png'

import artist2 from '@/assets/pexels-andrea-piacquadio-3771118.png'
import artistbg2 from '@/assets/pexels-genaro-servín-763210.png'

import artist3 from '@/assets/pexels-antoni-shkraba-4442102.png'
import artistbg3 from '@/assets/pexels-pixabay-164455.png'

import artist4 from '@/assets/pexels-antoni-shkraba-4442005.png'
import artistbg4 from '@/assets/pexels-steve-johnson-1269968.png'
import Image from 'next/image'
import Image1 from '@/assets/Image1.png'
import Image2 from '@/assets/Image2.png'

import star from '@/assets/icons/star.svg'
import Painting from '@/components/Painting'

const DashboardPage = () => {
  return (
    <div className="bg-[#F5F5F5] w-full flex flex-col gap-8 items-center p-10">
      <div className='w-full max-w-[1480px] flex items-center justify-center'>
        <Navbar />
      </div>

      <div className="grid grid-cols-4 gap-8 w-full max-w-[1480px]">
        <SideBar />

        <div className='col-span-2 flex flex-col gap-8 '>
          <Posts />
          <Posts />

          <div className='flex gap-4 overflow-x-scroll no-scrollbar'>
            <Painting />
            <Painting />
            <Painting />
            <Painting />
          </div>

        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex gap-6'>
            <p className='text-[16px] text-[#101010] font-semibold'>Artists</p>
            <p className='text-[16px] text-[#8D8D8D]'>Photographers</p>
          </div>

          <div className='flex flex-col gap-8'>
            <Artists artistbg={artistbg1} artist={artist1} name={`Thomas Edward`} handle={`@thewildwithyou`} />
            <Artists artistbg={artistbg2} artist={artist2} name={`Chris Doe`} handle={`@thewildwithyou`} />
            <Artists artistbg={artistbg3} artist={artist3} name={`Emilie Jones`} handle={`@thewildwithyou`} />
            <Artists artistbg={artistbg4} artist={artist4} name={`Jessica Williams`} handle={`@thewildwithyou`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
