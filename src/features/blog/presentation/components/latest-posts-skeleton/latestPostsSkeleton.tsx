export default function LatestPostsSkeleton() {
    const skeletons = new Array(3).fill(0);

    return (
        <div className="grid justify-center grid-cols-1 md:grid-cols-3 gap-6 my-5 max-w-6xl mx-auto w-full px-4">
            {skeletons.map((_, index) => (
                <div
                    key={index + 1}
                    className="flex flex-col h-full bg-base-200 rounded-2xl overflow-hidden border border-base-300"
                >
                    <div className="w-full aspect-[16/9] bg-base-300 animate-pulse" />
                    <div className="p-6 flex flex-col flex-grow gap-4">

                        <div className="h-3 w-24 bg-base-300 rounded animate-pulse" />

                        <div className="space-y-2">
                            <div className="h-6 w-full bg-base-300 rounded animate-pulse" />
                            <div className="h-6 w-2/3 bg-base-300 rounded animate-pulse" />
                        </div>

                        <div className="space-y-2 mt-2">
                            <div className="h-3 w-full bg-base-300/50 rounded animate-pulse" />
                            <div className="h-3 w-full bg-base-300/50 rounded animate-pulse" />
                            <div className="h-3 w-3/4 bg-base-300/50 rounded animate-pulse" />
                        </div>

                        <div className="mt-auto pt-4 border-t border-base-300 flex justify-between items-center">
                            <div className="h-4 w-20 bg-primary/20 rounded animate-pulse" />
                            <div className="h-4 w-4 bg-base-300 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}