import planejamtno1 from '../../../assets/selections/Design/design__img-1.png';
import planejamtno2 from '../../../assets/selections/Design/design__img-2.png';
import planejamtno3 from '../../../assets/selections/Design/design__img-3.png';

export function Design(){
  return (
    <div className="w-[50%] 360:w-full lg:w-[95%] xl:w-[80%] m-auto h-full">
      <div className="gap-6 flex 2xl:h-[90%] justify-center">

        <div className="w-full lg:max-w-[650px] ">
          <div className="border rounded-lg p-4 min-h-[300px] max-h-[300px]">
            <h1 className="lg:text-2xl font-bold 360:text-lg">Ux/Ui Design</h1>
            <p className="lg:text-lg 360:text-base mt-2">
            Nesta fase, focamos na criação de uma experiência do usuário intuitiva e uma interface do usuário atraente e funcional. Isso envolve a elaboração de wireframes, protótipos e mockups para visualizar a estrutura e o fluxo de navegação do software.
            </p>
          </div>

          <div className="flex w-full gap-6 min-h-[170px] lg:max-h-[170px] 360:h-fit">
            <div className="w-1/2 border rounded-lg p-4 mt-6 space-y-3">
              <h1 className="font-bold">Entregáveis</h1>
              <p>Documentação do UX e UI com pesquisa, wireframes, design final e prototipação</p>
            </div>
            <div className="w-1/2 border rounded-lg p-4 mt-6 space-y-3">
              <h1 className="font-bold">Duração</h1>
              <p>3 a 5 semanas</p>
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