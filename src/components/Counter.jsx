import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <nav className="min-w-full bg-gray-200 p-5 mb-5 shadow-sm shadow-black-100 text-4xl flex item-center justify-center">Counter</nav>
            <div className="p-5 flex flex-col items-center justify-center border w-150 rounded-2xl shadow-xl m-auto">
                <h1 className="text-5xl">{count}</h1>
                <div>
                    <button onClick={() => setCount(count + 1)}
                        className="bg-blue-500 p-5 m-3 rounded text-xl text-white">Increase</button>
                    <button onClick={() => setCount(0)}
                        disabled={count === 0}
                        className={`${count === 0 ? "opacity-40 cursor-not-allowed border rounded" : "bg-blue-500 rounded text-xl text-white"} p-5 m-3`}>Reset</button>
                    <button onClick={() => setCount(count - 1)}
                        className="bg-blue-500 p-5 m-3 rounded text-xl text-white">Decrease</button>

                </div>

            </div >
        </>
    )
}
export default Counter;