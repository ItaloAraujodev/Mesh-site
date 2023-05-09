import { motion } from "framer-motion"

export default function Button(props) {

    // eslint-disable-next-line react/prop-types
    const { text, url, redirect } = props

    return (
        <motion.div
            whileHover={{ background: "linear-gradient(#EC2158, #498CF1)" }}
            transition={
                { delay: 0.026 }}
            className="w-full h-full py-[2px] px-[2px] flex items-center justify-center rounded-[50px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro">
            <motion.button
                whileHover={{ backgroundColor: '#283563' }}
                transition={{ delay: 0.024 }}
                className="w-full h-[40px] text-base xl:text-xl 2xl:text-xl rounded-[50px] bg-azul-claro"><a href={url} target={redirect} rel="noreferrer" >{text}</a></motion.button>
        </motion.div>
    )
}