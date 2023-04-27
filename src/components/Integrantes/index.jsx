import { listIntegrantes } from '../../utils/integrantes'
import { ImLinkedin } from 'react-icons/im'

export default function Integrantes() {
    return (
        <div id='inte' className="w-full h-full  bg-gradient-to-r from-line-linear-azul to-line-linear-rosa ">
            <div className="w-full h-full bg-linear-escuro text-white flex flex-col items-center py-14">
                <h2 data-aos="zoom-in" className='text-[42px] font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-line-linear-red via-line-linear-red to-saturation-azul-escuro' >Integrantes</h2>
                <div className='mt-12 grid grid-cols-3 gap-32 lg:gap-16 full:gap-48'>
                    {listIntegrantes.map((item, index) => (
                        <div data-aos="zoom-in" key={index} className='w-[280px] h-72 lg:w-[230px] lg:h-64 rounded-[30px] py-1 px-1 bg-gradient-to-bl from-saturation-green to-saturation-azul-claro' >
                            <div className='w-full h-full bg-linear-escuro rounded-[30px] py-3 px-10 flex flex-col items-center'>
                                <div className='w-40 h-40 lg:w-32 lg:h-32'>
                                    <img src={item.imagem} alt={`Foto do ${item.name}`} className='object-cover rounded-[20px]'/>
                                </div>
                                <div className='text-center mt-1'>
                                    <h2 className='text-saturation-green text-lg lg:text-base' >{item.nome}</h2>
                                    <p className='lg:text-sm full:text-lg'>{item.funcao}</p>
                                </div>
                                <div className='mt-3 mx-auto'>
                                    <a href={item.linkedin} className=' text-blue-600 text-2xl text-center lg:text-xl'>{ item.linkedin !== undefined ? <ImLinkedin/> : '' }</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}