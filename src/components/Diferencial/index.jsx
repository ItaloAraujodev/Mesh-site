import tablet from "../../assets/Diferencial/tablet.png";
import foguete from "../../assets/Diferencial/foguete.png";
import qualidade from "../../assets/Diferencial/qualidade.png";
import fococliente from "../../assets/Diferencial/foco-cliente.png";
import experiencia from "../../assets/Diferencial/experiencia.png";

export default function Diferencial() {
  return (

      <div id='inte' className="w-full h-full bg-gradient-to-r from-line-linear-azul to-line-linear-red py-1">
        <div className="w-full h-full bg-gradient-to-r from-saturation-azul-escuro to-saturation-preto text-white flex flex-col items-center py-20">
          <h2 data-aos="fade-down" className='font-russo-one lg:text-[48px] 360:text-[2rem] mb-10'>Nosso diferencial</h2>
          <div className="md:grid md:grid-cols-10 md:w-[60%] gap-3 360:flex 360:flex-col 360:w-[90%]">
            <div className="border-[0.5px] rounded-xl relative col-span-6 h-[350px] ">
              <div className="md:w-2/3 360:w-full space-y-2 py-2 px-4 ">
                <h1 className="font-bold text-2xl">Abordagem inovadora</h1>
                <p className="font-normal text-xl w-10/12">Desenvolvemos soluções personalizadas e moldadas com qualidade para cada desafio.</p>
              </div>
              <div className="flex justify-end">
                <img src={tablet} alt="Abordagem inovadora" className="h-auto md:w-[70%] 360:w-[80%] bottom-0 absolute" />
              </div>
            </div>

            <div className="border-[0.5px] rounded-xl relative col-span-4 ">
              <div className="w-[100%] space-y-2 py-2 px-4 h-[350px]">
                <h1 className="font-bold text-2xl">Prazos certeiros</h1>
                <p className="font-normal text-xl w-10/12">Cada etapa do processo é planejada e executada, assegurando que os prazos estabelecidos sejam cumpridos.</p>
              </div>
              <div className="flex justify-end">
                <img src={foguete} alt="Abordagem inovadora" className="h-auto 360:w-[70%] md:w-[60%] bottom-0 absolute" />
              </div>
            </div>

            <div className="border-[0.5px] rounded-xl relative col-span-10 h-[350px]">
              <div className="md:w-2/3 360:w-full space-y-2 py-2 px-4 ">
                <h1 className="font-bold text-2xl">Compromisso com a qualidade</h1>
                <p className="font-normal text-xl w-full">Nosso compromisso é com a excelência em cada aspecto do desenvolvimento de software, assegurando a entrega de produtos robustos, confiáveis e de alto desempenho.</p>
              </div>
              <div className="flex justify-center">
                <img src={qualidade} alt="Abordagem inovadora" className="h-auto md:w-[50%] 360:w-[70%] bottom-0 absolute m-auto object-cover" />
              </div>
            </div>

            <div className="border-[0.5px] rounded-xl relative col-span-5 h-[350px]">
              <div className="w-[80%] space-y-2 py-2 px-4 ">
                <h1 className="font-bold text-2xl">Foco no cliente</h1>
                <p className="font-normal text-xl w-full">Valorizamos cada cliente e suas necessidades como um parceiro de longo prazo.</p>
              </div>
              <div className="flex justify-end">
                <img src={fococliente} alt="Abordagem inovadora" className="h-auto md:w-[60%] 360:w-[60%] bottom-0 absolute" />
              </div>
            </div>

            <div className="border-[0.5px] rounded-xl relative col-span-5 h-[350px]">
              <div className="w-[80%] space-y-2 py-2 px-4 ">
                <h1 className="font-bold text-2xl">Experiência</h1>
                <p className="font-normal text-xl w-full">Do design à implementação, nós temos uma ampla gama de experiência para que cada projeto seja executado com excelência e inovação.</p>
              </div>
              <div className="flex justify-end">
                <img src={experiencia} alt="Abordagem inovadora" className="h-auto md:w-[70%] 360:w-[70%] bottom-0 absolute" />
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

