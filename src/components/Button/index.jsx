import ScrollLink from "../transition"
import { motion } from "framer-motion"

export default function Button(props) {

    // eslint-disable-next-line react/prop-types
    const { text, url } = props

    return (
        <motion.div 
        whileHover={{ background: "linear-gradient(#EC2158, #498CF1)" }}
        transition={ 
            {  delay: 0.026 }}
        className="w-60 h-12 md:w-52 md:h-10 lg:w-48 lg:h-10 xl:w-52 xl:h-11 py-[2px] px-[2px] flex items-center justify-center rounded-[50px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro">
            <motion.button
                whileHover={{ backgroundColor: '#283563' }}
                transition={ { delay: 0.024 } }
                className="w-full h-full md:text-base text-lg lg:text-sm xl:text-base rounded-[50px] bg-linear-escuro"><ScrollLink href={url}>{text}</ScrollLink></motion.button>
        </motion.div>
    )
}