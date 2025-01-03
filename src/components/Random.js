import axios from "axios";
import React, { useEffect, useState } from "react"
import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
let API_KEY = `0yDAn5tU3ztfSsBuReJZvj0WL7qR0Rcl`;

const Random = () => {
    const[gif,setGif] = useState('');
    const[loading,setLoading] = useState('false');

    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
      
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    
    useEffect( () => {
          fetchData();
    },[])

    function clickHandler(){
         fetchData();
    }
    return(
        <div className="w-1/2 bg-lime-300 rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-xl font-medium mt-[15px]">A Random GIF</h1>

             {
                loading? (<Spinner/>) : ( <img src={gif} width="300"/>)
             }

            {/* <img src={gif} width="300"/> */}
            
            <button className="w-10/12  bg-white rounded-md text-md font-semibold mb-[20px] py-2 "
            onClick={clickHandler}>Generate</button>


        </div>
    )

}
export default Random;