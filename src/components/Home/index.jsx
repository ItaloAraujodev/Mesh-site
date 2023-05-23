import espaco from '../../assets/Home/espaco.avif';
import { Trabalhamos } from '../trabalhamos';

export default function HomeComp() {
    return (
        <main className='w-full h-auto bg-gradient-to-tr from-[#181F36] from-30% via-[#10121D] to-[#10121D] '>
            <section id='home' className="w-full relative h-screen z-0" >
                <div className='flex items-center justify-center mb-4 z-10'>
                    <div className="360:h-[80%] flex justify-center absolute m-auto top-0  left-0 right-0 bottom-0 360:bottom-8"> {/* 360:bottom-28 */}
                        <img src={espaco} alt="Imagem do espaço" draggable="false" className='object-cover' />
                    </div>
                    <div data-aos="" className="w-[50%] h-[50%] 360:w-[80%] 2xl:w-[40%] md:w-[80%] text-white text-center absolute m-auto top-1/2 -translate-y-1/2  360:bottom-20 space-y-5"> {/* 360:bottom-20 */}
                        <h3 className="font-bold text-base 360:text-[1rem] xl:text-lg 2xl:text-xl full:text-2xl         
                        italic">Bem-vindo à Mesh</h3>
                        <h2 className="text-[60px] 360:text-[40px] md:text-[60px] xl:text leading-none font-russo-one">
                            Encontre seu <br /> espaço na Web3{" "}
                        </h2>
                        <p className="text-base 360:text-[16px] 360:leading-[18px] sm:text-base md:text-lg xl:text-xl 2xl:text-lg full:text-xl">
                            Somos um laboratório digital especializado em oferecer serviços de ponta. Nossa expertise está em ajudar empresas e empreendedores a transformar suas ideias em realidade!
                        </p>
                    </div>
                </div>
            </section>

            <Trabalhamos />
            
        </main>
    )
}