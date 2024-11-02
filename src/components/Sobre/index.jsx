import sobre from '../../assets/Sobre/sobre.avif';
/* import { useEffect } from 'react';
import Aos from 'aos'; */
import 'aos/dist/aos.css';
import Button from '../Button';

export default function Sobre() {

    return (
        <div id='sobre' className="w-full h-[55rem] 360:h-auto md:h-[auto] py-1 bg-gradient-to-r from-line-linear-azul to-line-linear-red relative ">
            <div className="w-full h-full text-white flex justify-center bg-gradient-to-r from-saturation-azul-escuro to-saturation-preto">
                <div className="w-[90%] h-full flex flex-col justify-center overflow-x-hidden">
                    <h2 data-aos="fade-down" className="font-russo-one my-8 text-[42px] lg:text-[48px] 360:text-[2rem] text-center font-white">Sobre nós</h2>
                    <div className="flex 360:flex-col md:flex-col items-center">
                        <div data-aos="fade-right" className="w-[60%] lg:w-[60%] 360:w-auto md:w-[60%] sm:w-[80%]">
                            <img src={sobre} alt="Foto de um robo" draggable="false" />
                        </div>

                        <div data-aos="fade-left" className="w-[50%] 360:w-[90%] sm:p-12 md:w-full md:p-12 360:py-6 text-justify flex flex-col gap-16 text-base md:text-xl lg:gap-8 xl:gap-8 1440:text-xl 2xl:text-xl full:text-xl">
                            <div className="flex items-center">
                                <span className="text-saturation-green">▸</span>
                                <p className="ml-5">Aqui na Mesh Labs conectamos ideias e tecnologia para criar soluções inovadoras e escaláveis. Somos especialistas em desenvolvimento de produtos digitais que impulsionam o seu negócio para o sucesso</p>
                            </div>

                            <div className="flex items-center">
                                <span className="text-saturation-green">▸</span>
                                <p className="ml-5">Laboratório de criatividade e tecnologia. Desenvolvemos produtos digitais personalizados, combinando design e engenharia de ponta para transformar ideias em realidade</p>
                            </div>

                            <div className="flex items-center">
                                <span className="text-saturation-green">▸</span>
                                <p className="ml-5">Oferecemos serviços de consultoria e desenvolvimento de produtos digitais, ajudando você a alcançar resultados excepcionais no mercado atual.</p>
                            </div>
                            <div className='w-[260px] 360:mx-auto sm:mx-0 mb-10'>
                                <Button text="Conheça mais sobre nós" url="#inte" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}