import React from 'react';
import axios from 'axios';


const Search = () => {
    
    async function onInputChange(e) {
        const api_key = "A3AbxmhldfvQlsrkuBCNzWP2PVmZhbMk"
        const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${e.target.value}?limit=20`;
        const data = await axios.get(url);
        console.log(data.data.data);
    };

    return (
        <div>
            <input onChange={onInputChange}/>        
        </div>
    )
}

export default Search
