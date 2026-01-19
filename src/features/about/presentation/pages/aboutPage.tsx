import StoryScroller from "../components/story-scroller/storyScroller";
import Image from "next/image";
import { AboutCopies } from "../constants/copies/copies";

const AboutPage = () => {

    return (
        <div className="mx-auto flex flex-col gap-8 py-24">
            <div className="border-t-[0.5px] border-primary"><StoryScroller /></div>
            <h1 className="font-display text-4xl mt-24 font-bold text-center mx-5">{AboutCopies.INFO_TITLE}</h1>
            <div className="mb-24 mx-auto">
                <section className="flex mt-24 flex-col md:flex-row items-center flex-wrap px-4 justify-center gap-16">
                    <div className="border-r-4 border-primary pr-4 max-w-lg flex flex-col">
                        <p className="max-w-md text-end text-lg text-content font-sans">
                            {AboutCopies.INFO_SECTIONS[0]}
                        </p>
                    </div>

                    <Image src="/imgs/about/section1.jpg" className="rounded-lg self-center" alt="Description" width={400} height={300} />
                </section>
                <section className="flex mt-24 flex-col md:flex-row items-center flex-wrap px-4 justify-center gap-16">
                    <Image src="/imgs/about/section2.jpg" className="rounded-lg self-center" alt="Description" width={400} height={300} />
                    <div className="border-l-4 border-primary pl-4 max-w-lg flex flex-col">
                        <p className="max-w-md text-start text-lg text-content font-sans">
                            {AboutCopies.INFO_SECTIONS[1]}
                        </p>
                    </div>

                </section>
            </div>


        </div>
    );

};

export default AboutPage;