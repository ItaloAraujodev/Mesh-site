import icon from '../../assets/Nav/logo.svg';
import brasil from '../../assets/Nav/brasil.svg';
import american from '../../assets/Nav/american.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function navBar() {

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toogle, setToogle] = useState(false)

    return (
        <nav className='w-full h-auto relative bg-navBar z-10'>
            <div className='w-full h-16 fixed bg-navBar flex justify-center 360:hidden sm:hidden'>
                <div className='w-10/12 flex items-center justify-between'>
                    <div>
                        <a href="/"><img src={icon} alt="Logo da Mesh" draggable="false" /></a>
                    </div>
                    <div>
                        <ul className='text-white text-base md:text-sm full:text-lg flex gap-8 lg:gap-16 xl:gap-14 1440:gap-16 2xl:gap-[5rem] full:gap-[6rem] '>
                            <li><a href="#home" className='hover:text-saturation-azul-escuro'>Home</a></li>
                            <li><a href="#atividade" className='hover:text-saturation-azul-escuro'>Serviços</a></li>
                            <li><a href="#sobre" className='hover:text-saturation-azul-escuro'>Quem somos</a></li>
                            <li><a href="#fale" className='hover:text-saturation-azul-escuro'>Fale Conosco</a></li>
                            <li><a href="#inte" className='hover:text-saturation-azul-escuro'>Equipe</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-4 full:gap-6'>
                        <img src={brasil} alt="Bandeira do brasil" draggable="false" />
                        <img src={american} alt="Bandeira do Estados unidos" draggable="false"/>
                    </div>
                </div>
            </div>

            <div className='w-[100%] h-16 bg-navBar fixed md:hidden lg:hidden xl:hidden 2xl:hidden 1440:hidden full:hidden z-30'>
                <motion.div
                    initial={false}
                    animate={toogle ? "open" : "closed"}
                    className={`w-[100%] h-[64px] flex justify-between items-center relative`}
                >
                    <div className='w-[80%] h-full mx-auto justify-between items-center flex'>
                        <div>
                            <img src={icon} alt="Logo da Mesh" draggable="false" />
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setToogle(!toogle)}
                            className='text-blue-600 text-3xl'
                        >
                            {toogle ? <AiOutlineClose /> : <BiMenu />}
                        </motion.button>
                    </div>
                    <motion.ul
                        className="w-full flex flex-col p-4 gap-4 bg-navBar text-white absolute top-14"
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3
                                }
                            }
                        }}
                        style={{ pointerEvents: toogle ? "auto" : "none" }}
                    >
                        <motion.li variants={itemVariants}><a href="#home" className='hover:text-saturation-azul-escuro'>Home</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#atividade" className='hover:text-saturation-azul-escuro'>Serviços</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#sobre" className='hover:text-saturation-azul-escuro'>Quem somos</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#fale" className='hover:text-saturation-azul-escuro'>Fale Conosco</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#inte" className='hover:text-saturation-azul-escuro'>Equipe</a></motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </nav>
    )
}

export default navBar