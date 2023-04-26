import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import logo from '../../assets/Nav/logo.svg'

export default function Footer(){
    return (
        <footer className="w-full h-[30rem] bg-linear-escuro relative flex justify-center items-center">
            <div className="w-3/4 h-[50%] flex justify-center items-center bg-saturation-preto rounded-[20px]">
                <div className='flex text-white gap-7'>
                    <a href=""><span className='text-3xl'><AiFillLinkedin /></span></a>
                    <a href=""><span className='text-3xl'><FaDiscord /></span></a>
                    <a href=""><span className='text-3xl'><AiOutlineInstagram /></span></a>
                    <a href=""><span className='text-3xl'><AiOutlineTwitter /></span></a>
                </div>
                
                <span className='border h-[40%] border-gray-500 mx-24'></span>

                <div className='flex flex-col items-center w-[62px]'>
                    <img src={logo} alt="Logo da Mesh" className='object-cover w-[80%]' />
                    <h2 className='text-white italic font-semibold mt-2 tracking-widest '>MESH</h2>
                </div>

                <span className='border h-[40%] border-gray-500 mx-24'></span>

                <div>
                    <h3 className='text-white text-xl'>#FindYourSpaceInWeb3</h3>
                </div>
            </div>
        </footer>
    )
}