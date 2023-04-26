import { listIntegrantes } from '../../utils/integrantes'
import { ImLinkedin } from 'react-icons/im'

export default function Integrantes() {
    return (
        <div className="w-full h-full bg-gradient-to-r from-line-linear-azul to-line-linear-rosa ">
            <div className="w-full h-full bg-linear-escuro text-white flex flex-col items-center py-14">
                <h2 className='text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-t from-line-linear-red to-saturation-red' >Integrantes</h2>
                <div className='mt-12 grid grid-cols-3 gap-x-44 gap-y-32'>
                    {listIntegrantes.map((item, index) => (
                        <div key={index} className='w-[280px] h-72 rounded-[30px] py-1 px-1 bg-gradient-to-bl from-saturation-green to-saturation-azul-claro' >
                            <div className='w-full h-full trans bg-linear-escuro rounded-[30px] py-3 px-10 flex flex-col items-center'>
                                <div className='w-40 h-40'>
                                    <img src={item.imagem} alt={`Foto do ${item.name}`} className='object-cover rounded-[20px]'/>
                                </div>
                                <div className='text-center mt-1'>
                                    <h2 className='text-saturation-green text-lg' >{item.nome}</h2>
                                    <p>{item.funcao}</p>
                                </div>
                                <div className='mt-3 mx-auto '>
                                    <a href={item.linkedin} className=' text-blue-600 text-2xl text-center'>{ item.linkedin !== undefined ? <ImLinkedin/> : '' }</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}