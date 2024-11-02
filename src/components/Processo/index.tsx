import React, { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import Planejamento from "./selections/Planejamento";
import { Entrega } from "./selections/Entrega";
import { Testes } from "./selections/Testes";
import { Producao } from "./selections/Producao";
import { Design } from "./selections/Design";
import { DropMenu } from "../Common/Dropmenu";

export default function Processo() {
  const [selected, setSelected] = useState("Planejamento");

  const renderContent = () => {
    switch (selected) {
      case "Planejamento":
        return <Planejamento />;
      case "Ux/Ui Design":
        return <Design />;
      case "Produção":
        return <Producao />;
      case "Testes e garantia":
        return <Testes />;
      case "Entrega e manutenção":
        return <Entrega />;
      default:
        return null;
    }
  };

  return (
    <div id="process" className="w-full h-auto pb-1 bg-gradient-to-r from-blue-500 to-[#2a396b]">
      <div className="w-full h-full bg-[#0E192A] text-white flex flex-col items-center justify-center 360:py-20 lg:pt-24 lg:pb-40">
        <h2 className="text-center font-white font-russo-one lg:text-[48px] 360:text-[2rem] mb-16">Explicação do Processo</h2>
        <div className="360:hidden lg:block">
          <ul className="flex gap-20 lg:gap-10 360:flex-col lg:flex-row">
            {["Planejamento", "Ux/Ui Design", "Produção", "Testes e garantia", "Entrega e manutenção"].map((item) => (
              <li
                key={item}
                onClick={() => setSelected(item)}
                className={`font-semibold text-base flex flex-col items-center gap-2 cursor-pointer px-4 pb-1 relative transition-colors duration-300 ${selected === item ? "text-white after:scale-x-100" : "text-white/60 after:scale-x-0"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-line-linear-azul after:to-line-linear-red after:transition-transform after:duration-300 after:origin-left`}
              >
                <RiSearchEyeLine className={`${selected === item ? "text-3xl text-[#498CF1]" : "text-3xl"}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Conteúdo com animação */}
        <div className="lg:mt-12 w-full h-full overflow-hidden">
          <div className={`transition-all duration-500 ease-in-out transform ${selected ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"}`}>
            <div className="360:hidden lg:block">
              {renderContent()}
            </div>
          </div>

          {/* Menu drop-down para mobile */}
          <div className="space-y-6 lg:hidden 360:block">
            <DropMenu title="Planejamento">
              <div className="block">
                <Planejamento />
              </div>
            </DropMenu>
            <DropMenu title="Ux/Ui Design">
              <div className="block">
                <Design />
              </div>
            </DropMenu>
            <DropMenu title="Produção">
              <div className="block">
                <Producao />
              </div>
            </DropMenu>
            <DropMenu title="Entrega e Manutenção">
              <div className="block">
                <Entrega />
              </div>
            </DropMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
