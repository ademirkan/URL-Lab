import AnimatedRectangle from "@/components/AnimatedRecangle";
import StaggerText from "@/components/StaggerText";
import URLShortener from "@/components/URLShortener";
import { Poppins, Roboto_Mono, Lexend, Roboto } from "next/font/google";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
const subtitleFont = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
    return (
        <>
            <section
                id="hero"
                className="h-[100vh] flex flex-col items-center justify-center relative gap-10"
            >
                <div className="flex flex-col items-center justify-center relative">
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
                <URLShortener />
            </section>

            <section id="about" className="h-[100vh] w-[90vw] bg-blue-300">
                about
            </section>

            <section id="features" className="h-[100vh] w-[90vw] bg-red-300">
                features
            </section>
        </>
    );
}
