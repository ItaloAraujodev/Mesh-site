import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import bannerPlanejamento from '../assets/planejamento/bannerPlanejamento.svg';
import iconPesquisa from '../assets/planejamento/icon/iconPesquisa.svg';
import iconDescoberta from '../assets/planejamento/icon/iconDescoberta.svg';
import iconEstrategias from '../assets/planejamento/icon/iconEstrategias.svg';
import iconObjetivos from '../assets/planejamento/icon/iconObjetivos.svg';
import iconPlano from '../assets/planejamento/icon/iconPlano.svg';
import Details from "../components/Details/Details";
import FaleConosco from "../components/FaleConosco";
import { ScrollRestoration } from "react-router-dom";

const Planejamento = () => {
    return (
        <>
            
            <NavBar />
            <div className="w-full h-auto relative top-16 pb-[2px] bg-gradient-to-r from-line-linear-azul to-line-linear-red">
                <img src={bannerPlanejamento} alt="Planejamento" draggable="false" className="w-full h-full object-cover object-center" />
                <h1 className="text-white text-[54px] font-russo-one absolute bottom-6 left-[10%] 360:text-4xl">Planejamento</h1>
            </div>

            <div className="w-full h-auto mt-16 bg-saturation-preto py-40">
                <div className="w-[80%] grid grid-cols-3 mx-auto gap-y-6 360:grid-cols-1 360:gap-y-10 md:grid-cols-2 md:gap-y-44 xl:gap-y-44 gap-x-7 lg:grid-cols-2">

                    <div className="w-full h-[360px] text-white px-4 360:h-auto">
                        <h1 className="font-bold text-2xl">A Base do sucesso do projeto</h1>
                        <p className="text-base text-[#B7BCD1] text-justify mt-[8px]">O planejamento é essencial para o sucesso de qualquer projeto. É nessa etapa que estabelecemos objetivos, estratégias e recursos necessários. Realizamos pesquisas de mercado, análise da concorrência e estudo do público-alvo para embasar nossas decisões. Permitindo-nos antecipar desafios, definir responsabilidades e alinhar expectativas. É fundamental para reduzir riscos, otimizar recursos e garantir que o projeto esteja alinhado com os objetivos estratégicos. Em resumo, o planejamento é a base sólida que guia a execução eficiente do projeto</p>
                    </div>

                    <Details imgProp={iconPesquisa} nameProp="Pesquisa" description="A pesquisa é o ponto de partida para um planejamento eficaz. Realizamos uma análise aprofundada do mercado e do contexto do projeto, compreendendo suas complexidades e particularidades. Coletamos dados relevantes, estudamos concorrentes e identificamos tendências, possibilitando embasar nossas decisões estratégicas em informações sólidas. A pesquisa nos ajuda a entender o cenário e a identificar oportunidades que impulsionarão o sucesso do projeto" />
                    <Details imgProp={iconDescoberta} nameProp="Descoberta do Projeto" description="Realizamos uma fase de descoberta, na qual nos aprofundamos no entendimento das necessidades e objetivos do cliente. Por meio de entrevistas, workshops e análise de requisitos, coletamos informações fundamentais para moldar a estratégia do projeto" />
                    <Details imgProp={iconObjetivos} nameProp="Definição de Objetivos" description="Com base na pesquisa e na descoberta do projeto, estabelecemos objetivos claros e mensuráveis a serem alcançados. Esses objetivos desempenham um papel fundamental na orientação de toda a equipe durante o processo de criação, assegurando que estejamos alinhados com as expectativas do cliente. A partir da compreensão profunda do cenário e das necessidades do cliente, identificamos os principais objetivos que devem ser atingidos com o projeto" />
                    <Details imgProp={iconEstrategias} nameProp="Elaboração de Estratégias" description="Na etapa de Desenvolvimento de Estratégias, nosso foco está em criar abordagens criativas e efetivas para alcançar os objetivos estabelecidos. Essa fase envolve a definição de estratégias de marketing, identificação dos canais de comunicação relevantes, bem como a criação de estratégias de lançamento e divulgação. Com base nos objetivos definidos anteriormente, trabalhamos para desenvolver estratégias que sejam adequadas ao projeto e que ajudem a impulsionar o sucesso do mesmo" />
                    <Details imgProp={iconPlano} nameProp="Plano de Ação" description="Com as estratégias definidas, passamos a criar um plano de ação detalhado que descreve todas as tarefas, responsabilidades e o cronograma para a execução do projeto. Esse plano de ação é uma ferramenta essencial que nos permite acompanhar o progresso do projeto de forma organizada e eficiente. No plano de ação, identificamos todas as atividades necessárias para a realização do projeto, desde a pesquisa inicial até a entrega final" />
                </div>
            </div>
            <FaleConosco />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default Planejamento