import React from "react";

const Card = ({ postData, deletePost }) => {
    return (
        <div className=" p-8 flex flex-col items-center justify-center">

            <h1 className="text-3xl font-bold text-white mb-6 text-center">
                📌 Your Posts
            </h1>

            <div className="flex flex-wrap gap-6">

                {postData?.map((post, index) => (
                    <div
                        key={index}
                        className="w-80 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-5 hover:scale-105 hover:shadow-2xl transition duration-300"
                    >

                        <h1 className="text-xl font-semibold text-white mb-2">
                            {post.title}
                        </h1>

                        <p className="text-gray-300 text-sm mb-4">
                            {post.description}
                        </p>

                        <button
                            onClick={() => deletePost(index)}
                            className="w-full py-1 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300 text-white font-semibold flex items-center justify-center gap-2"
                        >
                            🗑️ Delete Post
                        </button>
                        <button
                            onClick={() => editPost(index)}
                            className="w-full py-2 mt-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                        >
                            ✏️ Edit
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Card;