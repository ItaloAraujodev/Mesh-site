import espaco from '../../assets/Home/espaco.svg'

export default function HomeComp() {
    return (
        <section id='home' className="w-full relative h-screen bg-gradient-to-br from-[#181F36] via-[#181F36] to-[#10121D] z-0" >
            <div className='flex items-center justify-center mb-4 z-10'>
                <div className="w-full h-[90%] 360:h-[80%] flex justify-center absolute m-auto top-0 left-0 right-0 bottom-0 360:bottom-8"> {/* 360:bottom-28 */}
                    <img src={espaco} alt="Imagem do espaço" draggable="false" className='object-cover'/>
                </div>
                <div data-aos="" className="w-[50%] h-[50%] 360:w-[80%] text-white text-center absolute m-auto top-0 left-0 right-0 bottom-0 360:bottom-20"> {/* 360:bottom-20 */}
                    <h3 className="font-bold text-base 360:text-[1rem] xl:text-lg 2xl:text-xl full:text-2xl         
                italic">Bem-vindo à Mesh</h3>
                    <h2 className="text-display-large my-10 360:my-6 360:text-[2.5rem] 360:leading-[2.8rem] 414:text-[2.5rem] sm:text-[2.5rem] md:text-5xl lg:text-5xl xl:text-6xl 1440:text-6xl 2xl:text-6xl full:text-7xl leading-custom-leading font-russo-one">
                        Encontre seu <br /> espaço na Web3{" "}
                    </h2>
                    <p className="text-base 360:text-[16px] 360:leading-[18px] sm:text-base md:text-lg xl:text-xl 2xl:text-lg full:text-xl">
                    Somos um laboratório digital especializado em oferecer serviços de ponta. Nossa expertise está em ajudar empresas e empreendedores a transformar suas ideias em realidade!
                    </p>
                </div>
            </div>
            
        </section>
    )
}