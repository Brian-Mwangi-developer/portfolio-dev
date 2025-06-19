export const About = () => {
    return (
        <section id="about" className="py-5 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-4"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-80 h-80 bg-slate-200 mx-auto mb-8 md:mb-0 flex items-center justify-center rounded-xl">
                                <img src={"/Me.jpeg"} alt="Myself" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed">
                                I &apos;m a passionate senior full-stack developer with 4.5 years of experience building robust web
                                applications and innovative AI solutions. My expertise spans modern JavaScript frameworks, cloud
                                technologies, and machine learning integration.
                            </p>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                I specialize in creating scalable architectures, optimizing performance, and delivering exceptional user
                                experiences. My recent focus has been on integrating AI capabilities into web applications, making
                                complex technologies accessible and user-friendly.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-2">Experience</h3>
                                    <p className="text-slate-600">4.5+ Years</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-2">Projects</h3>
                                    <p className="text-slate-600">50+ Completed</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-2">Specialization</h3>
                                    <p className="text-slate-600">Web & AI</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-2">Location</h3>
                                    <p className="text-slate-600">Remote/Global</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
