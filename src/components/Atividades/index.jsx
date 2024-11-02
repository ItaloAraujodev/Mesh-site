/* import { atividades } from '../../utils/atividades'; */

import './style.css'
import produtos from '../../assets/Atividades/produtosWeb.svg';
import banco from '../../assets/Atividades/banco.svg';
import money from '../../assets/Atividades/money.svg';
import digital from '../../assets/Atividades/digital.svg';
import blockchain from '../../assets/Atividades/blockchain.svg';
import nfts from '../../assets/Atividades/nfts.svg';
import token from '../../assets/Atividades/tokens.svg';
import ageis from '../../assets/Atividades/ageis.svg';
import product from '../../assets/Atividades/product.svg';
import { CardComponent } from './CardComponent';

export default function Atividades() {
    return (
        <div id='atividade' className="w-full h-auto pb-1 bg-gradient-to-r from-blue-500 to-[#2a396b]">
            <div className="w-full h-full bg-[#0E192A] text-white flex items-center justify-center 360:py-28 py-40 ">
                <div className='w-full flex flex-col'>
                    <h2  className='text-center font-white font-russo-one text-[42px] lg:text-[48px] 360:text-[2rem] mb-16'>Nossos serviços</h2>
                    <div  className="w-full flex flex-wrap justify-center items-center gap-6">
                        <CardComponent title="Produtos para Web3" description="Soluções inovadoras que aproveitam blockchain para criar experiências seguras, descentralizadas e transparentes, impulsionando interações digitais com mais liberdade e autonomia." image={produtos} />
                        <CardComponent title="SaaS para Fintechs" description="Plataforma especializada para operações financeiras, oferecendo ferramentas escaláveis e seguras para otimizar pagamentos, compliance e gestão de dados em tempo real." image={money} />
                        <CardComponent title="De-Fi e economias" description="Soluções financeiras autônomas que removem intermediários, promovendo acessibilidade, transparência e controle direto de ativos digitais." image={banco} />
                        <CardComponent title="Branding" description="Estratégias de marca que conectam identidade visual e narrativa para criar uma presença marcante, coerente e autêntica no mercado." image={digital} />
                        <CardComponent title="Blockchain as a Service" description="Infraestrutura simplificada para implementar e gerenciar aplicações em blockchain, permitindo mais segurança e inovação sem complexidade técnica." image={blockchain} />
                        <CardComponent title="NFTs" description="Ativos digitais únicos que autenticam propriedade e originalidade, transformando arte, colecionáveis e mais em experiências digitais exclusivas." image={nfts} />
                        <CardComponent title="Tokens" description="Representações digitais de valor ou utilidade, impulsionando economias digitais e permitindo transações rápidas e seguras em blockchain." image={token} />
                        <CardComponent title="Metodologias ágeis" description="Abordagens flexíveis de desenvolvimento que incentivam colaboração contínua e adaptação rápida para entregar soluções eficientes e centradas no cliente." image={ageis} />
                        <CardComponent title="Desenvolvimento de produtos" description="Processo focado em transformar ideias em produtos funcionais e inovadores, equilibrando design, usabilidade e tecnologia para resolver problemas reais." image={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}