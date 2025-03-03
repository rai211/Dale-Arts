import React from 'react'
import Image from 'next/image'
import home from '@/assets/icons/home.svg'
import notification from '@/assets/icons/notification.svg'
import heart from '@/assets/icons/heart.svg'
import message from '@/assets/icons/message.svg'
import wallet from '@/assets/icons/wallet.svg'
import favorite from '@/assets/icons/favorite.svg'
import profile from '@/assets/icons/profile.svg'
import setting from '@/assets/icons/setting.svg'
import logout from '@/assets/icons/logout.svg'

const SideBar = () => {
  return (
    <div className='bg-[#fff] p-4 rounded-[10px] flex flex-col justify-between max-h-[650px] '>
      <ul className='flex flex-col md:items-start items-center gap-8'>
        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={home}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#101010] font-semibold md:block hidden'>Home</h2>
        </li>

        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={notification}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#8D8D8D] md:block hidden'>Notifications</h2>
        </li>

        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={heart}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#8D8D8D] md:block hidden'>Shop</h2>
        </li>

        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={message}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#8D8D8D] md:block hidden'>Conversation</h2>
        </li>

        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={wallet}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#8D8D8D] md:block hidden'>Wallet</h2>
        </li>

        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={favorite}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#8D8D8D] md:block hidden'>Subscription</h2>
        </li>

        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={profile}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#8D8D8D] md:block hidden'>My Profile</h2>
        </li>

        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={setting}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#8D8D8D] md:block hidden'>Settings</h2>
        </li>
      </ul>

      <ul className='flex md:justify-start justify-center'>
        <li className='flex gap-4 items-center cursor-pointer'>
          <Image
            src={logout}
            height={16}
            width={16}
            alt='home'
          />
          <h2 className='text-[16px] text-[#88C2BB] md:block hidden'>Log out</h2>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
