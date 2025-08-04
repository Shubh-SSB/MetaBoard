import { type FC } from "react"
import Link from "next/link"



const ExploreMoreSection: FC = () => {
    return (<>
        <section className="bg-red-600 py-12">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                    Explore More Articles
                </h3>
                <p className="text-red-100 mb-8 max-w-2xl mx-auto">
                    Discover more insights on legal technology, education, and industry trends.
                </p>
                <Link
                    href="/articles"
                    className="inline-block bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-full font-medium transition-all duration-300 ripple-effect"
                >
                    Browse All Articles
                </Link>
            </div>
        </section>
    </>)
}

export default ExploreMoreSection;