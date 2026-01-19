export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-base-200 flex-1 h-full" >
            {children}
        </main>
    );
}
