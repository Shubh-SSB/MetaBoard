import { useCallback, useState, type FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { $crud } from "@/factory/crudFactory";
import { Loader } from "@/components/global";

interface FormData {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
}
const services = [
    {
        id: 1,
        title: "Legal Document Automation",
        slug: "legal-document-automation",
    },
    { id: 2, title: "Contract Analysis", slug: "contract-analysis" },
    { id: 3, title: "Legal Research Platform", slug: "legal-research-platform" },
    { id: 4, title: "Compliance Management", slug: "compliance-management" },
    { id: 5, title: "Case Management System", slug: "case-management-system" },
    { id: 6, title: "Custom Legal Solutions", slug: "custom-legal-solutions" },
];

const ContactForm: FC = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            await $crud.post('web/contact/send', new FormData(e.target as HTMLFormElement));
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (<>
        <Loader
            isVisible={isLoading}
        />
        <div className="p-6 lg:p-8 lg:w-1/2">
            <div className="mb-6">
                <h3
                    className={`text-2xl font-bold text-black mb-3`}
                >
                    Get In <span className="text-red-600">Touch</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Ready to transform your legal practice? Let's discuss how
                    our innovative solutions can help you achieve your goals.
                </p>
            </div>

            {/* Form Separator */}
            <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <div className="mx-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
                <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Basic Information Section */}
                <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                                required
                                minLength={2}
                                maxLength={100}
                                pattern="^[a-zA-Z\s\-'\.]+$"
                                title="Name must be 2-100 characters and can contain letters, spaces, hyphens, apostrophes, and periods."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                                required
                                maxLength={254}
                                title="Please enter a valid email address."
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Company/Firm Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter your company or firm name"
                            className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                            required
                            minLength={2}
                            maxLength={200}
                            pattern="^[a-zA-Z0-9\s\-&.,()'+\/]+$"
                            title="Company name must be 2-200 characters and may include letters, numbers, spaces, hyphens, and some symbols."
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Service Interest *
                        </label>
                        <select
                            name="service"
                            title="Select a service"
                            aria-label="Service Interest"
                            className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                            required
                        >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.slug}>
                                    {service.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Tell us about your project requirements, goals, or any specific questions..."
                            className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                            rows={3}
                        ></textarea>
                    </div>
                </div>

                <Button
                    variant='default'
                    className="w-full"
                >
                    Send Message
                </Button>
            </form >
        </div >
    </>)
}

export default ContactForm;