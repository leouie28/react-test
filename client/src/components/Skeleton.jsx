import React from 'react'
import { Icon } from '@iconify/react'

const Skeleton = () => {

    const randomVal = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);

        return arr[randomIndex]
    }

    return (
        <>
            {[...Array(5)].map((_, i) => (
                <ul key={i}>
                    <li className='text-4xl font-medium -ml-[18px] text-cyan-500'>
                        <div className='flex items-center'>
                            <Icon icon="icon-park-outline:dot" />
                            <span className='ml-6 bg-slate-600 animate-pulse p-3 rounded-xl w-52'></span>
                        </div>
                        <ul className='ml-16 md:ml-24'>
                            {[...Array(8)].map((_, index) => (
                                <li key={index} className='text-base font-normal text-slate-400 my-4 flex items-center'>
                                    <Icon className='mr-5' icon="icon-park-outline:dot" /> <span className={`bg-slate-700 animate-pulse delay-${randomVal(['1000', '500'])} rounded-xl p-2 w-${randomVal(['40', '32', '52', '28'])}`}></span>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default Skeleton