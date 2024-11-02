
/* ------------ Componentes ----------------- */
import Home from '../components/Home'
import Diferencial from "../../components/diferencial/index.jsx";
import Atividades from "../components/Atividades";
import Juntar from "../components/juntar";
import Integrantes from "../components/Integrantes";
import Processo from "../components/Processo";
import '../geral.css'


export default function HomePage() {

  return (
    <main className="geral">
        <Home />
        <Diferencial />
        <Processo />
        <Atividades />
        <Juntar />
        <Integrantes />
    </main>
  )
}
