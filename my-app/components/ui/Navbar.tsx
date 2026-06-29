// components/Navbar.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Sobre", href: "#sobre" },
        { name: "Experiência", href: "#experiencia" },
        { name: "Projetos", href: "#projetos" },
        { name: "Contato", href: "#contato" },
    ];

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
            <div className="mx-auto w-full flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <button
                    onClick={() => scrollTo('#top')}
                    className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition"
                >
                    MeuSite
                </button>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.href)}
                            className="font-medium text-gray-700 transition hover:text-blue-600"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t bg-white md:hidden">
                    <div className="flex flex-col gap-4 px-6 py-4">
                        {links.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => {
                                    scrollTo(link.href);
                                    setIsOpen(false);
                                }}
                                className="font-medium text-gray-700 hover:text-blue-600"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}