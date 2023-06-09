import Produto from "./Produto";
/* ---------- IMAGENS ------------------ */
import planejamento from '../../assets/Trabalhamos/planejamento.avif';
import cricao from '../../assets/Trabalhamos/criacao.avif';
import desenvolvimento from '../../assets/Trabalhamos/desenvolvimento.avif';
import desing from '../../assets/Trabalhamos/design.avif';
import intnegocios from '../../assets/Trabalhamos/negocios.avif';
import solucao from '../../assets/Trabalhamos/solucao.avif';


export const Trabalhamos = () => {
    return (

        <section className="flex flex-col justify-center items-center py-24">
            <h1 className="text-white text-[42px] text-center font-russo-one">Produtos</h1>
            <div className="grid grid-cols-3 gap-x-[85px] gap-y-10 mt-10 360:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <Produto imgProp={planejamento} nameProp="Planejamento" linkProp={`planejamento`} />
                <Produto imgProp={cricao} nameProp="Criação" linkProp={`criacao`} />
                <Produto imgProp={desing} nameProp="Design" linkProp={`design`} />
                <Produto imgProp={desenvolvimento} nameProp="Desenvolvimento" linkProp={`desenvolvimento`} />
                <Produto imgProp={solucao} nameProp="Solução" linkProp={`solucao`} />
                <Produto imgProp={intnegocios} nameProp="Inteligência de negócios" linkProp={`inteligencia-negocio`} />
            </div>
        </section>

    )
}
