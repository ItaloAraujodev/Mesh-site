import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="w-full h-screen flex flex-col justify-center items-center gap-6 border border-red-500">
        <h1 className="text-6xl text-center">OPS! NÃO ENCONTRAMOS<br />ESSA PÁGINA</h1>
        <button type="text" className="w-[20%] h-8 rounded-2xl bg-sky-500" ><Link to="/">Voltar ao inicio</Link></button>
    </div>
  );
}