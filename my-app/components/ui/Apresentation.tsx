"use client";
import { Button } from "@/components/ui/button";

export default function Apresentation() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="max-w-3xl mx-auto text-center py-16 px-4">
            <h1 className="text-4xl font-bold mb-4">Olá, eu sou o Júlio!</h1>
            <p className="text-lg text-gray-700 mb-6">
                Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis! Com habilidades em PHP, React, Next.js e outras tecnologias modernas, estou sempre buscando aprender e crescer na área de desenvolvimento.
            </p>
            <button onClick={() => scrollTo("#sobre")} className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer min-w-[200px] min-h-[50px] rounded-lg">Sobre mim</button>
        </div>
    )
}