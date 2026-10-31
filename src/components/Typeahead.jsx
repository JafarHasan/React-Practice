import { useState } from "react";

const Typeahead = () => {
    const questions = [
        "What is JavaScript?",
        "What are the different data types in JavaScript?",
        "What is the difference between let, const, and var?",
        "What is hoisting in JavaScript?",
        "What is a closure in JavaScript?",
        "What is the difference between == and ===?",
        "What is the difference between map and forEach?",
        "What is the difference between filter and find?",
        "What is the reduce method in JavaScript?",
        "What is event bubbling?",
        "What is event delegation?",
        "What is the difference between null and undefined?",
        "What are promises in JavaScript?",
        "What is async and await?",
        "What is the difference between synchronous and asynchronous JavaScript?",
        "What is the spread operator?",
        "What is destructuring in JavaScript?",
        "What is the difference between shallow copy and deep copy?",
        "What is React?",
        "What is JSX in React?",
        "What are components in React?",
        "What is the difference between props and state?",
        "What is the useState hook?",
        "What is the useEffect hook?",
        "What is the useContext hook?",
        "What is the useRef hook?",
        "What is prop drilling?",
        "What is the Context API?",
        "What is conditional rendering in React?",
        "What is a controlled component?",
        "What is the virtual DOM?",
        "What is the difference between React and React Native?",
        "What is Node.js?",
        "What is Express.js?",
        "What is middleware in Express.js?",
        "What is the difference between PUT and PATCH?",
        "What are HTTP status codes?",
        "What is REST API?",
        "What is JWT authentication?",
        "What is the difference between authentication and authorization?",
        "What is MongoDB?",
        "What is the difference between SQL and NoSQL?",
        "What is a primary key in a database?",
        "What is a foreign key in a database?",
        "What is Git?",
        "What is the difference between git pull and git fetch?",
        "What is the difference between git merge and git rebase?",
        "What is the difference between git reset and git revert?",
        "What is responsive web design?",
        "What is Tailwind CSS?",
        "What is debouncing in JavaScript?",
        "What is throttling in JavaScript?",
        "How does autocomplete work?",
        "How can you filter an array based on user input?",
        "How can you implement search suggestions in React?"
    ];
    const [key, setKey] = useState("");
    const [filterItem, setFilterItem] = useState([]);
    const [currIndex, setCurrIndex] = useState(-1);

    const handleSearch = (key) => {
        setFilterItem(questions.filter((sentence) => sentence.toLowerCase().includes(key.toLowerCase())));
    }
    const handleKeyDown = (e) => {
        if (filterItem.length === 0) return;
        if (e.key === 'ArrowDown') {
            const nextIndex = currIndex + 1 < filterItem.length ? currIndex + 1 : 0;
            setCurrIndex(nextIndex);
            setKey(filterItem[nextIndex]);
        }
        if (e.key === 'ArrowUp') {
            const nextIndex = currIndex - 1 < 0 ? filterItem.length - 1 : currIndex - 1;
            setCurrIndex(nextIndex);
            setKey(filterItem[nextIndex]);
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            handleGoogleSearch(key);
        }
    }
    const handleGoogleSearch = (value) => {
        if (!value) return;

        window.open(
            `https://www.google.com/search?q=${encodeURIComponent(value)}`,
            '_blank'
        );
    };
    const handleMouseEnter = (item, index) => {
        setKey(item);
        setCurrIndex(index);
    }
    return (
        <>
            <div className="flex items-center justify-center m-5 flex-col">
                <input
                    value={key}
                    onChange={(e) => {
                        setKey(e.target.value),
                            handleSearch(e.target.value)
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Search........."
                    className="w-160 p-5 bg-gray-200 outline-0 rounded-full"
                >
                </input>
                <ul className="absolute top-16 p-5 w-160 bg-gray-200 rounded">
                    {
                        filterItem.map((item, index) => (
                            <li key={index}
                                onClick={() => handleGoogleSearch(item)}
                                onMouseEnter={() => handleMouseEnter(item, index)}
                                className={`p-2 ${index === currIndex ? "bg-gray-300" : ""}`}
                            >{item}</li>
                        ))
                    }
                </ul>
            </div >

        </>
    )
}
export default Typeahead;