import { RevealOnScroll } from "../RevealOnScroll"
import { EnterL } from "../EnterL"
import { EnterR } from "../EnterR"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative">
            <EnterL>
                <div className="left-0 top-1/2 -translate-y-1/2 w-16 h-64 bg-red-900/20 rounded"></div>
            </EnterL>
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">Featured Projects</h2>
                    <div className="p-6 rounded-xl mb-6 border border-white hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-2xl font-bold mb-2">DropZone</h3>
                        <div className="flex item-center justify-center mb-4">
                            <div className="bg-[url('assets/images/dz-2.png')] bg-cover bg-center bg-no-repeat h-64 w-64 rounded-xl"></div>
                            <div className="bg-[url('assets/images/dz-1.png')] bg-contain bg-no-repeat h-64 w-64 mx-20"></div>
                            <div className="bg-[url('assets/images/dz-3.png')] bg-cover bg-no-repeat bg-center h-64 w-64 rounded-xl"></div>
                        </div>
                        <p className="text-gray-400 mb-4">DropZone is a simple browser / mobile game, where you drag different colored crates into a target to score points. The program uses states to manage each different colored crate, giving it a unique effect and / or point value. Reference-based optimizations prevent unnecessary re-renders, and allows for a more smooth gameplay experience. Finally, uses a texture system that assigns textures dynamically based on color. Served locally through Expo, for both browser and mobile testing, as well as GitHub to maintain version control.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["React", "Next.JS", "Typescript"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full textpsm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/DonGatito25/DropZone" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Elevate</h3>
                            <div className="bg-[url('assets/images/ev.png')] bg-cover bg-center w-full h-50 rounded-xl mb-6"></div>
                            <p className="text-gray-400 mb-4">Elevate, a sleek and responsive gym and fitness shopping website built with HTML, CSS, JavaScript, and Bootstrap. It showcases workout gear, supplements, and fitness equipment. Users can easily browse categories, view product details, and add items to their cart in a clean, mobile-friendly interface.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Bootstrap", "JavaScript", "CSS", "HTML"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full textpsm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Password Guess'r</h3>
                            <div className="bg-[url('assets/images/pc.png')] bg-cover bg-center w-full h-50 rounded-xl mb-6"></div>
                            <p className="text-gray-400 mb-4">P. Guess'r is a simple, browser-based word guessing game built with pure HTML, CSS, and JavaScript. Players try to guess a hidden word one letter at a time. The interface updates in real time with each guess, showing correct or incorrect letters. Clean and minimal design, no frameworks or libraries required.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["JavaScript", "CSS", "HTML"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full textpsm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
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
