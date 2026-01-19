import { StorySectionData } from "../../entities/storySection";

export class AboutCopies {

    static readonly STORY_SECTIONS: StorySectionData[] = [
        {
            id: 1,
            title: "La Identidad",
            text: "Me llamo Santiago Velez. En Medellín, el tráfico es una escuela de supervivencia. Llevo 4 años rodando y he aprendido que el motociclismo no es ser el más rápido, sino disfrutar cada kilómetro.",
            img: "/imgs/about/1.jpeg", // ⚠️ Asegúrate de tener estas fotos
            align: "justify-end", // Texto a la izquierda
        },
        {
            id: 2,
            title: "El Origen",
            text: "En Colombia, 'buñuelo' es el novato, el que comete errores. Muchos lo usan como insulto; yo lo uso como bandera. Creé este canal porque estaba cansado de los 'expertos'. Aquí se vale equivocarse.",
            img: "/imgs/about/2.jpeg",
            align: "justify-end", // Texto a la derecha
        },
        {
            id: 3,
            title: "La Misión",
            text: "100 videos. 2 años. Una TTR 200 modificada. Mi propósito es simple: Aprender sobre motos y disfrutar mi vida. Si puedo ayudarte a perder el miedo, la rodada ha valido la pena.",
            img: "/imgs/about/3.jpg",
            align: "justify-center", // Texto centrado
        },
    ];


}