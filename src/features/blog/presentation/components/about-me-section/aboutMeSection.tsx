import Image from 'next/image';
import Link from 'next/link';
import { Copies } from '../../constants/copies/copies';

const AboutMeSection = () => {

    return (
        <div className='flex flex-col justify-center items-center self-center min-h-96 pt-8 px-4'>

            <h3 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300 font-display text-center mt-10'>{Copies.aboutMeSection.title}</h3>

            <div className="flex flex-col md:flex-row gap-4 mt-8 mx-auto justify-center items-center">
                <article className='w-[300px] h-[300px] md:border-r-[1px] border-primary pr-0 md:pr-4'>
                    <Image src={Copies.aboutMeSection.imageUrl} alt={Copies.aboutMeSection.imageAlt} width={300} height={300} className='object-cover rounded-lg' />
                </article>

                <section className='flex flex-col justify-start mt-4 md:mt-0 px-2 md:px-0'>
                    <p className='font-sans font-normal max-w-md text-start px-2'>{Copies.aboutMeSection.description}</p>
                    <Link className='btn-primary btn mt-8 max-w-96 self-center font-display' href={Copies.aboutMeSection.moreInfoUrl} >Conoce más sobre mí</Link>
                </section>
            </div>

        </div>

    );

};

export default AboutMeSection;