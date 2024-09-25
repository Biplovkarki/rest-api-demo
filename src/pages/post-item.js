export default function PostItem({ post, onDelete }) {
    return (
        <div  >
            <h4 className="text-3xl font-bold">
                {post.title}
            </h4>
            <p>
                {post.body}
            </p>
            <div>
                <button
                 className="border bg-blue-400 border-black rounded-lg"
                onClick={()=>{
         onDelete(post.id)
                }
            }>delete</button>
            </div>
        </div>
    );
}