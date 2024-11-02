import icon from '../../assets/Nav/logo.svg';
import brasil from '../../assets/Nav/brasil.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdArrowOutward } from "react-icons/md";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [toogle, setToogle] = useState(false);

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        console.log(isScrolled)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [window.scrollY]);

    return (
        <nav className={`w-full h-auto relative z-10`}

        >
            {/* NavBar Desktop */}
            <div className={`h-24 m-auto flex items-center gap-10 justify-between 360:hidden md:flex fixed w-full ${isScrolled ? '!bg-[#0E192A]' : 'bg-transparent'}`}>
                <div className='flex items-center gap-10 justify-between'>
                    <div className='h-full flex items-center'>
                        <img src={icon} alt="Logo da Mesh" draggable="false" className='w-16 h-8' />
                        <h1 className='text-white text-2xl font-russo-one'>Mesh Labs</h1>
                    </div>
                    <ul className='text-white font-medium'>
                        <li><a href="#process">Nosso Processo</a></li>
                    </ul>
                </div>
                <div className='flex items-center mr-8 gap-8'>
                    <div className='bg-[#283563]/30 px-8 flex items-center rounded-md h-12'>
                        <img src={brasil} alt="Bandeira do Brasil" draggable="false" className='w-8 h-8' />
                    </div>
                    <div className='w-64 h-14 rounded-xl text-white flex items-center justify-center bg-[#283563] gap-4 transition-all hover:bg-[#283563]/60'>
                        <a href="https://1y7idwqhetx.typeform.com/to/Y2RL4h8P" target="_blank" className='font-bold text-base cursor-pointer' rel="noreferrer">Fale com um especialista</a>
                        <MdArrowOutward />
                    </div>
                </div>
            </div>
            {/* NavBar Mobile */}
            <div className='w-full h-16 bg-[#10121D] fixed md:hidden lg:hidden xl:hidden 2xl:hidden 1440:hidden full:hidden z-50'>
                <motion.div
                    initial={false}
                    animate={toogle ? "open" : "closed"}
                    className={`w-full h-16 flex justify-between items-center relative transition duration-200`}
                >
                    <div className='w-[80%] h-full mx-auto justify-between items-center flex'>
                        <div>
                            <a href="/"><img src={icon} alt="Logo da Mesh" draggable="false" /></a>
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
                        className="w-full flex flex-col pt-6 pb-10 px-4 gap-4 bg-[#10121D] text-white absolute top-14"
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 5px)",
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
                        <motion.li variants={itemVariants} className='text-center mb-2'>
                            <a href="/#process" className='hover:opacity-80 relative group text-center text-lg font-raleway'>
                                Nosso processo
                                <span className='absolute left-0 right-0 bottom-[-5px] h-[2px] bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-200'></span>
                            </a>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <div className='flex flex-col justify-center items-center gap-6'>
                                <div className='bg-[#283563]/30 px-8 flex items-center rounded-md h-12'>
                                    <img src={brasil} alt="Bandeira do Brasil" draggable="false" className='w-8 h-8' />
                                </div>
                                <div className='w-64 h-14 rounded-xl text-white flex items-center justify-center cursor-pointer bg-[#283563] gap-4'>
                                    <a href="#process" className='font-bold text-base'>Fale com um especialista</a>
                                    <MdArrowOutward />
                                </div>
                            </div>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </nav>
    );
}

export default NavBar;
