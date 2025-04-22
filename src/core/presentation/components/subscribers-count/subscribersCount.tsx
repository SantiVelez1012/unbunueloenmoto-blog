import { useGetSubscribersCount } from '@/hooks/get-subscribers-count/useGetSubscribersCount';
import React from 'react'

const { count, isLoading: isLoadingCount } = useGetSubscribersCount();

function SubscribersCount() {
    return (
        <div className='flex flex-row justify-center items-center mt-10 h-full'>
            <h2 className='text-2xl text-white'>{count?.subscriberCount}</h2>
            <h2 className='text-2xl text-white'>{count?.subscriberCount}</h2>
        </div>
    )
}

export default SubscribersCount