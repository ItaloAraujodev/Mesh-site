import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiSearchEyeLine } from "react-icons/ri";

export function DropMenu({ children, title }) {
  // Estado para controlar a visibilidade das informações
  const [isVisible, setIsVisible] = useState(false);

  // Função que alterna o estado
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="border-b border-gray-500 h-full w-full pb-6 px-4">
      <button
        onClick={toggleVisibility}
        className="text-xl font-normal w-full text-left flex gap-4 items-center"
      >
        <RiSearchEyeLine className="text-2xl text-[#498CF1]" />
        {title}
      </button>

      {/* Condicional para mostrar ou esconder as informações com animação */}
      <div className={`transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 ' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="mt-4 p-4 rounded shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}

DropMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

