'use client';
import React, { createContext, useState, useContext } from 'react';


interface SearchArticleContextType {
    search: string;
    data: ArticleInterface[];
    onSearch: (e: string) => void;
    setData: (e: []) => void;
}

const SearchArticleContext = createContext<SearchArticleContextType>({
    search: '',
    data: [],
    onSearch: (e: string) => { },
    setData: (e: []) => { }
});

export const SearchArticleProvider = ({ children }: { children: React.ReactNode }) => {
    const [articles, setArticles] = useState<{
        search: string;
        data: ArticleInterface[]
    }>({
        search: '',
        data: []
    });

    const onSearch = (e: string) => setArticles((prev) => ({ ...prev, search: e }))
    const setData = (e: []) => setArticles((prev) => ({ ...prev, data: e }))

    return (
        <SearchArticleContext.Provider value={{ ...articles, onSearch, setData }}>
            {children}
        </SearchArticleContext.Provider>
    );
};

export const useSearchArticle = () => useContext(SearchArticleContext);
