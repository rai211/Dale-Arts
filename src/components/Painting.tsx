import Image from 'next/image'
import React from 'react'

import Image1 from '@/assets/Image1.png'
import Image2 from '@/assets/Image2.png'

import star from '@/assets/icons/star.svg'

const Painting = () => {
    return (
        <div className='flex flex-col gap-3.5 min-w-[250px] cursor-pointer'>
            <Image
                src={Image1}
                height={0}
                width={0}
                alt="profile1"
                className="rounded-[10px] object-cover h-auto w-[250px] cursor-pointer"
            />
            <div className='flex flex-col gap-4'>
                <p className='text-[13px] text-[#101010] font-semibold'>Modern Wall Decor Framed Painting</p>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[24px] text-[#101010] font-semibold'>$199.99</h1>
                    <p className='flex gap-1'>
                        <Image
                            src={star}
                            height={0}
                            width={0}
                            alt="profile1"
                            className="h-[14px] w-[14px] cursor-pointer"
                        />

                        <Image
                            src={star}
                            height={0}
                            width={0}
                            alt="profile1"
                            className="h-[14px] w-[14px] cursor-pointer"
                        />

                        <Image
                            src={star}
                            height={0}
                            width={0}
                            alt="profile1"
                            className="h-[14px] w-[14px] cursor-pointer"
                        />

                        <Image
                            src={star}
                            height={0}
                            width={0}
                            alt="profile1"
                            className="h-[14px] w-[14px] cursor-pointer"
                        />

                        <Image
                            src={star}
                            height={0}
                            width={0}
                            alt="profile1"
                            className="h-[14px] w-[14px] cursor-pointer"
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Painting
