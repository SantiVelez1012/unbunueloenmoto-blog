import Link from "next/link";
import { motion } from "motion/react";

type SocialCardProps = {
    icon: React.ReactNode;
    label: string;
    sublabel: string;
    gradient: string;
    borderColor: string;
    href: string;
};

export function SocialCard({ icon, label, sublabel, gradient, borderColor, href }: Readonly<SocialCardProps>) {
    return (
        <motion.div whileHover={{ scale: 1.03 }} className="h-full">
            <Link href={href} target="_blank" className={`group relative flex items-center gap-4 p-6 h-full w-full rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur-lg overflow-hidden transition-colors ${borderColor}`}>

                
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 p-3 bg-white/10 rounded-full border border-white/10 shadow-inner text-white">
                    {icon}
                </div>
                <div className="relative z-10">
                    <p className="text-lg font-bold text-white leading-tight">{label}</p>
                    <p className="text-sm text-gray-400">{sublabel}</p>
                </div>
            </Link>
        </motion.div>
    )
}