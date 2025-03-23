import React from "react";
import {Spotlight} from "@/components/ui/spotlight";
import {GridBackground} from "@/components/ui/grid_background";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

const Hero = () => {
    return (<div className="pb-20 pt-36">
            <div>
                <Spotlight className="top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>

                <Spotlight className="-top-10 left-full h-[80vh] w-[50vh]" fill="purple"/>

                <Spotlight className="-top-28 left-80 h-[80vh] w-[50vh]" fill="blue"/>
            </div>

            <div>
                <GridBackground/>
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        DYNAMIC WEB MAGIC WITH NEXT.JS
                    </h2>
                    <TextGenerateEffect words={"Bridging the gap between thoughts and reality"} className="text-center md:text-5xl lg:text-6xl"/>
                    <p className="text-center">Hi, I'm Arnav</p>
                </div>

            </div>

        </div>)
}

export default Hero;