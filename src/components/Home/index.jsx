import espaco from '../../assets/Home/espaco.svg'

export default function Home() {
    return (
        <section id='home' className="w-full relative h-[55rem] sm:h-[40rem] 360:h-[26rem] md:h-[40rem] bg-saturation-preto z-0" >
            <div className='flex items-center justify-center mb-4 z-10 360:py-4'>
                <div className="w-full h-[90%] absolute 360:top-10 top-0 md:top-[4rem] lg:top-2 xl:top-[3rem] full:top-8 flex justify-center">
                    <img src={espaco} alt="Imagem do espaço" className='' />
                </div>
                <div data-aos="zoom-in" className="w-[45%] 360:w-[75%] h-80 mt-24 360:mt-28 sm:mt-32 md:mt-44 lg:mt-32 xl:mt-36 1440:mt-32 2xl:mt-32 full:mt-48 flex flex-col items-center text-center text-white gap-7 360:gap-2 sm:gap-8 md:gap-4">
                    <h3 className="font-bold 360:text-[1rem] text-base xl:text-lg 2xl:text-xl full:text-2xl         
                italic">Bem-vindo à Mesh</h3>
                    <h2 className="text-display-large 360:text-[1.9rem] sm:text-[2.5rem] 360:leading-8 md:text-3xl lg:text-5xl xl:text-5xl 1440:text-6xl 2xl:text-6xl full:text-7xl leading-custom-leading font-russo-one">
                        Encontre seu <br /> espaço na Web3{" "}
                    </h2>
                    <p className="text-base 360:text-[12px] 360:leading-3 sm:text-base md:text-sm 2xl:text-lg full:text-xl">
                        Somos um LABS, uma comunidade global de construtores. Acreditamos que
                        todos têm o direito de construir, aprender e experimentar novas
                        idéias, construir para o lucro ou para o bem maior.
                    </p>
                </div>
            </div>
        </section>
    )
}