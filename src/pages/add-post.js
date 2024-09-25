import { useState } from "react";
import TextInput from "./components/text-input";


export function AddPost({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            body,
            userId,
        });
    }
    return (
    <form onSubmit={handleSubmit}
    className="flex flex-col gap-6 items-start">
            <label className="flex gap-6" >
                Title:
                <TextInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <label className="flex gap-5">
                Body:
                <TextInput
                
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </label >
            <label className="flex gap-2">
                User Id:
                <TextInput
               
                    type="number"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                />
            </label>
            <button
            className="text-white border m-6 px-2 py-0.5 rounded-2xl bg-black w-30 h-12"
             type="submit">Add Post</button>
        </form>
    );
}
