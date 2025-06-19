"use client";

import { Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleSendMessage = () => {
        const mailtoLink = `mailto:brianpmwangi44@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.open(mailtoLink, "_blank");
    };
    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">Get in Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-6"></div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let&apos;s Work Together</h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                I&apos;m always interested in discussing new opportunities, innovative projects, and collaborations. Whether
                                you need a technical consultation or want to build something amazing together, I&apos;d love to hear from
                                you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Mail className="text-slate-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">Email</h4>
                                        <p className="text-slate-600">brianpmwangi44@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <MapPin className="text-slate-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">Location</h4>
                                        <p className="text-slate-600">Available Worldwide (Remote)</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Clock className="text-slate-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">Response Time</h4>
                                        <p className="text-slate-600">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-0 shadow-sm rounded-lg p-6 bg-white">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">Send a Message</h3>
                                <p className="text-slate-600">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        placeholder="Project Discussion"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Tell me about your project or how I can help you..."
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600"
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSendMessage}
                                    className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
