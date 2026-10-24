import { useState } from "react";

const Todos = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    function handleAdd(text) {
        if (!text.trim()) return;
        setItems([...items, text]);
        setText("");
    }
    function handleEdit(currText) {
        setText(currText);
        setItems(items.filter((text) => text !== currText));

    }
    function handleDelete(currText) {
        setItems(items.filter((text) => text !== currText));

    }
    return (
        <>
            <nav className="w-full  p-5 text-4xl flex justify-center items-center shadow-xl">Todo List</nav>
            <div className="flex flex-col justify-center items-center m-4">
                <div className="flex w-100 p-2 justify-around border m-2">
                    <input
                        maxLength={20}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter your todos..."
                        className="p-4 font-bold outline-none w-70"
                    ></input >
                    <button
                        onClick={() => { handleAdd(text) }}
                        className="cursor-pointer text-green-950 font-bold bg-green-400 p-2 w-30 rounded">Add</button>
                </div>
                <ul className="bg-gray-100 flex flex-col w-100 p-2 justify-center items-center border">
                    {
                        items.map((item, index) => (
                            <li key={index}
                                className="w-full text-green-950 font-bold bg-green-400 p-3 rounded m-2 flex justify-between items-center "
                            >
                                {item}
                                <div className="flex justify-evenly w-40">
                                    <button
                                        onClick={() => { handleEdit(item) }}
                                        className="cursor-pointer text-green-950 font-bold bg-green-100 p-2 w-30 rounded m-2">Edit</button>

                                    <button
                                        onClick={() => { handleDelete(item) }}

                                        className="cursor-pointer text-red-950 font-bold bg-red-500 p-2 w-30 rounded m-2">Delete</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div >
        </>

    )
}
export default Todos;