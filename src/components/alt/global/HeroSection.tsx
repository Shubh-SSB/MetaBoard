import { Badge } from "@/components/ui";
import { FC } from "react";
import { Button } from "../ui";

type HeroSectionTypes = {
    page: 'publications' | 'home'
}

const HeroSection: FC<HeroSectionTypes> = ({
    page
}) => {
    const content = {
        home: {
            badgeText: 'MetaRule Insights',
            cardTitle: 'Legal Technology',
            description: 'Empowering legal professionals with cutting-edge technology insights, comprehensive publications, and engaging podcast conversations that drive industry innovation.'
        },
        publications: {
            badgeText: 'MetaRule Insights',
            cardTitle: 'Legal Technology',
            description: 'Empowering legal professionals with cutting-edge technology insights, comprehensive publications, and engaging podcast conversations that drive industry innovation.'
        },
    }
    return (<>
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={'/assets/images/hero-workspace.jpg'}
                    alt="Legal Technology Workspace"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="glass p-8 rounded-2xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground">
                            {content[page].badgeText}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Legal Technology
                            {content[page].cardTitle}
                            <span className="text-primary"> Excellence</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {content[page].description}
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="shadow-lg">
                                Explore Articles
                            </Button>
                            <Button size="lg" variant="outline" className="border-glass">
                                Subscribe to Newsletter
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default HeroSection;