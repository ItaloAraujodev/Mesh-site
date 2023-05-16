import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import bannerDesign from '../assets/planejamento/bannerDesign.svg';
import iconAnalise from '../assets/planejamento/icon/iconAnalise.svg';
import iconTendencia from '../assets/planejamento/icon/iconTendencia.svg';
import iconMapeamento from '../assets/planejamento/icon/iconMapeamento.svg';
import iconDesign from '../assets/planejamento/icon/iconDesign.svg';
import iconPreparacao from '../assets/planejamento/icon/iconPreparacao.svg';
import Details from "../components/Details/Details";
import FaleConosco from "../components/FaleConosco";

const Desing = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[257px] relative top-16 pb-[2px] bg-gradient-to-r from-line-linear-azul to-line-linear-red">
        <img src={bannerDesign} alt="Planejamento" className="w-full h-full object-cover object-center" />
        <h1 className="text-white text-[54px] font-russo-one absolute bottom-6 left-[10%] 360:text-4xl">Design</h1>
      </div>

      <div className="w-full h-auto mt-16 bg-saturation-preto py-40">
        <div className="w-[80%] grid grid-cols-3 mx-auto gap-y-24 360:grid-cols-1 md:grid-cols-2 md:gap-y-44 xl:gap-y-44 gap-x-7 lg:grid-cols-2">

          <div className="w-full h-[360px] text-white px-4 360:h-auto">
            <h1 className="font-bold text-2xl">Transformando ideias em uma experiência visual impactante</h1>
            <p className="text-base text-[#B7BCD1] mt-[8px]">A etapa de design em um projeto desempenha um papel fundamental na criação de uma experiência visual impactante e envolvente. É nessa fase que as ideias se transformam em elementos concretos, como layouts, cores, tipografia e elementos interativos. O design não se limita apenas à estética, mas também tem um impacto significativo na usabilidade e na experiência do usuário</p>
          </div>

          <Details imgProp={iconAnalise} nameProp="Análise da identidade da marca" description="A análise da identidade da marca é um passo crucial no processo de design, pois estabelece os alicerces para a criação de uma experiência visual autêntica e consistente. Nessa etapa, mergulhamos fundo na compreensão da proposta de valor da empresa, seus valores fundamentais e a mensagem que deseja transmitir ao público-alvo" />
          <Details imgProp={iconTendencia} nameProp="Análise de tendências e referências" description="A análise de tendências e referências é uma etapa importante no processo de design, pois nos permite explorar e incorporar elementos visuais atualizados e alinhados com as expectativas e demandas do mercado, buscamos identificar as tendências emergentes no setor, referências inspiradoras e melhores práticas de design. Podemos estudar suas criações, entender suas abordagens e técnicas, e aplicar esse conhecimento no desenvolvimento de soluções criativas para o projeto em questão" />
          <Details imgProp={iconDesign} nameProp="Mapeamento de fluxo de usuário" description="O mapeamento de fluxo de usuário é uma etapa fundamental no processo de design, pois nos permite compreender e visualizar as interações que os usuários terão com o produto ou serviço. Analisamos como os usuários irão navegar pelo sistema, quais são as ações que eles realizarão e como as diferentes telas e funcionalidades se conectam. Ao mapear o fluxo de usuário, identificamos os pontos de entrada e saída, os caminhos que os usuários percorrerão e as possíveis ramificações que podem ocorrer durante a interação com o produto" />
          <Details imgProp={iconMapeamento} nameProp="Design de wireframes" description="Nessa etapa que transformamos o mapeamento do fluxo de usuário em uma representação visual. Os wireframes são esboços digitais que mostram a estrutura e a organização do produto ou serviço, sem se preocupar com elementos visuais detalhados. Com base no mapeamento do fluxo de usuário, os wireframes são criados para cada tela ou página do produto. Eles representam a disposição dos elementos, a hierarquia da informação, os espaços em branco e as interações básicas" />
          <Details imgProp={iconPreparacao} nameProp="Preparação de arquivos finais" description="Após a aprovação dos wireframes, a preparação dos arquivos finais é realizada. Nessa etapa, os elementos gráficos são organizados de acordo com o design finalizado, e os arquivos são exportados nos formatos corretos. Além disso, é criada uma documentação clara para auxiliar a equipe de desenvolvimento na implementação do design" />
        </div>
      </div>
      <FaleConosco />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default Desing