import Image from 'next/image'
import React from 'react'


const Artists = ({artistbg, artist, name, handle }: any) => {
    return (
        <div className='flex items-center gap-3 relative cursor-pointer'>
            <Image
                src={artistbg}
                height={0}
                width={0}
                alt="profile"
                className="rounded-[10px] object-cover h-auto w-full cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-[10px]"></div>

            <div className='absolute bottom-[10px] left-[16px] flex gap-2'>
                <Image
                    src={artist}
                    height={0}
                    width={0}
                    alt="profile1"
                    className="rounded-[10px] object-cover h-[48px] w-[48px] cursor-pointer"
                />
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] font-semibold text-[#fff] cursor-pointer'>{name}</p>
                    <p className='text-[12px] text-[#fff] cursor-pointer'>{handle}</p>
                </div>
            </div>
        </div>
    )
}

export default Artists
