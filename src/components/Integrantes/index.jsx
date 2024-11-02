import { listIntegrantes } from '../../utils/integrantes';
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';

export default function Integrantes() {


    return (
        <div id='inte' className="w-full h-full bg-gradient-to-r from-line-linear-azul to-line-linear-red">
            <div className="w-full h-full bg-[#10121D] text-white flex flex-col items-center py-20">
                <h2 data-aos="fade-down" className='font-russo-one text-[42px] lg:text-[48px] 360:text-[2rem] mb-4'>Nossa equipe</h2>
                <div className='my-16 flex gap-6 flex-wrap justify-center px-4 md:px-0'>
                    {listIntegrantes.map((item, index) => (
                        <Link className={`bg-gradient-to-bl from-saturation-green to-saturation-azul-claro p-0.5 rounded-sm transform transition-transform duration-300 hover:-translate-y-3`} key={index}

                        >
                            <div className='w-[280px] h-[400px] sm:w-[300px] sm:h-[420px] rounded-sm bg-azul-claro'>
                                <div>
                                    <img src={item.imagem} alt={item.name} className='w-full sm:h-full rounded-sm object-contain' />
                                </div>
                                <div className='text-white flex flex-col items-center gap-2 mt-2'>
                                    <div>
                                        <h3 className='text-white text-center font-bold text-[20px] sm:text-[24px]'>{item.nome}</h3>
                                        <p className='text-white text-center text-[14px] sm:text-[16px]'>{item.funcao}</p>
                                    </div>
                                    <a href={item.linkedin} target='_blank' rel='noreferrer' className='text-white text-center mt-2'>
                                        <ImLinkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
