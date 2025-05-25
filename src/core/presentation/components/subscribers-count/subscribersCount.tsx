import Link from 'next/link';
import { FaYoutube, FaUsers } from 'react-icons/fa';
import SubscribersCountSkeleton from './subscribersCountSkeleton';

type SubscribersCountProps = {
    count: {
        subscriberCount: string;
    }
    isLoading: boolean;
}

const SubscribersCount = ({ count, isLoading }: SubscribersCountProps) => {
    return (
        <section className="flex flex-col items-center justify-center mt-10 mx-auto max-w-md bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-3xl shadow-xl p-8 gap-6 border border-base-200">
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
                    <FaUsers className="text-blue-400 text-4xl" />
                    Actualmente somos
                </h3>
                {isLoading ? (
                    <SubscribersCountSkeleton />
                ) : (
                    <span className="flex items-end gap-2 text-5xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg animate-pulse">
                        {count?.subscriberCount}
                        <span className="text-lg md:text-xl font-semibold text-white ml-2">Buñuelos</span>
                    </span>
                )}
            </div>
            <p className="text-base md:text-lg text-white text-center">
                ¡Únete a nuestra comunidad buñuelística y mantente al tanto de las últimas novedades!
            </p>
            <Link
                href="https://www.youtube.com/@unbunueloenmoto"
                target="_blank"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-200"
            >
                <FaYoutube className="text-2xl" />
                Ir al canal de Youtube!
            </Link>
        </section>
    );
};

export default SubscribersCount;