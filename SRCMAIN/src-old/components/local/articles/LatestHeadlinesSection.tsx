import { Clock } from "lucide-react";
import { type FC } from "react";


type props = {
    headlinesData: any;
}

const LatestHeadlinesSection: FC<props> = ({ headlinesData }) => {

    return (<>
        <div className="md:col-span-1">
            <div className="sticky top-24">

                <div className="bg-white rounded-2xl p-6 shadow-sm mb-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        Latest Headlines
                    </h3>
                    <div className="space-y-4">
                        {headlinesData.map((headline: any, index: number) => (
                            <div key={index} className="group cursor-pointer">
                                <h4 className="text-gray-900 font-medium mb-1 group-hover:text-red-600 transition-colors leading-snug">
                                    {headline.title}
                                </h4>
                                <div className="flex items-center text-xs text-gray-500">
                                    <Clock size={12} className="mr-1" />
                                    <span>{headline.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm ">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        Meta Rules
                    </h3>
                    <div className="space-y-4">
                        {headlinesData.map((headline: any, index: number) => (
                            <div key={index} className="group cursor-pointer">
                                <h4 className="text-gray-900 font-medium mb-1 group-hover:text-red-600 transition-colors leading-snug">
                                    {headline.title}
                                </h4>
                                <div className="flex items-center text-xs text-gray-500">
                                    <Clock size={12} className="mr-1" />
                                    <span>{headline.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </div>

    </>)
}

export default LatestHeadlinesSection;