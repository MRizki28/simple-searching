import axios from "axios";
import React, { useEffect, useState } from "react";

const Searching = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);

    const fetchData = async (query = '') => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
            setData(response.data.products);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const searchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = () => {
        fetchData(searchQuery); 
    }

    return (
        <>
            <div className="text-center mt-10">
                <input className="border border-black" type="text" value={searchQuery} onChange={searchChange} />
                <button type="button" className="border border-black rounded-none hover:bg-gray-600" onClick={handleSearch}>Search</button>
            </div>

            <div className="flex flex-row flex-wrap justify-center space-x-5 mt-2 space-y-5">
                {data.map((item, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default Searching;
