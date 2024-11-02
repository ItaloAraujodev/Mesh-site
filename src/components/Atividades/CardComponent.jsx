import PropTypes from 'prop-types';

export function CardComponent({ title, description, image }) {
  return (
    <div className="w-[300px] h-[330px] border border-white/40 p-0.5 rounded-md hover:scale-105 transition-all">
      <div className="flex flex-col gap-6 w-full h-full  rounded-md p-6">
        <div className='flex gap-6 items-center'>
          <img src={image} width={30} height={30} alt={title} className='h-fit' draggable="false" />
          <h3 className='font-bold text-2xl'>{title}</h3>
        </div>
        <p className='text-white/70 text-base'>{description}</p>
      </div>
    </div>
  )
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};