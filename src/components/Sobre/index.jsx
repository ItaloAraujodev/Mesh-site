import sobre from '../../assets/Sobre/sobrenos.svg';
/* import { useEffect } from 'react';
import Aos from 'aos'; */
import 'aos/dist/aos.css';
import Button from '../Button';

export default function Sobre() {


    return (
            <div id='sobre' className="w-full h-[55rem] py-1 bg-gradient-to-r from-line-linear-azul to-line-linear-rosa relative ">
                <div className="w-full h-full bg-gradient-to-r from-saturation-azul-escuro to-saturation-preto text-white flex justify-center">
                    <div className="w-largura-person h-full flex flex-col justify-center overflow-x-hidden">
                        <h2 data-aos="fade-down" className="my-8 text-[42px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-b from-green-400 via-green-400 to-saturation-azul-escuro">Sobre nós</h2>
                        <div className="flex items-center">
                            <div data-aos="fade-right" className="w-[60%] lg:w-[60%]">
                                <img src={sobre} alt="Foto de um robo" className="h-[40rem]" />
                            </div>

                            <div data-aos="fade-left" className="w-[50%] text-justify flex flex-col gap-12 text-base lg:gap-8 xl:gap-8 1440:text-xl 2xl:text-xl full:text-xl">
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
                                <Button text="Conheça mais sobre nós" url="#inte" />
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
    )
}