import Link from 'next/link';
import SubscribersCountSkeleton from './subscribersCountSkeleton';

type SubscribersCountProps = {
    count: {
        subscriberCount: string;
    }
    isLoading: boolean;
}

const SubscribersCount = ({ count, isLoading }: SubscribersCountProps) => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center mt-10 h-full mx-10'>
            <h3 className='text-5xl text-center text-white'>Actualmente somos</h3>

            {isLoading && <SubscribersCountSkeleton />}
            {!isLoading && <span className='flex gap-3 justify-center text-3xl text-white'> <p className='text-4xl'> {count?.subscriberCount} </p><p className="mt-1">Buñuelos</p></span>}

            <p className='text-lg text-white text-center'>¡Únete a nuestra comunidad buñuelística y mantente al tanto de las últimas novedades!</p>

            <Link href={'https://www.youtube.com/@unbunueloenmoto'} target='_blank' className='underline text-blue-500 text-3xl'> Ir al canal de Youtube! </Link>

            <hr className='border-gray-400 w-full' />
        </div>
    )
}

export default SubscribersCount