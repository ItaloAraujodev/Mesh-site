import espaco from '../../assets/Home/espaco.svg'

export default function Home() {
    return (
        <section id='home' className="w-full relative h-screen bg-saturation-preto z-0" >
            <div className='flex items-center justify-center mb-4 z-10'>
                <div className="w-full h-[90%] absolute top-0 md:top-[-8rem] lg:top-2 xl:top-[-1rem] flex justify-center">
                    <img src={espaco} alt="Imagem do espaço" className='w-full' />
                </div>
                <div data-aos="zoom-in" className="w-[45%] h-80 mt-24 md:mt-40 lg:mt-28 1440:mt-32 2xl:mt-32 full:mt-36 flex flex-col items-center text-center text-white gap-7 md:gap-4">
                    <h3 className="font-bold text-base xl:text-lg 2xl:text-xl full:text-2xl         
                italic">Bem-vindo à Mesh</h3>
                    <h2 className="text-display-large md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl full:text-7xl leading-custom-leading font-russo-one">
                        Encontre seu <br /> espaço na Web3{" "}
                    </h2>
                    <p className="mt-2 text-base md:text-sm 2xl:text-lg full:text-xl">
                        Somos um LABS, uma comunidade global de construtores. Acreditamos que
                        todos têm o direito de construir, aprender e experimentar novas
                        idéias, construir para o lucro ou para o bem maior.
                    </p>
                </div>
            </div>
        </section>
    )
}