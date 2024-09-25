import { useEffect, useState } from "react";
import PostItem from "./post-item";
import { AddPost } from "./add-post";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isOpen,setIsOpen]= useState(false);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []);

    const handleSubmit = async (postData) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log(data);
    };
    const handleDelete = async (id) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
            method: 'DELETE',

        });
        const data = await response.json();
        console.log(data);
    }

    return (
        
        <div className="px-10 py-4 pl-6">
            
            <h1 className="text-3xl text-blue-950 font-bold mb-6 underline">
                Today's Posts
            </h1>
            {/* <AddPost
                onSubmit={handleSubmit}
            /> */}
                  <button 
                  className="border border-blue-900 p-3 m-3 bg-red-500"
                  onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Add New Post</DialogTitle>
            <AddPost
            onSubmit={handleSubmit}/>
            
          </DialogPanel>
        </div>
      </Dialog>

            <div>
                {
                    posts.map((post, index) => {
                        return (
                            <PostItem
                                post={post}
                                key={index}
                                onDelete={handleDelete}
                            />
                        );
                    })
                }

            </div>
        </div>
    )
}