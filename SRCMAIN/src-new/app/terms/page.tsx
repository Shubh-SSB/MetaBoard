"use client";

import React from "react";
import { FileText, Mail } from "lucide-react";
import { Header, Footer } from "@/components/global";
import Link from "next/link";

const TermsOfService = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-100">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                                <FileText className="w-8 h-8 text-red-600" />
                            </div>
                            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 ">
                                Terms of
                                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                                    {" "}
                                    Use
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Please read these terms carefully before using our services. By
                                accessing Metaboard®, you agree to be bound by these terms and
                                conditions.
                            </p>
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-red-100">
                                <p className="text-sm text-gray-700">
                                    <span className="">Last Updated:</span> December 2024 |
                                    <span className=""> Effective Date:</span> Immediately upon
                                    publication
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="py-20 bg-white/50">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-8 prose prose-lg max-w-none">
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-gray-700 mb-4">
                                            Welcome to Metaboard®. These Terms of Use ["Terms"] govern
                                            your access to and use of our website [www.metaboard.com]
                                            ["Website"], Metaboard® and www.metaboard.com is a
                                            subsidiary of Metarion Knowledge Solutions Private Limited
                                            [Metarion®].
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            By accessing or using our Website, you agree to be bound
                                            by these Terms. If you do not agree, please do not use the
                                            Website.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            Use of Content
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            You may retrieve and display the content available on
                                            www.metaboard.com on a computer screen or mobile
                                            telephone, print individual pages on paper [but not
                                            photocopy them] and store such pages in electronic form
                                            for your personal, non-commercial use. If you do download
                                            material from the site, all copyright and other notices
                                            must be kept intact. Except as expressly set out above,
                                            you may not reproduce, modify or in any way commercially
                                            exploit any of the content of the website.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            In particular, you may not do any of the following without
                                            prior written permission:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                                            <li>
                                                No parts of any Metarion Knowledge Solutions Private
                                                Limited [Metarion®] owned and operated website may be
                                                reproduced, stored in or introduced into any retrieval
                                                system, or transmitted, in any form or by any means,
                                                electronic, mechanical, photocopying, recording or
                                                otherwise without the prior written permission of the
                                                copyright owners.
                                            </li>
                                            <li>
                                                You may not reverse engineer, modify, decompile,
                                                disassemble or translate the Content [whether for the
                                                purpose of error correction or otherwise].
                                            </li>
                                            <li>
                                                You may not display the Content on a public bulletin
                                                board, ftp site, website, chat room or by any other
                                                unauthorised means.
                                            </li>
                                            <li>
                                                Written materials provided in printed or electronic form
                                                may not be modified, adapted, translated, or used to
                                                create derivative works without the prior written
                                                consent of Metarion®.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            Incorrect Use of Metarion® and Metaboard® Trademarks
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            Do not omit a footnote/attribution for the Metarion® or
                                            Metaboard® trademark. Do not alter the approved Metarion®
                                            or Metaboard® trademark. Do not create any new logo for
                                            Metarion® or Metaboard®. Do not incorporate any Metarion®
                                            or Metaboard® product names into your company's product
                                            names. Do not incorporate any Metarion® or Metaboard®
                                            product names into the root domain of any website owned by
                                            your company. Do not misspell or use lowercase letters
                                            when using the name Metarion® or Metaboard® in text. Do
                                            not connect your company name with Metarion® or Metaboard®
                                            product names. Do not use the Metarion® or Metaboard®
                                            trademark name for a product or service as a noun, or in
                                            the plural form. Do not misspell or incorrectly capitalise
                                            the Metarion® or Metaboard® trademark.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            Use of the Sites
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            In connection with your use of the Site or Affiliated
                                            Sites, you agree that you will not:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                                            <li>
                                                Transmit any message, information, data, text, software
                                                or images, or other content ["Material"] that is
                                                unlawful, harmful, threatening, abusive, harassing,
                                                tortious, defamatory, vulgar, obscene, libellous, or
                                                otherwise objectionable that may invade another's right
                                                of privacy or publicity;
                                            </li>
                                            <li>
                                                Impersonate any person or entity, including but not
                                                limited to, a Metarion® official or falsely state or
                                                otherwise misrepresent your affiliation with a person or
                                                entity;
                                            </li>
                                            <li>
                                                Post or transmit any Material that you do not have a
                                                right to reproduce, display or transmit under any law or
                                                under contractual or fiduciary relationships [such as
                                                nondisclosure agreements];
                                            </li>
                                            <li>
                                                Post or transmit any Material that contains a virus or
                                                corrupted data;
                                            </li>
                                            <li>
                                                Delete any author attributions, legal notices or
                                                proprietary designations or labels that you upload to
                                                any communication feature;
                                            </li>
                                            <li>
                                                Use the Site's communication features in a manner that
                                                adversely affects the availability of its resources to
                                                other users [e.g., excessive shouting, use of all caps,
                                                or flooding continuous posting of repetitive text];
                                            </li>
                                            <li>
                                                Post or transmit any unsolicited advertising,
                                                promotional materials, "junk mail", "spam," "chain
                                                letters," "pyramid schemes" or any other form of
                                                solicitation;
                                            </li>
                                            <li>
                                                Violate any applicable local, state, national or
                                                international law;
                                            </li>
                                            <li>
                                                Upload or transmit any Material that infringes any
                                                patent, trademark, trade secret, copyright or other
                                                proprietary rights of any party;
                                            </li>
                                            <li>
                                                Delete or revise any Material posted by any other person
                                                or entity;
                                            </li>
                                            <li>
                                                Manipulate or otherwise display the Site by using
                                                framing or similar navigational technology.
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mb-4">
                                            You assume total responsibility and risk for your use of
                                            the site and the Internet. Metarion® provides the site and
                                            related information "as is" and does not make any express
                                            or implied warranties, representations or endorsements
                                            whatsoever [including without limitation warranties of
                                            title or non-infringement, or the implied warranties of
                                            merchantability or fitness for a particular purpose].
                                        </p>
                                        <div className="bg-red-50 p-4 rounded-lg mb-4">
                                            <p className="text-red-800">
                                                IMPORTANT: The following permissions DO NOT APPLY to
                                                content supplied by third parties. For permitted use of
                                                third party content apply to the relevant content owner.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            License for Personal Use
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            You may view this site electronically. You may, for your
                                            personal use only, save to your individual storage medium
                                            and print such extracts from this site as are necessary
                                            for such use.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            License to Recopy for Personal Purposes
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            You may recopy extracted material to individual third
                                            parties for their personal use only, but only if:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                                            <li>
                                                You acknowledge www.metaboard.com as the source of the
                                                material. You must include such acknowledgement and the
                                                website address [www.metaboard.com] in the copy of the
                                                extracted material.
                                            </li>
                                            <li>
                                                You inform the third party that these conditions apply
                                                to him or her and that he/she must comply with them.
                                            </li>
                                            <li>
                                                You recopy the extracted material in complete and
                                                unmodified form. This licence to recopy does not permit
                                                incorporation of the material or any part of it in any
                                                other work or publication, whether in hard copy or
                                                electronic or any other form.
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mb-4">
                                            Metarion® reserves the right at any time at its discretion
                                            to withdraw or modify the licences set out above.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            Subscription and Communications
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            By subscribing to updates on www.metaboard.com, you
                                            consent to the collection and use of your email address
                                            solely for the purpose of receiving periodic updates,
                                            announcements, and newsletters from Metaboard®. Your email
                                            address will not be shared with any third party and will
                                            be processed in accordance with our Privacy Policy and
                                            applicable Indian data protection laws.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            Future Services and Payments
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            Currently, all content on www.metaboard.com is free to
                                            access. Metaboard® may, in the future, introduce paid
                                            services such as online courses or premium content. Any
                                            such services will be governed by additional terms and
                                            payment-related provisions, which will be made available
                                            to users at the time of launch. Your continued use of the
                                            site after such changes will constitute your acceptance of
                                            the updated terms.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            Links to Metarion® Sites
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            Metarion® reserves the right at its discretion to prohibit
                                            any link from another Internet site or equivalent entity
                                            to materials or information on this site. Without
                                            prejudice to that, any link to material or information on
                                            this site must be neither misleading nor deceptive and
                                            must fairly indicate the relevant site as the destination
                                            of the link.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">Disclaimer</h2>
                                        <p className="text-gray-700 mb-4">
                                            The information from or through the site are provided
                                            "as-is," "as available," and all warranties, express or
                                            implied, are disclaimed [including but not limited to the
                                            disclaimer of any implied warranties of merchantability
                                            and fitness for a particular purpose]. The information and
                                            services may contain bugs, errors, problems or other
                                            limitations. Our affiliated parties and we have no
                                            liability whatsoever for your use of any information or
                                            service.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            In particular, but not as a limitation thereof, we and our
                                            affiliated parties are not liable for any indirect,
                                            special, incidental or consequential damages [including
                                            damages for loss of business, loss of profits, litigation,
                                            or the like], whether based on breach of contract, breach
                                            of warranty, tort [including negligence], product
                                            liability or otherwise, even if advised of the possibility
                                            of such damages.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            The negations of damages set forth above are fundamental
                                            elements of the basis of the bargain between you and us.
                                            This site and the information would not be provided
                                            without such limitations. No advice or information,
                                            whether oral or written, obtained by you from us through
                                            the site shall create any warranty, representation or
                                            guarantee not expressly stated in this agreement.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            Further, the content of the website [www.metaboard.com]
                                            are for informational purposes only and for the reader's
                                            personal non-commercial use. The views expressed are not
                                            the personal views of Metaboard® or Metarion® Knowledge
                                            Solutions Pvt. Ltd. and do not constitute legal advice.
                                            The contents are intended, but not guaranteed, to be
                                            correct, complete, or up to date. Metaboard® disclaims all
                                            liability to any person for any loss or damage caused by
                                            errors or omissions, whether arising from negligence,
                                            accident or any other cause.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">
                                            Governing Law and Jurisdiction
                                        </h2>
                                        <p className="text-gray-700 mb-4">
                                            These Terms of Use shall be governed by and construed in
                                            accordance with the laws of India. Any disputes arising
                                            out of or in connection with this site shall be subject to
                                            the exclusive jurisdiction of the courts of New Delhi,
                                            India.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl text-gray-900 mb-4">Contact Us</h2>
                                        <p className="text-gray-700 mb-4">
                                            If you have any questions about these Terms of Use, please
                                            contact us at:
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center space-x-2">
                                                <Mail className="w-4 h-4 text-red-600" />
                                                <span className="text-gray-700">
                                                    Email: info@metaboard.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-12 text-center">
                                <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-xl p-8 text-white">
                                    <h3 className="text-2xl mb-4">Need Clarification?</h3>
                                    <p className="text-red-100 mb-6">
                                        Our team is here to help you understand our terms and answer
                                        any questions you may have.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            // href="mailto:info@metaboard.com"
                                            href="/contact"
                                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                                        >
                                            <Mail className="w-5 h-5 mr-2" />
                                            Email Support
                                        </Link>
                                        <a
                                            href="/aboutUs"
                                            className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200"
                                        >
                                            Learn About Us
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

export default TermsOfService;