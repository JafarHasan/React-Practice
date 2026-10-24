import { useState } from "react";

const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2qdq1p6Sz1hDoz5Hm-l4mePLgaryKNVRHYeWJqyQI_mWovXHTb1vkyqY&s=10";

const img2 = "https://thumbs.dreamstime.com/b/my-beautiful-cat-relaxing-time-summer-day-lovely-pets-129453078.jpg";

const img3 = "https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg";

const img4 = "https://static.vecteezy.com/system/resources/thumbnails/070/223/834/small/orange-kitten-rests-on-white-wall-outdoors-photo.jpg";

const img5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtl7HJqHhvcbBfKIp04ezwOm5KyOxONH7aVXZkV1wWpQ&s";

const img6 = "https://static.vecteezy.com/system/resources/thumbnails/068/222/926/small/close-up-of-a-charming-ginger-kitten-with-big-blue-eyes-resting-on-a-soft-blanket-photo.jpg";

const image_array = [img1, img2, img3, img4, img5, img6];
const Gallery = () => {
    const [index, setIndex] = useState(0);
    const [infinite, setInfinite] = useState(false);
    const [scroll, setScroll] = useState(false);

    function handleNext() {
        if (infinite) {
            setIndex(prev => prev === image_array.length - 1 ? 0 : prev + 1);
        } else
            setIndex(prev => prev + 1);
    }
    function handlePrev() {
        if (infinite) {
            setIndex(prev => prev === 0 ? image_array.length - 1 : prev - 1);
        } else
            setIndex(prev => prev - 1);
    }
    return (
        <>
            <nav className="p-5 shadow flex items-center justify-center text-3xl">Image Gallery</nav>
            <div className="w-120 m-auto p-2 flex flex-col items-center justify-center border border-blue rounded">
                <div className="w-full m-2 p-2 shadow-2xl flex flex-col items-center justify-center">
                    <div w-full border p-2>
                        <label
                            className="w-40 text-xl p-2 ">
                            {"Infinit Scroll"}
                            <input
                                onChange={() => { setInfinite(!infinite) }}
                                className="w-5 h-5 m-1"
                                type="checkbox"
                            ></input>
                        </label>

                        {/* <label
                            className="w-40 text-xl p-2 ">
                            {"Auto Scroll"}
                            <input
                                onChange={() => { setScroll(!scroll) }}
                                className="w-5 h-5 m-1"
                                type="checkbox"
                            ></input>
                        </label> */}
                    </div>

                    <h1>{`IMAGE-${index + 1}`}</h1>
                    <img
                        src={`${image_array[index]}`}
                        alt={`image ${index + 1}`}
                        className="w-full h-100 object-cover items-center"
                    ></img>
                </div>
                <div className="flex gap-2 m-2">

                    {/* PREV BUTTON */}
                    <button
                        onClick={() => handlePrev()}
                        disabled={index === 0 && infinite === false}
                        className={`p-3 bg-mauve-900 text-white rounded w-30 hover:bg-white hover:text-mauve-900 border ${index === 0 && infinite === false ? "cursor-not-allowed opacity-40" : ""}`}>PREV</button>

                    {/* RESET BUTTON */}
                    <button
                        onClick={() => setIndex(0)}
                        disabled={index === 0 && infinite === false}
                        className={`p-3 bg-mauve-900 text-white rounded w-30 hover:bg-white hover:text-mauve-900 border ${index === 0 ? "cursor-not-allowed opacity-40" : ""}`}>RESET</button>

                    {/* NEXT BUTTON */}
                    <button
                        onClick={() => handleNext()}
                        disabled={index === image_array.length - 1 && infinite === false}
                        className={`p-3 bg-mauve-900 text-white rounded w-30 hover:bg-white hover:text-mauve-900 border ${index === image_array.length - 1 && infinite === false ? "cursor-not-allowed opacity-40" : ""}`}>NEXT</button>

                </div>
            </div >
        </>

    )
}
export default Gallery;