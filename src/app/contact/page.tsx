"use client";

import React from "react";
import { Mail, Phone, MapPin, NotepadText, Home } from "lucide-react";
import { HeroSection, ScrollToTopBtn } from "@/components/global";
import { ContactForm } from "@/components/local/contact";






const ContactUs = () => {

    return (
        <>
            <div className="min-h-screen">
                <HeroSection
                    RenderTopIcon={Mail}
                    heading="Contact"
                    headingSpan="Us"
                    description="Ready to transform your legal practice? Get in touch with our team to discuss how Metaboard® can help streamline your legal operations with cutting-edge technology solutions."
                    note="We're here to help you navigate the future of legal technology. Reach out to us for consultations, support, or to learn more about our services."
                />

                <section className="container mx-auto px-6 py-12">
                    <div
                        id="contact-form"
                        className="max-w-6xl mx-auto my-20  rounded-3xl border border-red-100 shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col-reverse lg:flex-row">
                            <ContactForm />
                            {/* Right Side - Contact Info */}
                            <div className="bg-primary p-6 lg:p-8 text-white flex-1">
                                <div className="h-full flex flex-col justify-center">
                                    
                                    <div className="mb-6">
                                        <h5 className="font-bold text-lg mb-2">Metaboard®</h5>
                                        <p className="text-red-100 text-sm leading-relaxed">
                                            Metarion Knowledge Solutions Private Limited
                                        </p>
                                    </div>

                                    <div className="space-y-5">
                                        {/* Main Office */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <MapPin
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">
                                                    Main Office
                                                </h5>
                                                <p className="text-red-100 text-sm leading-relaxed">
                                                    Level 2, Elegance, Mathura Road, Jasola,
                                                    <br />
                                                    New Delhi – 110025, India
                                                </p>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <Mail
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">Email</h5>
                                                <p className="text-red-100 text-sm">
                                                    info@metaboard.com
                                                </p>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <Phone
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">Telephone</h5>
                                                <p className="text-red-100 text-sm">+91 11 6635 1542</p>
                                            </div>
                                        </div>

                                        {/* Fax */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <NotepadText
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">Facsimile</h5>
                                                <p className="text-red-100 text-sm">+91 11 6635 1235</p>
                                            </div>
                                        </div>

                                        {/* R&D Centre */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <Home
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">R&D Centre</h5>
                                                <p className="text-red-100 text-sm leading-relaxed">
                                                    'Metaboard'
                                                    <br />
                                                    Village – Karnera, Ballabhgarh
                                                    <br />
                                                    Faridabad – 121004 Haryana, India
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/20">
                                        <p className="text-red-100 text-xs">
                                            We typically respond within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <ScrollToTopBtn />
        </>);
};

export default ContactUs;
