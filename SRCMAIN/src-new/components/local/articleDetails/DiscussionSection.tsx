import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { type FC } from "react";




const DiscussionSection: FC = () => {
    return (<>
        <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Discussion</h3>
                <button
                    // onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                >
                    <MessageCircle size={20} />
                    {/* <span>{isCommentsOpen ? 'Hide' : 'Show'} Comments ({comments.length})</span>
                                        {isCommentsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />} */}
                </button>
            </div>

            {false && (
                <div className="space-y-6">
                    {/* Comment Form */}
                    <div className="glass rounded-2xl p-6">
                        <textarea
                            placeholder="Join the discussion..."
                            rows={4}
                            className="w-full glass bg-white/50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                        />
                        <div className="mt-4 flex justify-end">
                            <button className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 ripple-effect">
                                Post Comment
                            </button>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                        {/* {[].map((comment, index) => (
                            <div key={comment.id} className={`glass rounded-2xl p-6 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white/50'}`}>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">
                                            {comment.author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                                            <span className="text-sm text-gray-500">{comment.date}</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            )}
        </div>
    </>)
}
export default DiscussionSection;