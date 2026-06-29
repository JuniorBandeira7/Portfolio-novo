import { Badge } from "@/components/ui/badge";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
    return (
        <div className="max-w-5xl mx-auto text-center py-16 px-4 border-t border-solid">
            <div className="mt-8">
                <div>
                    <span className="flex text-gray-500 text-lg mb-4">Projetos feitos por mim</span>
                    <h2 className="text-6xl font-bold mb-4 text-left ">Projetos</h2>
                </div>
                <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-6">
                    <ProjectsCard
                        name="Mockando"
                        link="https://mockando.com.br/"
                        description="Mockando é uma ferramenta pensada para gerar mocks de dados para testes de
                                    software. Com ela, é possível criar arquivos JSON contendo uma boa quantidade de
                                    dados falsos de forma rápida, simples e sem a necessidade de programação."
                        technologies={["Next.js", "Tailwind CSS", "TypeScript"]}
                    />
                </div>
            </div>
        </div>
    )
}