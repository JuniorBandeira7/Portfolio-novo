import { Badge } from "@/components/ui/badge";

export default function About() {
    return (
        <div className="max-w-5xl mx-auto text-center py-16 px-4 border-t border-solid">
            <div className="mt-8">
                <div>
                    <span className="flex text-gray-500 text-lg mb-4">Quem sou eu</span>
                    <h2 className="text-6xl font-bold mb-4 text-left ">Sobre Mim</h2>
                    <p className="text-lg text-gray-700 mb-6 text-left h-[50%]">
                        Desenvolvedor apaixonado por tecnologia e inovação.
                    </p>
                </div>
                <div className="mt-12">
                    <p className="text-xl text-gray-700 mb-6 text-left">Sou Julio Bandeira, um desenvolvedor Full-Stack Developer apaixonado por criar experências únicas e focadas no cliente.</p>
                    <p className="text-xl text-gray-700 mb-6 text-left">Eu Fiz parte da DNZ DESENVOLVIMENTO por um ano, onde adquiri experiência em desenvolvimento web e colaboração em equipe, participando de projetos focados em automação fiscal, como geração de SPED e notas fiscais eletrônicas.</p>
                    <p className="text-xl text-gray-700 mb-6 text-left">Também participei do Programa de iniciação à docência na graduação na UERJ, onde tive a oportunidade de desenvolver as minhas habilidades de trabalho em equipe, onde, junto com minha equipe, fomos encarregados de desenvolver algoritmos de inteligencia artificial e demonstrá-los para os alunos.</p>
                </div>

                <div className="mt-12 flex flex-wrap justify-start">
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">PHP</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">Java</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">JavaScript</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">React</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">Node.js</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">CSS</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">HTML</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">Laravel</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">Tailwind CSS</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">MySQL</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-gray-100">MongoDB</Badge>
                </div>
            </div>
        </div>
    )
}