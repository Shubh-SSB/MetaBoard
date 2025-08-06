'use client';

import { FC, useCallback, useState } from "react";
import PublicationCard from "./PublicationCard";
import { $crud } from "@/factory/crudFactory";
import { Pagination } from "@/components/ui";
import { FilterSection } from "../../global";

type props = {
    preloadPublications: PublicationInterface[];
    totalRecords: number;
}


const PublicationListingSection: FC<props> = ({
    preloadPublications,
    totalRecords
}) => {

    const [publicationListData, setPublicationListData] = useState<{
        data: PublicationInterface[],
        page: number;
        search: string;
        count: number;
    }>({
        data: preloadPublications,
        page: 0,
        search: '',
        count: totalRecords,
    });
    const [isLoading, setIsLoading] = useState(false);


    const retrievePublications = useCallback(async (defaultPage: number, defaultSearch: string = '') => {
        try {
            setIsLoading(true);
            const { data: { rows, count } } = await $crud.retrieve(`metarule/publications?page=${defaultPage}&search=${defaultSearch}`);

            setPublicationListData((prev) => ({
                page: defaultPage,
                data: rows,
                search: defaultSearch,
                count
            }));
            document.getElementById("publicationListSection")?.scrollIntoView({ behavior: "smooth" });
        } catch (e) {
            console.error(e);
        }finally{
            setIsLoading(false);
        }
    }, []);


    const handlePageChange = (updatedPage: number) => {
        retrievePublications(updatedPage, publicationListData.search);
    }

    const handleSearch = (value: string) => {
        retrievePublications(0, value);
    }

    return (<>
        {
            isLoading &&
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-40 backdrop-blur-[2px]  z-[999]">
                <div className="spinner"></div>
            </div>
        }
        <div id="publicationListSection" className="container px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Controls */}
            <FilterSection
                totalRecords={publicationListData.count}
                filterTitle='Publication'
                onSearch={handleSearch}
            />
            <section>
                <div className={true ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                    {
                        publicationListData.data.map((e) => <PublicationCard key={e.id} data={e} />)
                    }
                </div>
            </section>
            <Pagination
                totalRecords={publicationListData.count}
                limit={10}
                currentPage={publicationListData.page}
                onPageChange={handlePageChange}
            />
        </div>

    </>);
}
export default PublicationListingSection