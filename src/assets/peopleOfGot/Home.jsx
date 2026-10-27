import { useState } from 'react';
import gotData from './people_of_got_30_with_images.json'
const POGHome = () => {
    const uniqueHouses = gotData.reduce((acc, people) => {
        acc.add(people.house);
        return acc;
    }, new Set());
    const [dummyData, setDummyData] = useState(gotData);
    const houseArray = [...uniqueHouses];

    const handleFiltering = (house) => {
        setDummyData(gotData.filter((data) => data.house === house))
    }
    return (
        <>
            <nav className="p-5 shadow font-bold flex items-center justify-center text-3xl">People Of GOT</nav>
            <div className='flex items-center justify-center flex-wrap'>
                {
                    houseArray.map((uniqueHouse) => (
                        <button
                            onClick={() => handleFiltering(uniqueHouse)}
                            className=' bg-black text-white p-3 m-2 border rounded cursor-pointer'>{uniqueHouse}</button>
                    ))
                }

            </div>
            <div className='p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-yellow-100 items-center justify-center'>
                {
                    dummyData.map((people) => (
                        <div className='py-10 h-[270px] bg-white shadow  rounded flex flex-col items-center  border p-2'>
                            <img src={people.image}
                                className='border p-1 shadow-xl w-20 min-h-20 object-cover rounded-full'
                            ></img>
                            <h1 className='font-bold'>{people.name}</h1>
                            <p>{people.house}</p>
                            {
                                people.titles.map((title) => (
                                    <p className='text-gray-500'>{title}</p>
                                ))
                            }
                            <button className=' cursor-pointer p-2 my-2 rounded bg-yellow-300'>know more</button>
                        </div>
                    ))
                }

            </div >
        </>

    )
}
export default POGHome;