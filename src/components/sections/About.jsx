import { RevealOnScroll } from "../RevealOnScroll"
import { EnterL } from "../EnterL"
import { EnterR } from "../EnterR"

export const About = () => {
    const Langs = ["JavaScript", "HTML5", "CSS3", "PHP", "Typescript", "SQL", "Markdown", "JSON",]
    const Techs = ["Windows", "Linux", "React", "Expo", "Express", "MongoDB", "Bootstrap", "Tailwind"]
    const Tools = ["VSCode", "Vim", "Emmet", "Powershell", "Bash", "TMUX", "Phaser", "Git", "GitHub", "Virtual Box", "Node"]
    const Cools = ["Adaptability", "Creativity", "Perseverance", "Data Analysis"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
            <EnterL>
                <div className="left-0 top-1/2 -translate-y-1/2 w-16 h-64 bg-red-900/20 rounded"></div>
            </EnterL>
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">About Me</h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-white transition-all">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate transition-all">
                                <h3 className="text-xl font-bold mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Langs.map((tech, key) => (
                                        <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate transition-all">
                                <h3 className="text-xl font-bold mb-4">Techs</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Techs.map((tech, key) => (
                                        <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate transition-all">
                                <h3 className="text-xl font-bold mb-4">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Tools.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate transition-all">
                                <h3 className="text-xl font-bold mb-4">Cools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Cools.map((tech, key) => (
                                        <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-white transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                                <li><strong>La Joya Community High School</strong></li>
                                <li><i>High School Diploma</i></li>
                                <li>1200+ hours of general education.</li>
                            </ul>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                                <li><strong>West-MEC</strong></li>
                                <li><i>HTML5 & JS Certifications</i></li>
                                <li>900+ hours of specialized training in modern programming and web development building and full-stack applications.</li>
                            </ul>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                                <li><strong>Grand Canyon University</strong></li>
                                <li><i>B.S. in Computer Science</i></li>
                                <li>1400+ hours of education in Computer Science with emphasis in game development / designing and simulation; general education.</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-white">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Robotics Summer Camp Counselor</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                                        <li><i>West-MEC - Central Campus</i></li>
                                        <li>Led activities and supervised students during robotics summer camp. Helped teach basic robotics and programming concepts. Assisted with projects and ensured a safe, fun learning environment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            <EnterR>
                <div className="right-0 top-1/2 -translate-y-1/2 w-16 h-64 bg-red-900/20 rounded"></div>
            </EnterR>
        </section>
    )
}