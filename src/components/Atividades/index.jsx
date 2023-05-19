/* import { atividades } from '../../utils/atividades'; */
import Carousel from './carousel';
import './style.css'
/* import MultipleItems from './carousel'; */
/* import banco from '../../assets/Atividades/produtosWeb.svg';
import produtosWeb from '../../assets/Atividades/banco.svg';
import money from '../../assets/Atividades/money.svg';
import { Carousel } from 'react-responsive-carousel'; */


export default function Atividades() {
    return (
        <div id='atividade' className="w-full h-auto pb-1 bg-gradient-to-r from-line-linear-azul to-line-linear-red ">
            <div className="w-full h-full bg-azul-claro text-white flex items-center justify-center 360:py-28 py-40 ">
                <div className='w-full h-2/3 flex flex-col'>
                    <h2 data-aos="zoom-in" className='text-center font-white font-russo-one text-[42px] 360:text-[2rem] mb-16'>Nossos serviços</h2>
                    <div data-aos="zoom-in" className="w-full flex justify-center items-center gap-16 lg:gap-10 full:gap-[6rem]">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}