import React, { useState, useEffect } from "react";

export const Watchlist = () => {
  const [watchlistdata, setWatchLIstData] = useState([]);

  useEffect(() => {
    const storeData = localStorage.getItem("watchlistdata");

    if (storeData) {
      setWatchLIstData(JSON.parse(storeData));
    }
    console.log(watchlistdata);
  }, []);

  const deletewatchlist = (value) => {
    console.log(watchlistdata);
    const newData=[...watchlistdata]
    const newArr = newData.filter((data) =>data['2. name'] !==  value['2. name']
    )
    console.log('new',newArr)

    setWatchLIstData(newArr);
    localStorage.setItem("watchlistdata",JSON.stringify(newArr));

  };

  return (
    <div className='h-screen bg-stone-800 relative overflow-x-auto shadow-md sm:rounded-lg p-2'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 p-20'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th className='scope="col" class="px-6 py-3'>company name</th>
          <th className='scope="col" class="px-6 py-3'>region</th>
          <th className='scope="col" class="px-6 py-3'>stockprice</th>
          <th className='scope="col" class="px-6 py-3'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {watchlistdata.map((value, index) => (
          <tr key={index} className='border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
            <td>{value["2. name"]}</td>
            <td>{value["4. region"]}</td>
            <td>{value["9. matchScore"]}</td>
            <td>
              <button onClick={() => deletewatchlist(value)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};
