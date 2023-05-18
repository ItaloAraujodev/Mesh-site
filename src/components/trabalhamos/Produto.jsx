import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Produto = ({ imgProp, nameProp, linkProp }) => {

  return (
    <div className="w-[366px] h-[366px] 360:w-[300px] 360:h-[300px] md:w-[300px] md:h-[300px] relative bg-gradient-to-b from-[#EC2158] via-[#EC2158] to-[#498CF1] rounded-2xl">
      <img src={imgProp} alt="" draggable="false" className='w-full h-full object-cover rounded-2xl p-[2px] absolute' />
    
      <div className='w-full h-full flex flex-col justify-end items-center absolute p-6'>
        <h2 className='text-white font-bold text-[26px] text-center'>{nameProp}</h2>
        <button type='text' className='w-32 h-[32px] text-base bg-white text-black rounded-[12px] mt-4 hover:bg-[#D41F31] hover:text-white transition-all ease-in-out delay-100'><Link to={linkProp}>Saiba mais</Link></button>
      </div>

    </div>
  )
}

Produto.propTypes = {
  imgProp: PropTypes.string,
  nameProp: PropTypes.string,
  linkProp: PropTypes.string,
}

export default Produto