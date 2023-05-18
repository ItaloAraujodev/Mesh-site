import aviao from '../../assets/FaleConosco/aviao.svg'
import ponto from '../../assets/FaleConosco/ponto.svg'
import Button from '../Button'

export default function FaleConosco() {
    return (
        <section id='fale' className="w-full h-full text-white flex flex-col items-center py-24 360:h-auto relative bg-[#10121D]">
            <h2 data-aos="zoom-in" className='text-[42px] font-russo-one font-white 360:text-[2rem] mb-14 ' >Fale conosco</h2>
            <img src={ponto} alt="" draggable="false" className='absolute left-[3rem] top-36 360:invisible md:w-28 md:top-40' />
            <img src={ponto} alt="" draggable="false" className='absolute right-[3rem] bottom-6 rotate-180 360:invisible md:w-28 md:bottom-10' />
            <div className='w-full flex justify-center bg-[#181B2D] 360:py-12 py-24  '>
                <div data-aos="fade-right" className='w-[80%] h-full grid grid-cols-2 items-stretch 360:grid-cols-1'>
                    <div className='my-auto'>
                        <img src={aviao} alt="Imagem de um avião de papel" draggable="false" className='object-cover' />
                    </div>

                    <div data-aos="fade-left" className='w-[calc(100%-3.5rem)] h-auto my-auto flex flex-col 360:text-center gap-10 360:mt-10 ml-14 360:mx-auto'>
                        <div>
                            <h2 className='text-[1.2rem] full:text-[1.6rem] 2xl:text-[1.6rem] mb-4 font-semibold' >Vamos tirar sua idéia do papel?</h2>
                            <p className='text-lg full:text-xl font-light'>
                                Não deixe para depois, agende uma conversa com um de nossos especialistas! Nós cuidamos de tudo!
                            </p>
                        </div>
                        <div className='360:w-full flex gap-4 360:flex-col sm:flex-row 360:mx-auto md:flex-col'>
                            <Button text='Marque uma reunião' url='https://calendly.com/brncrysis/call' redirect='_blank' />
                            <Button text='Envie sua ideia' url='https://1y7idwqhetx.typeform.com/to/Y2RL4h8P' redirect='_blank' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}