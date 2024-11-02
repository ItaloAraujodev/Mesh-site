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
                        <CardComponent title="Produtos para Web3" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={produtos} />
                        <CardComponent title="SaaS para Fintechs" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={money} />
                        <CardComponent title="De-Fi e economias descentralizadas" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={banco} />
                        <CardComponent title="Branding" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={digital} />
                        <CardComponent title="Blockchain as a Service" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={blockchain} />
                        <CardComponent title="NFTs" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={nfts} />
                        <CardComponent title="Tokens" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={token} />
                        <CardComponent title="Metodologias ágeis" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={ageis} />
                        <CardComponent title="Desenvolvimento de produtos" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa." image={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}