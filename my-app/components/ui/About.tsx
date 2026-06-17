import { Badge } from "@/components/ui/badge";

export default function About() {
    return (
        <div className="max-w-5xl mx-auto text-center py-16 px-4 border-t border-solid">
            <div className="mt-8">
                <div>
                    <span className="flex text-gray-500 text-lg mb-4">Quem sou eu</span>
                    <h2 className="text-6xl font-bold mb-4 text-left ">Sobre Mim</h2>
                    <p className="text-lg text-gray-700 mb-6 text-left h-[50%]">
                        Developer Advocate who builds, teaches, and grows communities around the tools developers love.
                    </p>
                </div>
                <div className="mt-12">
                    <p className="text-xl text-gray-700 mb-6 text-left">I'm Ram Maheshwari, a Developer Advocate & Frontend Developer passionate about making technology accessible. I create technical content, build real-world demos, and help developers navigate complex tools with confidence.</p>
                    <p className="text-xl text-gray-700 mb-6 text-left">I've collaborated with brands like Anthropic (Claude), Notion, Lovable, Wix Studio, Maileroo, and more, creating content and demos that educate and engage developer communities worldwide.</p>
                    <p className="text-xl text-gray-700 mb-6 text-left">My work has been featured on some of the world's biggest tech sites including CSS-Tricks, Hostinger, and others. I'm passionate about dev education, community building, and bridging the gap between products and the developers who use them.</p>
                </div>

                <div className="mt-12 flex flex-wrap justify-start">
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">PHP</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">Java</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">JavaScript</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">React</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">Node.js</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">CSS</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">HTML</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">Laravel</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">Tailwind CSS</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">MySQL</Badge>
                    <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-lg p-4 text-black">MongoDB</Badge>
                </div>
            </div>
        </div>
    )
}