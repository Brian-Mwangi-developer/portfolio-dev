import { ExternalLink, Github, } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="sm:max-w-4xl max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="mb-12">
                    <div className="inline-block mb-6">
                        <div className="w-32 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-8"></div>
                        <h1 className="text-6xl md:text-7xl font-extralight text-slate-900 mb-3 tracking-tight leading-tight">
                            Brian Mwangi
                        </h1>
                        <div className="text-lg md:text-xl text-slate-600 font-medium tracking-wide uppercase mb-8">
                            Web & AI Developer
                        </div>
                    </div>
                    <div className=''>
                        <p className="sm:text-sm text-xl md:text-4xl text-slate-700 font-light max-w-3xl mx-auto leading-relaxed mb-8">
                            Crafting sophisticated web applications and AI-driven solutions with
                            <span className="font-medium text-slate-900"> 4.5 years of expertise</span> in modern technologies
                            and intelligent systems architecture.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-2 text-sm text-slate-500 mb-12">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className='text-lg'>Available for new opportunities</span>
                    </div>
                </div>
                <div className="flex justify-center gap-12">
                    {/* TODO Add _blank_ feature */}
                    <a
                        href="https://github.com/Brian-Mwangi-developer"
                        className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-3 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <Github className="w-6 h-6" />
                        </div>
                        <span className="font-medium text-lg">GitHub</span>
                    </a>
                    <a
                        href="#"
                        className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-3 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <ExternalLink className="w-6 h-6" />
                        </div>
                        <span className="font-medium text-lg">Portfolio</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;