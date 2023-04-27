import aviao from '../../assets/FaleConosco/aviao.svg'
import ponto from '../../assets/FaleConosco/ponto.svg'
import Button from '../Button'

export default function FaleConosco() {
    return (
        <section id='fale' className="w-full h-[50rem] relative bg-linear-escuro text-white flex flex-col items-center py-24 ">
            <h2 data-aos="zoom-in" className='text-[42px] mb-14 text-transparent bg-clip-text bg-gradient-to-b from-line-linear-red via-line-linear-red to-saturation-azul-escuro' >Fale conosco</h2>
            <img src={ponto} alt="" className='absolute left-[3rem] top-36' />
            <img src={ponto} alt="" className='absolute right-[3rem] bottom-6 rotate-180' />
            <div className='w-full h-full bg-saturation-preto flex justify-center'>
                <div data-aos="fade-right" className='w-[75%] h-full flex justify-around items-center'>
                    <div>
                        <img src={aviao} alt="Imagem de um avião de papel" className='lg:w-[75%]' />
                    </div>

                    <div data-aos="fade-left" className='flex flex-col w-[19rem] h-[20rem]'>
                        <div>
                            <h2 className='text-[1.2rem] full:text-[1.6rem] 2xl:text-[1.6rem] mb-4 font-semibold' >Vamos tirar sua idéia do papel?</h2>
                            <p className='text-lg full:text-xl font-light'>
                                Não deixe para depois, agende uma conversa com um de nossos especialistas! Nós cuidamos de tudo!
                            </p>
                        </div>
                        <div className='mt-[4rem]'>
                            <Button text='Marque uma reunião' url='https://calendly.com/brncrysis/call' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}