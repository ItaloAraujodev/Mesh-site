import espaco from '../../assets/Home/espaco.svg'

export default function Home() {
    return (
        <section className="w-full relative h-screen bg-gradient-to-r from-bg-azul-escuro via-saturation-azul-escuro to-bg-azul-escuro z-0">
            <div className='flex items-center justify-center mb-4'>
                <div className="w-full h-[90%] absolute md:top-[-8rem] lg:top-2 xl:top-[-1rem] 2xl:top-0 flex justify-center">
                    <img src={espaco} alt="" className='w-full' />
                </div>
                <div className="w-[45%] h-80 mt-24 lg:mt-36 full:mt-36 1440:mt-32 md:mt-40 flex flex-col items-center text-center text-white gap-7 md:gap-4">
                    <h3 className="font-bold text-base xl:text-lg 2xl:text-xl full:text-2xl         
                italic">Bem-vindo à Mesh</h3>
                    <h2 className="md:text-3xl lg:text-5xl xl:text-6xl full:text-8xl text-display-large leading-custom-leading font-russo-one">
                        Encontre seu <br /> espaço na Web3{" "}
                    </h2>
                    <p className="mt-3 text-xl md:text-sm xl:text-base 2xl:text-lg full:text-2xl">
                        Somos um LABS, uma comunidade global de construtores. Acreditamos que
                        todos têm o direito de construir, aprender e experimentar novas
                        idéias, construir para o lucro ou para o bem maior.
                    </p>
                </div>
            </div>
        </section>
    )
}