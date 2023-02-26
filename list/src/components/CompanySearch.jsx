import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompanySearch = () => {
  const [data, setData] = useState([]);

  const [searchName, setSearchName] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchName}&apikey=${"3HPEPXOV2HHRJEJ7"}`
      );

      setData(response.data.bestMatches);
    }
    if (searchName) {
      fetchData();
    } else {
      setData([]);
    }
  }, [searchName]);
  const changevalue = (e) => {
    setSearchName(e.target.value);
  };

  useEffect(() => {
    const storeData = localStorage.getItem("watchlistdata");

    if (storeData) {
      setWatchlist(JSON.parse(storeData));
    }
  }, []);

  const addwatchlist = (value) => {
    const newWatchlistdata = [...watchlist, value];
    setWatchlist(newWatchlistdata);
    localStorage.setItem("watchlistdata", JSON.stringify(newWatchlistdata));

    navigate("/watchlist");
  };
  return (
   
     <div className="py-20 h-screen bg-stone-800 px-2  ">
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div class="w-full p-3">
            <div class="relative">
              <input
                onChange={changevalue}
                type="text"
                placeholder="Search Company"
                className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer "
              ></input>
              <span class="absolute top-4 right-5 border-l pl-4">
                <i class=" text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
              </span>
              <ul className='bg-amber-800   '>
                {data.map((value, index) => (
                  <li key={index}>
                    {value["2. name"]}
                    <button onClick={() => addwatchlist(value)}>+</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default CompanySearch;
