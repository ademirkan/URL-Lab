"use client";
import { motion } from "framer-motion";
import React from "react";

interface IRectangleProps {
    height: string;
    width: string;
    color: string;
    duration: number;
}
const AnimatedRectangle = ({
    height,
    width,
    color,
    duration,
}: IRectangleProps) => {
    const totalLength = 2 * (parseInt(height) + parseInt(width));
    const widthDuration = (parseInt(width) / totalLength) * duration;
    const heightDuration = (parseInt(height) / totalLength) * duration;

    return (
        <div style={{ position: "relative", height, width }}>
            {/* top */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width }}
                transition={{ duration: widthDuration, ease: "linear" }}
                style={{
                    top: 0,
                    left: 0,
                    height: "2px",
                    backgroundColor: color,
                    position: "absolute",
                }}
            />

            {/* right */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height }}
                transition={{
                    duration: heightDuration,
                    delay: widthDuration,
                    ease: "linear",
                }}
                style={{
                    top: 0,
                    right: 0,
                    width: "2px",
                    backgroundColor: color,
                    position: "absolute",
                }}
            />

            {/* bottom */}

            <motion.div
                initial={{ width: 0 }}
                animate={{ width }}
                transition={{
                    duration: widthDuration,
                    delay: widthDuration + heightDuration,
                    ease: "linear",
                }}
                style={{
                    bottom: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: color,
                    position: "absolute",
                }}
            />

            {/* left */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height }}
                transition={{
                    duration: heightDuration,
                    delay: widthDuration * 2 + heightDuration,
                    ease: "linear",
                }}
                style={{
                    bottom: 0,
                    left: 0,
                    width: "2px",
                    backgroundColor: color,
                    position: "absolute",
                }}
            />
        </div>
    );
};

export default AnimatedRectangle;
