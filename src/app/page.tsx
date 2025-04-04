import Hero from "@/components/hero";
import Grid from "@/components/grid";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {FaHouse} from "react-icons/fa6";
import {FaContao, FaInfo} from "react-icons/fa";


export default function Home() {
    return (
        <main
            className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Grid/>
            </div>
        </main>
    );
}

const navItems = [
    {
        name: "Home",
        link: "/",
        icon: <FaHouse/>,
    },
    {
        name: "About",
        link: "/about",
        icon: <FaInfo/>,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: <FaContao/>,
    },
];