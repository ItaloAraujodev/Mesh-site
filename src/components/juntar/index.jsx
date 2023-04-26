import imgsJuntar from "../../utils/juntar"

export default function Juntar() {
    return (
        <div className="w-full h-[50rem] pb-1 bg-gradient-to-r from-line-linear-azul to-line-linear-rosa ">
            <div className="w-full h-full bg-gradient-to-r from-bg-azul-claro via-saturation-azul-escuro to-bg-azul-claro text-white flex justify-center">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                        <h2 className='leading-2 text-[42px] mb-12 text-transparent bg-clip-text bg-gradient-to-r from-saturation-green to-saturation-green'>Porque você deve ser juntar a nós</h2>
                        <p className="mt-[-2.5rem] text-xl">Seja Membro da MESH e faça parte da construção de um modelo de mercado descentralizado</p>
                    </div>

                    <div className="w-full flex justify-center items-center gap-8 full:gap-12">
                        {imgsJuntar.map((item, index) => (
                            <div key={index} className="w-[16rem] h-[19rem] lg:w-[13.5rem] lg:h-[17.5rem] full:w-[18rem] full:h-[22rem] py-[2px] px-[2px] mt-12 rounded-[10px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro tra hover:bg-gradient-to-t hover:from-line-linear-azul hover:to-line-linear-rosa">
                                <div className="w-full h-full bg-linear-escuro rounded-[10px] overflow-hidden bg-cover bg-no-repeat">
                                    <div className="w-full rounded-[10px] ">
                                        <img src={item.imagem} alt="" className="w-full object-container rounded-[10px] transition duration-500 ease-in-out hover:scale-110 hover:-rotate-2 " />
                                    </div>

                                    <div className="m-6">
                                        <h3 className="text-lg lg:text-base text-center">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}