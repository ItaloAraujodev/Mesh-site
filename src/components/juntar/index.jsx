import imgsJuntar from "../../utils/juntar"
import { motion } from "framer-motion"

export default function Juntar() {
    return (
        <div id="juntar" className="w-full h-auto pb-1 bg-gradient-to-r from-line-linear-azul to-line-linear-red ">
            <div className="w-full h-full bg-gradient-to-r from-azul-claro via-saturation-azul-escuro to-azul-claro text-white flex justify-center py-24">
                <div className="flex flex-col justify-center items-center">
                    <div data-aos="fade-down" className="w-[90%] flex flex-col items-center mb-12">
                        <h2 className='font-russo-one text-center leading-2 text-[42px] 360:text-[2rem] 360:mb-[3.5rem]'>Porque você deve ser juntar a nós</h2>
                    </div>

                    <div className="w-full flex 360:flex-col justify-center items-center gap-8 md:gap-5 full:gap-12">
                        {imgsJuntar.map((item, index) => (
                            <motion.div
                                key={index} 
                                whileHover={ { background: "linear-gradient(#EC2158, #EC2158, #498CF1)" }  }
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                data-aos="zoom-in"
                                className=" w-[16rem] h-[19rem] md:w-[10rem] md:h-[14rem] lg:w-[13.5rem] lg:h-[17.5rem] full:w-[18rem] full:h-[22rem] py-[2px] px-[2px] rounded-[10px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro">
                                <div  className="w-full h-full bg-azul-claro rounded-[10px]">
                                    <div className="w-full rounded-[10px] overflow-hidden ">
                                        <motion.img 
                                        whileHover={ { scale: 1.3, overflow: "hidden", rotate: "-5deg" } }
                                        transition={ { duration: 0.5 } }
                                        src={item.imagem} alt={item.title} className="w-full object-container rounded-[10px] " />
                                    </div>

                                    <div className="m-6 md:m-3">
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