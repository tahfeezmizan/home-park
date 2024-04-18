
const PostItem = ({ posts }) => {
    // console.log(posts)

    const { cover_image, title, description, author } = posts;
    return (
        <div className="rounded-lg bg-white overflow-hidden">
            <img src={cover_image} className="transition-transform transform hover:scale-105 duration-500 ease-in-out" alt="" />
            <div className="p-6 pb-4">
                <h2 className="text-2xl font-bold pb-3">{title}</h2>
                <p>{description}</p>
            </div>
            <hr />
            <div className="px-6 pt-3 pb-6 flex justify-between">
                <p className="text-gray-400 font-medium">By <span className="text-gray-800">{author.name}</span></p>
                <p className="">{author.posted_date}</p>
            </div>
        </div>
    );
};

export default PostItem;