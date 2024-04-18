import { useEffect, useState } from "react";
import PostItem from "./PostItem";

const LatestPost = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('latestpost.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="bg-[#f7f7f7]">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 lg:py-14">
                <h2 data-aos="fade-left" data-aos-duration="2600" className="text-4xl md:text-5xl font-semibold text-center pb-10">Latest Post</h2>

                <div data-aos="fade-right" data-aos-duration="1700" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        blogs.map(post => <PostItem key={post.id} posts={post}></PostItem>)
                    }
                </div>
            </div>

        </div>
    );
};

export default LatestPost;