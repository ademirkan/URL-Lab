import Marquee from "react-fast-marquee";
import { Poppins, Roboto_Mono, Lexend, Roboto } from "next/font/google";
import hexToRgb from "@/ts/hexToRgb";

const marqueeFont = Lexend({ subsets: ["latin"], weight: "700" });
const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
export default function UnderConstructionMarquee() {
    return (
        <Marquee
            style={{ width: "100%" }}
            className={`${marqueeFont.className} text-primary text-6xl z-10 box-border bg-black bg-opacity-20 `}
            autoFill
            speed={75}
        >
            <div className="py-16 select-none">JOIN THE BETA</div>
            <div className="relative h-[100%] flex items-center justify-center select-none">
                <div className={`${titleFont.className} p-8`}>●</div>
            </div>
        </Marquee>
    );
}
