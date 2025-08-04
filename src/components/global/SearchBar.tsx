'use client';

import { FC, memo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useSearchArticle } from '@/context/SearchArticleContext';
import { debounce } from '@/helpers';
import Link from 'next/link';

const SearchBar: FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const { data, onSearch } = useSearchArticle();

    console.log(data)
    const handleClear = () => {
        onSearch('');
        if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current?.focus();
        }
    };

    const searchDebounce = debounce((e) => onSearch(e), 500);

    return (
        <div
            className="relative h-12 w-[100%]"
        >
            <div
               className={`flex items-center gap-2 rounded-full transition-all duration-300 ease-in-out overflow-hidden h-full  bg-white pl-4  pr-2
                    ${isFocused 
                        ? 'pl-6 pr-4 border-2 border-red-500 shadow-md ' 
                        : 'justify-center bg-transparent border'
                    }`}
            >
                <button
                    type="button"
                    className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                    aria-label="Search"
                >
                    <Search className="w-5 h-5" />
                </button>


                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search articles..."
                    onChange={(e) => {
                        searchDebounce(e.target.value);
                    }}
                    onBlur={() => {
                        setTimeout(() => setIsFocused(false), 150);
                    }}
                    onFocus={() => setIsFocused(true)}
                    className={'bg-transparent text-gray-900 placeholder-gray-500 border-none outline-none w-full text-sm sm:text-base transition-all duration-300 ease-in-out opacity-100 ml-2'}
                />

                {isFocused && (
                    <button
                        onClick={handleClear}
                        className="text-gray-400 hover:text-gray-600 transition flex-shrink-0"
                        aria-label="Clear search"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>

            {isFocused && !!data.length && (
                <div className="absolute top-full w-[100%] mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-30 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-300">
                    <div className="py-2 max-h-48 overflow-y-auto">
                        {data.map((item, idx) => (
                            <Link
                                key={idx}
                                href={`/article-details?id=${item?.id}`}
                                className="px-3 sm:px-4 py-2 sm:py-3 flex items-center space-x-2 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm border-b border-gray-50 last:border-b-0"
                                onClick={() => setIsFocused(false)}
                            >
                                <Search className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                                <span
                                    className="text-gray-700 flex-1 leading-tight"
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {item.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(SearchBar);