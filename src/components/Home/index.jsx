import { MdArrowOutward } from "react-icons/md";
import gifs from '../../assets/gifs.webm';
import bg_gif from '../../assets/bg-gif.webp';

export default function HomeComp() {
    return (
        <main className='w-full h-screen bg-[#0E192A]/100 relative'>
            <div className="flex justify-end 360:hidden md:flex">
                <video src={gifs} autoPlay loop muted className="absolute h-screen opacity-5 " />
            </div>
            <div className="md:hidden">
                <img src={bg_gif} alt="bg-gif" className="w-full h-screen object-cover absolute opacity-5" />
            </div>
            <section id='home' className="w-full flex justify-center flex-col text-end h-full md:px-16 360:px-8 absolute">
                <div>
                    <h1 className="text-white 360:w-[100%] sm:w-[60%] md:w-[80%] text-start md:text-7xl font-raleway font-bold 360:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl xl:w-[60%] 2xl:w-[70%] 2xl:text-9xl full:w-[50%] full:text-9xl">
                        Desenvolva seu <span className="bg-gradient-to-r from-blue-500 to-[#2a396b] bg-clip-text text-transparent">aplicativo ou sistema!</span>
                    </h1>
                    <p className="text-white text-start mt-6 md:text-3xl md:w-[80%] sm:text-2xl sm:w-[60%] 360:w-[100%] font-light 360:text-xl lg:w-[60%] xl:text-3xl xl:w-[60%] 2xl:w-[55%] full:w-[50%] full:text-4xl">Criamos as soluções de software que você precisa para impulsionar a sua empresa.</p>
                </div>
                <div className='w-64 h-14 rounded-xl text-white flex items-center justify-center bg-[#283563] gap-4 mt-6 transition-all hover:bg-[#283563]/60'>
                    <a href="https://1y7idwqhetx.typeform.com/to/Y2RL4h8P" target="_blank" className='font-bold text-base cursor-pointer' rel="noreferrer">Fale com um especialista </a>
                    <MdArrowOutward />
                </div>
            </section>

        </main>
    )
}