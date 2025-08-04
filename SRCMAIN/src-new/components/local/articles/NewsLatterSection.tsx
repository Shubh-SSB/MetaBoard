import { type FC } from "react"


const NewsLatterSection: FC = () => {

    return (<>
        <section className="bg-black py-16">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                    Stay Informed with Metaboard
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Get the latest insights on legal technology, education, and industry trends delivered to your inbox.
                </p>
                <div className="max-w-md mx-auto flex">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-l-full glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-r-full font-medium transition-all duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    </>)
}

export default NewsLatterSection;