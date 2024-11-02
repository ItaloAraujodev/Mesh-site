import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';

function Produto({ nameProp, linkProp, descriptionProp }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Link
        to={linkProp}
        className="relative w-[366px] h-[320px] rounded-sm  bg-gradient-to-bl from-saturation-green to-saturation-azul-claro p-0.5 flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='flex flex-col justify-between w-full h-full bg-azul-claro p-4np'>
          <h2 className="text-white font-bold text-[16px] text-start w-2/3">
            {nameProp}
          </h2>
          <p className="text-white/70">
            {descriptionProp}
          </p>
          <div className="w-32 h-[32px] text-base text-white text-start uppercase flex items-center gap-3 relative overflow-hidden">
            <span className="transition-colors duration-300">Saiba mais</span>
            <FaArrowRight
              className={`transform transition-transform duration-300 ${hover ? "translate-x-2" : "translate-x-0"}`}
            />
          </div>
        </div>
      </Link>
    </>
  );
}

Produto.propTypes = {
  nameProp: PropTypes.string.isRequired,
  linkProp: PropTypes.string.isRequired,
  descriptionProp: PropTypes.string.isRequired,
};

export default Produto;
