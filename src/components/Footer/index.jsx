import { AiFillLinkedin } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import logo from '../../assets/Nav/logo.svg'

export default function Footer(){
    return (

        <footer className="w-full h-[30rem] bg-azul-claro relative flex justify-center items-center">
            <div data-aos="zoom-in" className="w-3/4 h-[50%] sm:w-[90%] 360:h-auto 360:py-12 360:gap-4 sm:gap-12 md:gap-12 flex 360:flex-col sm:flex-row justify-center items-center bg-saturation-preto rounded-[20px]">
                <div className='flex text-white gap-10 sm:gap-4 md:gap-5'>
                    <a href="https://www.linkedin.com/company/mesh-labs-web3/?viewAsMember=true" target='_blank' rel="noreferrer"><span className='text-3xl 360:text-xl'><AiFillLinkedin /></span></a>
                    <a href="https://discord.gg/GBzBcUSq" target='_blank' rel="noreferrer"><span className='text-3xl 360:text-xl'><FaDiscord /></span></a>
                    <a href="https://twitter.com/MeshLabss" target='_blank' rel="noreferrer"><span className='text-3xl 360:text-xl'><AiOutlineTwitter /></span></a>
                </div>
                
                <span className='border h-[40%] border-gray-500 mx-24 lg:mx-12 360:hidden md:hidden'></span>

                <div className='flex flex-col items-center w-[62px]'>
                    <img src={logo} alt="Logo da Mesh" className='object-cover w-[80%]' />
                    <h2 className='text-white italic font-semibold mt-2 tracking-widest '>MESH</h2>
                </div>

                <span className='border h-[40%] border-gray-500 mx-24 lg:mx-12 360:hidden sm:mx-6 md:hidden'></span>

                <div>
                    <h3 className='text-white text-xl 360:text-[16px] sm:text-[14px] md:text-[14px]'>#FindYourSpaceInWeb3</h3>
                </div>
            </div>
        </footer>
    )
}