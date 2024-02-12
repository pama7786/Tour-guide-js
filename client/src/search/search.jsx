
import React, { useState, useEffect } from "react";
import "./search.css";

function Search() {
  const [issearch, setIsSearch] = useState('');
  const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then((data) => 
    console.log(data));
    // setData(data));
  }, [])
    useEffect(() => {
    if (issearch.trim() !== '') {
        const obj = JSON.stringify({ query: issearch });
        fetch('api/search', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",        
            },
            body: obj,
        })
        .then(resp => resp.json())
        .then((data) => {
            setData(data);
            // console.log(data);
        })
  
    }
}, [issearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchSite = (e) => {
    const searchedSite = e.target.value;
    setIsSearch(searchedSite);
  };

  return (
    <div className="search">
      <div className="bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your destination here"
            value={issearch}
            onChange={handleSearchSite}
          />
        </form>
        <p>Most reached destinations across the World</p>
        <div className="map">
          {data.map((destination, index) => (
            <div key={destination.id} className="destination-card">
              {/* <img src={destination.images} alt={`Destination ${index}`} /> */}
              <p className="destination-name">{destination.destination}</p>
              <p className="activity">{destination.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search


