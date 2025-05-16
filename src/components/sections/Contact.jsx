import { RevealOnScroll } from "../RevealOnScroll"
import { EnterL } from "../EnterL"
import { EnterR } from "../EnterR"

export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
        <EnterL>
            <div className="left-0 top-1/2 -translate-y-1/2 w-16 h-64 bg-red-900/20 rounded"></div>
        </EnterL>
        <RevealOnScroll>
            <div className="p-6 rounded-xl w-2xl border-white/10 border hover:-translate-y-1 transition-all hover:border-white">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">Contact Me</h2>
                <form action="" className="space-y-6">
                    <div className="relative">
                        <input type="text" name="name" id="name" required className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name..." />
                    </div>
                    <div className="relative">
                        <input type="email" name="email" id="email" required className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@gmail.com" />
                    </div>
                    <div className="relative">
                        <textarea name="message" id="message" required rows={5} className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your message." />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form>
            </div>
        </RevealOnScroll>            
        <EnterR>
            <div className="right-0 top-1/2 -translate-y-1/2 w-16 h-64 bg-red-900/20 rounded"></div>
        </EnterR>
    </section>
}