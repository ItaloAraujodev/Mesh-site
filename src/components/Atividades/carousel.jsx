import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import produtos from '../../assets/Atividades/produtosWeb.svg';
import banco from '../../assets/Atividades/banco.svg';
import money from '../../assets/Atividades/money.svg';
import digital from '../../assets/Atividades/digital.svg'
import blockchain from '../../assets/Atividades/blockchain.svg'
import nfts from '../../assets/Atividades/nfts.svg'
import token from '../../assets/Atividades/tokens.svg'
import ageis from '../../assets/Atividades/ageis.svg'
import product from '../../assets/Atividades/product.svg'


const Carousel = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },


      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        }
      },

      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        }
      },


    ]
  }

  return (
    <div className="carousel">
      <Slider {...settings} className="">
        <div className="box bg-gradient-to-bl from-saturation-green to-saturation-azul-claro">
          <div className="box-context flex flex-col">
            <img src={produtos} alt="" />
            <h3>Produtos para Web3</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <img src={money} alt="" />
            <h3>SaaS para Fintechs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={banco} alt="" />
            <h3>De-Fi e economias descentralizadas</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={digital} alt="" />
            <h3>Branding</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <img src={blockchain} alt="" />
            <h3>Blockchain as a Service</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={nfts} alt="" />
            <h3>NFTs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={token} alt="" />
            <h3>Tokens</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <img src={ageis} alt="" />
            <h3>Metodos ágeis</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <img src={product} alt="" />
            <h3>Produtos</h3>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel