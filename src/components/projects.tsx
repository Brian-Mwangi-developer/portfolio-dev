import { projects } from "@/lib/project."

export const Projects = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">Featured Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-6"></div>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            A showcase of innovative solutions and technical excellence
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {projects.map((project, index) => (
                            <div key={index} className="group transition-all duration-300 border-0 shadow-sm rounded-xl hover:shadow-lg">
                                <div className="aspect-video bg-slate-100 rounded-t-lg overflow-hidden hover:shadow-2xl hover:bg-slate-200">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="pb-3">
                                    <div className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </div>
                                    <div className="text-slate-600 leading-relaxed">{project.description}</div>
                                </div>

                                <div className="pt-0">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className={`inline-block px-3 py-1 mx-2 text-sm font-medium rounded-full border border-none bg-gray-100`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 