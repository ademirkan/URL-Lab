import ScrollArrow from "@/components/ScrollArrow";
import StaggerText from "@/components/StaggerText";
import URLShortener from "@/components/URLShortener";
import UnderConstructionMarquee from "@/components/UnderConstructionMarquee";
import { Poppins, Roboto_Mono, Lexend, Roboto } from "next/font/google";
import RenderOnceInView from "@/components/RenderOnceInView";
import FadeIn from "@/components/FadeIn";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
const subtitleFont = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
    return (
        <>
            <section
                id="hero"
                className="h-[100vh] flex flex-col items-center justify-center relative gap-10"
            >
                <div className="relative flex flex-col items-center top-[-1rem]">
                    <div
                        id="hero-text"
                        className="flex flex-col items-center justify-center relative"
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
                    <div className="relative m-8">
                        <URLShortener />
                    </div>
                </div>
            </section>

            <section
                id="about"
                className="flex flex-col w-[90vw] items-center relative pt-64 gap-32"
            >
                <div
                    id="bullet-1"
                    className="flex flex-col items-center justify-center h-[200px]"
                >
                    <RenderOnceInView
                        once={true}
                        margins="0px 0px -200px 0px"
                        className="flex flex-col items-center justify-center"
                        placeholderClassName="h-[128px]"
                    >
                        <p
                            className={`${titleFont.className} text-primary text-4xl m-4`}
                        >
                            1.
                        </p>
                        <StaggerText
                            className={`${titleFont.className} text-primary text-xl`}
                            startDelay={0}
                            staggerDelay={0.03}
                            staggerHeight={5}
                            childrenClassName="inline-block mx-[3px]"
                        >
                            Join our waitlist!
                        </StaggerText>

                        <StaggerText
                            className={`${subtitleFont.className} text-secondary text-sm text-center`}
                            startDelay={0.5}
                            staggerDelay={0.03}
                            staggerHeight={5}
                            childrenClassName="inline-block mx-[2px]"
                        >
                            Get early access to the beta
                        </StaggerText>

                        <FadeIn initialOffset={20} startDelay={1}>
                            <button className="btn btn-info mt-8 w-[12rem]">
                                Waitlist
                            </button>
                        </FadeIn>
                    </RenderOnceInView>
                </div>

                <ScrollArrow
                    maxHeight={400}
                    pxBufferUntilAnimation={100}
                    hasTip
                ></ScrollArrow>

                <div
                    id="bullet-2"
                    className="flex flex-col items-center justify-center h-[200px]"
                >
                    <RenderOnceInView
                        once={true}
                        margins="0px 0px -200px 0px"
                        className="flex flex-col items-center justify-center w-[300px]"
                        placeholderClassName="h-[200px]"
                    >
                        <p
                            className={`${titleFont.className} text-primary text-4xl m-4`}
                        >
                            2.
                        </p>
                        <StaggerText
                            className={`${titleFont.className} text-primary text-xl`}
                            startDelay={0}
                            staggerDelay={0.03}
                            staggerHeight={5}
                            childrenClassName="inline-block mx-[3px]"
                        >
                            Access premium features
                        </StaggerText>

                        <StaggerText
                            className={`${subtitleFont.className} text-secondary text-sm text-center`}
                            startDelay={0.5}
                            staggerDelay={0.03}
                            staggerHeight={5}
                            childrenClassName="inline-block mx-[2px]"
                        >
                            Track clickrates, userbase demographics, and more!
                        </StaggerText>

                        <FadeIn initialOffset={20} startDelay={1.25}>
                            <button className="btn btn-outline mt-8 w-[12rem]">
                                Login
                            </button>
                        </FadeIn>
                    </RenderOnceInView>
                </div>

                <div className="relative w-[100vw] rounded-b-2xl overflow-hidden">
                    <UnderConstructionMarquee />
                </div>
            </section>
        </>
    );
}
