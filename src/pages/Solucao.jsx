import { ScrollRestoration } from "react-router-dom";


import Details from "../components/Details/Details";

/* ---------- IMAGENS ------------------ */
import bannerSolucao from '../assets/planejamento/bannerSolucao.avif';
import iconNecessidade from '../assets/planejamento/icon/iconNecessidade.svg';
import iconSolucao from '../assets/planejamento/icon/iconSolucao.svg';
import iconFuncionalidades from '../assets/planejamento/icon/iconFuncionalidades.svg';
import iconTestes from '../assets/planejamento/icon/iconTestes.svg';
import iconImplatacao from '../assets/planejamento/icon/iconImplatacao.svg';


const Solucao = () => {
  return (
    <>
      <div className="w-full h-[257px] relative top-16 pb-[2px] bg-gradient-to-r from-line-linear-azul to-line-linear-red">
        <img src={bannerSolucao} alt="Solucao" draggable="false" className="w-full h-full object-cover object-center" />
        <h1 className="text-white text-[54px] font-russo-one absolute bottom-6 left-[10%] 360:text-4xl">Solução</h1>
      </div>

      <div className="w-full h-auto mt-16 bg-[#10121D] py-40">
        <div className="w-[80%] grid grid-cols-3 mx-auto gap-y-24 360:grid-cols-1 md:grid-cols-2 md:gap-y-44 xl:gap-y-44 gap-x-7 lg:grid-cols-2">

          <div className="w-full h-[360px] text-white px-4 360:h-auto">
            <h1 className="font-bold text-2xl">A importância da etapa de solução em um projeto</h1>
            <p className="text-base text-[#B7BCD1] mt-[8px]">Neste processo, são abordadas propostas de soluções que atendam às necessidades dos usuários e do cliente. Essa etapa envolve a análise dos requisitos do projeto, o design da solução, a prototipagem e validação, o desenvolvimento iterativo e a documentação e entrega da solução final. Através dessa abordagem estruturada e metodológica, é possível garantir que a solução desenvolvida seja eficiente, eficaz e esteja alinhada com as expectativas do cliente e dos usuários</p>
          </div>

          <Details imgProp={iconNecessidade} nameProp="Análise de requisitos e identificação de necessidades" description="Durante a etapa de análise de requisitos e identificação de necessidades, é realizada uma investigação detalhada dos requisitos do projeto. O objetivo é compreender profundamente as demandas e expectativas dos usuários e do cliente. Para isso, são realizadas entrevistas, workshops e análise de documentos, a fim de capturar todas as informações relevantes" />
          <Details imgProp={iconSolucao} nameProp="Design de solução" description="No estágio de design de solução, utilizamos as informações obtidas na análise dos requisitos para criar uma solução eficaz e personalizada. Essa etapa envolve a definição da arquitetura do sistema, que determina como os componentes da solução se relacionam entre si e como funcionam em conjunto. O design de solução é crucial para garantir que a solução proposta seja viável, alinhada aos objetivos do projeto e capaz de resolver os desafios identificados" />
          <Details imgProp={iconFuncionalidades} nameProp="Prototipagem e validação" description="A prototipagem e validação, damos vida à solução proposta por meio da criação de protótipos. Os protótipos podem ser versões simplificadas e interativas da solução, permitindo aos stakeholders e usuários experimentarem sua funcionalidade e interação. Existem diferentes níveis de fidelidade nos protótipos, que variam de baixa a alta fidelidade. Protótipos de baixa fidelidade são mais simples e rápidos de serem criados, geralmente utilizando esboços, wireframes ou mockups estáticos." />
          <Details imgProp={iconTestes} nameProp="Desenvolvimento iterativo" description="No desenvolvimento iterativo, a implementação da solução ocorre em ciclos ou iterações. Cada ciclo é composto por etapas de implementação, testes e validações. Durante cada ciclo, são selecionadas funcionalidades específicas da solução para serem desenvolvidas, com o objetivo de fornecer um conjunto de recursos funcionais em cada iteração. Após a implementação das funcionalidades, são realizados testes e validações para verificar se as funcionalidades estão corretas e atendem aos requisitos estabelecidos" />
          <Details imgProp={iconImplatacao} nameProp="Documentação e entrega" description="Após a conclusão do desenvolvimento da solução, é fundamental realizar a documentação adequada para garantir o uso correto e a manutenção contínua da solução desenvolvida. A documentação engloba diversos recursos, como manuais, guias de usuário, documentação técnica e qualquer outra informação relevante que possa auxiliar tanto os usuários finais quanto a equipe responsável pela manutenção do sistema" />
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Solucao