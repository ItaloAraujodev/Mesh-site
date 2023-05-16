import PropTypes from 'prop-types'

const Details = ({ imgProp, nameProp, description  }) => {
    return (
        <>
            <div className="w-full h-[360px] 360:h-auto text-white">
                <div className="flex items-center gap mb-4 gap-4 px-4 ">
                    <img src={imgProp} alt="" />
                    <h1 className="font-semibold text-xl">{nameProp}</h1>
                </div>
                <p className="text-base text-[#B7BCD1] text-start px-4">{description}</p>
            </div>
        </>
    )
}

Details.propTypes = {
    imgProp: PropTypes.string,
    nameProp: PropTypes.string,
    description: PropTypes.string,
  }

export default Details