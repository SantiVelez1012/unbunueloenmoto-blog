import StoryScroller from "../components/story-scroller/storyScroller";
import Image from "next/image";

const AboutPage = () => {

    return (
        <div className="mx-auto flex flex-col gap-8 py-24">
            <div className="border-t-[0.5px] border-primary"><StoryScroller /></div>
            <h1 className="font-display text-4xl mt-24 font-bold text-center mx-5">¿Quién es Un Buñuelo en Moto?</h1>
            <div className="mb-24 mx-auto">
                <section className="flex mt-24 flex-col md:flex-row items-center flex-wrap px-4 justify-center gap-16">
                    <div className="border-r-4 border-primary pr-4 max-w-lg flex flex-col">
                        <p className="max-w-md text-justify text-lg text-content font-sans">
                            Soy Santiago Vélez, un apasionado creador de contenido que ha recorrido un largo camino desde mis inicios en YouTube. En Colombia, &apos;buñuelo&apos; es el novato, y así comenzó mi aventura en el mundo del motociclismo y la creación de videos. Con más de 100 videos y 2 años de dedicación, he compartido mis experiencias, aprendizajes y la pasión por las motos con una comunidad increíblemente acogedora. Mi misión es inspirar a otros a explorar el mundo sobre dos ruedas, promoviendo la seguridad y el respeto en la carretera. ¡Acompáñame en este viaje y descubre más sobre mí y mi pasión por las motos!
                        </p>
                    </div>

                    <Image src="/imgs/about/4.jpg" className="rounded-lg self-center" alt="Description" width={400} height={300} />
                </section>
                <section className="flex mt-24 flex-col md:flex-row items-center flex-wrap px-4 justify-center gap-16">
                    <Image src="/imgs/about/6.jpg" className="rounded-lg self-center" alt="Description" width={400} height={300} />
                    <div className="border-l-4 border-primary pl-4 max-w-lg flex flex-col">
                        <p className="max-w-md text-justify text-lg text-content font-sans">
                            Soy Santiago Vélez, un apasionado creador de contenido que ha recorrido un largo camino desde mis inicios en YouTube. En Colombia, &apos;buñuelo&apos; es el novato, y así comenzó mi aventura en el mundo del motociclismo y la creación de videos. Con más de 100 videos y 2 años de dedicación, he compartido mis experiencias, aprendizajes y la pasión por las motos con una comunidad increíblemente acogedora. Mi misión es inspirar a otros a explorar el mundo sobre dos ruedas, promoviendo la seguridad y el respeto en la carretera. ¡Acompáñame en este viaje y descubre más sobre mí y mi pasión por las motos!
                        </p>
                    </div>

                </section>
            </div>


        </div>
    );

};

export default AboutPage;