import { useState } from "react";

const TransferList = () => {
    const [leftItems, setLeftItems] = useState(["Java", "Python", "Golang", "CSS"]);

    const [leftCheckedItems, setLeftCheckedItems] = useState([]);

    const [rightItems, setRightItems] = useState(["Node", "React", "Express", "Ruby"]);

    const [rightCheckedItems, setRightCheckedItems] = useState([]);

    const handleCheckedLeftItems = (item) => {

        if (leftCheckedItems.includes(item)) {
            setLeftCheckedItems(leftCheckedItems.filter((itm) => itm !== item));
        } else {
            setLeftCheckedItems([...leftCheckedItems, item]);
        }
    }

    const handleCheckedRightItems = (item) => {

        if (rightCheckedItems.includes(item)) {
            setRightCheckedItems(rightCheckedItems.filter((itm) => itm !== item));
        } else {
            setRightCheckedItems([...rightCheckedItems, item]);
        }
    }

    const handle_move_left_checked_items_to_right = () => {

        setRightItems([...rightItems, ...leftCheckedItems]);
        setLeftItems(leftItems.filter((itm) => !leftCheckedItems.includes(itm)))
        setLeftCheckedItems([]);
    }

    const handle_move_all_left_to_right = () => {

        setRightItems([...rightItems, ...leftItems]);
        setLeftItems([]);
        setLeftCheckedItems([]);
    }

    const handle_move_all_right_to_left = () => {

        setLeftItems([...leftItems, ...rightItems]);
        setRightItems([]);
        setRightCheckedItems([]);
    }
    const handle_move_right_checked_items_to_left = () => {

        setLeftItems([...leftItems, ...rightCheckedItems])
        setRightItems(rightItems.filter((itm) => !rightCheckedItems.includes(itm)))
        setRightCheckedItems([]);
    }
    return (
        <>
            <nav className="flex items-center justify-center p-5 shadow font-bold text-3xl">Transfer List</nav>
            <div className="border h-100 p-5 my-5 w-200 m-auto flex items-center justify-center gap-5">
                {/* LEFT */}
                <div className="border flex flex-col w-70 h-90">
                    {
                        leftItems.map((item, index) => (
                            <label key={index}
                                className="p-2 text-lg">
                                <input
                                    type="checkbox"
                                    checked={leftCheckedItems.includes(item)}
                                    onChange={() => handleCheckedLeftItems(item)}
                                    className="w-5 h-4 p-2"
                                >
                                </input>
                                {item}</label>
                        ))
                    }
                </div>
                {/* MIDDLE */}
                <div className="border flex flex-col w-30 h-70 items-center">
                    <button
                        disabled={leftCheckedItems.length === 0}
                        onClick={() => handle_move_left_checked_items_to_right()}
                        className={`w-15 p-2 border bg-gray-400 m-3 ${leftCheckedItems.length === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                    >{">"}</button>

                    <button
                        disabled={leftItems.length === 0}
                        onClick={() => handle_move_all_left_to_right()}
                        className={`w-15 p-2 border bg-gray-400 m-3 ${leftItems.length === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                    >{">>"}</button>

                    <button
                        disabled={rightCheckedItems.length === 0}
                        onClick={() => handle_move_right_checked_items_to_left()}

                        className={`w-15 p-2 border bg-gray-400 m-3 ${rightCheckedItems.length === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                    >{"<"}</button>


                    <button
                        disabled={rightItems.length === 0}
                        onClick={() => handle_move_all_right_to_left()}
                        className={`w-15 p-2 border bg-gray-400 m-3 ${rightItems.length === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                    >{"<<"}</button>
                </div>
                {/* RIGHT */}
                <div className="border flex flex-col w-70 h-90">
                    {
                        rightItems.map((item, index) => (
                            <label
                                key={index}
                                className="p-2 text-lg">
                                <input
                                    type="checkbox"
                                    checked={rightCheckedItems.includes(item)}
                                    onChange={() => handleCheckedRightItems(item)}
                                    className="w-5 h-4 p-2"
                                >
                                </input>
                                {item}</label>
                        ))
                    }
                </div>
            </div >
        </>

    )

}
export default TransferList;    