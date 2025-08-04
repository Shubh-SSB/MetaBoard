
import { AltHeader, HeroSection } from '@/components/alt/global';
import { PublicationListingSection } from '@/components/alt/local/publications';
import { Footer } from '@/components/global';
import { $crud } from '@/factory/crudFactory';


const Publications = async () => {

    let publicationList = [];
    let totalPublications = 0;

    try {
        const { data: { rows, count } } = await $crud.get('retrieve/web/publications');
        publicationList = rows;
        totalPublications = count;
    } catch (e) {
        console.error(e)
    }
    return (<>
        <div className="min-h-screen gradient-primary">
            {/* Navigation Header */}
            <AltHeader />

            {/* Hero Section */}
            <HeroSection
                page='publications'
            />
            <PublicationListingSection
                preloadPublications={publicationList}
                totalPublications={totalPublications}
            />



            {/* Footer */}
            <Footer />
        </div>
    </>);
}
export default Publications;