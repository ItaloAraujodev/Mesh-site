import icon from '../../assets/Nav/logo.svg';
import brasil from '../../assets/Nav/brasil.svg';
import american from '../../assets/Nav/american.svg';

function navBar() {
    return (
        <nav className='w-full h-14 relative flex justify-center bg-navBar z-10'>
            <div className='w-10/12 flex items-center justify-between'>
                <div>
                    <img src={icon} alt="Logo da Mesh" />
                </div>
                <div>
                    <ul className='text-white flex md:gap-6 lg:gap-11 xl:gap-20 full:gap-24 md:text-xs lg:text-sm xl:text-sm full:text-lg'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Quem somos</a></li>
                        <li><a href="">Contribuições</a></li>
                        <li><a href="">Fale Conosco</a></li>
                        <li><a href="">Equipe</a></li>
                    </ul>
                </div>
                <div className='flex gap-4 full:gap-6'>
                    <img src={brasil} alt="Bandeira do brasil" />
                    <img src={american} alt="Bandeira do Estados unidos" />
                </div>
            </div>
        </nav>
    )
}

export default navBar