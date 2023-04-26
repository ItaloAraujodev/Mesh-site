import sobre from '../../assets/Sobre/sobrenos.svg';
/* import Button from '../Button'; */
import ScrollLink from '../transition';

export default function Sobre() {
    return (
            <div id='sobre' className="w-full h-[45rem] py-1 bg-gradient-to-r from-line-linear-azul to-line-linear-rosa relative ">
                <div className="w-full h-full bg-gradient-to-r from-saturation-azul-escuro to-saturation-preto text-white flex items-center justify-center">
                    <div className="w-largura-person h-[40rem]">
                        <h2 className="my-8 text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saturation-green to-saturation-green ">Sobre nós</h2>
                        <div className="flex items-center justify-between">
                            <div className="w-2/4">
                                <img src={sobre} alt="" className="h-[35rem]" />
                            </div>

                            <div className=" text-xl text-justify flex flex-col gap-14 w-2/4">
                                <div className="flex items-center">
                                    <span className="text-saturation-green">▸</span>
                                    <p className="ml-5">Nossa DAO vai ajudá-lo a fazer o seu melhor trabalho, ao mesmo tempo em que causamos um impacto positivo no mundo ao nosso redor.</p>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-saturation-green">▸</span>
                                    <p className="ml-5">Saiba mais sobre o nosso trabalho e venha fazer a diferença conosco. Juntos, podemos alcançar grandes conquistas e tornar o mundo um lugar mais inclusivo e acessível para todos.</p>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-saturation-green">▸</span>
                                    <p className="ml-5">Queremos democratizar o acesso à informação. tornar possível que qualquer pessoa, em qualquer lugar, possa aprender.</p>
                                </div>
                                <ScrollLink href="#fale">Texto</ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}