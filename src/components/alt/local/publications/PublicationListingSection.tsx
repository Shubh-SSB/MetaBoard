'use client';

import { FC, useCallback, useEffect, useState } from "react";
import PublicationFilterSection from "./PublicationFilterSection";
import PublicationCard from "./PublicationCard";
import { $crud } from "@/factory/crudFactory";
import { Pagination } from "@/components/ui";

type props = {
    preloadPublications: PublicationInterface[];
    totalPublications: number;
}


const PublicationListingSection: FC<props> = ({
    preloadPublications,
    totalPublications
}) => {

    const [publicationListData, setPublicationListData] = useState<{
        data: PublicationInterface[],
        page: number;
    }>({
        data: preloadPublications,
        page: 0
    });
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        // if (search) {
        // retrieveArticles(0, '');
        // }
    }, []);


    // const retrieveArticles = useCallback(async (defaultPage: number, defaultSearch: string) => {
    //     try {
    //         setIsLoading(true);
    //         const { data: { rows } } = await $crud.retrieve(`articles?page=${defaultPage}&search=${defaultSearch}`);

    //         setArticleListData((prev) => ({
    //             page: defaultPage,
    //             data: rows
    //         }));

    //         setIsLoading(false);
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }, []);


    const handlePageChange = (updatedPage: number) => {
        // setArticleListData((prev) => ({
        //     ...prev,
        //     page: updatedPage,
        // }));
        // retrieveArticles(updatedPage);
    }


    return (<>
        {
            isLoading &&
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-40 backdrop-blur-[2px]  z-[999]">
                <div className="spinner"></div>
            </div>
        }
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Controls */}
            <PublicationFilterSection
                totalPublications={totalPublications}
            />
            <section>
                <div className={true ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>

                    {
                        publicationListData.data.map((e) => <PublicationCard data={e} />)
                    }

                    {/* Publications Grid/List */}

                </div>
            </section>
                {/* <Pagination
                totalRecords={10}
                limit={10}
                // currentPage={articleListData.page}
                // onPageChange={handlePageChange}
            /> */}
        </div>

    </>);
}
export default PublicationListingSection