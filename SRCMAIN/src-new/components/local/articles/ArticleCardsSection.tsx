'use client';

import { useCallback, useEffect, useState, type FC } from "react"
import { BASE_ASSETS_URL } from "@/constants";
import dayjs from "dayjs";
import Link from "next/link";
import { $crud } from "@/factory/crudFactory";
import { useSearchArticle } from "@/context/SearchArticleContext";
import { Pagination } from "@/components/ui";


type props = {
    preloadedArticles: ArticleInterface[];
    totalArticles: number;
    limit: number;
}

const ArticleCardsSection: FC<props> = ({ preloadedArticles, totalArticles, limit }) => {

    const [articleListData, setArticleListData] = useState<{
        data: ArticleInterface[],
        page: number;
    }>({
        data: preloadedArticles,
        page: 0
    });
    const [isLoading, setIsLoading] = useState(false);

    const { search, setData } = useSearchArticle();

    useEffect(() => {
        // if (search) {
        retrieveArticles(0, search);
        // }
    }, [search]);


    const retrieveArticles = useCallback(async (defaultPage: number, defaultSearch: string) => {
        try {
            setIsLoading(true);
            const { data: { rows } } = await $crud.retrieve(`articles?page=${defaultPage}&search=${defaultSearch}`);

            setArticleListData((prev) => ({
                page: defaultPage,
                data: rows
            }));
            if (search) {
                setData(rows);
            }
            setIsLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
            console.error(e);
        }
    }, [search]);


    const handlePageChange = (updatedPage: number) => {
        setArticleListData((prev) => ({
            ...prev,
            page: updatedPage,
        }));
        retrieveArticles(updatedPage, search);
    }
    return (<>
        {/* <div className="md:col-span-2"> */}
        {
            isLoading &&
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-40 backdrop-blur-[2px]  z-[999]">
                <div className="spinner"></div>
            </div>
        }

        <div className="flex flex-col gap-10">

            {
                articleListData.data.length ?
                    (<>
                        {articleListData.data.map((article, index) =>
                            <article
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 glass-hover group cursor-pointer"
                            >
                                <Link href={`/article-details/?id=${article.id}`} className="block">
                                    <div className="md:flex">
                                        <div className="md:w-1/3">
                                            <img
                                                src={BASE_ASSETS_URL + `/article-cover-images/${article.coverImage}`}
                                                alt={article.title}
                                                className="w-full h-48 md:h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6 md:w-2/3">
                                            <div className="mb-3">
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                                {article.title} #{article.id}
                                            </h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {article.description}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>By {article.author}</span>
                                                <span>{dayjs(article.publishedAt).format("DD MMMM YYYY")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        )}
                    </>)
                    :
                    <h3 className="text-center text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        No results found
                    </h3>
            }
            <Pagination
                totalRecords={totalArticles}
                limit={limit}
                currentPage={articleListData.page}
                onPageChange={handlePageChange}
            />


        </div>
    </>)
}

export default ArticleCardsSection;