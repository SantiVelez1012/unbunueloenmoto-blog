import { motion } from 'motion/react';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';

type SubscribersCountProps = {
    count: {
        subscriberCount: string;
    }
    isLoading: boolean;
}

const SubscribersCount = ({ count, isLoading }: SubscribersCountProps) => {
    return (

        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >

            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
            <Link href="https://youtube.com/@unbunueloenmoto" target="_blank" className="relative z-10 flex flex-col justify-between h-full p-8">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-red-600/20 rounded-2xl border border-red-500/30 backdrop-blur-md">
                        <FaYoutube className="w-8 h-8 text-red-500" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/20 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Suscribete
                    </span>
                </div>

                <div>
                    {isLoading ? (
                        <div className="h-8 w-32 bg-gray-700 rounded-md animate-pulse mt-4" />
                    ) : (
                        <h3 className="text-5xl font-display font-bold text-white tracking-tighter drop-shadow-lg">
                            {count?.subscriberCount}
                        </h3>
                    )}
                    <p className="text-gray-300 font-medium mt-1 flex items-center gap-2">
                        Suscriptores en YouTube
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </p>
                </div>
            </Link>

            <FaYoutube className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-[-15deg] group-hover:rotate-[-10deg] transition-transform duration-500" />
        </motion.div>
    );
};

export default SubscribersCount;