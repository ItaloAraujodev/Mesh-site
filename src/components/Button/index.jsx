import ScrollLink from "../transition"

export default function Button(props) {

    // eslint-disable-next-line react/prop-types
    const { text, url } = props

    return (
        <div className="w-60 h-12 py-[2px] px-[2px] flex items-center justify-center rounded-[50px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro hover:bg-gradient-to-b hover:from-line-linear-red hover:to-line-linear-azul transition-all duration-300 ease-out">
            <button type="button" className="w-full h-full text-lg rounded-[50px] bg-linear-escuro hover:bg-saturation-azul-escuro transition-all duration-300 ease-out"><ScrollLink href={url}>{text}</ScrollLink></button>
        </div>
    )
}