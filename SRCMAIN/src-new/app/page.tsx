export const dynamic = 'force-dynamic';

import { $crud } from '@/factory/crudFactory';
import { Footer, Header, ScrollToTopBtn } from '@components/global';
import { AdvisoryBoardSection, ArticlesShowcase, HeroSection, OurServicesSection, OurVisionSection, UsefulLinksSection } from '@components/local/home';

const Home = async () => {

    let latestArticles: any = [];

    try {
        const { data: { rows } } = await $crud.get('retrieve/web/articles?limit=4');
        latestArticles = rows;
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
    return (
        <div className="smooth-scroll">
            <Header
                showNavLinks
            />
            <HeroSection />
            <ArticlesShowcase
                articles={latestArticles}
            />
            <OurVisionSection />
            <OurServicesSection />
            <AdvisoryBoardSection />
            <UsefulLinksSection />
            <Footer />
             <ScrollToTopBtn />
        </div>
    );
};

export default Home;