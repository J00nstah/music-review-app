import { useState, useEffect } from 'react'
import '../App.css'



function Song() {

    const [song_query, Set_song_query] = useState("");

    useEffect(() => {
        const params : URLSearchParams = new URLSearchParams(window.location.search);

        const query: string|null = params.get("q");
        if(!query){
            return;
        }
        Set_song_query(query)
    })

    return <div className='flex flex-col'>
        
        <p>{song_query}</p>
        
    </div>

}

export default Song