import { type FC } from "react";


type props = {
    totalRecords: number;
    limit: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<props> = ({
    totalRecords,
    limit,
    currentPage = 0,
    onPageChange,
}) => {
    
    const totalPages = Math.ceil(totalRecords / limit);

    const handlePageChange = (updatedPage: number) => {
        onPageChange(updatedPage);
    }

    return (<>
        <div className="flex items-center justify-center flex-wrap gap-x-1" aria-label="Pagination">
            <button
                type="button"
                className="min-h-8 min-w-8 py-1.5 px-2 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous"
                onClick={() => currentPage > 0 && onPageChange(currentPage - 1)}
            >
                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="sr-only">Previous</span>
            </button>
            <div className="flex items-center gap-x-1">
                {
                    new Array(totalPages).fill(null).map((e, i) => <button
                        key={i}
                        type="button"
                        className={`min-h-8 min-w-8 flex justify-center items-center py-1.5 px-2.5 text-sm rounded-full focus:outline-hidden  disabled:opacity-50 disabled:pointer-events-none
                                    ${i === currentPage ? 'bg-primary text-white' : 'text-gray-800'}`}
                        // ${i === currentPage ? 'bg-white text-black' : 'text-gray-800'}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i + 1}
                    </button>
                    )
                }

                {/* // if (i < 3) { */}

                {/* // } else if (i >= 3 && i === (totalPages-1)) {
                            // return (<>
                            //     <div className="hs-tooltip inline-block">
                            //         <button type="button" className="hs-tooltip-toggle group min-h-8 min-w-8 flex justify-center items-center text-gray-400 hover:text-blue-600 p-1 text-sm rounded-full focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10">
                            //             <span className="text-[10px] group-hover:hidden">•••</span>
                            //             <svg className="group-hover:block hidden shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            //                 <path d="m6 17 5-5-5-5"></path>
                            //                 <path d="m13 17 5-5-5-5"></path>
                            //             </svg>
                            //             <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700" role="tooltip">
                            //                 Next 4 pages
                            //             </span>
                            //         </button>
                            //     </div>
                            //     <button type="button" className="min-h-8 min-w-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1.5 px-2.5 text-sm rounded-full focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-600 dark:hover:bg-white/10 dark:focus:bg-white/10">{totalPages}</button>
                            // </>)
                        } */}
                {/* 
                    })
                } */}

            </div>
            <button
                type="button"
                className="min-h-8 min-w-8 py-1.5 px-2 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-600 dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Next"
                onClick={() => (currentPage < (totalPages - 1)) && onPageChange(currentPage + 1)}
            >
                <span className="sr-only">Next</span>
                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </button>
        </div>
    </>);
}
export default Pagination;