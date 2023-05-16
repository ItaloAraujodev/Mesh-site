import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import bannerDesenvolvimento from '../assets/planejamento/bannerDesenvolvimento.svg';
import iconRequisito from '../assets/planejamento/icon/iconRequisito.svg';
import iconSoftware from '../assets/planejamento/icon/iconSoftware.svg';
import iconFuncionalidades from '../assets/planejamento/icon/iconFuncionalidades.svg';
import iconObjetivos from '../assets/planejamento/icon/iconObjetivos.svg';
import iconImplatacao from '../assets/planejamento/icon/iconImplatacao.svg';
import Details from "../components/Details/Details";
import FaleConosco from "../components/FaleConosco";
const Desenvolvimento = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[257px] relative top-16 pb-[2px] bg-gradient-to-r from-line-linear-azul to-line-linear-red">
        <img src={bannerDesenvolvimento} alt="Desenvolvimento" draggable="false" className="w-full h-full object-cover object-center" />
        <h1 className="text-white text-[54px] font-russo-one absolute bottom-6 left-[10%] 360:text-4xl">Desenvolvimento</h1>
      </div>

      <div className="w-full h-auto mt-16 bg-saturation-preto py-40">
        <div className="w-[80%] grid grid-cols-3 mx-auto gap-y-24 360:grid-cols-1 md:grid-cols-2 md:gap-y-44 xl:gap-y-44 gap-x-7 lg:grid-cols-2">

          <div className="w-full h-[360px] text-white px-4 360:h-auto">
            <h1 className="font-bold text-2xl">Desenvolvimento: Um dos pilares para o sucesso</h1>
            <p className="text-base text-[#B7BCD1] mt-[8px]">Aqui onde as ideias ganham vida e se transformam em uma solução funcional e de alta qualidade. Nossa equipe de desenvolvimento altamente qualificada e experiente trabalha incansavelmente para transformar os conceitos e designs em uma experiência interativa e envolvente. Utilizando tecnologias avançadas e metodologias ágeis, garantimos que o produto final seja robusto, escalável e eficiente</p>
          </div>

          <Details imgProp={iconRequisito} nameProp="Análise de requisitos" description="É essencial compreender em profundidade as necessidades e expectativas do cliente, bem como as restrições técnicas que possam influenciar o desenvolvimento do projeto. Realizamos reuniões e entrevistas para obter informações detalhadas sobre as funcionalidades desejadas, a experiência do usuário esperada e os objetivos gerais do projeto. Também buscamos identificar requisitos não funcionais, como desempenho, segurança, escalabilidade e compatibilidade com outras tecnologias" />
          <Details imgProp={iconSoftware} nameProp="Arquitetura de software" description="Nosso foco principal é garantir que o sistema seja robusto, escalável e eficiente. Para isso, realizamos uma análise cuidadosa dos requisitos e funcionalidades do projeto, levando em consideração fatores como desempenho, segurança e manutenibilidade. Selecionamos as tecnologias adequadas que melhor se encaixam nos requisitos do projeto, levando em consideração a compatibilidade com o ambiente de desenvolvimento, a facilidade de integração e a escalabilidade futura" />
          <Details imgProp={iconObjetivos} nameProp="Desenvolvimento de funcionalidades" description="Com base nos requisitos e na arquitetura definidos, iniciamos o desenvolvimento das funcionalidades do produto. Nessa etapa, utilizamos boas práticas de programação e seguimos padrões de codificação estabelecidos, visando garantir um código limpo, eficiente e fácil de dar manutenção. Durante o desenvolvimento, aplicamos técnicas de programação orientada a objetos, modularização e reutilização de código, de forma a criar um sistema bem estruturado e modular" />
          <Details imgProp={iconFuncionalidades} nameProp="Testes e qualidade" description="Na etapa de testes e qualidade, além dos testes mencionados anteriormente, também realizamos testes de regressão para garantir que as modificações ou adições feitas durante o desenvolvimento não afetem negativamente as funcionalidades já existentes. Esses testes visam identificar possíveis problemas de compatibilidade, erros ou falhas que possam surgir após as atualizações" />
          <Details imgProp={iconImplatacao} nameProp="Implantação e lançamento" description="A etapa de implantação e lançamento é o momento em que o produto desenvolvido é disponibilizado para uso pelos usuários finais. Nessa fase, são realizadas todas as atividades necessárias para garantir uma implantação bem-sucedida do sistema em um ambiente de produção. Isso inclui a configuração adequada dos servidores, a integração de todos os componentes e a verificação da compatibilidade com o ambiente operacional" />
        </div>
      </div>
      <FaleConosco />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default Desenvolvimento