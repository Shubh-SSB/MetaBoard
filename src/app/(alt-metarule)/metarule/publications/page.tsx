export const dynamic = 'force-dynamic';

import { AltHeader, HeroSection } from '@/components/alt/global';
import { PublicationListingSection } from '@/components/alt/local/publications';
import { Footer, ScrollToTopBtn } from '@/components/global';
import { $crud } from '@/factory/crudFactory';


const Publications = async () => {

    let publicationList = [];
    let totalPublications = 0;

    try {
        const { data: { rows, count } } = await $crud.get('retrieve/web/metarule/publications');
        publicationList = rows;
        totalPublications = count;
    } catch (e) {
        console.error(e)
    }
    return (<>
        <div className="min-h-screen gradient-primary">
            <HeroSection
                page='publications'
            />
            <PublicationListingSection
                preloadPublications={publicationList}
                totalRecords={totalPublications}
            />
            <ScrollToTopBtn />
        </div>
    </>);
}
export default Publications;