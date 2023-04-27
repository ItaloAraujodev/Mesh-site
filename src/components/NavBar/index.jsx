import icon from '../../assets/Nav/logo.svg';
import brasil from '../../assets/Nav/brasil.svg';
import american from '../../assets/Nav/american.svg';
import ScrollLink from '../transition';

function navBar() {
    return (
        <nav className='w-full h-16 relative flex justify-center bg-navBar z-10'>
            <div className='w-10/12 flex items-center justify-between'>
                <div>
                    <img src={icon} alt="Logo da Mesh" />
                </div>
                <div>
                    <ul className='text-white text-base flex gap-8 lg:gap-16 xl:gap-14 1440:gap-16 2xl:gap-[5rem] full:gap-[6rem] '>
                        <li><a href="home">Home</a></li>
                        <li><ScrollLink href="#atividade">Serviços</ScrollLink></li>
                        <li><ScrollLink href="#sobre">Quem somos</ScrollLink></li>
                        <li><ScrollLink href="#fale">Fale Conosco</ScrollLink></li>
                        <li><ScrollLink href="#inte">Equipe</ScrollLink></li>
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