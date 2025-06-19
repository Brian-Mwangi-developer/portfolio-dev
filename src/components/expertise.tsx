export const Expertise = () => {
    const expertise = [
        { skill: "Frontend Development", level: "Expert" },
        { skill: "Backend Architecture", level: "Advanced" },
        { skill: "AI/ML Integration", level: "Advanced" },
        { skill: "Database Design", level: "Expert" },
        { skill: "API Development", level: "Expert" },
        { skill: "Cloud Deployment", level: "Advanced" }
    ];

    const technologies = [
        { tech: "React & Next.js", category: "Frontend" },
        { tech: "TypeScript", category: "Language" },
        { tech: "Node.js", category: "Backend" },
        { tech: "Python", category: "AI/ML" },
        { tech: "PostgreSQL", category: "Database" },
        { tech: "AWS/GCP", category: "Cloud" },
        { tech: "TensorFlow", category: "AI/ML" },
        { tech: "Docker", category: "DevOps" }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">Expertise & Skills</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto"></div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-medium text-slate-900 mb-8">Core Competencies</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {expertise.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-center sm:flex-col">
                                            <span className="text-slate-800 font-medium text-lg">{item.skill}</span>
                                            <span className="text-sm hidden lg:block text-slate-600 bg-white px-3 py-1 rounded-full font-medium">
                                                {item.level}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-medium text-slate-900 mb-8">Technology Stack</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {technologies.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-800 font-medium text-lg">{item.tech}</span>
                                            <span className="text-sm hidden lg:block text-slate-600 bg-white px-3 py-1 rounded-full font-medium">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
