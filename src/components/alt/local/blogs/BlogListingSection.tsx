'use client';

import { FC, useCallback, useEffect, useState } from "react";
// import PublicationFilterSection from "./PublicationFilterSection";
// import PublicationCard from "./PublicationCard";
import { $crud } from "@/factory/crudFactory";
import { Pagination } from "@/components/ui";
import { FilterSection } from "../../global";
import BlogCard from "./BlogCard";

type props = {
    preloadBlogs: BlogInterface[];
    totalRecords: number;
}


const BlogListingSection: FC<props> = ({
    preloadBlogs = [],
    totalRecords
}) => {
    const [blogListData, setBlogListData] = useState<{
        data: BlogInterface[],
        page: number;
        search: string;
        count: number;
    }>({
        data: preloadBlogs,
        page: 0,
        search: '',
        count: totalRecords
    });
    const [isLoading, setIsLoading] = useState(false);

    const retrieveBlogs = useCallback(async (defaultPage: number, defaultSearch: string = '') => {
        try {
            setIsLoading(true);
            const { data: { rows, count } } = await $crud.retrieve(`metarule/blogs?page=${defaultPage}&search=${defaultSearch}`);

            setBlogListData((prev) => ({
                ...prev,
                page: defaultPage,
                data: rows,
                search: defaultSearch,
                count
            }));
            document.getElementById("blogListSection")?.scrollIntoView({ behavior: "smooth" });
        } catch (e) {
            console.error(e);
        }finally{
            setIsLoading(false);
        }
    }, []);


    const handlePageChange = (updatedPage: number) => {
        retrieveBlogs(updatedPage, blogListData.search);
    }

    const handleSearch = (value: string) => {
        retrieveBlogs(0, value);
    }

    return (<>
        {
            isLoading &&
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-40 backdrop-blur-[2px]  z-[999]">
                <div className="spinner"></div>
            </div>
        }
        <div id="blogListSection" className="container px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Controls */}
            <FilterSection
                filterTitle='Blog'
                totalRecords={blogListData.count}
                onSearch={handleSearch}
            />
            <section>
                <div className='space-y-6'>
                    {
                        blogListData.data.map((e) => <BlogCard key={e.id} data={e} />)
                    }
                </div>
            </section>
            <Pagination
                totalRecords={totalRecords}
                limit={blogListData.count}
                currentPage={blogListData.page}
                onPageChange={handlePageChange}
            />
        </div>

    </>);
}
export default BlogListingSection