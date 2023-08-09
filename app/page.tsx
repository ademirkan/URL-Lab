import StaggerText from "@/components/StaggerText";
import URLShortener from "@/components/URLShortener";
import UnderConstructionMarquee from "@/components/UnderConstructionMarquee";
import { Poppins, Roboto_Mono, Lexend, Roboto } from "next/font/google";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
const subtitleFont = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
    return (
        <>
            <section
                id="hero"
                className="h-[100vh] flex flex-col items-center relative gap-10 md:pt-[200px] pt-[100px] bg-base-100"
            >
                <div
                    id="hero-text"
                    className="flex flex-col items-center justify-center relative top-[100px]"
                >
                    <StaggerText
                        className={`${titleFont.className} md:text-[3.35rem] text-[7vw] text-primary text-center`}
                        startDelay={0}
                        staggerDelay={0.05}
                        staggerHeight={20}
                        childrenClassName="inline-block md:mx-2 mx-[1vw] my-1"
                    >
                        Shorten. Share. Track.
                    </StaggerText>

                    <StaggerText
                        className={`${subtitleFont.className} sm:text-base text-sm text-secondary text-center w-[90vw]`}
                        startDelay={0.75}
                        staggerDelay={0.03}
                        staggerHeight={5}
                        childrenClassName="inline-block mx-[3px]"
                    >
                        Shorten long URLs, share with your audience, track
                        insightful analytics
                    </StaggerText>
                </div>
                <div className="relative top-[100px]">
                    <URLShortener />
                </div>
            </section>

            <section
                id="about"
                className="flex flex-col h-[100vh] w-[100vw] justify-center items-center"
            >
                <div className="relative w-[90%]">
                    <UnderConstructionMarquee />
                </div>
            </section>
        </>
    );
}
