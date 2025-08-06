'use client';

import { type FC, useRef } from "react";
import { Filter, Search } from "lucide-react";
import { Button, Badge } from "../ui";


type props = {
    totalRecords: number;
    filterTitle: string;
    onSearch: (search: string) => void;
}

const FilterSection: FC<props> = ({
    totalRecords,
    filterTitle,
    onSearch
}) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => onSearch(searchRef?.current?.value ?? '');
    
    return (<>
        <section>
            <div className="flex flex-col sm:flex-row lg:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">{filterTitle}s Library</h2>
                    <Badge variant='outline' className="">
                        {`${totalRecords} ${filterTitle}${totalRecords > 1 ? 's' : ''}`}
                    </Badge>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex border border-5 border-gray bg-white br-10 rounded-lg p-[3px] w-screen sm:w-auto">
                        <input
                            ref={searchRef}
                            name="search"
                            type="text"
                            placeholder={`Search for ${filterTitle.toLowerCase()}...`}
                            className="block min-w-0 grow py-1.5 pr-3 pl-3 bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm"
                        />
                        <Button
                            variant="default"
                            size="sm"
                            className="border-glass"
                            onClick={handleSearch}
                        >
                            <Search className="w-4 h-4" />
                            Search
                        </Button>
                    </div>
                    {/* <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-glass border border-glass rounded-md px-3 py-2 text-sm text-foreground"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-background">
                                {option.label}
                            </option>
                        ))}
                    </select> */}


                </div>
            </div>


            {/* Category Filter */}
            {/* <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="border-glass"
                    >
                        {category}
                    </Button>
                ))}
            </div> */}
        </section>
    </>);
}
export default FilterSection;