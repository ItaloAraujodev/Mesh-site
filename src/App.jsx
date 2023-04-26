/* ------------ Componentes ----------------- */
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Atividades from "./components/Atividades";
import Juntar from "./components/juntar";
import Integrantes from "./components/Integrantes";
import FaleConosco from "./components/FaleConosco";
import Footer from "./components/Footer";

function App() {

  return (
    <main>
      <NavBar />
      <Home/>
      <Sobre/>
      <Atividades/>
      <Juntar/>
      <Integrantes/>
      <FaleConosco />
      <Footer />
    </main>
  )
}

export default App
