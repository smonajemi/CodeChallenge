import React, { useState } from 'react';

function FetchAPI(){
    
    const api = 'https://api.themoviedb.org/3/movie/550?api_key=dc4b7ad6e4b986a9636b0bef75dbd914';
    const [data, setData] = useState([]);
    
    const apiroute = () => {
        fetch(api)
        
        .then(response => response.json())
        .then(data => 
            {
                console.log(data)
                setData(data);
            })
        .catch(error => console.error(error));
    }
    return (
        <div>
            Movie List<br />
            <button onClick={apiroute}>Get</button>
            <br />
           <pre> {JSON.stringify(data,null,2)}</pre>
        </div>
    )
}

export default FetchAPI