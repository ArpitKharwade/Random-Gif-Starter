import axios from "axios";
import React, { useEffect, useState } from "react"
import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
let API_KEY = `0yDAn5tU3ztfSsBuReJZvj0WL7qR0Rcl`;

const Tag = () => {
    const[tag,setTag] = useState('');

    const[gif,setGif] = useState('');

    const[loading,setLoading] = useState('false');

    async function fetchData(){

        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    
    function changeHandler(event){
        setTag(event.target.value);
        
   }
    return(
        <div className="w-1/2 bg-orange-500 rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-xl font-medium mt-[15px]">Random {tag} GIF</h1>

             {
                loading? (<Spinner/>) : ( <img src={gif} width="300"/>)
             }



            {/* <img src={gif} width="300"/> */}

            <input className='w-10/12 text-md font-semibold mb-[6px] text-center' 
            onChange={changeHandler} value={tag}/>


            
            <button className="w-10/12  bg-white rounded-md text-md font-semibold mb-[20px] py-2 "
            onClick={clickHandler}>Generate</button>


        </div>
    )

}
export default Tag;