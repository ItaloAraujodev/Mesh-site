import { listIntegrantes } from '../../utils/integrantes'
import { ImLinkedin } from 'react-icons/im'
import { motion } from "framer-motion"

// hover:bg-gradient-to-bl hover:from-line-linear-red hover:to-saturation-azul-escuro

export default function Integrantes() {
    return (
        <div id='inte' className="w-full h-full  bg-gradient-to-r from-line-linear-azul to-line-linear-red ">
            <div className="w-full h-full bg-azul-claro text-white flex flex-col items-center py-14">
                <h2 data-aos="fade-down" className='text-[42px] 360:text-[2rem] font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-line-linear-red via-line-linear-red to-saturation-azul-escuro' >Integrantes</h2>
                <div className='mt-12 grid grid-cols-3 gap-32 360:grid-cols-1 360:gap-12 md:grid-cols-2 md:gap-20 lg:gap-16 full:gap-48'>
                    {listIntegrantes.map((item, index) => (
                        <motion.div
                            whileHover={{ background: "linear-gradient(to bottom left, #EC2158, #EC2158, 80%, #498CF1)" }}
                            transition={
                                { ease: "linear", duration: 0.3}}
                            data-aos="zoom-in"
                            key={index}
                            className='w-[280px] h-72 md:w-[220px] md:h-[15rem] flex items-center rounded-[30px] lg:w-[230px] lg:h-64 py-[2px]  px-[2px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro ' >
                            <div
                                className='w-full group h-full bg-azul-claro rounded-[28px] py-3 px-10 flex flex-col relative'>
                                <div
                                    className='group-hover:invisible flex flex-col items-center'>
                                    <div className='w-40 h-40 md:w-28 md:h-28 lg:w-32 lg:h-32'>
                                        <img src={item.imagem} alt={`Foto do ${item.name}`} className='object-cover rounded-[20px]' />
                                    </div>

                                    <div className='text-center mt-2'>
                                        <h2 className='text-saturation-green text-lg lg:text-base md:text-base' >{item.nome}</h2>
                                        <p className='lg:text-sm full:text-lg md:text-sm'>{item.funcao}</p>
                                    </div>
                                </div>

                                <div className='mt-3 mx-auto'>
                                    <a href={item.linkedin} className=' text-blue-600 text-2xl text-center lg:text-xl'>{item.linkedin !== undefined ? <ImLinkedin /> : ''}</a>
                                </div>

                                <div

                                    className='invisible group-hover:visible absolute top-0 left-0 p-6 text-center'>
                                    <p className='text-[#C1C5D6]'>{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}