import React, { useState } from 'react';

function FetchMovies(){
    
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=dc4b7ad6e4b986a9636b0bef75dbd914&language=en-US&page=1`;
    const [data, setData] = useState();

        fetch(api)        
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                setData(data);
            })
        .catch(error => console.error(error));

    return (    
      <div>
          <br />
        <pre> {JSON.stringify(data,null,2)}</pre>
      </div>
    )
}

export default FetchMovies