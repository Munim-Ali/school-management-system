import Image from 'next/image'
import React from 'react'

type Props = {
    title: string
}

const UserCard = ({title}: Props) => {
  return (
    <div className='rounded-2xl odd:bg-purpleMain even:bg-yellowMain p-4 flex-1 min-w-[130px]'>
        <div className='flex items-center justify-between'>
            <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/05</span>
            <Image src="/more.png" width={20} height={20} alt='More'/>
        </div>
        <h1 className='text-2xl font-semibold my-4'>1,233</h1>
        <h2 className='capitalize text-sm font-medium text-gray-500'>{title}</h2>
    </div>
  )
}

export default UserCard