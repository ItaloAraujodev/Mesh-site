
import logo from '../../assets/Nav/logo.svg'

export function Loading() {
  return (
    <div className="w-full h-full object-cover rounded-2xl p-[2px] absolute">
      <div className='w-[full] h-full flex flex-col justify-center items-center mx-auto gap-2 bg-black rounded-2xl'>
        <img src={logo} alt="" className='w-[52px] animate-pulse' />
        <h1 className='text-center text-white'>Loading</h1>
      </div>
    </div>
  );
}