import imgsJuntar from "../../utils/juntar"
import { motion } from "framer-motion"

export default function Juntar() {
    return (
        <div id="juntar" className="w-full h-[50rem] pb-1 bg-gradient-to-r from-line-linear-azul to-line-linear-red ">
            <div className="w-full h-full bg-gradient-to-r from-azul-claro via-saturation-azul-escuro to-azul-claro text-white flex justify-center">
                <div className="flex flex-col justify-center items-center">
                    <div data-aos="fade-down" className="flex flex-col items-center">
                        <h2 className='leading-2 text-[42px] mb-12 text-transparent bg-clip-text bg-gradient-to-b from-green-400 via-green-400 to-saturation-azul-escuro'>Porque você deve ser juntar a nós</h2>
                        <p className=" text-center mt-[-2.5rem] text-xl">Seja Membro da MESH e faça parte da construção de um modelo de mercado descentralizado</p>
                    </div>
                    {/* overflow-hidden bg-cover bg-no-repeat  */}
                    <div className="w-full flex justify-center items-center gap-8 full:gap-12">
                        {imgsJuntar.map((item, index) => (
                            <motion.div
                                key={index} 
                                whileHover={ { backgroundColor: ["#44F26B", "#EC2158"] }  }
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                data-aos="zoom-in"
                                className="mt-12 w-[16rem] h-[19rem] md:w-[10rem] md:h-[15rem] lg:w-[13.5rem] lg:h-[17.5rem] full:w-[18rem] full:h-[22rem] py-[2px] px-[2px] rounded-[10px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro">
                                <div  className="w-full h-full bg-azul-claro rounded-[10px]">
                                    <div className="w-full rounded-[10px] overflow-hidden ">
                                        <motion.img 
                                        whileHover={ { scale: 1.3, overflow: "hidden", rotate: "-5deg" } }
                                        transition={ { duration: 0.5 } }
                                        src={item.imagem} alt={item.title} className="w-full object-container rounded-[10px] " />
                                    </div>

                                    <div className="m-6">
                                        <h3 className="text-lg md:text-sm lg:text-base text-center">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}