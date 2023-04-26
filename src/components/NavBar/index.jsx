import icon from '../../assets/Nav/logo.svg';
import brasil from '../../assets/Nav/brasil.svg';
import american from '../../assets/Nav/american.svg';

function navBar() {
    return (
        <nav className='w-full h-16 relative flex justify-center bg-navBar z-10'>
            <div className='w-10/12 flex items-center justify-between'>
                <div>
                    <img src={icon} alt="Logo da Mesh" />
                </div>
                <div>
                    <ul className='text-white text-base flex gap-8 xl:gap-14 1440:gap-16 2xl:gap-[5rem] full:gap-[6rem] '>
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