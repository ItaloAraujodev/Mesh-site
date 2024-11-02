import produtos from '../../assets/Atividades/produtosWeb.svg';
import banco from '../../assets/Atividades/banco.svg';
import money from '../../assets/Atividades/money.svg';
import digital from '../../assets/Atividades/digital.svg';
import blockchain from '../../assets/Atividades/blockchain.svg';
import nfts from '../../assets/Atividades/nfts.svg';
import token from '../../assets/Atividades/tokens.svg';
import ageis from '../../assets/Atividades/ageis.svg';
import product from '../../assets/Atividades/product.svg';

import './style.css'

const caroul = () => {
  return (
      <div className='flex flex-wrap gap-4 justify-center'>
          <div className="w-[300px] h-[260px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro p-0.5 rounded-md">
            <div className="flex flex-col gap-6 w-full h-full bg-azul-claro rounded-md p-6">
              <div className='flex gap-3'>
              <img src={produtos} width={30} height={30} alt="Produtos para Web3" className='h-fit' draggable="false"  />
              <h3>Produtos para Web3</h3>
              </div>
              <p className='text-white/70 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus iure neque fugiat minima doloribus ullam? Aliquam, fuga! Sed ex rem nam quae sequi, ab quia architecto nulla iure ipsa.</p>
            </div>
          </div>
          <div className=" w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-bl from-saturation-red to-saturation-azul-claro ">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={money} alt="SaaS para Fintechs" draggable="false" />
              <h3>SaaS para Fintechs</h3>
            </div>
          </div>

          <div className="w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={banco} alt="De-Fi e economias descentralizadas" draggable="false" />
              <h3>De-Fi e economias descentralizadas</h3>
            </div>
          </div>

          <div className="w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={digital} alt="Branding" draggable="false" />
              <h3>Branding</h3>
            </div>
          </div>

          <div className="w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={blockchain} alt="Blockchain as a Service" draggable="false" />
              <h3>Blockchain as a Service</h3>
            </div>
          </div>

          <div className="w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={nfts} alt="NFTs" draggable="false" />
              <h3>NFTs</h3>
            </div>
          </div>

          <div className="w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={token} alt="Tokens" draggable="false" />
              <h3>Tokens</h3>
            </div>
          </div>

          <div className="w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={ageis} alt="Metodos ágeis" draggable="false" />
              <h3>Metodos ágeis</h3>
            </div>
          </div>

          <div className="w-[300px] h-[200px] p-0.5 rounded-md bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
            <div className="flex flex-col justify-center items-center w-full h-full bg-azul-claro rounded-md">
              <img src={product} alt="Produtos" draggable="false" />
              <h3>Produtos</h3>
            </div>
          </div>
        </div>

  )
}

export default caroul