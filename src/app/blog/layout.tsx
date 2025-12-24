import { Copies } from "@/features/blog/presentation/constants/copies/copies";
import Navbar from "@/features/shared/presentation/components/navbar/navbar";



export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar links={Copies.navbarLinks} />
            <main className="bg-base-200 flex-1 h-full" >
                {children}
            </main>
        </>
    );
}
