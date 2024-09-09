import {RiJavaLine} from "react-icons/ri";
import {SiSpringboot} from "react-icons/si";
import {RiJavascriptLine} from "react-icons/ri";
import {RiVuejsLine} from "react-icons/ri";
import {SiMysql} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return <div className="border-b border-neutral-800 pb-16">
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{ opacity:0, y:-100 }}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies
        </motion.h1>
        <motion.div
            whileInView={{ opacity:1, x:0 }}
            initial={{ opacity:1, x:0 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl"/>
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiVuejsLine className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-400"/>
            </motion.div>
        </motion.div>
    </div>
}
export default Technologies
