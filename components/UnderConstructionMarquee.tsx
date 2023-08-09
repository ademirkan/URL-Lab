import Marquee from "react-fast-marquee";
import { Poppins, Roboto_Mono, Lexend, Roboto } from "next/font/google";
import hexToRgb from "@/ts/hexToRgb";

const marqueeFont = Roboto_Mono({ subsets: ["latin"], weight: "700" });
const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
export default function UnderConstructionMarquee() {
    return (
        <Marquee
            style={{ width: "100%" }}
            className={`${marqueeFont.className} bg-primary text-base-100 text-4xl z-10 rounded-xl`}
            autoFill
            gradient
            gradientColor={hexToRgb("#ffffff")}
            gradientWidth={10}
        >
            <div className="px-8 py-4 select-none">UNDER CONSTRUCTION</div>
            <div className="relative h-[100%] flex items-center justify-center select-none">
                <div className={`${titleFont.className}`}>●</div>
            </div>
        </Marquee>
    );
}
