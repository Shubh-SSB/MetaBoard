
import { $crud } from '@/factory/crudFactory';
import { Footer, Header } from '@components/global';
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
            <Header />
            <HeroSection />
            <ArticlesShowcase
                articles={latestArticles}
            />
            <OurVisionSection />
            <OurServicesSection />
            <AdvisoryBoardSection />
            <UsefulLinksSection />
            <Footer />
        </div>
    );
};

export default Home;
// app/page.tsx or app/page.jsx (NO 'use client')

// import { $crud } from '@/factory/crudFactory';
// import { Footer, Header } from '@components/global';
// import {
//   AdvisoryBoardSection,
//   ArticlesShowcase,
//   HeroSection,
//   OurServicesSection,
//   OurVisionSection,
//   UsefulLinksSection,
// } from '@components/local/home';

// export default async function Home() {
//   let products = [];

//   try {
//     const res = await $crud.get('http://localhost:3001/api/products');
//     products = res; // if already parsed
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }

//   return (
//     <div className="smooth-scroll">
//       <Header />
//       <HeroSection products={products} />
//       <ArticlesShowcase />
//       <OurVisionSection />
//       <OurServicesSection />
//       <AdvisoryBoardSection />
//       <UsefulLinksSection />
//       <Footer />
//     </div>
//   );
// }
