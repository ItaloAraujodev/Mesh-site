import planejamtno1 from '../../../assets/selections/Testes/test__img-1.png';
import planejamtno2 from '../../../assets/selections/Testes/test__img-2.png';
import planejamtno3 from '../../../assets/selections/Testes/test__img-3.png';

export function Testes() {
  return (
    <div className="w-[50%] 360:w-full lg:w-[95%] xl:w-[80%] m-auto h-full">
      <div className="gap-6 flex 2xl:h-[90%] justify-center">

        <div className="w-full lg:max-w-[650px]">
          <div className="border border-white/40 rounded-lg p-4 min-h-[300px] max-h-[300px]">
            <h1 className="lg:text-2xl font-bold 360:text-lg">Testes e Garantia de Qualidade</h1>
            <p className="lg:text-lg 360:text-base mt-2">
              Após o desenvolvimento, realizamos testes rigorosos para identificar e corrigir quaisquer defeitos ou problemas de funcionalidade no software.
            </p>
          </div>

          <div className="flex w-full gap-6 min-h-[170px] max-h-[170px]">
            <div className="w-1/2 border border-white/40 rounded-lg p-4 mt-6 space-y-3">
              <h1 className="font-bold">Entregáveis</h1>
              <p>Relatório com todos os resultados dos testes</p>
            </div>
            <div className="w-1/2 border border-white/40 rounded-lg p-4 mt-6 space-y-3">
              <h1 className="font-bold">Duração</h1>
              <p>2+ semanas</p>
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