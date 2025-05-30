import Navbar from "@/core/presentation/components/navbar/navbar";

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Navbar>
            <main className="bg-base-200 flex-1 h-full" >
                {children}
            </main>
        </Navbar>
    );
}
