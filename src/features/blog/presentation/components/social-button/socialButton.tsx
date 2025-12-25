interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    color: string;
}

export function SocialButton({ href, icon, label, color }: Readonly<SocialButtonProps>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 ${color}`}
        >
            {icon}
        </a>
    );
}