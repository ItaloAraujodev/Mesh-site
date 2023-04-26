import aviao from '../../assets/FaleConosco/aviao.svg'
import ponto from '../../assets/FaleConosco/ponto.svg'
import Button from '../Button'

export default function FaleConosco() {
    return (
        <section className="w-full h-[45rem] relative bg-linear-escuro text-white flex flex-col items-center py-24 ">
            <h2 className='text-[2.6rem] mb-14 text-transparent bg-clip-text bg-gradient-to-t from-line-linear-red to-saturation-red' >Fale conosco</h2>
            <img src={ponto} alt="" className='absolute left-[3rem] top-36' />
            <img src={ponto} alt="" className='absolute right-[3rem] bottom-12 rotate-180' />
            <div className='w-full h-96 bg-saturation-preto flex justify-center'>
                <div className='w-[75%] h-full flex justify-around items-center'>
                    <div>
                        <img src={aviao} alt="" />
                    </div>

                    <div className='flex flex-col w-[300px] h-[273px]'>
                        <div>
                            <h2 className='text-[20px] mb-4 font-semibold' >Vamos tirar sua idéia do papel?</h2>
                            <p className='text-lg font-normal'>
                                Não deixe para depois, agende uma conversa com um de nossos especialistas! Nós cuidamos de tudo!
                            </p>
                        </div>
                        <div className='mt-[4rem]'>
                            <Button text='Marque uma reunião' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}