import { useState } from "react";

const Todo2 = () => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);

    function handleAdd() {
        if (!search.trim()) return
        const newItem = {
            id: Date.now(),
            text: search,
            completed: false,

        }
        setItems([...items, newItem]);
        setSearch("");
    }
    function handleEdit(id) {
        if (search.trim()) return;
        setSearch(items.find((itm) => itm.id === id).text);
        setItems(items.filter((itm) => itm.id !== id));
    }
    function handleComplete(id) {
        setItems(items.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        )
        )
    }
    function handleDelete(id) {
        setItems(items.filter((item) => item.id !== id))
    }
    function handleSort() {
        const sortedItems = [...items].sort((a, b) => a.text.localeCompare(b.text));
        setItems(sortedItems);
    }
    return (
        <>
            <nav className="p-4 shadow flex items-center justify-center text-3xl font-bold">Todo List v2</nav>
            <div className="w-auto flex flex-col items-center justify-center m-2">
                <div className="p-2 w-140 flex gap-1 border rounded">
                    <input
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}

                        placeholder="Enter Todo........."
                        className="w-100 p-3 outline-none rounded"
                    ></input>
                    <button
                        onClick={() => handleAdd()}
                        className="w-20 p-3 bg-blue-400 rounded text-md cursor-pointer">Add</button>

                    <button
                        onClick={() => handleSort()}
                        className="w-20 p-3 bg-blue-400 rounded text-md cursor-pointer">Sort</button>
                </div>
                <ul className="w-140 shadow-xl p-2 border rounded my-2">
                    {
                        items.map((item, index) => (
                            <li key={index}
                                onDoubleClick={() => handleComplete(item.id)}
                                className={`w-auto flex items-center justify-between border border-black p-2 m-2 rounded shadow text-md font-bold ${item.completed ? "line-through " : ""}`}
                            > {`${item.text}`}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        disabled={item.completed}
                                        className={`p-3 text-green-900 bg-green-100 rounded cursor-pointer hover:bg-green-800 hover:text-white ${item.completed ? "cursor-not-allowed opacity-0" : ""}`}>Edit</button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        disabled={item.completed}
                                        className={`p-3 text-red-800 bg-red-100 rounded cursor-pointer hover:bg-red-800 hover:text-white ${item.completed ? "cursor-not-allowed opacity-0" : ""}`}>Delete</button>
                                </div>
                            </li>
                        ))
                    }
                    <h1>Double Click to mark as completed or incompleted!</h1>

                </ul>

            </div >
        </>
    )
}
export default Todo2;