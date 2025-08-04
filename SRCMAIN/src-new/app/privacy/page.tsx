"use client";

import React from "react";
import { Shield, Mail } from "lucide-react";
import { Header, Footer } from "@/components/global";

const PrivacyPolicy = () => {
    return (
        <>
            <Header
            // showNavLinks
            />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-100">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                                <Shield className="w-8 h-8 text-red-600" />
                            </div>
                            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                                Privacy
                                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                                    {" "}
                                    Policy
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                This Privacy Policy sets out how we at Metaboard®, a subsidiary
                                of Metarion Knowledge Solutions Private Limited [Metarion®],
                                collect, use, share, and safeguard your [hereinafter referred to
                                as "Data Principal"] information through www.metaboard.com.
                            </p>
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-red-100">
                                <p className="text-sm text-gray-700">
                                    We respect your privacy and are committed to protecting your
                                    personal data in line with the{" "}
                                    <span className="">
                                        Digital Personal Data Protection Act, 2023
                                    </span>
                                    , and other applicable laws.
                                </p>
                                <div className="mt-3 flex items-center justify-center space-x-2">
                                    <Mail className="w-4 h-4 text-red-600" />
                                    <span className="text-sm text-gray-600">
                                        For questions or concerns: info@metaboard.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="py-20 bg-white/50">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-8 prose prose-lg max-w-none">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            1. Information We Collect
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            We collect information in two ways:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                            <li>
                                                <strong>Directly from you:</strong> your email address,
                                                when you subscribe to updates, contact us, or use our
                                                services.
                                            </li>
                                            <li>
                                                <strong>Automatically:</strong> e.g. technical
                                                information like IP address, browser type, pages
                                                visited—collected through cookies or similar tools to
                                                help us improve the website experience.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            2. Use of Information
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            We use your information to:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                            <li>Respond to queries or requests;</li>
                                            <li>Provide updates, if you've subscribed;</li>
                                            <li>Improve our services and website experience;</li>
                                            <li>
                                                Comply with legal obligations or enforce our rights.
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            We do not sell or share your personal data with
                                            unaffiliated third parties for marketing purposes without
                                            your explicit consent.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">3. Consent</h2>
                                        <p className="text-gray-700">
                                            By interacting with this website, the Data Principal
                                            consents to the use of their information in accordance
                                            with this Privacy Policy. The Data Principal agrees that
                                            Metaboard does not require any further or additional
                                            consent to process their information for legal compliance
                                            or to exercise specific rights under law.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            4. Information Sharing and Disclosure
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            We may disclose Data Principal information to:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                            <li>
                                                Our employees, advisers, agents, suppliers, or
                                                subcontractors when necessary for delivering services or
                                                fulfilling the purposes set out in this Policy;
                                            </li>
                                            <li>
                                                Affiliated entities, subsidiaries, or business partners,
                                                where relevant and lawful;
                                            </li>
                                            <li>
                                                Legal authorities if required by law or in connection
                                                with legal proceedings or obligations;
                                            </li>
                                            <li>Fraud prevention or enforce policies;</li>
                                            <li>
                                                Any third party involved in a merger, acquisition, or
                                                potential sale of assets.
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            We do not share personal information with third parties
                                            except as outlined above or when required by law.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            5. Transfer of Information Outside India
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            Unless specified otherwise, we store and process data
                                            within India. In some cases, we may need to transfer data
                                            outside India for lawful processing. Any such cross-border
                                            transfer will comply with the Digital Personal Data
                                            Protection Act, 2023. Where required, we will implement
                                            appropriate safeguards, including:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                            <li>Security due diligence on international vendors;</li>
                                            <li>
                                                Contractual clauses requiring equivalent data protection
                                                standards.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            6. Data Security
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            We are committed to safeguarding personal information and
                                            use industry-standard security protocols, including
                                            encryption, access control, and secure storage. We comply
                                            with the Digital Personal Data Protection Act, 2023,
                                            Information Technology Act, 2000, and applicable data
                                            security rules.
                                        </p>
                                        <p className="text-gray-700">
                                            In case of a data breach, we will take appropriate
                                            remedial action, including notifying affected parties as
                                            per legal requirements.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            7. Data Retention
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            We retain your personal data only as long as necessary to
                                            fulfil the purposes for which it was collected, including
                                            legal, accounting, or reporting requirements.
                                        </p>
                                        <p className="text-gray-700">
                                            We may anonymise data for analytical or research purposes.
                                            Once anonymised, such data is no longer linked to the Data
                                            Principal and may be retained indefinitely.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            8. Deletion of Information
                                        </h2>
                                        <p className="text-gray-700">
                                            You may request deletion of your personal data by writing
                                            to us at info@metaboard.com. We will assess and comply
                                            with such requests in accordance with law. Some
                                            information may be retained for legal or operational
                                            purposes, or stored in secure backups where immediate
                                            deletion isn't technically feasible. By requesting
                                            deletion, the Data Principal acknowledges that Metaboard®
                                            may not be able to continue offering services and waives
                                            any claims arising from such consequences.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            9. Withdrawal of Consent
                                        </h2>
                                        <p className="text-gray-700">
                                            Data Principals may withdraw consent at any time by
                                            contacting us. However, this may impact our ability to
                                            offer services. By withdrawing consent, the Data Principal
                                            agrees that Metaboard® shall not be held liable for any
                                            resulting service disruptions.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            10. Review of Information
                                        </h2>
                                        <p className="text-gray-700">
                                            You may request access to, or correction of, your
                                            information at any time. We will comply with such requests
                                            in accordance with applicable laws.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">11. Cookies</h2>
                                        <p className="text-gray-700">
                                            We use cookies to personalise your experience, analyse
                                            site traffic, and improve services. You can manage cookie
                                            preferences through your browser settings. Disabling
                                            cookies may impact site performance.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            12. External Links
                                        </h2>
                                        <p className="text-gray-700">
                                            Our website may contain links to third-party sites. This
                                            Policy does not apply to those sites, and we are not
                                            responsible for their privacy practices.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            13. Changes to This Policy
                                        </h2>
                                        <p className="text-gray-700">
                                            We may update this Privacy Policy from time to time. The
                                            latest version will always be available on our website.
                                            Continued use of our website implies acceptance of any
                                            updates.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            14. Grievance Officer
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            In accordance with applicable law, the contact details of
                                            our Grievance Officer are:
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-gray-800">
                                                Metarion Knowledge Solutions Private Limited
                                            </p>
                                            <div className="flex items-center space-x-2 mt-2">
                                                <Mail className="w-4 h-4 text-red-600" />
                                                <span className="text-gray-700">
                                                    Email: info@metaboard.com
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 mt-4">
                                            This Policy was last updated on April 14, 2025.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-12 text-center">
                                <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-xl p-8 text-white">
                                    <h3 className="text-2xl mb-4">
                                        Questions About Your Privacy?
                                    </h3>
                                    <p className="text-red-100 mb-6">
                                        Our team is committed to transparency and protecting your
                                        data. Contact us for any privacy-related questions or to
                                        exercise your data rights.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a
                                            href="mailto:info@metaboard.com"
                                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                                        >
                                            <Mail className="w-5 h-5 mr-2" />
                                            Contact Privacy Officer
                                        </a>
                                        <a
                                            href="/terms"
                                            className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200"
                                        >
                                            View Terms of Service
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;