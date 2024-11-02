import planejamtno1 from '../../../assets/selections/Entrega/support__img-1.png';
import planejamtno2 from '../../../assets/selections/Entrega/support__img-2.png';
import planejamtno3 from '../../../assets/selections/Entrega/support__img-3.png';

export function Entrega() {
  return (
    <div className="w-[50%] 360:w-full lg:w-[95%] xl:w-[80%] m-auto h-full">
      <div className="gap-6 flex 2xl:h-[90%] justify-center">

        <div className="w-full lg:max-w-[650px]">
          <div className="border rounded-lg p-4 min-h-[300px] max-h-[300px]">
            <h1 className="lg:text-2xl font-bold 360:text-lg">Entrega e Manutenção</h1>
            <p className="lg:text-lg 360:text-base mt-2">
              Após a conclusão dos testes e a aprovação final, entregamos o software pronto para uso. Além disso, oferecemos serviços de manutenção contínua para garantir que o software permaneça atualizado, seguro e funcionando sem problemas a longo prazo.
            </p>
          </div>

          <div className="flex w-full gap-6 min-h-[170px] lg:max-h-[170px] 360:h-fit">
            <div className="w-1/2 border rounded-lg p-4 mt-6 space-y-3">
              <h1 className="font-bold">Entregáveis</h1>
              <p>Software finalizado com acompanhamento e manutenção</p>
            </div>
            <div className="w-1/2 border rounded-lg p-4 mt-6 space-y-3">
              <h1 className="font-bold">Duração</h1>
              <p>A negociar</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-l 360:hidden lg:block">
          <img src={planejamtno1} alt="Planejamento" className="max-h-[490px] lg:h-[465px] 2xl:h-[465px] object-cover rounded-lg" />
        </div>

        <div className='360:hidden lg:block'>
          <div className="flex flex-col w-full gap-6 rounded-lg">
            <div className="rounded-lg">
              <img src={planejamtno2} alt="Planejamtno 2" className="w-full object-cover lg:h-[180px] h-[265px] 2xl:h-[175px] rounded-lg" />
            </div>

            <div className="rounded-lg">
              <img src={planejamtno3} alt="Planejamtno 3" className="w-full max-h-[265px] h-[265px] object-cover rounded-lg" />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}