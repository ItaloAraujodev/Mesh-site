
import produtos from '../../assets/Atividades/produtosWeb.svg';
import banco from '../../assets/Atividades/banco.svg';
import money from '../../assets/Atividades/money.svg';
import digital from '../../assets/Atividades/digital.svg';
import blockchain from '../../assets/Atividades/blockchain.svg';
import nfts from '../../assets/Atividades/nfts.svg';
import token from '../../assets/Atividades/tokens.svg';
import ageis from '../../assets/Atividades/ageis.svg';
import product from '../../assets/Atividades/product.svg';
/* import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay' */
import './style.css'

const caroul = () => {

  return (
    <div className='slider'>
      <div className='slider-track'>
        <div className="box bg-gradient-to-bl from-saturation-green to-saturation-azul-claro ">
          <div className="box-context flex flex-col">
            <img src={produtos} alt="Produtos para Web3" />
            <h3>Produtos para Web3</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <img src={money} alt="SaaS para Fintechs" />
            <h3>SaaS para Fintechs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={banco} alt="De-Fi e economias descentralizadas" />
            <h3>De-Fi e economias descentralizadas</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={digital} alt="Branding" />
            <h3>Branding</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <img src={blockchain} alt="Blockchain as a Service" />
            <h3>Blockchain as a Service</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={nfts} alt="NFTs" />
            <h3>NFTs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={token} alt="Tokens" />
            <h3>Tokens</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <img src={ageis} alt="Metodos ágeis" />
            <h3>Metodos ágeis</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={product} alt="Produtos" />
            <h3>Produtos</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default caroul