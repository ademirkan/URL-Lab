"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const formFont = Poppins({ subsets: ["latin"], weight: "500" });

export default function URLShortener() {
    const container = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.75,
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="overflow-hidden"
        >
            <div
                id="url-form"
                className="relative sm:w-[400px] w-[290px] h-[50px] bg-transparent border-primary border-[2px] rounded-xl flex flex-row"
            >
                <FontAwesomeIcon
                    className="h-[100%] sm:p-4 p-4 !pr-0 text-primary !box-border"
                    icon={faLink}
                />
                <input
                    className={`${formFont.className} h-[100%] w-[100%] p-4 flex-grow bg-transparent outline-none text-[0.8rem] text-primary placeholder-secondary`}
                    placeholder={"Paste your long URL here"}
                    type="text"
                />
                <button className="btn btn-primary btn-sm h-[100%] rounded-xl border-4 border-base-100 hover:border-base-100">
                    Shorten
                </button>
            </div>
        </motion.div>
    );
}
