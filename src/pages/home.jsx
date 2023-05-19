
/* ------------ Componentes ----------------- */
import Home from '../components/Home'
import Sobre from "../components/Sobre";
import Atividades from "../components/Atividades";
import Juntar from "../components/juntar";
import Integrantes from "../components/Integrantes";
import '../geral.css'

export default function HomePage() {

  return (
    <main className="geral">
        <Home />
        <Sobre />
        <Atividades />
        <Juntar />
        <Integrantes />
    </main>
  )
}
