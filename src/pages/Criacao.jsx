import { ScrollRestoration } from "react-router-dom";

import Details from "../components/Details/Details";

/* ---------- IMAGENS ------------------ */
import bannerCriacao from '../assets/planejamento/bannerCriacao.avif';
import iconBriefing from '../assets/planejamento/icon/iconBriefing.svg';
import iconDescoberta from '../assets/planejamento/icon/iconDescoberta.svg';
import iconEstrategias from '../assets/planejamento/icon/iconEstrategias.svg';
import iconObjetivos from '../assets/planejamento/icon/iconObjetivos.svg';
import iconPlano from '../assets/planejamento/icon/iconPlano.svg';

const Criacao = () => {
  return (
    <>
      <div className="w-full h-[257px] relative top-16 pb-[2px] bg-gradient-to-r from-line-linear-azul to-line-linear-red">
        <img src={bannerCriacao} alt="Criação" draggable="false" className="w-full h-full object-cover object-center" />
        <h1 className="text-white text-[54px] font-russo-one absolute bottom-6 left-[10%] 360:text-4xl">Criação</h1>
      </div>

      <div className="w-full h-auto mt-16 bg-[#10121D] py-40">
        <div className="w-[80%] grid grid-cols-3 mx-auto gap-y-24 360:grid-cols-1 md:grid-cols-2 md:gap-y-44 xl:gap-y-44 gap-x-7 lg:grid-cols-2">

          <div className="w-full h-[360px] text-white px-4 360:h-auto">
            <h1 className="font-bold text-2xl">Transformando Ideias em Realidade</h1>
            <p className="text-base text-[#B7BCD1] text-start mt-[8px]">A seção de Criação é onde a magia acontece. Nessa etapa, transformamos ideias em realidade, dando vida aos conceitos e objetivos definidos durante o planejamento.</p>
            <p className="text-base text-[#B7BCD1] text-start mt-8">A equipe criativa se envolve de forma intensa nessa fase, utilizando sua expertise e habilidades para desenvolver soluções inovadoras e impactantes. A partir das diretrizes estabelecidas, são criados designs, layouts, interfaces e conteúdos que agregam valor ao projeto</p>
          </div>

          <Details imgProp={iconBriefing} nameProp="Briefing e Entendimento do Projeto" description="Durante está etapa, compreendemos as necessidades, objetivos e requisitos do projeto por meio de reuniões com o cliente, coleta de informações detalhadas e alinhamento de expectativas. Com base nessas informações, delineamos as diretrizes do projeto, incluindo identidade visual, arquitetura de informações e funcionalidades desejadas. Também consideramos aspectos como usabilidade, acessibilidade e experiência do usuário" />
          <Details imgProp={iconDescoberta} nameProp="Conceito" description="O conceito é como uma visão geral do projeto, que servirá como guia para todas as decisões de design. Ele estabelece a direção criativa, a estética visual, a abordagem de comunicação e a experiência do usuário que queremos proporcionar. É uma etapa crucial para manter a consistência em todo o projeto, garantindo que todos os elementos estejam alinhados e se complementem" />
          <Details imgProp={iconObjetivos} nameProp="Geração de Ideias e Conceptualização" description="Equipe criativa se reúne em sessões de brainstorming para explorar uma ampla gama de conceitos e abordagens. Nesse momento, todas as ideias são bem-vindas e encorajamos a criatividade e a originalidade. Durante o brainstorming, incentivamos a equipe a pensar além dos limites convencionais, buscando soluções inovadoras e diferentes perspectivas. Não há restrições nessa fase inicial, e todas as ideias são consideradas válidas, independentemente de sua viabilidade imediata" />
          <Details imgProp={iconEstrategias} nameProp="Interação e Testes" description="Buscamos garantir a qualidade e a usabilidade do projeto. Realizamos interações do design, coletando feedback e realizando testes de usabilidade com usuários reais ou representantes do público-alvo. Ao coletar feedback, ouvimos atentamente as opiniões e observações dos usuários, levando em consideração suas experiências, sugestões e críticas construtivas. Essas informações são valiosas para aprimorar o design e otimizar a experiência do usuário" />
          <Details imgProp={iconPlano} nameProp="Apresentação e Feedback" description="É nesse momento que apresentamos o trabalho realizado, mostrando como as ideias foram materializadas e transformadas em soluções concretas. Com base no feedback recebido, realizamos iterações e ajustes no design, buscando atender às expectativas e objetivos definidos. Essa colaboração e troca de informações entre a equipe criativa e as partes interessadas ajudam a refinar e aperfeiçoar a criação" />
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Criacao