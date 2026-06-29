import { Badge } from "@/components/ui/badge";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <div className="max-w-5xl mx-auto text-center py-16 px-4 border-t border-solid">
            <div className="mt-8">
                <div>
                    <span className="flex text-gray-500 text-lg mb-4">Onde trabalhei</span>
                    <h2 className="text-6xl font-bold mb-4 text-left ">Minha Experiência</h2>
                </div>
                <div className="mt-12 flex flex-col gap-6">
                    <ExperienceCard
                        company="UERJ"
                        startDate="Out 2022"
                        endDate="Ago 2024"
                        role="Programa de iniciação à docência na graduação"
                        description="Participei do programa Prodocência da UERJ, desenvolvendo aplicações e laboratórios para o ensino de métodos computacionais em Inteligência Artificial com software livre. Utilizei Python para implementar algoritmos e aplicações práticas, incluindo a criação de um chatbot para auxiliar estudantes com dúvidas sobre a universidade."
                        technologies={["Python", "Inteligência Artificial", "Software Livre"]}
                    />
                    <ExperienceCard
                        company=" DNZ DESENVOLVIMENTO"
                        startDate="Jul 2025"
                        endDate="Jul 2026"
                        role="Estagiário de Desenvolvimento Web"
                        description="Atuei no desenvolvimento de sistemas de gestão para empresas de viagens e de um SaaS para gestão empresarial com foco em automação corporativa. Também participei da refatoração de sistemas legados e da criação de automações para processos de contabilidade fiscal."
                        technologies={["PHP", "Laravel", "Livewire", "MySQL", "Alpine.js", "Tailwind CSS"]}

                    />
                </div>
            </div>
        </div>
    )
}