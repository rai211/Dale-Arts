import React from 'react'
import Image from 'next/image'
import avatar1 from '@/assets/pexels-ali-pazani-2613260.png'
import post1 from '@/assets/pexels-humphrey-muleba-2045248.png'
import heartWhite from '@/assets/icons/heartWhite.svg'
import heartBlack from '@/assets/icons/heartBlack.svg'
import comment from '@/assets/icons/comment.svg'
import share from '@/assets/icons/share.svg'

const Posts = () => {
  return (
    <div className='bg-[#fff] rounded-[10px]'>
            <div className='flex flex-col gap-8 p-4'>
              <div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={avatar1}
                    height={0}
                    width={0}
                    alt="profile1"
                    className="rounded-[10px] object-cover h-[48px] w-[48px] cursor-pointer"
                  />
                  <div className='flex flex-col gap-1'>
                    <p className='text-[20px] font-semibold text-[#101010] cursor-pointer'>Lara Leones</p>
                    <p className='text-[14px] text-[#8D8D8D] cursor-pointer'>@thewallart</p>
                  </div>
                </div>
                <div>

                </div>
              </div>
              <div>
                <p className='text-[14px] text-[#101010] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className='text-[#FF5E8A] cursor-pointer'>Read More</span> </p>
              </div>
              <div className='relative'>
                <Image
                  src={post1}
                  height={0}
                  width={0}
                  alt="profile1"
                  className="rounded-[10px] object-cover h-auto w-full cursor-pointer"
                />

                <Image
                  src={heartWhite}
                  height={0}
                  width={0}
                  alt="heart"
                  className="absolute h-[24px] w-[24px] top-[16px] right-[16px] cursor-pointer"
                />
              </div>
            </div>
            <hr />
            <div className='p-4 '>
              <ul className='flex gap-4 items-center'>
                <li className='flex gap-3 items-center cursor-pointer'>
                  <Image
                    src={heartBlack}
                    height={0}
                    width={0}
                    alt="heart"
                    className="h-[24px] w-[24px]"
                  />
                  <p className='text-[20px] text-[#101010] font-semibold'>9.8k</p>
                </li>

                <li className='flex gap-3 items-center cursor-pointer'>
                  <Image
                    src={comment}
                    height={0}
                    width={0}
                    alt="heart"
                    className="h-[24px] w-[24px]"
                  />
                  <p className='text-[20px] text-[#101010] font-semibold'>8.6k</p>
                </li>

                <li className='flex gap-3 items-center cursor-pointer'>
                  <Image
                    src={share}
                    height={0}
                    width={0}
                    alt="heart"
                    className="h-[24px] w-[24px]"
                  />
                  <p className='text-[20px] text-[#101010] font-semibold'>7.2k</p>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default Posts
