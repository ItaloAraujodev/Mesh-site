import aviao from '../../assets/FaleConosco/aviao.svg'
import ponto from '../../assets/FaleConosco/ponto.svg'
import Button from '../Button'

export default function FaleConosco() {
    return (
        <section id='fale' className="w-full h-full text-white flex flex-col items-center py-24 360:h-auto relative bg-azul-claro">
            <h2 data-aos="zoom-in" className='text-[42px] 360:text-[2rem] mb-14 text-transparent bg-clip-text bg-gradient-to-b from-line-linear-red via-line-linear-red to-saturation-azul-escuro' >Fale conosco</h2>
            <img src={ponto} alt="" className='absolute left-[3rem] top-36 360:invisible md:w-28 md:top-40' />
            <img src={ponto} alt="" className='absolute right-[3rem] bottom-6 rotate-180 360:invisible md:w-28 md:bottom-10' />
            <div className='w-full h-full flex justify-center bg-saturation-preto 360:py-12 py-24  '>
                <div data-aos="fade-right" className='w-[75%] h-full flex justify-around items-center 360:flex-col'>
                    <div>
                        <img src={aviao} alt="Imagem de um avião de papel" className='lg:w-[75%] 360:w-[70%] 360:mx-auto' />
                    </div>

                    <div data-aos="fade-left" className='flex flex-col w-[50%] 360:text-center gap-10 360:w-[100%] h-auto 360:mt-10 md:w-[60%] md:ml-12 md:gap-8 xl:ml-16'>
                        <div>
                            <h2 className='text-[1.2rem] full:text-[1.6rem] 2xl:text-[1.6rem] mb-4 font-semibold' >Vamos tirar sua idéia do papel?</h2>
                            <p className='text-lg full:text-xl font-light'>
                                Não deixe para depois, agende uma conversa com um de nossos especialistas! Nós cuidamos de tudo!
                            </p>
                        </div>
                        <div className='flex gap-4 360:flex-col 360:mt-[2rem] sm:flex-row 360:mx-auto 414:mx-auto md:flex-col'>
                            <Button text='Marque uma reunião' url='https://calendly.com/brncrysis/call' />
                            <Button text='Envie sua ideia' url='https://1y7idwqhetx.typeform.com/to/Y2RL4h8P' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}