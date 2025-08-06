export const dynamic = 'force-dynamic';

import { AltHeader } from '@/components/alt/global';
import { ArticleHeroSection, Footer, ScrollToTopBtn } from '@/components/global';
import { ArticleContentSection, ExploreMoreSection, ArticleScrollProgress } from '@/components/local/read-article';
import { $crud } from '@/factory/crudFactory';

type PageProps = {
    searchParams: Promise<Record<string, string | string[]>>;
};


const ReadBlog = async ({ searchParams }: PageProps) => {

    let blog: any = [];

    try {
       const resolvedSearchParams = await searchParams;
        const id = resolvedSearchParams?.id;
        if (id) {
            const { data } = await $crud.get(`retrieve/web/metarule/blog-by-id?id=${id}`);
            blog = data;
        }
    } catch (error) {
        console.error('Error fetching article:', error);
    }

    const relatedArticles = [
        {
            id: 2,
            title: "Constitutional Law in the Digital Age",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&h=200",
            date: "Dec 14, 2024"
        },
        {
            id: 3,
            title: "Legal Education Reform: Preparing Tomorrow's Lawyers",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=200",
            date: "Dec 13, 2024"
        },
        {
            id: 4,
            title: "Blockchain and Smart Contracts",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300&h=200",
            date: "Dec 12, 2024"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Progress Bar */}
            <ArticleScrollProgress />

            {/* Header */}
            <AltHeader/>

            {/* Article Hero */}
            <ArticleHeroSection
                data={blog}
            />

            {/* Article Content */}
            <ArticleContentSection
                relatedArticles={relatedArticles}
                articleHtml={blog.contentHtml}
                articleCss={blog.contentCss}
            />

            {/* Footer CTA */}
            <ExploreMoreSection />

            <Footer/>
            {/* Back to Top Button */}
            <ScrollToTopBtn />


        </div>
    );
};

export default ReadBlog;
