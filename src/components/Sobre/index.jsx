import sobre from '../../assets/Sobre/sobrenos.svg';
/* import { useEffect } from 'react';
import Aos from 'aos'; */
import 'aos/dist/aos.css';
import Button from '../Button';

export default function Sobre() {


    return (
        <div id='sobre' className="w-full h-[55rem] 360:h-auto md:h-[auto] py-1 bg-gradient-to-r from-line-linear-azul to-line-linear-red relative ">
            <div className="w-full h-full text-white flex justify-center bg-gradient-to-r from-saturation-azul-escuro to-saturation-preto">
                <div className="w-[90%] h-full flex flex-col justify-center overflow-x-hidden">
                    <h2 data-aos="fade-down" className="my-8 text-[42px] 360:text-[2rem] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-b from-green-400 via-green-400 to-saturation-azul-escuro">Sobre nós</h2>
                    <div className="flex 360:flex-col md:flex-col items-center">
                        <div data-aos="fade-right" className="w-[60%] lg:w-[60%] 360:w-auto md:w-[60%] sm:w-[80%]">
                            <img src={sobre} alt="Foto de um robo" />
                        </div>

                        <div data-aos="fade-left" className="w-[50%] 360:w-[90%] sm:p-12 md:w-full md:p-12 360:py-6 text-justify flex flex-col gap-16 text-base md:text-xl lg:gap-8 xl:gap-8 1440:text-xl 2xl:text-xl full:text-xl">
                            <div className="flex items-center">
                                <span className="text-saturation-green">▸</span>
                                <p className="ml-5">Com o nosso Labs, você pode elevar seu trabalho a um novo patamar e ao mesmo tempo, ajudar a construir um mundo melhor. Não estamos aqui para dominar, mas sim para revolucionar a maneira como as pessoas trabalham e se comunicam.</p>
                            </div>

                            <div className="flex items-center">
                                <span className="text-saturation-green">▸</span>
                                <p className="ml-5">Nossa visão é democratizar o acesso à informação, para que qualquer indivíduo possa aprender e se desenvolver, independentemente de onde esteja. Se você compartilha dessa mesma visão, junte-se a nós para mudar o mundo.</p>
                            </div>

                            <div className="flex items-center">
                                <span className="text-saturation-green">▸</span>
                                <p className="ml-5">Saiba mais sobre o nosso trabalho e venha fazer a diferença conosco. Juntos, podemos alcançar grandes conquistas e tornar o mundo um lugar mais inclusivo e acessível para todos.</p>
                            </div>
                            <div className='360:mx-auto sm:mx-0 mb-10'>
                                <Button text="Conheça mais sobre nós" url="#inte" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}