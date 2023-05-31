import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TagManager from "react-gtm-module";
/* ------------ Componentes ----------------- */
import NavBar from "./components/NavBar";
import FaleConosco from "./components/FaleConosco";
import Footer from "./components/Footer";
/* ------------ Styles ----------------- */
import './geral.css'
import Aos from "aos";

export default function Root() {
  
  
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'G-PMBMJ809DE'
    }
  
    TagManager.initialize(tagManagerArgs)

    Aos.init({
      duration: 1600,
    })

  }, [])

  return (
    <main className="geral">
      <NavBar />
      <Outlet />
      <FaleConosco />
      <Footer />
    </main>
  )
}
