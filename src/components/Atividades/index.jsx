import { atividades } from '../../utils/atividades';
import carrosel from '../../assets/Atividades/carrosel.svg';
import carroselBlack from '../../assets/Atividades/carroselBlack.svg';
import './custom.css';

export default function Atividades() {
    return (
        <div className="w-full h-[50rem] pb-1 bg-gradient-to-r from-line-linear-azul to-line-linear-rosa ">
            <div className="w-full h-full bg-linear-escuro text-white flex items-center justify-center">
                <div className='w-full h-2/3 flex flex-col'>
                    <h2 className='text-center font-semibold text-[42px] mb-12 teste'>Nossas Atividades</h2>
                    <div className="w-full flex justify-center items-center gap-16 lg:gap-10 full:gap-[6rem]">
                        {atividades.map((item, index) => (
                            <div key={index} className="w-80 h-[19rem] lg:w-72 lg:h-72 full:w-[20rem] full:h-[18.5rem] py-1 px-1 rounded-[57px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro">
                                <div className='w-full h-full rounded-[57px] flex flex-col justify-center items-center gap-8 bg-linear-escuro'>
                                    <div>
                                        <img src={ item.imagem != undefined ? item.imagem : '' } alt={item.title} className='w-[90%] full:w-full' />
                                    </div>

                                    <div>
                                        <h3 className='w-full h-16 text-2xl text-center lg:text-xl'>{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center gap-5 mt-16'>
                        <img src={carrosel} alt="" />
                        <img src={carroselBlack} alt="" />
                        <img src={carroselBlack} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}