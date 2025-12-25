export default function LatestPostsSkeleton() {
    const skeletons = Array(3).fill(0);

    return (
        <div className="grid justify-center grid-cols-1 md:grid-cols-3 gap-4 my-5 max-w-6xl mx-10 md:mx-0 w-full">
            {skeletons.map((_, index) => (
                <div
                    key={index + 1}
                    className="flex flex-col h-full rounded-[2rem] overflow-hidden border border-white/5 bg-base-100/40 backdrop-blur-xl"
                >
                    <div className="w-full aspect-[4/3] bg-white/5 animate-pulse relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 opacity-20" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow gap-4">

                        <div className="h-3 w-24 bg-white/10 rounded-full animate-pulse" />

                        <div className="space-y-2">
                            <div className="h-6 w-3/4 bg-white/10 rounded-full animate-pulse" />
                            <div className="h-6 w-1/2 bg-white/10 rounded-full animate-pulse" />
                        </div>

                        <div className="space-y-2 mt-2">
                            <div className="h-3 w-full bg-white/5 rounded-full animate-pulse" />
                            <div className="h-3 w-full bg-white/5 rounded-full animate-pulse" />
                            <div className="h-3 w-2/3 bg-white/5 rounded-full animate-pulse" />
                        </div>

                        <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/5">
                            <div className="h-4 w-28 bg-primary/20 rounded-full animate-pulse" />
                            <div className="h-8 w-8 rounded-full bg-white/5 animate-pulse" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}