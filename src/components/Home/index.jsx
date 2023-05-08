import espaco from '../../assets/Home/espaco.svg'

export default function Home() {
    return (
        <section id='home' className="w-full relative h-screen 360:h-screen md:h-screen bg-saturation-preto z-0" >
            <div className='flex items-center justify-center mb-4 z-10'>
                <div className="w-full h-[90%] 360:h-[70%] md:h-[80%] absolute top-0 360:top-20 md:top-[4rem] lg:top-2 xl:top-[3rem] full:top-8 flex justify-center">
                    <img src={espaco} alt="Imagem do espaço" className='object-cover' />
                </div>
                <div data-aos="" className="w-[45%] h-80 mt-24 360:w-[80%] md:w-[80%] 360:mt-40 414:mt-36 sm:mt-32 md:mt-56 lg:mt-32 xl:mt-48 1440:mt-32 2xl:mt-32 full:mt-48 flex flex-col items-center text-center text-white gap-7 360:gap-4 414:gap-6 sm:gap-8 md:gap-8">
                    <h3 className="font-bold text-base 360:text-[1rem] xl:text-lg 2xl:text-xl full:text-2xl         
                italic">Bem-vindo à Mesh</h3>
                    <h2 className="text-display-large 360:text-[2.5rem] 360:leading-[2.8rem] 414:text-[2.5rem] sm:text-[2.5rem] md:text-6xl lg:text-5xl xl:text-6xl 1440:text-6xl 2xl:text-6xl full:text-7xl leading-custom-leading font-russo-one">
                        Encontre seu <br /> espaço na Web3{" "}
                    </h2>
                    <p className="text-base 360:text-[14px] 360:leading-[18px] sm:text-base md:text-lg xl:text-xl 2xl:text-lg full:text-xl">
                        Somos um LABS, uma comunidade global de construtores. Acreditamos que
                        todos têm o direito de construir, aprender e experimentar novas
                        idéias, construir para o lucro ou para o bem maior.
                    </p>
                </div>
            </div>
        </section>
    )
}