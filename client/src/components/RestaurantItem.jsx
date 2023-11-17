import React from 'react'
import { Icon } from '@iconify/react'

const RestaurantItem = ({state, restaurants}) => {
    return (
        <ul>
            <li className='text-4xl font-medium -ml-[18px] text-cyan-500'>
                <div className='flex items-center'>
                    <Icon icon="icon-park-outline:dot" />
                    <span className='ml-6'>{state}:</span>
                </div>
                <ul className='ml-16 md:ml-24'>
                    {restaurants.map((item, i) => (
                        <li key={i} className='text-base font-normal text-slate-400 my-4 flex items-center'>
                            <Icon className='mr-5' icon="icon-park-outline:dot" /> {item}
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    )
}

export default RestaurantItem