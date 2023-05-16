import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import bannerNegocio from '../assets/planejamento/bannerNegocio.svg';
import iconColeta from '../assets/planejamento/icon/iconColeta.svg';
import iconDados from '../assets/planejamento/icon/iconDados.svg';
import iconVisualizacao from '../assets/planejamento/icon/iconVisualizacao.svg';
import iconModelagem from '../assets/planejamento/icon/iconModelagem.svg';
import iconAcompanhamento from '../assets/planejamento/icon/iconAcompanhamento.svg';
import Details from "../components/Details/Details";
import FaleConosco from "../components/FaleConosco";

const Negocio = () => {
  return (

      <>
        <NavBar />
        <div className="w-full h-[257px] relative top-16 pb-[2px] bg-gradient-to-r from-line-linear-azul to-line-linear-red">
          <img src={bannerNegocio} alt="Inteligência de negócios" draggable="false" className="w-full h-full object-cover object-center" />
          <h1 className="text-white text-[54px] font-russo-one absolute bottom-6 left-[10%] 360:text-4xl">Inteligência de negócios</h1>
        </div>

        <div className="w-full h-auto mt-16 bg-saturation-preto py-40">
          <div className="w-[80%] grid grid-cols-3 mx-auto gap-y-24 360:grid-cols-1 md:grid-cols-2 md:gap-y-44 xl:gap-y-44 gap-x-7 lg:grid-cols-2">

            <div className="w-full h-[360px] text-white px-4 360:h-auto">
              <h1 className="font-bold text-2xl">Decisões estratégicas baseadas em dados precisos e insights</h1>
              <p className="text-base text-[#B7BCD1] mt-[8px]">A etapa de Inteligência de Negócios é um processo estruturado e metodológico que visa a coleta, análise e interpretação de dados para auxiliar na tomada de decisões estratégicas em um projeto ou empresa. Essa etapa envolve a utilização de ferramentas e técnicas avançadas para extrair insights valiosos a partir dos dados disponíveis. A importância da Inteligência de Negócios em um projeto é significativa, pois permite uma compreensão aprofundada do desempenho e do ambiente de negócios.</p>
            </div>

            <Details imgProp={iconColeta} nameProp="Coleta de dados" description="Na coleta de dados da Inteligência de Negócios, é realizada uma identificação minuciosa das fontes de dados relevantes para o negócio. Essas fontes podem ser internas, como bancos de dados, registros de vendas, registros de clientes e dados operacionais, ou externas, como dados de mercado, informações demográficas, redes sociais e fontes de dados públicas. A coleta de dados é uma fase essencial, pois é necessário obter informações precisas e confiáveis para realizar análises posteriores" />
            <Details imgProp={iconDados} nameProp="Análise de dados" description="Utilizando técnicas estatísticas, algoritmos de aprendizado de máquina e outras abordagens analíticas, os dados são explorados em busca de informações relevantes para o negócio. Essa análise pode incluir a aplicação de modelos estatísticos para identificar correlações entre os dados, a utilização de algoritmos de clusterização para segmentar os dados em grupos similares e a aplicação de algoritmos de regressão para prever tendências futuras com base nos dados históricos." />
            <Details imgProp={iconVisualizacao} nameProp="Visualização de dados" description="Este processo é um papel fundamental ao comunicar insights e informações complexas de maneira compreensível e impactante. Ao transformar os dados em elementos visuais, é possível extrair significado e padrões que podem não ser facilmente identificados em dados brutos. As visualizações ajudam os tomadores de decisão a obter uma compreensão rápida e abrangente das informações, permitindo que eles identifiquem tendências, façam comparações e tomem decisões informadas e estratégicas." />
            <Details imgProp={iconModelagem} nameProp="Modelagem preditiva" description="Utilizando os dados históricos e os insights obtidos na análise para construir modelos estatísticos ou algoritmos de aprendizado de máquina que possam fazer previsões sobre eventos futuros. Um modelo preditivo pode ser desenvolvido para prever a demanda de determinado produto ao longo do tempo, levando em consideração variáveis como sazonalidade, tendências de mercado, dados demográficos e comportamentais dos clientes." />
            <Details imgProp={iconAcompanhamento} nameProp="Monitoramento e acompanhamento" description="Após a implementação das estratégias de negócio, é essencial realizar o monitoramento e acompanhamento contínuo para avaliar o desempenho e a eficácia das ações implementadas. Nessa etapa, são coletados e analisados dados relevantes que refletem o progresso e os resultados obtidos. O monitoramento envolve a observação regular e sistemática dos indicadores-chave de desempenho (KPIs), que são métricas específicas que ajudam a medir o sucesso das estratégias adotadas." />
          
          </div>
        </div>
        <FaleConosco />
        <Footer />
        <ScrollRestoration />
      </>
  )
}

export default Negocio